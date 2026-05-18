import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const organizationId = session.metadata?.organizationId;

        if (organizationId && session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
          );

          // Determine plan based on price
          const priceId = subscription.items.data[0]?.price?.id;
          const plan = priceId === process.env.STRIPE_ENTERPRISE_PRICE_ID
            ? "ENTERPRISE"
            : "PRO";

          await db.organization.update({
            where: { id: organizationId },
            data: {
              plan,
              stripeSubscriptionId: subscription.id,
              stripeCustomerId: session.customer as string,
              planExpiresAt: new Date(subscription.current_period_end * 1000),
            },
          });
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;

        const org = await db.organization.findFirst({
          where: { stripeSubscriptionId: subscription.id },
        });

        if (org) {
          if (subscription.status === "active") {
            const priceId = subscription.items.data[0]?.price?.id;
            const plan = priceId === process.env.STRIPE_ENTERPRISE_PRICE_ID
              ? "ENTERPRISE"
              : "PRO";

            await db.organization.update({
              where: { id: org.id },
              data: {
                plan,
                planExpiresAt: new Date(subscription.current_period_end * 1000),
              },
            });
          }
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;

        const org = await db.organization.findFirst({
          where: { stripeSubscriptionId: subscription.id },
        });

        if (org) {
          await db.organization.update({
            where: { id: org.id },
            data: {
              plan: "FREE",
              stripeSubscriptionId: null,
              planExpiresAt: null,
            },
          });
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        console.error(`Payment failed for customer ${invoice.customer}`);
        // In production: send notification email, apply grace period, etc.
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
