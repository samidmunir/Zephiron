// const ResumeSection = () => {
//   return (
//     <div className="max-w-2xl">
//       <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//         Resume Builder
//       </h3>
//       <p className="text-gray-600 dark:text-gray-300 mb-4">
//         Here you’ll be able to add your skills, past work experience, and
//         education.
//       </p>

//       {/* Coming soon: Experience + Skills CRUD */}
//       <p className="italic text-sm text-gray-500 dark:text-gray-400">
//         Resume editing UI coming soon…
//       </p>
//     </div>
//   );
// };

// export default ResumeSection;

// const ResumeSection = () => {
//   return (
//     <div className="w-full px-4 py-6 max-w-xl mx-auto space-y-6">
//       <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
//         Resume Builder
//       </h2>

//       <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-5 space-y-4">
//         <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
//           Build your CareerNest resume by adding key professional details.
//         </p>

//         <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm">
//           <li>✅ Add skills relevant to your industry</li>
//           <li>✅ Track past work experiences with dates</li>
//           <li>✅ Log your educational background</li>
//         </ul>

//         <div className="pt-4">
//           <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
//             Launch Resume Builder (coming soon)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeSection;

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
