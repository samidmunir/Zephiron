import { useState } from "react";
import { useTheme } from "../../context/Theme";
import { useNavigate } from "react-router-dom";

const CreateAvailableBookingPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/available-bookings/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        alert("New opening created successfully.");
        navigate("/admin/bookings");
      } else {
        alert("Error whilst creating opening.");
      }
    } catch (e) {
      alert("Failed to create opening.");
    }
  };

  return (
    <main
      className={`min-h-screen px-6 py-10 ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">
        Create New Open Booking
      </h1>
      <div className="max-w-2xl mx-auto grid gap-5">
        {[
          { label: "Date", name: "date" },
          { label: "Start Time", name: "startTime" },
          { label: "End Time", name: "endTime" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block text-sm mb-1 font-medium">{label}</label>
            <input
              type={type || "text"}
              name={name}
              value={(form as any)[name]}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800"
            />
          </div>
        ))}

        {/* Installable */}
        {/* <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            name="installable"
            checked={form.installable}
            onChange={handleChange}
            className="h-5 w-5"
          />
          <label className="text-sm font-medium">Installable</label>
        </div> */}

        {/* Description */}
        {/* <div>
          <label className="block text-sm mb-1 font-medium">Description</label>
          <textarea
            name="description"
            rows={4}
            value={form.description}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800"
          />
        </div> */}

        <button
          onClick={handleSubmit}
          className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded font-semibold transition"
        >
          Create Opening
        </button>
      </div>
    </main>
  );
};

export default CreateAvailableBookingPage;
