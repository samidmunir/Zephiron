// const SecuritySection = () => {
//   return (
//     <div className="max-w-md">
//       <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//         Security Settings
//       </h3>
//       <p className="text-gray-600 dark:text-gray-300 mb-4">
//         Reset your password or enable extra security features here.
//       </p>
//       <input
//         type="password"
//         placeholder="New Password"
//         className="input mb-4"
//       />
//       <input
//         type="password"
//         placeholder="Confirm Password"
//         className="input mb-4"
//       />
//       <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//         Update Password
//       </button>
//     </div>
//   );
// };

// export default SecuritySection;

const SecuritySection = () => {
  return (
    <div className="w-full px-4 py-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Security Settings
      </h2>

      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-5 space-y-5">
        <div className="space-y-1">
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div className="pt-2">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
