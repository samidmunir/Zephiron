import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/Theme";

interface Service {
  _id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  deposit: number;
  dropOff: boolean;
  available: boolean;
  duration: {
    min: number;
    max: number;
  };
  category: string;
  type: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const EditServicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<
    Omit<Service, "_id" | "createdAt" | "updatedAt">
  >({
    title: "",
    description: "",
    price: 0,
    discount: 0,
    deposit: 0,
    dropOff: false,
    available: true,
    duration: { min: 0, max: 0 },
    category: "",
    type: "",
    image: "",
  });

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/services/${id}`);
        const data = await res.json();
        setService(data.service);
        const { _id, createdAt, updatedAt, ...rest } = data.service;
        setForm(rest);
      } catch (error) {
        alert("Failed to fetch service.");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;

    if (name === "min" || name === "max") {
      setForm((prev) => ({
        ...prev,
        duration: {
          ...prev.duration,
          [name]: Number(value),
        },
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/services/${id}/edit`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Service updated successfully!");
        navigate("/admin/services");
      } else {
        const errorData = await res.json();
        alert("Update failed: " + errorData.message);
      }
    } catch (error) {
      alert("Update failed: " + error);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-xl animate-pulse">
        Loading service...
      </div>
    );
  }

  if (!service) {
    return <div className="text-center py-20 text-xl">Service not found.</div>;
  }

  return (
    <main
      className={`min-h-screen px-6 py-10 transition-all ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Edit Service</h1>

        <div className="grid grid-cols-1 gap-6">
          {/* Basic Inputs */}
          {[
            { label: "Title", name: "title" },
            { label: "Category", name: "category" },
            { label: "Type", name: "type" },
            { label: "Price ($)", name: "price", type: "number" },
            { label: "Discount (%)", name: "discount", type: "number" },
            { label: "Deposit ($)", name: "deposit", type: "number" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              <input
                name={name}
                type={type || "text"}
                value={(form as any)[name]}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 focus:ring-2 focus:outline-none transition"
              />
            </div>
          ))}

          {/* Duration */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Duration Min (hrs)
              </label>
              <input
                name="min"
                type="number"
                value={form.duration.min}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 focus:ring-2 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Duration Max (hrs)
              </label>
              <input
                name="max"
                type="number"
                value={form.duration.max}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 focus:ring-2 focus:outline-none transition"
              />
            </div>
          </div>

          {/* Booleans */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="dropOff"
                checked={form.dropOff}
                onChange={handleChange}
              />
              <span>Drop-off Required</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="available"
                checked={form.available}
                onChange={handleChange}
              />
              <span>Available</span>
            </label>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 focus:ring-2 focus:outline-none transition"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 focus:ring-2 focus:outline-none transition"
            />
          </div>

          {/* Save Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleUpdate}
              className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white text-lg font-semibold rounded-md transition"
            >
              Save / Update Service
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditServicePage;
