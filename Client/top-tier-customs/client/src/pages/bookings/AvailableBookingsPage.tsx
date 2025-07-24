import { useTheme } from "../../context/Theme";
import { useState, useEffect } from "react";

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

const AvailableBookingsPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [bookings, setBookings] = useState<Booking[]>([]);

  const today = new Date();
  const todayISO = today.toISOString();
  // const todayDate = todayISO.substring(0, 10);
  // const todayTime = todayISO.substring(11, 16);

  const getBookingCreatedAtDate = (bookingDate: string) => {
    const bookingCreatedAtDate = bookingDate.substring(0, 10);
    return bookingCreatedAtDate;
  };

  const getBookingCreatedAtTime = (bookingDate: string) => {
    const bookingCreatedAtTime = bookingDate.substring(11, 16);
    return bookingCreatedAtTime;
  };

  const getBookingUpdatedAtDate = (bookingDate: string) => {
    const bookingUpdatedAtDate = bookingDate.substring(0, 10);
    return bookingUpdatedAtDate;
  };

  const getBookingUpdatedAtTime = (bookingDate: string) => {
    const bookingUpdatedAtTime = bookingDate.substring(11, 16);
    return bookingUpdatedAtTime;
  };

  function formatDateToWords(isoDate: string) {
    const date = new Date(isoDate);

    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );

    const day = date.getDate();
    const year = date.getFullYear();

    // Determine the day suffix
    const getDaySuffix = (d: number) => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const suffix = getDaySuffix(day);

    return `${month} ${day}${suffix}, ${year}`;
  }

  const fetchBookings = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/available-bookings",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      setBookings(data.bookings);
    } catch (e: any) {
      alert("Failed to fetch bookings: " + e.message);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <main
      className={`relative w-full min-h-screen px-4 sm:px-6 py-8 transition-all duration-3000 ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <div className="flex items-center justify-between mb-8 px-8">
        <h1 className="text-4xl uppercase font-bold text-center">
          View Our Available Bookings
        </h1>
        <p className="text-4xl font-semibold underline">
          Today is {formatDateToWords(todayISO)}
        </p>
      </div>
      <section className="p-8 w-full min-h-screen bg-zinc-950 rounded-md flex justify-between flex-wrap">
        {bookings.map((booking) => {
          if (booking.isActive) {
            return (
              <div
                key={booking._id}
                className={`w-md h-[170px] p-4 border-1 ${
                  booking.isBooked ? "border-rose-500" : "border-emerald-500"
                } bg-gradient-to-tr from-zinc-950 to-zinc-900 rounded-md shadow-lg transition-all duration-1000 hover:scale-110`}
              >
                <div>
                  <h1 className="text-2xl text-center font-semibold">
                    {booking.date}
                  </h1>
                </div>
                <div className="my-4">
                  <p className="text-center text-4xl font-bold">
                    {booking.startTime} - {booking.endTime}
                  </p>
                </div>
                {getBookingCreatedAtDate(booking.createdAt) ===
                getBookingUpdatedAtDate(booking.updatedAt) ? (
                  <div className="flex justify-between">
                    <p>
                      <span className="font-semibold">Created At: </span>
                      {getBookingCreatedAtTime(booking.createdAt)}
                    </p>
                    <p>
                      <span className="font-semibold">Updated At: </span>
                      {getBookingUpdatedAtTime(booking.updatedAt)}
                    </p>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <p>
                      <span className="font-semibold">Created At: </span>
                      {getBookingCreatedAtDate(booking.createdAt)}
                    </p>
                    <p>
                      <span className="font-semibold">Updated At: </span>
                      {getBookingUpdatedAtDate(booking.updatedAt)}
                    </p>
                  </div>
                )}
              </div>
            );
          }
        })}
        {/* {bookings.map((booking) => (
          <div
            key={booking._id}
            className={`w-md p-4 border-1 ${
              booking.isBooked ? "border-rose-500" : "border-emerald-500"
            } bg-gradient-to-tr from-zinc-950 to-zinc-900 rounded-md shadow-lg transition-all duration-1000 hover:scale-110`}
          >
            <div>
              <h1 className="text-2xl text-center font-semibold">
                {formatDateToWords(booking.date)}
              </h1>
            </div>
            <div className="my-4">
              <p className="text-center text-4xl font-bold">
                {booking.startTime} - {booking.endTime}
              </p>
            </div>
            {getBookingCreatedAtDate(booking.createdAt) ===
            getBookingUpdatedAtDate(booking.updatedAt) ? (
              <div className="flex justify-between">
                <p>
                  <span className="font-semibold">Created At: </span>
                  {getBookingCreatedAtTime(booking.createdAt)}
                </p>
                <p>
                  <span className="font-semibold">Updated At: </span>
                  {getBookingUpdatedAtTime(booking.updatedAt)}
                </p>
              </div>
            ) : (
              <div>
                <p>
                  <span className="font-semibold">Created At: </span>
                  {getBookingCreatedAtDate(booking.createdAt)}
                </p>
                <p>
                  <span className="font-semibold">Updated At: </span>
                  {getBookingUpdatedAtDate(booking.updatedAt)}
                </p>
              </div>
            )}
          </div>
        ))} */}
      </section>
    </main>
  );
};

export default AvailableBookingsPage;
