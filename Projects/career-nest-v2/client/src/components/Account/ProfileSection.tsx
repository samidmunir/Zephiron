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
//     location: `${user?.location?.city} ${user?.location?.country}` || "",
//     bio: user?.bio || "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="w-full px-4 py-6 max-w-xl mx-auto space-y-6">
//       <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
//         Edit Profile
//       </h2>

//       <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-5 space-y-5">
//         {[
//           { name: "firstName", label: "First Name" },
//           { name: "lastName", label: "Last Name" },
//           { name: "email", label: "Email" },
//           { name: "phone", label: "Phone" },
//           { name: "career", label: "Career Title" },
//           { name: "location", label: "Location" },
//         ].map(({ name, label }) => (
//           <div key={name} className="space-y-1">
//             <label
//               htmlFor={name}
//               className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//             >
//               {label}
//             </label>
//             <input
//               id={name}
//               name={name}
//               value={form[name as keyof typeof form]}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
//             />
//           </div>
//         ))}

//         <div className="space-y-1">
//           <label
//             htmlFor="bio"
//             className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//           >
//             Short Bio
//           </label>
//           <textarea
//             id="bio"
//             name="bio"
//             value={form.bio}
//             onChange={handleChange}
//             rows={4}
//             className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
//           />
//         </div>

//         <div className="pt-2">
//           <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;

import { useEffect, useState } from "react";
import { fetchUser, updateUser } from "../../api/userApi";

const ProfileSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    career: "",
    location: "",
    bio: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Load user data
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetchUser();
        const user = res.data;
        setForm({
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          phone: user.phone || "",
          career: user.career || "",
          location: `${user.location?.city || ""}, ${
            user.location?.country || ""
          }`,
          bio: user.bio || "",
        });
      } catch (err) {
        console.error("Failed to load user:", err);
      }
    };
    loadUser();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const locationSplit = form.location.split(", ");
      await updateUser({
        ...form,
        location: {
          city: locationSplit[0] || "",
          country: locationSplit[1] || "",
        },
      });
      setSuccess(true);
    } catch (err) {
      console.error("Failed to update:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 py-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Edit Profile
      </h2>

      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-5 space-y-5">
        {["firstName", "lastName", "email", "phone", "career", "location"].map(
          (name) => (
            <div key={name} className="space-y-1">
              <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </label>
              <input
                id={name}
                name={name}
                value={form[name as keyof typeof form]}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
              />
            </div>
          )
        )}

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
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>

          {success && (
            <p className="text-sm mt-2 text-green-500">
              Profile updated successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
