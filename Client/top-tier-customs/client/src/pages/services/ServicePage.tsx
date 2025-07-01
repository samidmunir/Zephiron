// src/pages/ServicePage.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/Theme";

interface Service {
  _id: string;
  title: string;
  description: string;
  dropoffRequired: boolean;
  estimatedTime: string;
  cost: number;
  category: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const ServicePage = () => {
  const { id } = useParams();
  const [service, setService] = useState<Service | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/services/${id}`);
        const data = await res.json();
        setService(data);
      } catch (err) {
        console.error("Failed to fetch service", err);
      }
    };

    fetchService();
  }, [id]);

  if (!service) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div
      className={`min-h-screen py-10 px-4 md:px-12 ${
        isDark ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg border dark:border-zinc-700 bg-white dark:bg-zinc-800">
          <img
            src={service.image || "/placeholder.jpg"}
            alt={service.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold">{service.title}</h1>
            <p className="text-zinc-600 dark:text-zinc-300">
              {service.description}
            </p>
            <div className="flex gap-4 text-sm">
              <p className="text-sky-600 dark:text-sky-400 font-semibold">
                Estimated Time: {service.estimatedTime}
              </p>
              <p className="text-sky-600 dark:text-sky-400 font-semibold">
                Cost: ￡{service.cost.toFixed(2)}
              </p>
            </div>
            {service.dropoffRequired && (
              <span className="inline-block text-xs font-medium text-white bg-rose-500 px-2 py-1 rounded-md">
                Drop-off Required
              </span>
            )}
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-4">
              <p>Created: {new Date(service.createdAt).toLocaleString()}</p>
              <p>
                Last Updated: {new Date(service.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
