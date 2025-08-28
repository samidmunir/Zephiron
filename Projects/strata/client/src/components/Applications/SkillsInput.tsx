import { useState, type Dispatch, type SetStateAction } from "react";
import { useTheme } from "../../contexts/Theme";

type SkillsInputProps = {
  skills: string[];
  setSkills: Dispatch<SetStateAction<string[]>>;
};

const SkillsInput = (props: SkillsInputProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  //   const [skills, setSkills] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addSkill = () => {
    const trimmed = input.trim();
    if (trimmed && !props.skills.includes(trimmed)) {
      props.setSkills((prev) => [...prev, trimmed]);
      setInput("");
    }
  };

  const removeSkill = (skill: string) => {
    props.setSkills((prev) => prev.filter((s) => s !== skill));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const handleSubmit = () => {
    alert(props.skills);
  };

  return (
    <main>
      <h3
        className={`text-xl font-medium ${
          isDark ? "text-orange-400" : "text-blue-600"
        } transition-all duration-1500`}
      >
        Required Skills
      </h3>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. React"
          className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
            isDark
              ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
              : "text-blue-600 focus:border-blue-600"
          } transition-all duration-1500`}
        />
        <button
          onClick={addSkill}
          className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg ${
            isDark
              ? "text-orange-400 border-zinc-700"
              : "text-blue-600 focus:border-blue-600"
          } transition-all duration-1500`}
        >
          Add
        </button>
      </div>
      {props.skills.length > 0 ? (
        <div className="flex flex-wrap gap-2 mt-4">
          {props.skills.map((skill) => (
            <span
              key={skill}
              className="bg-zinc-800 text-orange-400 px-3 py-1 rounded-full text-sm flex items-center gap-2"
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
          onClick={handleSubmit}
          className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-600 transition-all duration-1500"
        >
          Save Skills
        </button>
      </div>
    </main>
  );
};

export default SkillsInput;
