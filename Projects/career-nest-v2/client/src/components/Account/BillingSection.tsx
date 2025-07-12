// const BillingSection = () => {
//   return (
//     <div className="max-w-lg">
//       <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//         Billing Details
//       </h3>
//       <p className="text-gray-600 dark:text-gray-300 mb-4">
//         Manage your billing address and subscription information.
//       </p>
//       <input type="text" placeholder="Billing Name" className="input mb-2" />
//       <input type="text" placeholder="Address" className="input mb-2" />
//       <input type="text" placeholder="City" className="input mb-2" />
//       <input type="text" placeholder="Postal Code" className="input mb-2" />
//       <input type="text" placeholder="Country" className="input mb-4" />
//       <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//         Save Billing Info
//       </button>
//     </div>
//   );
// };

// export default BillingSection;

const BillingSection = () => {
  return (
    <div className="w-full px-4 py-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Billing Information
      </h2>

      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-5 space-y-5">
        {[
          { id: "billingName", label: "Billing Name", placeholder: "John Doe" },
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
              placeholder={placeholder}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
          </div>
        ))}

        <div className="pt-2">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Save Billing Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingSection;
