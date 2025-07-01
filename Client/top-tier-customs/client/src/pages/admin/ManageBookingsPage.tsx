import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface AvailableBooking {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  isBooked: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Booking {
  _id: string;
  customerId: string;
  services: string[];
  products: string[];
  price: number;
  bookingDate: string;
  bookingStartTime: string;
  bookingEndTime: string;
}

const ManageBookingsPage = () => {
  const navigate = useNavigate();
  const [availableBookings, setAvailableBookings] = useState<
    AvailableBooking[]
  >([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAvailableBookings = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/available-bookings",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      setAvailableBookings(data.bookings);
    } catch (e: any) {
      alert("Error fetching open bookings" + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailableBookings();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/admin/available-bookings/${id}/delete`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      if (!data.success) {
        alert("Failed to delete open booking.");
        return;
      }
      alert("Open booking deleted.");
    } catch (e: any) {
      alert("Failed to delete open booking: " + e.message);
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-8 min-h-[100vh]">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Manage Bookings
        </h1>
      </div>
      <div className="mb-8 flex gap-8">
        <button
          onClick={() => navigate("/admin/available-bookings/create")}
          className="text-xl px-2 py-1 border-2 border-rose-500 font-semibold rounded-md text-zinc-100 transition-all duration-1000 hover:bg-rose-500"
        >
          Create New Opening
        </button>
      </div>
      {loading ? (
        <p className="text-zinc-500 dark:text-zinc-400">
          Loading open bookings...
        </p>
      ) : availableBookings.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">
          No open bookings found.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
            <thead className="bg-zinc-100 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Open Booking ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Start Time
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  End Time
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Is Active
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Is Booked
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Created At
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-zinc-900 divide-y divide-zinc-200 dark:divide-zinc-700">
              {availableBookings.map((booking) => (
                <tr key={booking._id}>
                  <td className="px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100">
                    {booking._id.slice(0, 8)}...
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100">
                    {booking.date}
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100">
                    {booking.startTime}
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100">
                    {booking.endTime}
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100">
                    {booking.isActive ? "YES" : "NO"}
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100">
                    {booking.isBooked ? "YES" : "NO"}
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100">
                    {booking.createdAt.substring(0, 10)} |{" "}
                    {booking.createdAt.substring(11, 16)}
                  </td>
                  <td className="px-4 py-3 text-sm space-x-2">
                    <Link
                      to={`/admin/available-bookings/edit/${booking._id}`}
                      className="inline-block px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="inline-block px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default ManageBookingsPage;
