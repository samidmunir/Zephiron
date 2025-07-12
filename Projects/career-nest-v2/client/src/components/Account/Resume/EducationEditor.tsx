import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

type Education = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: string;
  endYear: string;
};

const emptyEducation: Education = {
  institution: "",
  degree: "",
  fieldOfStudy: "",
  startYear: "",
  endYear: "",
};

const EducationEditor = () => {
  const { user } = useAuth();
  const [educationList, setEducationList] = useState<Education[]>(
    user?.education || []
  );
  const [form, setForm] = useState<Education>(emptyEducation);
  const [isEditingIndex, setIsEditingIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (isEditingIndex !== null) {
      const updated = [...educationList];
      updated[isEditingIndex] = form;
      setEducationList(updated);
    } else {
      setEducationList((prev) => [...prev, form]);
    }

    setForm(emptyEducation);
    setIsEditingIndex(null);
  };

  const handleEdit = (index: number) => {
    setForm(educationList[index]);
    setIsEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    const updated = [...educationList];
    updated.splice(index, 1);
    setEducationList(updated);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-5 space-y-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        Education
      </h3>

      {/* Form */}
      <div className="space-y-3">
        {[
          {
            name: "institution",
            label: "Institution",
            placeholder: "e.g. UCLA",
          },
          {
            name: "degree",
            label: "Degree",
            placeholder: "e.g. Bachelor of Science",
          },
          {
            name: "fieldOfStudy",
            label: "Field of Study",
            placeholder: "e.g. Computer Science",
          },
          { name: "startYear", label: "Start Year", placeholder: "e.g. 2018" },
          { name: "endYear", label: "End Year", placeholder: "e.g. 2022" },
        ].map(({ name, label, placeholder }) => (
          <div key={name}>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              {label}
            </label>
            <input
              type="text"
              name={name}
              placeholder={placeholder}
              value={form[name as keyof Education]}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
          </div>
        ))}

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {isEditingIndex !== null ? "Update Education" : "Add Education"}
        </button>
      </div>

      {/* Education List */}
      {educationList.length > 0 && (
        <div className="space-y-4 pt-4">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-md font-medium text-gray-900 dark:text-white">
                    {edu.institution}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.degree} — {edu.fieldOfStudy}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {edu.startYear} → {edu.endYear}
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
          onClick={() =>
            console.log("SEND EDUCATION TO BACKEND:", educationList)
          }
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Save All Education
        </button>
      </div>
    </div>
  );
};

export default EducationEditor;
