import { motion } from "framer-motion";

const features = [
  {
    title: "Track Applications",
    desc: "Keep all your job applications organized with statuses, notes, and documents.",
  },
  {
    title: "Visualize Progress",
    desc: "Use interactive dashboards to track your outreach, interviews, and follow-ups.",
  },
  {
    title: "Stay Motivated",
    desc: "Get reminders, milestones, and insights to keep you engaged in your journey.",
  },
];

const benefits = [
  {
    title: "Clarity in Chaos",
    desc: "Track every resume you send, every interview you schedule, and every offer you receive — in one central place.",
  },
  {
    title: "Visual Insights",
    desc: "Dashboards help you see what’s working and what needs attention so you can apply smarter.",
  },
  {
    title: "Stay on Track",
    desc: "Get follow-up reminders and stay organized without the stress of sticky notes or spreadsheets.",
  },
];

const testimonials = [
  {
    name: "Sara K.",
    title: "CS Student at NYU",
    quote:
      "CareerNest helped me keep track of over 60 job apps — and I finally landed a summer internship at Google!",
  },
  {
    name: "John L.",
    title: "Bootcamp Grad",
    quote:
      "The dashboard is 🔥. I could finally see which companies I was progressing with and where to focus.",
  },
  {
    name: "Aisha P.",
    title: "Job Seeker",
    quote:
      "I used to rely on spreadsheets. Now, I’ve got CareerNest. It’s like a second brain for my job search.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Great for getting started with job tracking.",
    features: [
      "Track up to 10 applications",
      "Basic dashboard access",
      "Light/dark mode support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Basic",
    price: "$8/mo",
    desc: "Perfect for active job seekers who want insights.",
    features: [
      "Track up to 100 applications",
      "Advanced analytics",
      "Email reminders",
      "Export to CSV",
    ],
    cta: "Upgrade",
    featured: true,
  },
  {
    name: "Pro",
    price: "$20/mo",
    desc: "For power users who want the full toolkit.",
    features: [
      "Unlimited applications",
      "Priority support",
      "Custom reminders",
      "Team tracking (coming soon)",
    ],
    cta: "Go Pro",
    featured: false,
  },
];

const faqs = [
  {
    q: "Is CareerNest really free?",
    a: "Yes! Our free plan is forever. No credit card required. You can track up to 10 applications with basic analytics.",
  },
  {
    q: "How do I upgrade my plan?",
    a: "Once you sign in, go to your dashboard → Account → Upgrade Plan. Stripe handles secure payment.",
  },
  {
    q: "Can I export my data?",
    a: "Yes! Our Basic and Pro plans let you export your job application data as CSV anytime.",
  },
  {
    q: "Will you sell my data?",
    a: "Absolutely not. CareerNest respects your privacy and does not sell or share user data.",
  },
  {
    q: "Is there a mobile app?",
    a: "Not yet — but our site is fully responsive. A mobile app is on the roadmap!",
  },
];

export default function Landing() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto gap-12">
        <div className="flex-1">
          <motion.h1
            className="text-5xl font-bold mb-6 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Stay Organized. Stay Motivated. <br />
            Land Your Dream Job.
          </motion.h1>

          <motion.p
            className="text-lg text-muted mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            CareerNest helps you track, visualize, and optimize your job search
            journey.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {/* <a
              href="/dashboard"
              className="bg-primary text-white px-6 py-3 rounded shadow hover:opacity-90 transition"
            >
              Get Started
            </a> */}
            <a
              href="/dashboard"
              className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
            >
              Get Started
            </a>

            <a
              href="#features"
              //   className="text-primary underline font-medium hover:opacity-70 transition"
              className="border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-6 py-3 rounded hover:bg-blue-50 dark:hover:bg-blue-900 transition"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <motion.div
          className="flex-1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src="https://illustrations.popsy.co/gray/work-from-home.svg"
            alt="CareerNest Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </section>
      {/* Features Section */}
      <section id="features" className="px-6 py-16 bg-light dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why CareerNest?</h2>
          <p className="text-muted mb-12 max-w-xl mx-auto">
            CareerNest provides you with a powerful yet simple way to manage and
            master your job hunt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md text-left"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {f.title}
                </h3>
                <p className="text-muted">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="px-6 py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Built to Empower Your Job Search
          </h2>
          <p className="text-muted mb-12 max-w-2xl mx-auto">
            Whether you're applying to your first internship or preparing for
            FAANG interviews, CareerNest helps you stay focused, organized, and
            inspired.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-light dark:bg-gray-800 p-6 rounded-xl shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {b.title}
                </h3>
                <p className="text-muted">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-light dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What Users Are Saying</h2>
          <p className="text-muted mb-12">
            People around the world are using CareerNest to take control of
            their job hunt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              >
                <p className="text-muted mb-4">"{t.quote}"</p>
                <div className="text-left">
                  <p className="font-semibold text-blue-600 dark:text-blue-400">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="px-6 py-20 bg-white dark:bg-gray-900" id="pricing">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted mb-12 max-w-2xl mx-auto">
            Whether you’re just starting out or need advanced features,
            CareerNest has a plan for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl shadow-lg border ${
                  plan.featured
                    ? "border-blue-600 dark:border-blue-400 scale-105"
                    : "border-gray-200 dark:border-gray-700"
                } bg-light dark:bg-gray-800`}
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold mb-2">{plan.price}</p>
                <p className="text-muted mb-6">{plan.desc}</p>

                <ul className="text-left text-sm text-muted mb-6 space-y-2">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>✅ {f}</li>
                  ))}
                </ul>

                <a
                  href="/dashboard"
                  className={`inline-block px-6 py-3 rounded text-white font-medium transition ${
                    plan.featured
                      ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                      : "bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQs Section */}
      <section className="px-6 py-20 bg-light dark:bg-gray-900" id="faq">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted mb-12">
            Still curious? Here are answers to some common questions.
          </p>

          <div className="space-y-6 text-left">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              >
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {faq.q}
                </h3>
                <p className="text-muted mt-2">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
