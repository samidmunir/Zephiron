import { Navigate, useLocation } from "react-router-dom";
import { useUserStore } from "../stores/UserStore";
import { useEffect } from "react";

const Protected = ({ children }) => {
  const location = useLocation();
  const { user, loading, checkingAuth, checkAuth } = useUserStore();

  // Kick off a session verification only if we don't already have a user
  useEffect(() => {
    if (!user && typeof checkAuth === "function") {
      checkAuth();
    }
  }, [user, checkAuth]);

  // Show login-in-flight UI (optional)
  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-3xl text-amber-500 font-bold">
        Loading…
      </div>
    );
  }

  // ⬅️ Do NOT redirect while verifying an existing session
  if (checkingAuth && !user) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-2xl text-blue-500">
        Checking session…
      </div>
    );
  }

  // After checks: if still no user, then redirect
  if (!user) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  return children;
};

export default Protected;
