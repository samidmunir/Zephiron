// // src/pages/admin/ManageServicesPage.tsx
// import { useEffect, useState } from "react";
// import { useTheme } from "../../context/Theme";
// import { Link } from "react-router-dom";

// interface Service {
//   _id: string;
//   title: string;
//   price: number;
//   estimatedTime: string;
//   dropOff: boolean;
//   image: string;
// }

// const ManageServicesPage = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
//   const [services, setServices] = useState<Service[]>([]);

//   const fetchServices = async () => {
//     const res = await fetch("http://localhost:3000/api/services");
//     const data = await res.json();
//     setServices(data.services);
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const handleDelete = async (id: string) => {
//     const confirm = window.confirm(
//       "Are you sure you want to delete this service?"
//     );
//     if (!confirm) return;

//     await fetch(`http://localhost:3000/api/services/${id}`, {
//       method: "DELETE",
//     });

//     setServices((prev) => prev.filter((s) => s._id !== id));
//   };

//   return (
//     <div
//       className={`p-6 min-h-screen ${
//         isDark ? "bg-zinc-900 text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Manage Services</h1>
//         <Link
//           to="/admin/services/create"
//           className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md"
//         >
//           + New Service
//         </Link>
//       </div>
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {services.map((service) => (
//           <div
//             key={service._id}
//             className="rounded-xl border overflow-hidden shadow-md dark:border-zinc-700 bg-white dark:bg-zinc-800"
//           >
//             <img
//               src={service.image || "/placeholder.jpg"}
//               alt={service.title}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4 space-y-2">
//               <h2 className="text-lg font-semibold">{service.title}</h2>
//               <p className="text-sm text-zinc-600 dark:text-zinc-300">
//                 ￡{service.price.toFixed(2)}
//               </p>
//               <div className="flex gap-2">
//                 <Link
//                   to={`/admin/services/edit/${service._id}`}
//                   className="text-sm px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(service._id)}
//                   className="text-sm px-3 py-1 rounded-md bg-rose-600 hover:bg-rose-700 text-white"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageServicesPage;

// // src/pages/admin/ManageServicesPage.tsx
// // src/pages/admin/ManageServicesPage.tsx
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useTheme } from "../../context/Theme";

// interface Service {
//   _id: string;
//   title: string;
//   price: number;
//   duration: { min: number; max: number }; // updated duration format
//   dropoffRequired: boolean;
//   category: string;
//   image: string;
// }

// const ManageServicesPage = () => {
//   const [services, setServices] = useState<Service[]>([]);
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/services");
//         const data = await res.json();
//         setServices(data.services);
//       } catch (err) {
//         console.error("Failed to fetch services:", err);
//       }
//     };

//     fetchServices();
//   }, []);

//   const handleDelete = async (id: string) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this service?"
//     );
//     if (!confirmDelete) return;

//     try {
//       await fetch(`http://localhost:3000/api/services/${id}`, {
//         method: "DELETE",
//       });
//       setServices((prev) => prev.filter((s) => s._id !== id));
//     } catch (err) {
//       console.error("Failed to delete service:", err);
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen p-6 ${
//         isDark ? "bg-zinc-900 text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">Manage Services</h1>
//         <Link
//           to="/admin/services/create"
//           className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md"
//         >
//           + New Service
//         </Link>
//       </div>

//       {services.length === 0 ? (
//         <p>No services found.</p>
//       ) : (
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service) => (
//             <div
//               key={service._id}
//               className="border rounded-xl overflow-hidden shadow-sm dark:border-zinc-700 bg-white dark:bg-zinc-800"
//             >
//               <div className="h-40 overflow-hidden">
//                 <img
//                   src={service.image || "/placeholder.jpg"}
//                   alt={service.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-4 space-y-2">
//                 <h2 className="text-lg font-semibold truncate">
//                   {service.title}
//                 </h2>
//                 <p className="text-sm text-zinc-500 dark:text-zinc-300 line-clamp-2">
//                   {service.category}
//                 </p>
//                 <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
//                   £{service.price.toFixed(2)} &bull; {service.duration.min}-
//                   {service.duration.max} hr
//                 </p>
//                 {service.dropoffRequired && (
//                   <span className="inline-block text-xs font-medium text-white bg-rose-500 px-2 py-1 rounded-md">
//                     Drop-off Required
//                   </span>
//                 )}
//                 <div className="flex gap-2 pt-3">
//                   <Link
//                     to={`/admin/services/edit/${service._id}`}
//                     className="flex-1 text-center text-sm px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={() => handleDelete(service._id)}
//                     className="flex-1 text-sm px-3 py-1 rounded-md bg-rose-600 hover:bg-rose-700 text-white"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageServicesPage;

// src/pages/admin/ManageServicesPage.tsx
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { formatDistanceToNow } from "date-fns";
// import { useTheme } from "../../context/Theme";

// interface Service {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   duration: { min: number; max: number };
//   dropoffRequired: boolean;
//   category: string;
//   image: string;
//   createdAt: string;
//   updatedAt: string;
// }

// const ManageServicesPage = () => {
//   const [services, setServices] = useState<Service[]>([]);
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const fetchServices = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/services");
//       const data = await res.json();
//       setServices(data.services);
//     } catch (err) {
//       console.error("Error fetching services:", err);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     const confirm = window.confirm(
//       "Are you sure you want to delete this service?"
//     );
//     if (!confirm) return;

//     try {
//       await fetch(`http://localhost:3000/api/services/${id}`, {
//         method: "DELETE",
//       });
//       setServices((prev) => prev.filter((s) => s._id !== id));
//     } catch (err) {
//       console.error("Error deleting service:", err);
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   return (
//     <div
//       className={`min-h-screen p-6 ${
//         isDark ? "bg-zinc-900 text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">Manage Services</h1>
//         <Link
//           to="/admin/services/create"
//           className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md"
//         >
//           + Create New
//         </Link>
//       </div>

//       {services.length === 0 ? (
//         <p className="text-zinc-500">No services found.</p>
//       ) : (
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service) => (
//             <div
//               key={service._id}
//               className="rounded-xl overflow-hidden shadow-md border dark:border-zinc-700 bg-white dark:bg-zinc-800"
//             >
//               <img
//                 src={service.image || "/placeholder.jpg"}
//                 alt={service.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4 space-y-2">
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-lg font-bold truncate">
//                     {service.title}
//                   </h2>
//                   <span className="text-sm font-medium text-sky-600 dark:text-sky-400">
//                     £{service.price.toFixed(2)}
//                   </span>
//                 </div>

//                 <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">
//                   {service.description}
//                 </p>

//                 <div className="text-xs text-zinc-400 dark:text-zinc-500">
//                   Duration: {service.duration.min}-{service.duration.max} hr
//                 </div>

//                 <div className="text-xs text-zinc-400 dark:text-zinc-500">
//                   Category: {service.category || "N/A"}
//                 </div>

//                 {service.dropoffRequired && (
//                   <span className="inline-block text-xs text-white bg-rose-600 px-2 py-1 rounded-md">
//                     Drop-off Required
//                   </span>
//                 )}

//                 <div className="text-xs text-zinc-400 pt-2">
//                   Created {formatDistanceToNow(new Date(service.createdAt))} ago
//                   <br />
//                   Updated {formatDistanceToNow(new Date(service.updatedAt))} ago
//                 </div>

//                 <div className="flex gap-2 pt-3">
//                   <Link
//                     to={`/admin/services/edit/${service._id}`}
//                     className="flex-1 text-center text-sm px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={() => handleDelete(service._id)}
//                     className="flex-1 text-sm px-3 py-1 rounded-md bg-rose-600 hover:bg-rose-700 text-white"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageServicesPage;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/Theme";

interface Service {
  _id: string;
  title: string;
  price: number;
  category: string;
  duration: {
    min: number;
    max: number;
  };
  dropOff: boolean;
}

const ManageServicesPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/services");
      const data = await res.json();
      setServices(data.services);
    } catch (error) {
      alert("Failed to fetch services.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this service?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(
        `http://localhost:3000/api/services/${id}/delete`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        setServices((prev) => prev.filter((s) => s._id !== id));
        alert("Service deleted.");
      } else {
        alert("Failed to delete.");
      }
    } catch (error) {
      alert("Delete failed.");
    }
  };

  return (
    <main
      className={`min-h-screen px-6 py-10 ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Services</h1>
        <button
          onClick={() => navigate("/admin/services/create")}
          className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md font-semibold text-sm"
        >
          + Create Service
        </button>
      </div>

      {loading ? (
        <p className="animate-pulse text-center">Loading services...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm border-collapse">
            <thead>
              <tr className="bg-zinc-200 dark:bg-zinc-800">
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Duration</th>
                <th className="p-2 text-left">Drop-off</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr
                  key={service._id}
                  className="border-b border-zinc-300 dark:border-zinc-700"
                >
                  <td className="p-2">{service.title}</td>
                  <td className="p-2">£{service.price.toFixed(2)}</td>
                  <td className="p-2">{service.category}</td>
                  <td className="p-2">
                    {service.duration.min}–{service.duration.max} hrs
                  </td>
                  <td className="p-2">{service.dropOff ? "Yes" : "No"}</td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() =>
                        navigate(`/admin/services/edit/${service._id}`)
                      }
                      className="bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="bg-rose-600 hover:bg-rose-700 text-white py-1 px-3 rounded text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {services.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-zinc-500">
                    No services found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default ManageServicesPage;
