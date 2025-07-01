import { useState } from "react";

interface DashboardTableProps {
  title: string;
  columns: string[];
  data: string[][];
}

const DashboardTable: React.FC<DashboardTableProps> = ({
  title,
  columns,
  data,
}) => {
  const [search, setSearch] = useState("");
  const [sortIndex, setSortIndex] = useState<number | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (index: number) => {
    if (sortIndex === index) {
      setSortAsc(!sortAsc);
    } else {
      setSortIndex(index);
      setSortAsc(true);
    }
  };

  const filteredData = data
    .filter((row) =>
      row.some((cell) => cell.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortIndex === null) return 0;
      const valA = a[sortIndex] || "";
      const valB = b[sortIndex] || "";
      return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });

  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-2 py-1 text-sm rounded border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800"
        />
      </div>

      <div className="overflow-auto">
        <table className="w-full table-auto border-collapse text-sm">
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  onClick={() => handleSort(idx)}
                  className="p-2 border-b border-zinc-300 dark:border-zinc-700 text-left font-medium cursor-pointer hover:text-sky-600"
                >
                  {col} {sortIndex === idx ? (sortAsc ? "▲" : "▼") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center p-4 text-zinc-500"
                >
                  No data available
                </td>
              </tr>
            ) : (
              filteredData.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="p-2 border-b border-zinc-200 dark:border-zinc-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashboardTable;
