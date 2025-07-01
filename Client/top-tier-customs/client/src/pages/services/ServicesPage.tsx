// src/pages/ServicesPage.tsx
import { useEffect, useState } from "react";
import ServiceCard from "../../components/services/ServiceCard";
import { useTheme } from "../../context/Theme";

interface Service {
  _id: string;
  title: string;
  description: string;
  dropoffRequired: boolean;
  estimatedTime: string;
  price: number;
  category: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/services");
        const data = await res.json();
        setServices(data.services);
      } catch (err) {
        console.error("Failed to fetch services", err);
      }
    };

    fetchServices();
  }, []);

  return (
    <div
      className={`min-h-screen py-10 px-4 md:px-12 ${
        isDark ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
