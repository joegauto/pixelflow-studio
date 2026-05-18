import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  stripe,
  createCheckoutSession,
  createCustomerPortalSession,
  getOrCreateCustomer,
  STRIPE_PLANS,
} from "@/lib/stripe";

// GET /api/billing - Get billing info
export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.organizationId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const org = await db.organization.findUnique({
      where: { id: session.user.organizationId },
      select: {
        id: true,
        plan: true,
        stripeCustomerId: true,
        stripeSubscriptionId: true,
        planExpiresAt: true,
        _count: { select: { documents: true, members: true } },
      },
    });

    if (!org) {
      return NextResponse.json({ error: "Organization not found" }, { status: 404 });
    }

    let subscription = null;
    if (org.stripeSubscriptionId) {
      try {
        subscription = await stripe.subscriptions.retrieve(org.stripeSubscriptionId);
      } catch {
        // Subscription might not exist
      }
    }

    return NextResponse.json({
      plan: org.plan,
      subscription: subscription
        ? {
            status: subscription.status,
            currentPeriodEnd: subscription.current_period_end,
            cancelAtPeriodEnd: subscription.cancel_at_period_end,
          }
        : null,
      usage: {
        documents: org._count.documents,
        members: org._count.members,
      },
      plans: STRIPE_PLANS,
    });
  } catch (error) {
    console.error("Error fetching billing:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/billing - Create checkout session or portal session
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.organizationId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { action, plan } = await req.json();

    const org = await db.organization.findUnique({
      where: { id: session.user.organizationId },
    });

    if (!org) {
      return NextResponse.json({ error: "Organization not found" }, { status: 404 });
    }

    if (action === "checkout") {
      // Create or retrieve Stripe customer
      const customerId = org.stripeCustomerId || await getOrCreateCustomer(
        session.user.email,
        org.name
      );

      // Save customer ID if new
      if (!org.stripeCustomerId) {
        await db.organization.update({
          where: { id: org.id },
          data: { stripeCustomerId: customerId },
        });
      }

      const priceId = plan === "ENTERPRISE"
        ? STRIPE_PLANS.ENTERPRISE.priceId
        : STRIPE_PLANS.PRO.priceId;

      const checkoutSession = await createCheckoutSession(
        customerId,
        priceId,
        org.id
      );

      return NextResponse.json({ url: checkoutSession.url });
    }

    if (action === "portal") {
      if (!org.stripeCustomerId) {
        return NextResponse.json(
          { error: "No billing account found" },
          { status: 400 }
        );
      }

      const portalSession = await createCustomerPortalSession(org.stripeCustomerId);
      return NextResponse.json({ url: portalSession.url });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Billing error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
