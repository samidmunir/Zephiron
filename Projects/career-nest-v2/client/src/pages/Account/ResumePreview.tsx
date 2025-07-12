import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const ResumePreview = () => {
  const { user } = useAuth();

  if (!user)
    return <p className="text-center mt-10 text-gray-500">Loading resume...</p>;

  return (
    <div className="w-full px-4 py-8 max-w-3xl mx-auto space-y-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Back Button */}
      <div className="text-sm mb-4">
        <Link
          to="/account/profile"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Edit Profile
        </Link>
      </div>

      {/* Header */}
      <header className="text-center border-b border-gray-300 dark:border-gray-700 pb-4">
        <h1 className="text-3xl font-bold">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {user.email} | {user.phone}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {user.career}
        </p>
      </header>

      {/* Bio */}
      {user.bio && (
        <section>
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {user.bio}
          </p>
        </section>
      )}

      {/* Skills */}
      {user.skills?.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill: string) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {user.experience?.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <div className="space-y-4">
            {user.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">
                  {exp.title}{" "}
                  <span className="text-sm text-gray-500">— {exp.company}</span>
                </h3>
                <p className="text-sm text-gray-500">
                  {exp.location} | {exp.startDate} – {exp.endDate}
                </p>
                <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {user.education?.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <div className="space-y-4">
            {user.education.map((edu, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold">{edu.institution}</h3>
                <p className="text-sm text-gray-500">
                  {edu.degree} — {edu.fieldOfStudy} ({edu.startYear} -{" "}
                  {edu.endYear})
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ResumePreview;
