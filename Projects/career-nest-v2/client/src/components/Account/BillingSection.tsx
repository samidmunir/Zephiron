// import { useState } from "react";

// const BillingSection = () => {
//   const [form, setForm] = useState({
//     name: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     country: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="w-full px-4 py-6 max-w-xl mx-auto space-y-6">
//       <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
//         Billing Information
//       </h2>

//       <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-5 space-y-5">
//         {[
//           { id: "billingName", label: "Billing Name", placeholder: "John Doe" },
//           {
//             id: "address",
//             label: "Street Address",
//             placeholder: "123 Main St",
//           },
//           { id: "city", label: "City", placeholder: "San Francisco" },
//           { id: "postalCode", label: "Postal Code", placeholder: "94107" },
//           { id: "country", label: "Country", placeholder: "United States" },
//         ].map(({ id, label, placeholder }) => (
//           <div key={id} className="space-y-1">
//             <label
//               htmlFor={id}
//               className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//             >
//               {label}
//             </label>
//             <input
//               id={id}
//               placeholder={placeholder}
//               className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
//             />
//           </div>
//         ))}

//         <div className="pt-2">
//           <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
//             Save Billing Info
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillingSection;

import { useEffect, useState } from "react";
import axios from "axios";

const BillingSection = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const token = localStorage.getItem("token");

  // Load billing info on mount
  useEffect(() => {
    const loadBilling = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const billing = res.data.billingAddress || {};
        setForm({
          name: billing.name || "",
          address: billing.address || "",
          city: billing.city || "",
          postalCode: billing.postalCode || "",
          country: billing.country || "",
        });
      } catch (err) {
        console.error("Failed to load billing info:", err);
      }
    };

    loadBilling();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await axios.put(
        "http://localhost:3000/api/user/me",
        { billingAddress: form },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Failed to save billing info:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 py-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Billing Information
      </h2>

      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-5 space-y-5">
        {[
          { id: "name", label: "Billing Name", placeholder: "John Doe" },
          {
            id: "address",
            label: "Street Address",
            placeholder: "123 Main St",
          },
          { id: "city", label: "City", placeholder: "San Francisco" },
          { id: "postalCode", label: "Postal Code", placeholder: "94107" },
          { id: "country", label: "Country", placeholder: "United States" },
        ].map(({ id, label, placeholder }) => (
          <div key={id} className="space-y-1">
            <label
              htmlFor={id}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {label}
            </label>
            <input
              id={id}
              name={id}
              value={form[id as keyof typeof form]}
              onChange={handleChange}
              placeholder={placeholder}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
          </div>
        ))}

        <div className="pt-2">
          <button
            onClick={handleSave}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            {loading ? "Saving..." : "Save Billing Info"}
          </button>

          {success && (
            <p className="text-sm mt-2 text-green-500">
              Billing information updated successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingSection;
