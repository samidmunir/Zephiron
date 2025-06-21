import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface ChartCardProps {
  title: string;
  data: { name: string; value: number }[];
  color?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  data,
  color = "#0284c7",
}) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow border border-zinc-200 dark:border-zinc-700">
      <h3 className="text-md font-semibold mb-3">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
