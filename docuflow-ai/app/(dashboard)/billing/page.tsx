"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import {
  CreditCard,
  Check,
  Sparkles,
  Crown,
  Zap,
  Loader2,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import { cn, PLANS } from "@/lib/utils";
import { useState } from "react";

const plans = [
  {
    id: "FREE",
    name: "Free",
    price: 0,
    description: "For individuals getting started",
    features: [
      "Up to 25 documents",
      "100MB storage",
      "2 team members",
      "Basic search",
      "Community support",
    ],
    limitations: [
      "No AI processing",
      "No semantic search",
      "No audit log",
    ],
    icon: Zap,
    popular: false,
  },
  {
    id: "PRO",
    name: "Pro",
    price: 29,
    description: "For growing teams",
    features: [
      "Up to 500 documents",
      "5GB storage",
      "10 team members",
      "AI document processing",
      "Semantic search",
      "Audit log (90 days)",
      "Priority support",
    ],
    limitations: [],
    icon: Sparkles,
    popular: true,
  },
  {
    id: "ENTERPRISE",
    name: "Enterprise",
    price: 99,
    description: "For organizations at scale",
    features: [
      "Unlimited documents",
      "50GB storage",
      "Unlimited team members",
      "AI document processing",
      "Semantic search",
      "Full audit log",
      "API access",
      "Custom integrations",
      "Dedicated support",
      "SSO (coming soon)",
    ],
    limitations: [],
    icon: Crown,
    popular: false,
  },
];

export default function BillingPage() {
  const [upgrading, setUpgrading] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["billing"],
    queryFn: async () => {
      const res = await fetch("/api/billing");
      if (!res.ok) throw new Error("Failed to fetch billing info");
      return res.json();
    },
  });

  const checkoutMutation = useMutation({
    mutationFn: async (plan: string) => {
      setUpgrading(plan);
      const res = await fetch("/api/billing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "checkout", plan }),
      });
      if (!res.ok) throw new Error("Checkout failed");
      return res.json();
    },
    onSuccess: (data) => {
      if (data.url) window.location.href = data.url;
    },
    onSettled: () => setUpgrading(null),
  });

  const portalMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/billing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "portal" }),
      });
      if (!res.ok) throw new Error("Portal session failed");
      return res.json();
    },
    onSuccess: (data) => {
      if (data.url) window.location.href = data.url;
    },
  });

  const currentPlan = data?.plan || "FREE";

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <CreditCard className="w-7 h-7 text-indigo-500" />
          Billing & Plans
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage your subscription and billing details
        </p>
      </div>

      {/* Current Plan Status */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center",
              currentPlan === "ENTERPRISE" ? "bg-amber-50 dark:bg-amber-950/50" :
              currentPlan === "PRO" ? "bg-indigo-50 dark:bg-indigo-950/50" :
              "bg-gray-100 dark:bg-gray-800"
            )}>
              {currentPlan === "ENTERPRISE" ? <Crown className="w-6 h-6 text-amber-500" /> :
               currentPlan === "PRO" ? <Sparkles className="w-6 h-6 text-indigo-500" /> :
               <Zap className="w-6 h-6 text-gray-500" />}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {currentPlan} Plan
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {data?.subscription?.status === "active"
                  ? `Active • Renews ${new Date(data.subscription.currentPeriodEnd * 1000).toLocaleDateString()}`
                  : "Current plan"}
              </p>
            </div>
          </div>
          {data?.subscription && (
            <button
              onClick={() => portalMutation.mutate()}
              disabled={portalMutation.isPending}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Manage Subscription
            </button>
          )}
        </div>

        {/* Usage */}
        {data?.usage && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Documents</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {data.usage.documents}
                <span className="text-sm font-normal text-gray-400">
                  {" "}/ {PLANS[currentPlan as keyof typeof PLANS]?.maxDocuments === -1 ? "∞" : PLANS[currentPlan as keyof typeof PLANS]?.maxDocuments}
                </span>
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Members</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {data.usage.members}
                <span className="text-sm font-normal text-gray-400">
                  {" "}/ {PLANS[currentPlan as keyof typeof PLANS]?.maxMembers === -1 ? "∞" : PLANS[currentPlan as keyof typeof PLANS]?.maxMembers}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Plans Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Choose your plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const isActive = currentPlan === plan.id;
            const Icon = plan.icon;

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative bg-white dark:bg-gray-900 border rounded-2xl p-6 transition-all",
                  plan.popular
                    ? "border-indigo-300 dark:border-indigo-700 shadow-lg shadow-indigo-100 dark:shadow-none"
                    : "border-gray-200 dark:border-gray-800",
                  isActive && "ring-2 ring-indigo-500"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      plan.id === "ENTERPRISE" ? "bg-amber-50 dark:bg-amber-950/50" :
                      plan.id === "PRO" ? "bg-indigo-50 dark:bg-indigo-950/50" :
                      "bg-gray-100 dark:bg-gray-800"
                    )}>
                      <Icon className={cn(
                        "w-5 h-5",
                        plan.id === "ENTERPRISE" ? "text-amber-500" :
                        plan.id === "PRO" ? "text-indigo-500" : "text-gray-500"
                      )} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-gray-500">{plan.description}</p>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation) => (
                      <li key={limitation} className="flex items-center gap-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-gray-300 dark:text-gray-600 shrink-0" />
                        <span className="text-gray-400 dark:text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  {isActive ? (
                    <button
                      disabled
                      className="w-full py-2.5 px-4 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium rounded-xl text-sm"
                    >
                      Current Plan
                    </button>
                  ) : plan.id === "FREE" ? (
                    <button
                      disabled
                      className="w-full py-2.5 px-4 border border-gray-200 dark:border-gray-700 text-gray-500 font-medium rounded-xl text-sm"
                    >
                      Downgrade
                    </button>
                  ) : (
                    <button
                      onClick={() => checkoutMutation.mutate(plan.id)}
                      disabled={upgrading === plan.id}
                      className={cn(
                        "w-full py-2.5 px-4 font-medium rounded-xl text-sm transition-colors flex items-center justify-center gap-2",
                        plan.popular
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                          : "bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900"
                      )}
                    >
                      {upgrading === plan.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>Upgrade to {plan.name}</>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
