import { useState } from "react";

const initialForm = {
  title: "",
  company: "",
  workType: "remote",
  location: { city: "", country: "" },
  salary: { amount: "", period: "yearly" },
  description: "",
  notes: "",
  requiredSkills: "", // comma-separated
  applicationUrl: "",
  category: "",
  position: "",
  status: "wishlist",
};

const JobApplicationFormModal = ({ isOpen, onClose, onSave }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setForm({ ...form, [parent]: { ...form[parent], [child]: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = () => {
    const data = {
      ...form,
      requiredSkills: form.requiredSkills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== ""),
    };
    onSave(data);
    setForm(initialForm);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-md shadow-md w-full max-w-xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          New Job Application
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {[
            { name: "title", label: "Job Title" },
            { name: "company", label: "Company" },
            {
              name: "workType",
              label: "Work Type",
              type: "select",
              options: ["remote", "in-person", "hybrid"],
            },
            { name: "location.city", label: "City" },
            { name: "location.country", label: "Country" },
            { name: "salary.amount", label: "Salary Amount", type: "number" },
            {
              name: "salary.period",
              label: "Salary Period",
              type: "select",
              options: ["hourly", "yearly"],
            },
            { name: "applicationUrl", label: "Application URL" },
            { name: "category", label: "Career Category" },
            { name: "position", label: "Job Position" },
            {
              name: "requiredSkills",
              label: "Required Skills (comma-separated)",
            },
          ].map(({ name, label, type = "text", options }) => (
            <div key={name}>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                {label}
              </label>
              {type === "select" ? (
                <select
                  name={name}
                  value={
                    name.includes(".")
                      ? form[name.split(".")[0]][name.split(".")[1]]
                      : form[name]
                  }
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={type}
                  name={name}
                  value={
                    name.includes(".")
                      ? form[name.split(".")[0]][name.split(".")[1]]
                      : form[name]
                  }
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                />
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Notes
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-md border border-gray-400 dark:border-gray-600 dark:text-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationFormModal;
