interface DashboardCardProps {
  title: string;
  count: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow border border-zinc-200 dark:border-zinc-700">
      <h3 className="text-md font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-sky-600 dark:text-sky-400">
        {count}
      </p>
    </div>
  );
};

export default DashboardCard;
