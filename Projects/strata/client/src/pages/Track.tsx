import { useState } from "react";
import { useAuth } from "../contexts/Auth";
import { useTheme } from "../contexts/Theme";
import SkillsInput from "../components/Applications/SkillsInput";
import { PlusSquare } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Track = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { user } = useAuth();

  const navigate = useNavigate();

  const [skills, setSkills] = useState<string[]>([]);

  const [form, setForm] = useState({
    userId: user?._id,
    title: "",
    company: "",
    workType: "",
    city: "",
    state: "",
    country: "",
    amount: "",
    period: "",
    category: "",
    position: "",
    applicationURL: "",
    skills: skills,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/applications/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success === false) {
        alert("Failed to track application.");
        return;
      } else {
        toast.success("Application tracked!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      }
    } catch (error) {
      //
    }
  };

  return (
    <main
      className={`min-h-screen ${
        isDark ? "bg-zinc-900" : "bg-zinc-100"
      } transition-all duration-3000`}
    >
      <section className="flex items-center justify-between">
        <h1
          className={`text-3xl font-bold ${
            isDark ? "text-zinc-300" : "text-zinc-900"
          }`}
        >
          Track a New Application!
        </h1>
        <p
          className={`text-xl ${isDark ? "text-orange-400" : "text-blue-600"}`}
        >
          <span className={`font-bold`}>Your ID:</span> {user?._id}
        </p>
      </section>
      <section className={`w-lg mx-auto p-4`}>
        <div>
          <form onSubmit={handleTrack} className={`space-y-4`}>
            <div>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleInputChange}
                className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                  isDark
                    ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                    : "text-blue-600 focus:border-blue-600"
                } transition-all duration-1500`}
              />
            </div>
            <div>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                value={form.company}
                onChange={handleInputChange}
                className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                  isDark
                    ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                    : "text-blue-600 focus:border-blue-600"
                } transition-all duration-1500`}
              />
            </div>
            <div>
              <input
                type="text"
                id="workType"
                name="workType"
                placeholder="Work type (Ex. in-person | hybrid | remote)"
                value={form.workType}
                onChange={handleInputChange}
                className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                  isDark
                    ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                    : "text-blue-600 focus:border-blue-600"
                } transition-all duration-1500`}
              />
            </div>
            <div>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleInputChange}
                className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                  isDark
                    ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                    : "text-blue-600 focus:border-blue-600"
                } transition-all duration-1500`}
              />
            </div>
            <div>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleInputChange}
                className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                  isDark
                    ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                    : "text-blue-600 focus:border-blue-600"
                } transition-all duration-1500`}
              />
            </div>
            <div>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                value={form.country}
                onChange={handleInputChange}
                className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                  isDark
                    ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                    : "text-blue-600 focus:border-blue-600"
                } transition-all duration-1500`}
              />
            </div>
            <div>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="Salary (Ex. $120000)"
                value={form.amount}
                onChange={handleInputChange}
                className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                  isDark
                    ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                    : "text-blue-600 focus:border-blue-600"
                } transition-all duration-1500`}
              />
            </div>
            <div>
              <input
                type="text"
                id="period"
                name="period"
                placeholder="Salary period (Ex. yearly | hourly)"
                value={form.period}
                onChange={handleInputChange}
                className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                  isDark
                    ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                    : "text-blue-600 focus:border-blue-600"
                } transition-all duration-1500`}
              />
            </div>
            <div>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Category"
                value={form.category}
                onChange={handleInputChange}
                className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                  isDark
                    ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                    : "text-blue-600 focus:border-blue-600"
                } transition-all duration-1500`}
              />
            </div>
            <div>
              <input
                type="text"
                id="position"
                name="position"
                placeholder="Position level"
                value={form.position}
                onChange={handleInputChange}
                className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                  isDark
                    ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                    : "text-blue-600 focus:border-blue-600"
                } transition-all duration-1500`}
              />
            </div>
            <div>
              <input
                type="url"
                id="applicationURL"
                name="applicationURL"
                placeholder="Application URL"
                value={form.applicationURL}
                onChange={handleInputChange}
                className={`outline-none border-2 rounded-md w-full px-2 py-1 text-lg placeholder:text-lg ${
                  isDark
                    ? "text-orange-400 border-zinc-700 focus:border-orange-400 placeholder:text-zinc-700"
                    : "text-blue-600 focus:border-blue-600"
                } transition-all duration-1500`}
              />
            </div>
            <SkillsInput skills={skills} setSkills={setSkills} />
            <div className={`mt-4`}>
              <button
                type="submit"
                className={`flex items-center justify-center gap-1 font-semibold border-2 rounded-md w-full px-2 py-1 text-lg ${
                  isDark
                    ? "border-zinc-500 text-zinc-500 hover:bg-zinc-500 hover:text-orange-400"
                    : ""
                } transition-all duration-1500`}
              >
                <span>Track</span>
                <PlusSquare className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Track;
