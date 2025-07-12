// import { useState } from "react";
// import { useAuth } from "../../contexts/AuthContext";

// const EditProfile = () => {
//   const { user } = useAuth(); // assume `user` has name/email/etc.
//   const [form, setForm] = useState({
//     firstName: user?.firstName || "",
//     lastName: user?.lastName || "",
//     email: user?.email || "",
//     phone: user?.phone || "",
//     career: user?.career || "",
//     bio: user?.bio || "",
//     city: user?.location?.city || "",
//     country: user?.location?.country || "",
//     avatar: user?.avatar || "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("Saving...");

//     try {
//       const token = localStorage.getItem("token");

//       const res = await fetch("http://localhost:5000/api/users/me", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setStatus("Profile updated successfully!");
//       } else {
//         setStatus(data.message || "Update failed.");
//       }
//     } catch (err) {
//       setStatus("Something went wrong.");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-6 py-10">
//       <h1 className="text-2xl font-bold mb-6">Edit Your Profile</h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             name="firstName"
//             value={form.firstName}
//             onChange={handleChange}
//             placeholder="First Name"
//             className="px-4 py-2 border rounded dark:bg-gray-800"
//           />
//           <input
//             name="lastName"
//             value={form.lastName}
//             onChange={handleChange}
//             placeholder="Last Name"
//             className="px-4 py-2 border rounded dark:bg-gray-800"
//           />
//         </div>

//         <input
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full px-4 py-2 border rounded dark:bg-gray-800"
//         />
//         <input
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           placeholder="Phone"
//           className="w-full px-4 py-2 border rounded dark:bg-gray-800"
//         />
//         <input
//           name="career"
//           value={form.career}
//           onChange={handleChange}
//           placeholder="Career"
//           className="w-full px-4 py-2 border rounded dark:bg-gray-800"
//         />

//         <textarea
//           name="bio"
//           value={form.bio}
//           onChange={handleChange}
//           placeholder="Bio"
//           className="w-full px-4 py-2 border rounded dark:bg-gray-800"
//           rows={3}
//         />

//         <div className="grid grid-cols-2 gap-4">
//           <input
//             name="city"
//             value={form.city}
//             onChange={handleChange}
//             placeholder="City"
//             className="px-4 py-2 border rounded dark:bg-gray-800"
//           />
//           <input
//             name="country"
//             value={form.country}
//             onChange={handleChange}
//             placeholder="Country"
//             className="px-4 py-2 border rounded dark:bg-gray-800"
//           />
//         </div>

//         <input
//           name="avatar"
//           value={form.avatar}
//           onChange={handleChange}
//           placeholder="Avatar URL"
//           className="w-full px-4 py-2 border rounded dark:bg-gray-800"
//         />

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//         >
//           Save Changes
//         </button>

//         {status && <p className="text-sm text-muted mt-2">{status}</p>}
//       </form>
//     </div>
//   );
// };

// export default EditProfile;

import { useState } from "react";
import SettingsSidebar from "../../components/Account/SettingsSidebar";
import ProfileSection from "../../components/Account/ProfileSection";
import ResumeSection from "../../components/Account/ResumeSection";
import SecuritySection from "../../components/Account/SecuritySection";
import BillingSection from "../../components/Account/BillingSection";
import SubscriptionSettings from "../../components/Account/SubscriptionSettings";

const EditProfile = () => {
  const [section, setSection] = useState("profile");

  const renderSection = () => {
    switch (section) {
      case "resume":
        return <ResumeSection />;
      case "security":
        return <SecuritySection />;
      case "billing":
        return <BillingSection />;
      case "subscription":
        return <SubscriptionSettings />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <SettingsSidebar current={section} setCurrent={setSection} />
      <main className="flex-1 p-6">{renderSection()}</main>
    </div>
  );
};

export default EditProfile;
