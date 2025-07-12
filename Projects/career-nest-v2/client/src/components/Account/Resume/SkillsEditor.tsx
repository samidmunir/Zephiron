import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

const SkillsEditor = () => {
  const { user } = useAuth();

  const [skills, setSkills] = useState<string[]>(user?.skills || []);
  const [input, setInput] = useState("");

  const addSkill = () => {
    const trimmed = input.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills((prev) => [...prev, trimmed]);
      setInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-5 space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        Skills
      </h3>

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. React"
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
        />
        <button
          onClick={addSkill}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {skills.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="hover:text-red-500 text-base leading-none"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No skills added yet.
        </p>
      )}

      <div className="pt-4 text-right">
        <button
          onClick={() => console.log("SEND TO BACKEND:", skills)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Save Skills
        </button>
      </div>
    </div>
  );
};

export default SkillsEditor;
