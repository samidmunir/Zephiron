import { useTheme } from "../contexts/Theme";
import { useAuth } from "../contexts/Auth";
import { Navigate } from "react-router-dom";

const UserProtected = ({ children }: { children: React.ReactElement }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { token, user, loading } = useAuth();

  if (loading) {
    return (
      <main
        className={`min-h-screen w-full flex items-center justify-center text-8xl font-bold uppercase ${
          isDark ? "text-orange-400" : "text-rose-500"
        }`}
      >
        loading...
      </main>
    );
  }

  if (!token || !user || !user._id) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default UserProtected;
