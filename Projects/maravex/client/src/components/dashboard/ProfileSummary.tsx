// src/components/dashboard/ProfileSummary.tsx
import { useTheme } from "../../context/Theme";
import { User, Mail, Phone, MapPin } from "lucide-react";
import { useAuth } from "../../context/Auth";
import { useNavigate } from "react-router-dom";

// const mockUser = {
//   name: "Sami Munir",
//   email: "sami@maravex.com",
//   phone: "+1 234 567 8910",
//   address: "123 Fashion Blvd, NY 10001",
// };

const ProfileSummary = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isDark = theme === "dark";
  const card = isDark ? "bg-zinc-900 text-white" : "bg-white text-zinc-900";

  return (
    <div className={`rounded-xl p-6 shadow-md ${card}`}>
      <h3 className="text-lg font-semibold mb-4">Your Profile</h3>
      <div className="space-y-4 text-sm">
        <p className="flex items-center gap-2">
          <User size={16} />
          <>
            {user?.firstName} {user?.lastName}
          </>
        </p>
        <p className="flex items-center gap-2">
          <Mail size={16} />
          {user?.email}
        </p>
        <p className="flex items-center gap-2">
          <Phone size={16} />
          {user?.phone}
        </p>
        <p className="flex gap-2">
          <MapPin size={16} />
          <>
            {user?.billingAddress.address}
            <br />
            {user?.billingAddress.city}, {user?.billingAddress.state}{" "}
            {user?.billingAddress.postalCode}
            <br />
            {user?.billingAddress.country}
          </>
        </p>
        <button
          onClick={() => navigate("/edit-profile")}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileSummary;
