import { useAuth } from "../../context/Auth";
import { useTheme } from "../../context/Theme";
import { useCart } from "../../context/Cart";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiRightArrow } from "react-icons/bi";

interface OpenBooking {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  isBooked: boolean;
  createdAt: string;
  updatedAt: string;
}

// interface Booking {
//   _id: string;
//   customerId: string;
//   services: string[];
//   products: string[];
//   price: number;
//   bookingDate: string;
//   bookingTime: string;
//   duration: {
//     min: number;
//     max: number;
//   };
//   isPiad: boolean;
//   bookingEndTime: string;
//   paymentMethod: string;
//   status: string;
// }

interface Service {
  _id: string;
  title: string;
  description: string;
  dropOff: boolean;
  duration: {
    min: number;
    max: number;
  };
  price: number;
  category: string;
  type: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const BookingPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { cart, total } = useCart();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [openBookings, setOpenBookings] = useState<OpenBooking[]>([]);
  const [service, setService] = useState<Service>({
    _id: "",
    title: "",
    description: "",
    dropOff: false,
    duration: {
      min: 0,
      max: 0,
    },
    price: 0.0,
    category: "",
    type: "",
    image: "",
    createdAt: "",
    updatedAt: "",
  });
  const [selectedOpenBooking, setSelectedOpenBooking] = useState<OpenBooking>({
    _id: "",
    date: "",
    startTime: "",
    endTime: "",
    isActive: false,
    isBooked: false,
    createdAt: "",
    updatedAt: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("Credit-Card");

  const [bookingLoading, setBookingLoading] = useState(true);
  const [openBookingsLoading, setOpenBookingsLoading] = useState(true);
  const [loading, setLoading] = useState(false);

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

  const fetchOpenBookings = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/available-bookings",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      setOpenBookings(data.bookings);
    } catch (e: any) {
      alert("Failed to fetch bookings: " + e.message);
    } finally {
      setOpenBookingsLoading(false);
    }
  };

  const fetchService = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/services/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      const serviceData = {
        _id: data.service._id,
        title: data.service.title,
        description: data.service.description,
        dropOff: data.service.dropOff,
        duration: {
          min: data.service.duration.min,
          max: data.service.duration.max,
        },
        price: data.service.price,
        category: data.service.category,
        type: data.service.type,
        image: data.service.image,
        createdAt: data.service.createdAt,
        updatedAt: data.service.updatedAt,
      };
      setService(serviceData);
      // console.log(serviceData);
    } catch (e: any) {
      alert("Failed to fetch service: " + e.message);
    } finally {
      setBookingLoading(false);
    }
  };

  useEffect(() => {
    fetchOpenBookings();
    fetchService();
  }, []);

  const handleSelectOpenBooking = (booking: OpenBooking) => {
    if (selectedOpenBooking === null) {
      setSelectedOpenBooking(booking);
    } else if (selectedOpenBooking === booking) {
      setSelectedOpenBooking({
        _id: "",
        date: "",
        startTime: "",
        endTime: "",
        isActive: false,
        isBooked: false,
        createdAt: "",
        updatedAt: "",
      });
    } else {
      setSelectedOpenBooking(booking);
    }
  };

  const handleBooking = async () => {
    try {
      setLoading(true);
      const services = [];
      services.push(service._id);
      const products: String[] = [];
      cart.map((product) => products.push(product.id));
      // console.log(services);
      // console.log(products);
      // console.log(paymentMethod);

      const bookingData = {
        openBookingId: selectedOpenBooking._id,
        services: services,
        products: products,
        customerId: user?.id,
        price: total + service.price,
        bookingDate: selectedOpenBooking.date,
        bookingTime: selectedOpenBooking.startTime,
        duration: {
          min: service.duration.min,
          max: service.duration.max,
        },
        paymentMethod: paymentMethod,
      };
      console.log(bookingData);
      const method = "POST";
      const headers = { "Content-Type": "application/json" };
      const body = JSON.stringify(bookingData);

      const res = await fetch(`http://localhost:3000/api/bookings/new`, {
        method,
        headers,
        body,
      });
      const data = await res.json();
      if (!data.success) {
        alert("Failed to book.");
      }
    } catch (e: any) {
      alert("Failed to create booking: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="">
      <h1 className="text-4xl text-zinc-100 px-8 py-4">Make a New Booking</h1>
      <div className="flex items-center justify-center gap-8 text-xl font-semibold">
        <p className="text-rose-500">1. View your selected service</p>
        <BiRightArrow className="text-rose-500" />
        <p className="text-sky-500">2. Pick an available date & time</p>
        <BiRightArrow className="text-sky-500" />
        <p className="text-emerald-500">3. Confirm booking</p>
      </div>
      <section>
        <h1 className="text-4xl text-zinc-100 px-8 py-4">
          Your Selected Service
        </h1>
        {bookingLoading ? (
          <div>
            <h1 className="text-3xl text-rose-500 italic">
              Loading open bookings...
            </h1>
          </div>
        ) : (
          <div className="w-[75%] mx-auto p-8 border-1 border-zinc-800 rounded-md">
            <div className="h-[600px] w-full overflow-hidden">
              <img
                src={service.image}
                alt="Service image"
                className="w-full h-full object-cover rounded-md hover:scale-110 transition-all duration-1000"
              />
            </div>
            <div className="flex items-center justify-between my-4">
              <h1 className="text-5xl text-sky-500 font-bold">
                {service.title}
              </h1>
              <p className="text-3xl text-zinc-500">{service.description}</p>
            </div>
            <div className="text-3xl flex justify-between text-sky-600 dark:text-sky-400 font-medium my-4">
              <span>￡{service.price.toFixed(2)}</span>
              <span>
                {service.duration.min}–{service.duration.max} hrs
              </span>
            </div>
            <div className="flex flex-wrap gap-2 text-xl mt-2">
              <span className="bg-indigo-100 text-indigo-600 dark:bg-indigo-700 dark:text-white px-2 py-1 rounded">
                {service.category}
              </span>
              <span className="bg-amber-100 text-amber-600 dark:bg-amber-700 dark:text-white px-2 py-1 rounded">
                {service.type}
              </span>
              {service.dropOff && (
                <span className="bg-rose-500 text-white px-2 py-1 rounded">
                  Drop-off Required
                </span>
              )}
            </div>
          </div>
        )}
      </section>
      <section>
        <h1 className="text-4xl text-zinc-100 px-8 py-4">
          Your Associated Products
        </h1>
        <div className="w-[75%] mx-auto p-8 border-1 border-zinc-800 rounded-md">
          <div className="p-4 space-y-4 overflow-y-scroll">
            {cart.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-4 border rounded-lg p-3 ${
                  isDark ? "border-zinc-700" : "border-zinc-300"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-64 h-32 object-cover rounded"
                />
                <div className="flex justify-between w-full">
                  <h3 className="text-2xl text-zinc-300 font-medium">
                    {item.name}
                  </h3>
                  <p className="text-xl text-zinc-500">
                    ${item.price.toFixed(2)}
                  </p>
                  {/* <div className="flex items-center gap-2 mt-1">
                    <button
                      className={`px-2 py-1 text-sm rounded ${
                        isDark ? "bg-zinc-700 text-white" : "bg-zinc-200"
                      }`}
                      // onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      className={`px-2 py-1 text-sm rounded ${
                        isDark ? "bg-zinc-700 text-white" : "bg-zinc-200"
                      }`}
                      // onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-4xl text-zinc-300 p-4">Available Dates & Times</h2>
        {openBookingsLoading ? (
          <div>
            <h1 className="text-3xl text-rose-500 italic">
              Loading open bookings...
            </h1>
          </div>
        ) : (
          <section className="p-8 w-full h-[250px] bg-zinc-950 rounded-md flex justify-between gap-8 flex-wrap overflow-y-scroll text-zinc-100">
            {openBookings.map((booking) => {
              if (booking.isActive) {
                return (
                  <div
                    key={booking._id}
                    onClick={() => handleSelectOpenBooking(booking)}
                    className={`w-md h-[170px] p-4 border-1 ${
                      booking === selectedOpenBooking
                        ? "border-rose-500 scale-110"
                        : "border-emerald-500"
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
          </section>
        )}
      </section>
      <section>
        <h1 className="text-zinc-100 text-4xl text-center p-4">
          Confirm your Booking!
        </h1>
        <div className="w-[75%] mx-auto text-zinc-100">
          <h1 className="text-3xl">
            Customer Name: {user?.firstName} {user?.lastName}
          </h1>
          <h2 className="text-2xl">Customer Email: {user?.email}</h2>
        </div>
        <div className="w-[75%] mx-auto my-4">
          {selectedOpenBooking !== null && (
            <div className="text-zinc-500 text-2xl font-semibold">
              <p>Booking Date: {selectedOpenBooking.date}</p>
              <p>Booking Time: {selectedOpenBooking.startTime}</p>
              <p>
                Booking Duration: {service.duration.min}-{service.duration.max}
                hrs
              </p>
            </div>
          )}
        </div>
        <div className="w-[75%] mx-auto">
          <h1 className="text-3xl text-zinc-100">Select Your Payment Option</h1>
          <div className="text-zinc-100 text-lg flex justify-left gap-8 my-2">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="POS"
                name="payment_method"
                value="POS"
                onChange={() => setPaymentMethod("POS")}
              />
              <label htmlFor="POS">Payment on Site</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="Stripe"
                name="payment_method"
                value="Stripe"
                onChange={() => setPaymentMethod("Stripe")}
              />
              <label htmlFor="Stripe">Stripe</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="Credit-Card"
                name="payment_method"
                value="Credit-Card"
                onChange={() => setPaymentMethod("Credit-Card")}
              />
              <label htmlFor="Credit-Card">Credit Card</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="Debit-Card"
                name="payment_method"
                value="Debit-Card"
                onChange={() => setPaymentMethod("Debit-Card")}
              />
              <label htmlFor="Debit-Card">Debit Card</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="PayPal"
                name="payment_method"
                value="PayPal"
                onChange={() => setPaymentMethod("PayPal")}
              />
              <label htmlFor="PayPal">PayPal</label>
            </div>
          </div>
        </div>
        <div className="w-[75%] mx-auto flex justify-between px-8 py-4">
          <div className="text-3xl w-[300px] border-1 border-zinc-800 rounded-md p-4">
            <h2 className="text-zinc-100">EST. Product Cost</h2>
            <p className="text-rose-500">£{total}</p>
          </div>
          <div className="text-3xl w-[300px] border-1 border-zinc-800 rounded-md p-4">
            <h2 className="text-zinc-100">EST. Service Cost</h2>
            <p className="text-sky-500">£{service.price}</p>
          </div>
          <div className="text-3xl w-[300px] border-1 border-zinc-800 rounded-md p-4">
            <h2 className="text-zinc-100">EST. Total Cost</h2>
            <p className="text-emerald-500">£{total + service.price}</p>
          </div>
        </div>
      </section>
      <section className="flex justify-center py-8">
        <button
          onClick={handleBooking}
          className="text-3xl text-zinc-100 uppercase font-bold border-2 border-sky-500 p-4 rounded-md transition-all duration-1000 w-[75%] hover:bg-sky-500"
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </section>
    </main>
  );
};

export default BookingPage;
