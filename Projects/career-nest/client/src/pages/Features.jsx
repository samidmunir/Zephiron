import {
  BarChart3,
  FileText,
  Bell,
  Download,
  Users,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Clock,
  Search,
  Filter,
  Mail,
  Smartphone,
  Globe,
} from "lucide-react";

export default function Features() {
  const mainFeatures = [
    {
      icon: BarChart3,
      title: "Smart Analytics Dashboard",
      description:
        "Get deep insights into your job search performance with comprehensive analytics and visual reports.",
      features: [
        "Application success rate tracking",
        "Response time analysis",
        "Industry and role performance metrics",
        "Monthly progress reports",
        "Goal setting and tracking",
      ],
      image: "/analytics-dashboard.png",
    },
    {
      icon: FileText,
      title: "Application Management",
      description:
        "Organize and track every job application with detailed information and status updates.",
      features: [
        "Unlimited application tracking",
        "Custom fields and tags",
        "Document attachment storage",
        "Application timeline view",
        "Bulk actions and updates",
      ],
      image: "/job-application-management-interface.png",
    },
    {
      icon: Bell,
      title: "Smart Reminders & Automation",
      description:
        "Never miss a follow-up or deadline with intelligent notifications and automated workflows.",
      features: [
        "Follow-up reminders",
        "Interview scheduling alerts",
        "Application deadline tracking",
        "Custom notification preferences",
        "Email and SMS notifications",
      ],
      image: "/notification-reminder-interface.png",
    },
  ];

  const allFeatures = [
    {
      icon: Target,
      title: "Goal Setting & Tracking",
      description:
        "Set weekly and monthly application goals and track your progress with visual indicators.",
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description:
        "Understand which strategies work best with detailed performance analytics and trends.",
    },
    {
      icon: Clock,
      title: "Time Management",
      description:
        "Track time spent on applications and optimize your job search efficiency.",
    },
    {
      icon: Search,
      title: "Advanced Search & Filtering",
      description:
        "Quickly find specific applications with powerful search and filtering capabilities.",
    },
    {
      icon: Filter,
      title: "Custom Views & Sorting",
      description:
        "Create custom views and sort applications by any criteria that matters to you.",
    },
    {
      icon: Mail,
      title: "Email Integration",
      description:
        "Connect your email to automatically track application responses and communications.",
    },
    {
      icon: Download,
      title: "Data Export & Backup",
      description:
        "Export your data in multiple formats (CSV, PDF, JSON) for backup or analysis.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description:
        "Access your applications anywhere with our fully responsive mobile interface.",
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description:
        "Use Career Nest in your preferred language with support for 15+ languages.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and security measures to protect your sensitive career data.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Share applications with mentors, career coaches, or team members for feedback.",
    },
    {
      icon: Zap,
      title: "API Integration",
      description:
        "Connect with other tools and services through our comprehensive REST API.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 font-serif">
                Powerful Features for
                <span className="block text-emerald-600">Career Success</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Everything you need to organize, track, and optimize your job
                search journey. Built by career professionals, for career
                professionals.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-8 text-slate-500">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-emerald-500" />
                <span className="text-sm">10,000+ Active Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-emerald-500" />
                <span className="text-sm">500K+ Applications Tracked</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
                <span className="text-sm">85% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-emerald-100 rounded-lg p-3">
                        <feature.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900 font-serif">
                        {feature.title}
                      </h2>
                    </div>
                    <p className="text-xl text-slate-600">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="bg-emerald-500 rounded-full p-1 mt-1">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 font-serif">
              Complete Feature Set
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover all the tools and capabilities that make Career Nest the
              ultimate job search companion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-slate-50 rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="bg-emerald-100 rounded-lg p-3 w-fit">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 font-serif">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Connect Career Nest with your favorite tools and platforms for a
              streamlined workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Google Calendar",
                description: "Sync interview schedules",
                logo: "/google-calendar-logo.png",
              },
              {
                name: "LinkedIn",
                description: "Import job applications",
                logo: "/linkedin-logo.png",
              },
              {
                name: "Gmail",
                description: "Track email responses",
                logo: "/gmail-logo.png",
              },
              {
                name: "Slack",
                description: "Team notifications",
                logo: "/slack-logo.png",
              },
              {
                name: "Notion",
                description: "Export to workspace",
                logo: "/notion-logo.png",
              },
              {
                name: "Zapier",
                description: "Automate workflows",
                logo: "/zapier-logo.png",
              },
              {
                name: "Trello",
                description: "Project management",
                logo: "/trello-logo.png",
              },
              {
                name: "Calendly",
                description: "Schedule interviews",
                logo: "/calendly-logo.png",
              },
            ].map((integration, index) => (
              <div
                key={integration.name}
                className="bg-white rounded-lg p-6 text-center space-y-4 hover:shadow-md transition-shadow"
              >
                <img
                  src={integration.logo || "/placeholder.svg"}
                  alt={integration.name}
                  className="h-12 w-12 mx-auto"
                />
                <div className="space-y-1">
                  <h3 className="font-semibold text-slate-900">
                    {integration.name}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {integration.description}
                  </p>
                </div>
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
              Experience All Features Today
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Start your free trial and discover how Career Nest can transform
              your job search experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white hover:bg-slate-50 text-emerald-600 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
              <span>Start Free Trial</span>
              <Zap className="h-4 w-4" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Demo
            </button>
          </div>

          <p className="text-emerald-100 text-sm">
            14-day free trial • All features included • No credit card required
          </p>
        </div>
      </section>
    </div>
  );
}
