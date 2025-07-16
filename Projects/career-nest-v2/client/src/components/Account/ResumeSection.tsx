import SkillsEditor from "./Resume/SkillsEditor";
import ExperienceEditor from "./Resume/ExperienceEditor";
import EducationEditor from "./Resume/EducationEditor";
import { Link } from "react-router-dom";

const ResumeSection = () => {
  return (
    <div className="w-full px-4 py-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Resume Builder
      </h2>
      <SkillsEditor />
      <ExperienceEditor />
      <EducationEditor />
      <Link
        to="/resume"
        className="text-sm text-blue-500 hover:underline block mt-4"
      >
        View Resume Preview
      </Link>
    </div>
  );
};

export default ResumeSection;

// import { useEffect, useState } from "react";
// import { fetchUser, updateUser } from "../../api/userApi";
// import SkillsEditor from "./Resume/SkillsEditor";
// import ExperienceEditor from "./Resume/ExperienceEditor";
// import EducationEditor from "./Resume/EducationEditor";
// import { Link } from "react-router-dom";

// const ResumeSection = () => {
//   const [resume, setResume] = useState({
//     skills: [],
//     experience: [],
//     education: [],
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   // Fetch resume on mount
//   useEffect(() => {
//     const loadResume = async () => {
//       try {
//         const res = await fetchUser();
//         setResume(
//           res.data.resume || {
//             skills: [],
//             experience: [],
//             education: [],
//           }
//         );
//       } catch (err) {
//         console.error("Failed to load resume", err);
//       }
//     };
//     loadResume();
//   }, []);

//   // Generic resume field updater
//   const handleUpdate = async (key: string, value: any) => {
//     const updatedResume = { ...resume, [key]: value };
//     setResume(updatedResume);
//     try {
//       setLoading(true);
//       await updateUser({ resume: updatedResume });
//       setSuccess(true);
//     } catch (err) {
//       console.error("Failed to update resume:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full px-4 py-6 max-w-xl mx-auto space-y-6">
//       <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
//         Resume Builder
//       </h2>

//       <SkillsEditor
//         skills={resume.skills}
//         onChange={(skills) => handleUpdate("skills", skills)}
//       />
//       <ExperienceEditor
//         experience={resume.experience}
//         onChange={(experience) => handleUpdate("experience", experience)}
//       />
//       <EducationEditor
//         education={resume.education}
//         onChange={(education) => handleUpdate("education", education)}
//       />

//       <Link
//         to="/resume"
//         className="text-sm text-blue-500 hover:underline block mt-4"
//       >
//         View Resume Preview
//       </Link>

//       {success && (
//         <p className="text-green-500 text-sm pt-2">
//           Resume updated successfully!
//         </p>
//       )}
//     </div>
//   );
// };

// export default ResumeSection;
