import { useState } from "react";
import {
  ChevronRight,
  CheckCircle,
  BarChart3,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function Landing() {
  const [email, setEmail] = useState("");

  const handleGetStarted = (e) => {
    e.preventDefault();
    console.log("Get started with email:", email);
    // Your routing logic will go here
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-600 rounded-full p-2">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0h8m-8 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900 font-serif">
                Career Nest
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-serif leading-tight">
                Track Your Career Journey
                <span className="block text-emerald-600">
                  Like Never Before
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Organize, track, and optimize your job applications with Career
                Nest. The professional platform that helps you land your dream
                job faster.
              </p>
            </div>

            {/* CTA Form */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleGetStarted} className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center space-x-2"
                >
                  <span>Start Free</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="text-sm text-slate-500 mt-2">
                Free forever. No credit card required.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span className="text-sm">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-emerald-500" />
                <span className="text-sm">10,000+ Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-emerald-500" />
                <span className="text-sm">Real-time Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 font-serif">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful features designed to streamline your job search and
              maximize your success rate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-lg p-6 space-y-4">
              <div className="bg-emerald-100 rounded-full p-3 w-fit">
                <BarChart3 className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Smart Analytics
              </h3>
              <p className="text-slate-600">
                Track your application success rate, response times, and
                identify the best strategies for your career.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-lg p-6 space-y-4">
              <div className="bg-emerald-100 rounded-full p-3 w-fit">
                <svg
                  className="h-6 w-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Application Tracking
              </h3>
              <p className="text-slate-600">
                Organize all your applications in one place with status updates,
                deadlines, and follow-up reminders.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-lg p-6 space-y-4">
              <div className="bg-emerald-100 rounded-full p-3 w-fit">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Secure & Private
              </h3>
              <p className="text-slate-600">
                Your career data is encrypted and secure. We never share your
                information with third parties.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 rounded-lg p-6 space-y-4">
              <div className="bg-emerald-100 rounded-full p-3 w-fit">
                <svg
                  className="h-6 w-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Smart Reminders
              </h3>
              <p className="text-slate-600">
                Never miss a follow-up or deadline with intelligent
                notifications and reminder systems.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-50 rounded-lg p-6 space-y-4">
              <div className="bg-emerald-100 rounded-full p-3 w-fit">
                <svg
                  className="h-6 w-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Progress Insights
              </h3>
              <p className="text-slate-600">
                Visualize your job search progress with detailed charts and
                actionable insights.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-50 rounded-lg p-6 space-y-4">
              <div className="bg-emerald-100 rounded-full p-3 w-fit">
                <svg
                  className="h-6 w-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Lightning Fast
              </h3>
              <p className="text-slate-600">
                Built for speed and efficiency. Add applications, update
                statuses, and track progress in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-serif">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Join thousands of professionals who have streamlined their career
              journey with Career Nest.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white hover:bg-slate-50 text-emerald-600 px-8 py-3 rounded-md font-semibold transition-colors flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-md font-semibold transition-colors">
              View Demo
            </button>
          </div>

          <p className="text-emerald-100 text-sm">
            No credit card required • Free forever plan available
          </p>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-600 rounded-full p-2">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0h8m-8 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2"
                    />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white font-serif">
                  Career Nest
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                The professional platform for tracking and optimizing your job
                search journey.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Product</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  Demo
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Company</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  Careers
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Support</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Career Nest. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
