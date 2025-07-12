import { useState } from "react";
import JobCard from "../../components/Jobs/JobCard";
import { Link } from "react-router-dom";
import JobApplicationFormModal from "../../components/Jobs/JobApplicationFormModal";

const mockJobs = [
  {
    title: "Frontend Engineer",
    company: "Google",
    workType: "remote",
    location: { city: "San Francisco", country: "USA" },
    salary: { amount: 130000, period: "yearly" },
    status: "applied",
    createdAt: "2025-07-01",
    category: "Software Engineering",
  },
  {
    title: "UX Designer",
    company: "Spotify",
    workType: "hybrid",
    location: { city: "Berlin", country: "Germany" },
    salary: { amount: 45, period: "hourly" },
    status: "interview",
    createdAt: "2025-06-20",
    category: "Design",
  },
];

const JobApplications = () => {
  const [jobs, setJobs] = useState(mockJobs);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveJob = (newJob) => {
    setJobs((prev) => [...prev, newJob]); // eventually POST to backend
    setIsModalOpen(false);
  };

  return (
    <div className="w-full px-4 py-6 max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          My Job Applications
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Job
        </button>
      </div>

      {jobs.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-8">
          No job applications yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      )}

      <div className="pt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        ←{" "}
        <Link to="/dashboard" className="text-blue-500 hover:underline">
          Back to Dashboard
        </Link>
      </div>
      <JobApplicationFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveJob}
      />
    </div>
  );
};

export default JobApplications;
