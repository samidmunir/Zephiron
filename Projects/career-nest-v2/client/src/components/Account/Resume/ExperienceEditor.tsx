import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { updateUser } from "../../../api/userApi";

type Experience = {
  id?: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

const emptyExperience: Experience = {
  title: "",
  company: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
};

const ExperienceEditor = () => {
  const { user, refreshUser } = useAuth();
  const [experienceList, setExperienceList] = useState<Experience[]>(
    user?.experience || []
  );
  const [form, setForm] = useState<Experience>(emptyExperience);
  const [isEditingIndex, setIsEditingIndex] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (isEditingIndex !== null) {
      // Update
      const updated = [...experienceList];
      updated[isEditingIndex] = form;
      setExperienceList(updated);
    } else {
      // Add
      setExperienceList((prev) => [...prev, form]);
    }

    setForm(emptyExperience);
    setIsEditingIndex(null);
  };

  const handleEdit = (index: number) => {
    setForm(experienceList[index]);
    setIsEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    const updated = [...experienceList];
    updated.splice(index, 1);
    setExperienceList(updated);
  };

  const handleSubmit = async () => {
    try {
      await updateUser({
        experience: experienceList,
      });
      refreshUser();
    } catch (e: any) {
      alert("Error saving experiences: " + e.message);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-5 space-y-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        Work Experience
      </h3>

      {/* Input Form */}
      <div className="space-y-3">
        {[
          { label: "Job Title", name: "title" },
          { label: "Company", name: "company" },
          { label: "Location", name: "location" },
          { label: "Start Date", name: "startDate", type: "date" },
          { label: "End Date", name: "endDate", type: "date" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              {label}
            </label>
            <input
              name={name}
              type={type || "text"}
              value={form[name as keyof Experience]}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
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
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {isEditingIndex !== null ? "Update Experience" : "Add Experience"}
        </button>
      </div>

      {/* Experience List */}
      {experienceList.length > 0 && (
        <div className="space-y-4 pt-4">
          {experienceList.map((exp, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-md font-medium text-gray-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.company} — {exp.location}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {exp.startDate} → {exp.endDate}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    {exp.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="pt-2 text-right">
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Save All Experience
        </button>
      </div>
    </div>
  );
};

export default ExperienceEditor;
