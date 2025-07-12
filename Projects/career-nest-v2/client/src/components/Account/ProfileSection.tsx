// import { useState } from "react";
// import { useAuth } from "../../contexts/AuthContext";

// const ProfileSection = () => {
//   const { user } = useAuth();
//   const [form, setForm] = useState({
//     firstName: user?.firstName || "",
//     lastName: user?.lastName || "",
//     email: user?.email || "",
//     phone: user?.phone || "",
//     career: user?.career || "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="max-w-2xl space-y-4">
//       <h3 className="text-xl font-bold mb-4">Profile Information</h3>
//       <div className="grid grid-cols-2 gap-4">
//         <input
//           name="firstName"
//           value={form.firstName}
//           onChange={handleChange}
//           className="input"
//           placeholder="First Name"
//         />
//         <input
//           name="lastName"
//           value={form.lastName}
//           onChange={handleChange}
//           className="input"
//           placeholder="Last Name"
//         />
//       </div>
//       <input
//         name="email"
//         value={form.email}
//         onChange={handleChange}
//         className="input"
//         placeholder="Email"
//       />
//       <input
//         name="phone"
//         value={form.phone}
//         onChange={handleChange}
//         className="input"
//         placeholder="Phone"
//       />
//       <input
//         name="career"
//         value={form.career}
//         onChange={handleChange}
//         className="input"
//         placeholder="Career"
//       />
//       <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//         Save Changes
//       </button>
//     </div>
//   );
// };

// export default ProfileSection;

import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const ProfileSection = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    career: user?.career || "",
    bio: user?.bio || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full px-4 py-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Edit Profile
      </h2>

      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-5 space-y-5">
        {[
          { name: "firstName", label: "First Name" },
          { name: "lastName", label: "Last Name" },
          { name: "email", label: "Email" },
          { name: "phone", label: "Phone" },
          { name: "career", label: "Career Title" },
        ].map(({ name, label }) => (
          <div key={name} className="space-y-1">
            <label
              htmlFor={name}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {label}
            </label>
            <input
              id={name}
              name={name}
              value={form[name as keyof typeof form]}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
          </div>
        ))}

        <div className="space-y-1">
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Short Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={form.bio}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          />
        </div>

        <div className="pt-2">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
