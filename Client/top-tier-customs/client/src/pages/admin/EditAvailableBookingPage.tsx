import { useTheme } from "../../context/Theme";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Booking {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  isBooked: boolean;
  createdAt: string;
  updatedAt: string;
}

const EditAvailableBookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState<Booking | null>(null);
  const [form, setForm] = useState<
    Omit<Booking, "_id" | "createdAt" | "updatedAt">
  >({
    date: "",
    startTime: "",
    endTime: "",
    isActive: false,
    isBooked: false,
  });

  const fetchBooking = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/admin/available-bookings/${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      setBooking(data.booking);
      const { _id, createdAt, updatedAt, ...rest } = data.booking;
      setForm(rest);
    } catch (e) {
      alert("Failed to load booking.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooking();
  }, [id]);

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

  const handleUpdate = async (id: string) => {
    try {
      const formData = {
        date: form.date,
        startTime: form.startTime,
        endTime: form.endTime,
        isActive: form.isActive,
        isBooked: form.isBooked,
      };
      console.log(formData);
      const res = await fetch(
        `http://localhost:3000/api/admin/available-bookings/${id}/edit`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!data.success) {
        alert("Failed to update open booking.");
      } else {
        alert("Successfully updated open booking.");
        navigate("/admin/bookings");
      }
    } catch (e: any) {
      alert("Failed to update open booking: " + e.message);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-xl animate-pulse">
        Loading booking...
      </div>
    );
  }

  if (!booking) {
    return <div className="text-center py-20 text-xl">Booking not found.</div>;
  }

  return (
    <main
      className={`min-h-screen px-6 py-10 transition-all ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Edit Open Booking
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {/* Basic Inputs */}
          {[
            { label: "Date", name: "date" },
            { label: "Start Time", name: "startTime" },
            { label: "End Time", name: "endTime" },
            // { label: "Type", name: "type" },
            // { label: "Quantity", name: "quantity", type: "number" },
            // { label: "Price", name: "price", type: "number" },
            // { label: "Discount (%)", name: "discount", type: "number" },
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

          {/* isActive */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isActive"
              checked={form.isActive}
              onChange={handleChange}
              className="h-5 w-5"
            />
            <label className="text-sm font-medium">Is Active</label>
          </div>

          {/* isBooked */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isBooked"
              checked={form.isBooked}
              onChange={handleChange}
              className="h-5 w-5"
            />
            <label className="text-sm font-medium">Is Booked</label>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => handleUpdate(booking._id)}
              className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white text-lg font-semibold rounded-md transition"
            >
              Save / Update Booking
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditAvailableBookingPage;
