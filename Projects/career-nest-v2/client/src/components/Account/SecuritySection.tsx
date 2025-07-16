import { useState } from "react";
import { resetPassword } from "../../api/userApi";

const SecuritySection = () => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await resetPassword({
        currentPassword: form.oldPassword,
        newPassword: form.confirmPassword,
      });
    } catch (e: any) {
      alert("Error resetting password.");
      console.error("Error updating password:", e.message);
    }
  };

  return (
    <div className="w-full px-4 py-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Security Settings
      </h2>

      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-5 space-y-5">
        <div className="space-y-1">
          <label
            htmlFor="oldPassword"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Current Password
          </label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            onChange={handleChange}
            value={form.oldPassword}
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          />
        </div>

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
            name="newPassword"
            onChange={handleChange}
            value={form.newPassword}
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
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div className="pt-2">
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
