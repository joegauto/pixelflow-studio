import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-04-30.basil",
  typescript: true,
});

export const STRIPE_PLANS = {
  PRO: {
    priceId: process.env.STRIPE_PRO_PRICE_ID || "",
    name: "Pro",
    price: 29,
    interval: "month" as const,
    features: [
      "Up to 500 documents",
      "5GB storage",
      "AI document processing",
      "Semantic search",
      "Audit log",
      "Up to 10 team members",
      "Priority support",
    ],
  },
  ENTERPRISE: {
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID || "",
    name: "Enterprise",
    price: 99,
    interval: "month" as const,
    features: [
      "Unlimited documents",
      "50GB storage",
      "AI document processing",
      "Semantic search",
      "Full audit log",
      "Unlimited team members",
      "API access",
      "Custom integrations",
      "Dedicated support",
      "SSO (coming soon)",
    ],
  },
};

export async function createCheckoutSession(
  customerId: string,
  priceId: string,
  organizationId: string
) {
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing?canceled=true`,
    metadata: { organizationId },
  });

  return session;
}

export async function createCustomerPortalSession(customerId: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing`,
  });

  return session;
}

export async function getOrCreateCustomer(
  email: string,
  name: string
): Promise<string> {
  const existingCustomers = await stripe.customers.list({
    email,
    limit: 1,
  });

  if (existingCustomers.data.length > 0) {
    return existingCustomers.data[0].id;
  }

  const customer = await stripe.customers.create({
    email,
    name,
  });

  return customer.id;
}
