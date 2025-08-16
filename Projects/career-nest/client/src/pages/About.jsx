import {
  CheckCircle,
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  Shield,
  TrendingUp,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-serif leading-tight">
                About
                <span className="block text-emerald-600">Career Nest</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to revolutionize how professionals navigate
                their career journeys. Built by job seekers, for job seekers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 font-serif">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Job searching shouldn't be overwhelming. We believe every
                  professional deserves tools that make career advancement
                  organized, insightful, and achievable.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Career Nest was born from the frustration of managing job
                  applications across spreadsheets, emails, and sticky notes. We
                  knew there had to be a better way.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 space-y-3">
                  <div className="bg-emerald-100 rounded-full p-3 w-fit">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Focused Approach
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Streamline your job search with purpose-built tools for
                    modern professionals.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 space-y-3">
                  <div className="bg-emerald-100 rounded-full p-3 w-fit">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Data-Driven
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Make informed decisions with analytics that reveal what's
                    working in your search.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-serif">
                  Why We Built This
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-200 mt-1 flex-shrink-0" />
                    <p className="text-emerald-50">
                      <strong className="text-white">
                        Lost opportunities:
                      </strong>{" "}
                      Missing follow-ups and deadlines because applications were
                      scattered everywhere.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-200 mt-1 flex-shrink-0" />
                    <p className="text-emerald-50">
                      <strong className="text-white">No insights:</strong>{" "}
                      Unable to identify which strategies were actually working
                      in the job search.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-200 mt-1 flex-shrink-0" />
                    <p className="text-emerald-50">
                      <strong className="text-white">
                        Overwhelming process:
                      </strong>{" "}
                      Job searching felt chaotic instead of strategic and
                      organized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 font-serif">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we build and every decision
              we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-emerald-100 rounded-full p-4 w-fit mx-auto">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Empathy First
              </h3>
              <p className="text-slate-600">
                We understand the emotional journey of job searching and build
                with compassion.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-emerald-100 rounded-full p-4 w-fit mx-auto">
                <Lightbulb className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Innovation
              </h3>
              <p className="text-slate-600">
                Constantly improving and finding new ways to make career
                advancement easier.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-emerald-100 rounded-full p-4 w-fit mx-auto">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Privacy</h3>
              <p className="text-slate-600">
                Your career data is yours. We protect it with the highest
                security standards.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-emerald-100 rounded-full p-4 w-fit mx-auto">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Community
              </h3>
              <p className="text-slate-600">
                Building tools that help professionals support and learn from
                each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 font-serif">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Passionate professionals who've been in your shoes and are
              dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg p-6 text-center space-y-4">
              <div className="w-24 h-24 bg-emerald-100 rounded-full mx-auto flex items-center justify-center">
                <Users className="h-12 w-12 text-emerald-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">
                  Sarah Chen
                </h3>
                <p className="text-emerald-600 font-medium">Founder & CEO</p>
                <p className="text-slate-600 text-sm">
                  Former tech recruiter turned entrepreneur. Passionate about
                  making job searching more human.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg p-6 text-center space-y-4">
              <div className="w-24 h-24 bg-emerald-100 rounded-full mx-auto flex items-center justify-center">
                <Lightbulb className="h-12 w-12 text-emerald-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">
                  Marcus Rodriguez
                </h3>
                <p className="text-emerald-600 font-medium">Head of Product</p>
                <p className="text-slate-600 text-sm">
                  UX designer with 8 years experience. Believes great design
                  should feel invisible.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg p-6 text-center space-y-4">
              <div className="w-24 h-24 bg-emerald-100 rounded-full mx-auto flex items-center justify-center">
                <TrendingUp className="h-12 w-12 text-emerald-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">
                  Alex Thompson
                </h3>
                <p className="text-emerald-600 font-medium">Lead Engineer</p>
                <p className="text-slate-600 text-sm">
                  Full-stack developer who's changed careers 3 times. Knows the
                  job search struggle firsthand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-serif">
              Our Impact
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Real numbers from real professionals who've transformed their job
              search with Career Nest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-white">
                10,000+
              </div>
              <div className="text-emerald-100 font-medium">Active Users</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-white">
                250K+
              </div>
              <div className="text-emerald-100 font-medium">
                Applications Tracked
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-white">
                73%
              </div>
              <div className="text-emerald-100 font-medium">
                Faster Job Placement
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-white">
                4.9/5
              </div>
              <div className="text-emerald-100 font-medium">
                User Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 font-serif">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Thousands of professionals have already transformed their job
              search. Your dream career is waiting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-semibold transition-colors flex items-center space-x-2">
              <span>Start Your Journey</span>
              <Award className="h-4 w-4" />
            </button>
            <button className="border-2 border-slate-300 text-slate-700 hover:border-emerald-600 hover:text-emerald-600 px-8 py-3 rounded-md font-semibold transition-colors">
              Contact Us
            </button>
          </div>

          <p className="text-slate-500 text-sm">
            Join 10,000+ professionals • Free forever plan available
          </p>
        </div>
      </section>
    </div>
  );
}
