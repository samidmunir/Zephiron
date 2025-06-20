import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Protected = ({ children }: { children: React.ReactElement }) => {
  const { token, user, loading } = useAuth();

  // Wait for context to fully load before redirecting
  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center text-8xl text-amber-500 font-bold uppercase">
        loading...
      </div>
    );
  }

  // Safely check for token & user presence
  if (!token || !user || !user.id) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
