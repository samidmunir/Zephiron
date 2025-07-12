import { useState } from "react";
import JobComments from "../components/Jobs/JobComments";

const mockJobs = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Meta",
    location: "New York, USA",
    workType: "Remote",
    salary: "$120,000 / year",
    category: "Engineering",
    postedAt: "2025-07-10T10:00:00Z",
  },
  {
    id: "2",
    title: "Product Designer",
    company: "Figma",
    location: "San Francisco, USA",
    workType: "Hybrid",
    salary: "$95,000 / year",
    category: "Design",
    postedAt: "2025-07-09T14:30:00Z",
  },
];

const JobCommunity = () => {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const toggleComments = (jobId: string) => {
    setExpandedJobId((prev) => (prev === jobId ? null : jobId));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        CareerNest Community Jobs
      </h1>

      <div className="space-y-6">
        {mockJobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-5 shadow-md bg-white dark:bg-gray-900"
          >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {job.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {job.company} • {job.location} • {job.workType}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  💰 {job.salary}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Posted {new Date(job.postedAt).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => toggleComments(job.id)}
                className="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
              >
                {expandedJobId === job.id ? "Hide Comments" : "View Comments"}
              </button>
            </div>

            {expandedJobId === job.id && (
              <div className="mt-4 border-t pt-4">
                <JobComments jobId={job.id} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCommunity;
