type Job = {
  title: string;
  company: string;
  workType: string;
  location: { city: string; country: string };
  salary: { amount: number; period: string };
  status: string;
  createdAt: string;
  category: string;
};

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {job.title}
        </h3>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            job.status === "applied"
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              : job.status === "interview"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
              : job.status === "offer"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : job.status === "rejected"
              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          {job.status}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        {job.company} — {job.workType}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {job.location.city}, {job.location.country}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        💰 {job.salary.amount}/{job.salary.period}
      </p>
      <p className="text-xs text-gray-400">📁 {job.category}</p>
    </div>
  );
};

export default JobCard;
