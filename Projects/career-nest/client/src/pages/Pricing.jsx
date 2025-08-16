import { useState } from "react";
import { Check, X, Star, ArrowRight } from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for job seekers just getting started",
      price: isAnnual ? 0 : 0,
      originalPrice: null,
      features: [
        "Track up to 25 applications",
        "Basic analytics dashboard",
        "Email reminders",
        "Application status tracking",
        "Mobile responsive design",
      ],
      limitations: [
        "No advanced analytics",
        "No custom fields",
        "No data export",
      ],
      cta: "Get Started Free",
      popular: false,
      color: "slate",
    },
    {
      name: "Professional",
      description: "For serious job seekers who want to optimize their search",
      price: isAnnual ? 96 : 12,
      originalPrice: isAnnual ? 144 : 15,
      features: [
        "Unlimited applications",
        "Advanced analytics & insights",
        "Custom application fields",
        "Interview scheduling",
        "Data export (CSV, PDF)",
        "Priority email support",
        "Application templates",
        "Follow-up automation",
      ],
      limitations: [],
      cta: "Start Professional",
      popular: true,
      color: "emerald",
    },
    {
      name: "Enterprise",
      description: "For teams and career coaches managing multiple clients",
      price: isAnnual ? 240 : 25,
      originalPrice: isAnnual ? 360 : 35,
      features: [
        "Everything in Professional",
        "Team collaboration tools",
        "Client management dashboard",
        "White-label branding",
        "API access",
        "Advanced reporting",
        "Dedicated account manager",
        "Custom integrations",
        "SSO authentication",
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      color: "slate",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 font-serif">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the perfect plan for your career journey. All plans
                include our core features with no hidden fees.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span
                className={`text-sm font-medium ${
                  !isAnnual ? "text-slate-900" : "text-slate-500"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                  isAnnual ? "bg-emerald-600" : "bg-slate-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium ${
                  isAnnual ? "text-slate-900" : "text-slate-500"
                }`}
              >
                Annual
              </span>
              {isAnnual && (
                <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full">
                  Save 33%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-sm border-2 transition-all hover:shadow-lg ${
                  plan.popular
                    ? "border-emerald-500 shadow-emerald-100"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {plan.name}
                      </h3>
                      <p className="text-slate-600 text-sm mt-1">
                        {plan.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-slate-900">
                          ${plan.price}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-lg text-slate-400 line-through">
                            ${plan.originalPrice}
                          </span>
                        )}
                        <span className="text-slate-600">
                          /{isAnnual ? "year" : "month"}
                        </span>
                      </div>
                      {plan.price === 0 && (
                        <p className="text-sm text-slate-500">Free forever</p>
                      )}
                    </div>

                    <button
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                        plan.popular
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h4 className="font-semibold text-slate-900">
                      What's included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li
                          key={limitIndex}
                          className="flex items-start space-x-3"
                        >
                          <X className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-400 text-sm">
                            {limitation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 font-serif">
              Compare All Features
            </h2>
            <p className="text-xl text-slate-600">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">
                    Features
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-900">
                    Starter
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-900">
                    Professional
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    feature: "Application Tracking",
                    starter: true,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "Basic Analytics",
                    starter: true,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "Email Reminders",
                    starter: true,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "Applications Limit",
                    starter: "25",
                    pro: "Unlimited",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "Advanced Analytics",
                    starter: false,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "Custom Fields",
                    starter: false,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "Data Export",
                    starter: false,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "Interview Scheduling",
                    starter: false,
                    pro: true,
                    enterprise: true,
                  },
                  {
                    feature: "Team Collaboration",
                    starter: false,
                    pro: false,
                    enterprise: true,
                  },
                  {
                    feature: "API Access",
                    starter: false,
                    pro: false,
                    enterprise: true,
                  },
                  {
                    feature: "White-label Branding",
                    starter: false,
                    pro: false,
                    enterprise: true,
                  },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="py-4 px-6 text-slate-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600">{row.pro}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about Career Nest pricing
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "Can I change my plan at any time?",
                answer:
                  "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
              },
              {
                question: "Is there a free trial for paid plans?",
                answer:
                  "We offer a 14-day free trial for all paid plans. No credit card required to start your trial.",
              },
              {
                question: "What happens to my data if I cancel?",
                answer:
                  "Your data remains accessible for 30 days after cancellation. You can export all your data during this period.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Yes, we offer a 30-day money-back guarantee for all paid plans. Contact our support team for assistance.",
              },
              {
                question: "Can I get a discount for annual billing?",
                answer:
                  "Yes! Annual billing saves you 33% compared to monthly billing across all paid plans.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-serif">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their job
              search with Career Nest.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white hover:bg-slate-50 text-emerald-600 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Sales
            </button>
          </div>

          <p className="text-emerald-100 text-sm">
            14-day free trial • No credit card required
          </p>
        </div>
      </section>
    </div>
  );
}
