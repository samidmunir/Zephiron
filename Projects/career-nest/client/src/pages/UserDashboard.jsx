// import { useUserStore } from "../stores/UserStore";

// const UserDashboard = () => {
//   const { user } = useUserStore();
//   return (
//     <main className={`min-h-screen px-8 py-4`}>
//       <h1 className={`text-5xl text-blue-600 font-medium`}>
//         Welcome to your User Dashboard!
//       </h1>
//       <h2 className="font-bold text-3xl mt-4">
//         Account email: <span className="font-normal">{user.email}</span>
//       </h2>
//       <h3 className="font-bold text-3xl">
//         Account role: <span className="font-normal">{user.role}</span>
//       </h3>
//       <div className="mt-4">
//         <p className="text-xl font-bold">{user.career}</p>
//       </div>
//     </main>
//   );
// };

// export default UserDashboard;

import { useEffect, useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Briefcase,
  Clock,
  DollarSign,
  MapPin,
  ExternalLink,
  Search,
  Plus,
} from "lucide-react";
import { useUserStore } from "../stores/UserStore";
import { useApplicationStore } from "../stores/ApplicationStore";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [applications, setApplications] = useState([]);

  const { user } = useUserStore();

  const { userApplications, getUserApplications, loading } =
    useApplicationStore();

  useEffect(() => {
    fetchUserApplications(user._id);
  }, [applications]);

  const fetchUserApplications = async (userID) => {
    try {
      const res = await getUserApplications(userID);
      setApplications(userApplications);
    } catch (e) {
      console.error(e);
    }
  };

  // Mock data - replace with actual data from your API
  // const applications = [
  //   {
  //     _id: "1",
  //     title: "Senior Frontend Developer",
  //     company: "TechCorp Inc.",
  //     workType: "remote",
  //     location: { city: "San Francisco", country: "USA" },
  //     salary: { amount: 120000, period: "yearly" },
  //     status: "interview",
  //     category: "Technology",
  //     position: "Senior",
  //     createdAt: "2024-01-15T10:00:00Z",
  //     applicationURL: "https://techcorp.com/jobs/123",
  //   },
  //   {
  //     _id: "2",
  //     title: "Product Manager",
  //     company: "StartupXYZ",
  //     workType: "hybrid",
  //     location: { city: "New York", country: "USA" },
  //     salary: { amount: 95000, period: "yearly" },
  //     status: "applied",
  //     category: "Product",
  //     position: "Mid-level",
  //     createdAt: "2024-01-12T14:30:00Z",
  //     applicationURL: "https://startupxyz.com/careers/456",
  //   },
  //   {
  //     _id: "3",
  //     title: "UX Designer",
  //     company: "Design Studio",
  //     workType: "in-person",
  //     location: { city: "Los Angeles", country: "USA" },
  //     salary: { amount: 85000, period: "yearly" },
  //     status: "offer",
  //     category: "Design",
  //     position: "Mid-level",
  //     createdAt: "2024-01-10T09:15:00Z",
  //     applicationURL: "https://designstudio.com/jobs/789",
  //   },
  //   {
  //     _id: "4",
  //     title: "Data Scientist",
  //     company: "AI Solutions",
  //     workType: "remote",
  //     location: { city: "Austin", country: "USA" },
  //     salary: { amount: 110000, period: "yearly" },
  //     status: "rejected",
  //     category: "Data Science",
  //     position: "Senior",
  //     createdAt: "2024-01-08T16:45:00Z",
  //     applicationURL: "https://aisolutions.com/careers/321",
  //   },
  //   {
  //     _id: "5",
  //     title: "Marketing Specialist",
  //     company: "Growth Co",
  //     workType: "hybrid",
  //     location: { city: "Chicago", country: "USA" },
  //     salary: { amount: 65000, period: "yearly" },
  //     status: "wishlist",
  //     category: "Marketing",
  //     position: "Junior",
  //     createdAt: "2024-01-05T11:20:00Z",
  //     applicationURL: "https://growthco.com/jobs/654",
  //   },
  // ];

  // Calculate statistics
  const stats = {
    total: applications.length,
    applied: applications.filter((app) => app.status === "applied").length,
    interviews: applications.filter((app) => app.status === "interview").length,
    offers: applications.filter((app) => app.status === "offer").length,
    rejected: applications.filter((app) => app.status === "rejected").length,
    avgSalary: Math.round(
      applications.reduce((sum, app) => sum + app.salary.amount, 0) /
        applications.length
    ),
  };

  const getStatusColor = (status) => {
    const colors = {
      wishlist: "bg-slate-100 text-slate-700 border-slate-200",
      applied: "bg-blue-100 text-blue-700 border-blue-200",
      interview: "bg-amber-100 text-amber-700 border-amber-200",
      offer: "bg-emerald-100 text-emerald-700 border-emerald-200",
      rejected: "bg-red-100 text-red-700 border-red-200",
    };
    return colors[status] || colors.wishlist;
  };

  const getWorkTypeIcon = (workType) => {
    if (workType === "remote") return "🏠";
    if (workType === "hybrid") return "🔄";
    return "🏢";
  };

  const filteredApplications = applications
    .filter(
      (app) =>
        (statusFilter === "all" || app.status === statusFilter) &&
        (searchTerm === "" ||
          app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.company.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "recent")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "salary") return b.salary.amount - a.salary.amount;
      if (sortBy === "company") return a.company.localeCompare(b.company);
      return 0;
    });

  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-slate-50 flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
  //         <p className="text-slate-600">Loading application...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              {/* <div className="bg-emerald-600 rounded-full p-2">
                <Briefcase className="h-6 w-6 text-white" />
              </div> */}
              <div>
                <h1 className="text-2xl font-bold text-slate-900 font-serif">
                  {user.name}
                </h1>
                <p className="text-sm text-slate-600">Dashboard</p>
              </div>
            </div>
            <Link
              to="/dashboard/applications/track"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Application</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Total Applications
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  {stats.total}
                </p>
              </div>
              <div className="bg-emerald-100 rounded-full p-3">
                <Briefcase className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  In Progress
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  {stats.applied + stats.interviews}
                </p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Offers Received
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  {stats.offers}
                </p>
              </div>
              <div className="bg-emerald-100 rounded-full p-3">
                <TrendingUp className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Avg. Salary
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  ${stats.avgSalary.toLocaleString()}
                </p>
              </div>
              <div className="bg-amber-100 rounded-full p-3">
                <DollarSign className="h-6 w-6 text-amber-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Application Status Overview
            </h2>
            <BarChart3 className="h-5 w-5 text-slate-400" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {[
              {
                label: "Wishlist",
                count: applications.filter((app) => app.status === "wishlist")
                  .length,
                color: "bg-slate-500",
              },
              { label: "Applied", count: stats.applied, color: "bg-blue-500" },
              {
                label: "Interview",
                count: stats.interviews,
                color: "bg-amber-500",
              },
              { label: "Offer", count: stats.offers, color: "bg-emerald-500" },
              { label: "Rejected", count: stats.rejected, color: "bg-red-500" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className={`${item.color} h-24 rounded-lg mb-2 flex items-end justify-center pb-2`}
                >
                  <span className="text-white font-bold text-lg">
                    {item.count}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="all">All Status</option>
                <option value="wishlist">Wishlist</option>
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="recent">Most Recent</option>
                <option value="salary">Highest Salary</option>
                <option value="company">Company A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredApplications.map((application) => (
            <div
              key={application._id}
              className="bg-white rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {application.title}
                    </h3>
                    <p className="text-slate-600 font-medium">
                      {application.company}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                      application.status
                    )}`}
                  >
                    {application.status.charAt(0).toUpperCase() +
                      application.status.slice(1)}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>
                      {application.location.city},{" "}
                      {application.location.country}
                    </span>
                    <span className="ml-2">
                      {getWorkTypeIcon(application.workType)}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>
                      ${application.salary.amount.toLocaleString()} /{" "}
                      {application.salary.period}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>
                      {application.category} • {application.position}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-500">
                    Applied{" "}
                    {new Date(application.createdAt).toLocaleDateString()}
                  </span>
                  {/* <a
                    href={application.applicationURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 transition-colors"
                  > */}
                  <Link to={`/dashboard/applications/${application._id}`}>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                  {/* </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              No applications found
            </h3>
            <p className="text-slate-600">
              Try adjusting your search or filters, or add your first
              application.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
