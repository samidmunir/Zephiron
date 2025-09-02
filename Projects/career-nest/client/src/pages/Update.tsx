import { useTheme } from "../contexts/Theme";
import { useAuth } from "../contexts/Auth";
import { useEffect, useState } from "react";
import {
  Link,
  History,
  CircleDollarSign,
  Locate,
  Crown,
  SquareStack,
  MapPinned,
  Building2,
  Bolt,
  BookmarkPlus,
  Flame,
  Trash,
  GlassesIcon,
  Notebook,
} from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { MdUpdate } from "react-icons/md";

/*
type Application = {
  _id: string;
  userID: string;
  reqID: string;
  title: string;
  company: string;
  position: string;
  category: string;
  workType: string;
  status: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  salary: {
    amount: number;
    period: string;
  };
  applicationURL: string;
  description: string;
  notes: string[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
};
*/

const Update = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { user } = useAuth();

  const params = useParams();

  const applicationID = params.id;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState("");

  const [applicationSkills, setApplicationSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");

  const [applicationNotes, setApplicationNotes] = useState<string[]>([]);
  const [noteInput, setNoteInput] = useState("");

  const [form, setForm] = useState({
    userId: "",
    reqId: "",
    title: "",
    company: "",
    status: "",
    workType: "",
    city: "",
    state: "",
    country: "",
    amount: "",
    period: "",
    category: "",
    position: "",
    applicationURL: "",
    description: "",
    notes: [],
    skills: [],
  });

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !applicationSkills.includes(trimmed)) {
      setApplicationSkills((prev) => [...prev, trimmed]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setApplicationSkills((prev) => prev.filter((s) => s !== skill));
  };

  const handleSkillKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const addNote = () => {
    const trimmed = noteInput.trim();
    if (trimmed && !applicationNotes.includes(trimmed)) {
      setApplicationNotes((prev) => [...prev, trimmed]);
      setNoteInput("");
    }
  };

  const removeNote = (note: string) => {
    setApplicationNotes((prev) => prev.filter((s) => s !== note));
  };

  const handleNoteKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNote();
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchApplication = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3000/api/applications/${applicationID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user?._id }),
        }
      );

      const data = await res.json();

      if (data.success === false) {
        toast.error("Failed to fetch application data.");
      } else {
        setForm({
          userId: "",
          reqId: data.application.reqID,
          title: data.application.title,
          company: data.application.company,
          status: data.application.status,
          workType: data.application.workType,
          city: data.application.location.city,
          state: data.application.location.state,
          country: data.application.location.country,
          amount: data.application.salary.amount,
          period: data.application.salary.period,
          category: data.application.category,
          position: data.application.position,
          applicationURL: data.application.applicationURL,
          description: data.application.description,
          notes: data.application.notes,
          skills: data.application.skills,
        });

        setApplicationSkills(data.application.skills);
      }

      setLoading(false);
    } catch (error) {
      //
    }
  };

  const handleSubmitUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = {
        userId: user?._id,
        reqId: form.reqId,
        title: form.title,
        company: form.company,
        status: form.status,
        workType: form.workType,
        city: form.city,
        state: form.state,
        country: form.country,
        amount: form.amount,
        period: form.period,
        category: form.category,
        position: form.position,
        applicationURL: form.applicationURL,
        description: form.description,
        skills: applicationSkills,
        notes: applicationNotes,
      };

      const res = await fetch(
        `http://localhost:3000/api/applications/edit/${applicationID}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        toast.error(data.error);
        throw new Error(data.error);
      } else {
        toast.success("Application updated!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      }
    } catch (error) {
      console.log(`Error in handleSubmitUpdate(): ${error}`);
    }
  };

  useEffect(() => {
    fetchApplication();
  }, []);

  return (
    <main
      className={`flex items-center justify-center min-h-screen ${
        isDark ? "bg-zinc-900" : "bg-zinc-100"
      } transition-all duration-3000`}
    >
      <section
        className={`w-lg mt-8 rounded-md shadow-2xl p-8 ${
          isDark ? "bg-zinc-950" : "bg-zinc-50"
        } transition-all duration-1500`}
      >
        {/* HEADER */}
        <header className={`mb-4`}>
          <h1
            className={`text-3xl font-medium ${
              isDark ? "text-zinc-500" : "text-zinc-800"
            } transition-all duration-1500`}
          >
            Application Update Form
          </h1>
          <p
            className={`text-lg font-semibold ${
              isDark ? "text-zinc-700" : "text-zinc-600"
            } transition-all duration-1500`}
          >
            Make changes to your application using the form below.
          </p>
        </header>
        {/* FORM */}
        <main className={``}>
          <form onSubmit={handleSubmitUpdate} className={``}>
            <section className={`space-y-4`}>
              {/* STATUS */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <GlassesIcon className={`w-8 h-8`} />
                <input
                  type="text"
                  name="status"
                  id="status"
                  value={form.status}
                  onChange={handleInputChange}
                  placeholder="Requisition ID"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* REQ ID */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <GlassesIcon className={`w-8 h-8`} />
                <input
                  type="text"
                  name="reqId"
                  id="reqId"
                  value={form.reqId}
                  onChange={handleInputChange}
                  placeholder="Requisition ID"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* TITLE */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <Bolt className={`w-8 h-8`} />
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={form.title}
                  onChange={handleInputChange}
                  placeholder="Title"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* COMPANY */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <Building2 className={`w-8 h-8`} />
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={form.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* WORK TYPE */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <MapPinned className={`w-8 h-8`} />
                <input
                  type="text"
                  name="workType"
                  id="workType"
                  value={form.workType}
                  onChange={handleInputChange}
                  placeholder="Work type (Ex. in-person | hybrid | remote)"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* CATEGORY */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <SquareStack className={`w-8 h-8`} />
                <input
                  type="text"
                  name="category"
                  id="category"
                  value={form.category}
                  onChange={handleInputChange}
                  placeholder="Category"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* POSITION */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <Crown className={`w-8 h-8`} />
                <input
                  type="text"
                  name="position"
                  id="position"
                  value={form.position}
                  onChange={handleInputChange}
                  placeholder="Position"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* CITY */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <Locate className={`w-8 h-8`} />
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={form.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* STATE */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <Locate className={`w-8 h-8`} />
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={form.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* COUNTRY */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <Locate className={`w-8 h-8`} />
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={form.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* AMOUNT */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <CircleDollarSign className={`w-8 h-8`} />
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={form.amount}
                  onChange={handleInputChange}
                  placeholder="Salary amount (Ex. $120000)"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* PERIOD */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <History className={`w-8 h-8`} />
                <input
                  type="text"
                  name="period"
                  id="period"
                  value={form.period}
                  onChange={handleInputChange}
                  placeholder="Salary period (Ex. yearly | hourly)"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* APPLICATION URL */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <Link className={`w-8 h-8`} />
                <input
                  type="url"
                  name="applicationURL"
                  id="applicationURL"
                  value={form.applicationURL}
                  onChange={handleInputChange}
                  placeholder="Application URL"
                  className={`outline-none rounded-md px-2 py-1 w-full ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* SKILLS INPUT */}
              <div
                className={`flex items-center justify-between border-2 rounded-md ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <div className="flex items-center gap-2 px-2 py-1">
                  <Flame className={`w-8 h-8`} />
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={handleSkillKeyDown}
                    placeholder="e.g. React"
                    className={`outline-none rounded-md px-2 py-1 w-full ${
                      isDark
                        ? "placeholder:text-orange-400"
                        : "placeholder:text-zinc-700"
                    } transition-all duration-1500`}
                  />
                </div>
                <button
                  onClick={addSkill}
                  className={`flex items-center justify-center uppercase font-semibold text-center text-lg outline-none px-2 py-1 border-l-2 ${
                    isDark
                      ? "hover:bg-orange-400 hover:text-zinc-950"
                      : "hover:bg-blue-600 hover:text-zinc-50"
                  } transition-all duration-1500`}
                >
                  Add +
                </button>
              </div>
              {/* SKILLS DISPLAY */}
              {applicationSkills.length > 0 ? (
                <div className="flex items-center gap-4 flex-wrap">
                  {applicationSkills.map((skill) => (
                    <span
                      key={skill}
                      className={`flex items-center gap-2 font-medium text-lg ${
                        isDark ? "text-sky-500" : "text-blue-600"
                      } transition-all duration-1500`}
                    >
                      {skill}
                      <Trash
                        onClick={() => removeSkill(skill)}
                        className={`${
                          isDark ? "text-rose-500" : "text-red-500"
                        } transition-all duration-1500`}
                      />
                    </span>
                  ))}
                </div>
              ) : (
                <p
                  className={`font-semibold ${
                    isDark ? "text-rose-500" : "text-red-500"
                  } transition-all duration-1500`}
                >
                  No skills added yet.
                </p>
              )}
              {/* DESCRIPTION */}
              <div
                className={`flex items-center gap-2 border-2 rounded-md px-2 py-1 ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <Link className={`w-8 h-8`} />
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={form.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                  className={`outline-none rounded-md px-2 py-1 w-full h-[200px] placeholder:align-text-top align-text-top ${
                    isDark
                      ? "placeholder:text-orange-400"
                      : "placeholder:text-zinc-700"
                  } transition-all duration-1500`}
                />
              </div>
              {/* NOTES INPUT */}
              <div
                className={`flex items-center justify-between border-2 rounded-md ${
                  isDark ? "text-orange-400" : "text-blue-600"
                } transition-all duration-1500`}
              >
                <div className="flex items-center gap-2 px-2 py-1">
                  <Notebook className={`w-8 h-8`} />
                  <input
                    type="text"
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    onKeyDown={handleNoteKeyDown}
                    placeholder="Notes..."
                    className={`outline-none rounded-md px-2 py-1 w-full ${
                      isDark
                        ? "placeholder:text-orange-400"
                        : "placeholder:text-zinc-700"
                    } transition-all duration-1500`}
                  />
                </div>
                <button
                  onClick={addNote}
                  className={`flex items-center justify-center uppercase font-semibold text-center text-lg outline-none px-2 py-1 border-l-2 ${
                    isDark
                      ? "hover:bg-orange-400 hover:text-zinc-950"
                      : "hover:bg-blue-600 hover:text-zinc-50"
                  } transition-all duration-1500`}
                >
                  Add +
                </button>
              </div>
              {/* NOTES DISPLAY */}
              {applicationNotes.length > 0 ? (
                <div className="flex items-center gap-4 flex-wrap">
                  {applicationNotes.map((note) => (
                    <span
                      key={note}
                      className={`flex items-center gap-2 font-medium text-lg ${
                        isDark ? "text-sky-500" : "text-blue-600"
                      } transition-all duration-1500`}
                    >
                      {note}
                      <Trash
                        onClick={() => removeNote(note)}
                        className={`${
                          isDark ? "text-rose-500" : "text-red-500"
                        } transition-all duration-1500`}
                      />
                    </span>
                  ))}
                </div>
              ) : (
                <p
                  className={`font-semibold ${
                    isDark ? "text-rose-500" : "text-red-500"
                  } transition-all duration-1500`}
                >
                  No notes added yet.
                </p>
              )}
              {/* TRACK BTN */}
              <div className="py-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-1 font-semibold px-2 py-1 border-2 rounded-md text-center ${
                    isDark
                      ? "text-orange-400 hover:bg-orange-400 hover:text-zinc-950"
                      : "text-blue-600 hover:bg-blue-600 hover:text-zinc-50"
                  } transition-all duration-1500`}
                >
                  Update <MdUpdate className="w-6 h-6" />
                </button>
              </div>
            </section>
          </form>
        </main>
      </section>
    </main>
  );
};

export default Update;
