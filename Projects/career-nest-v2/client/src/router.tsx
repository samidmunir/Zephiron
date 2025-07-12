import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EditProfile from "./pages/Account/EditProfile";
import ResumePreview from "./pages/Account/ResumePreview";
import JobApplications from "./pages/Jobs/JobApplications";
import JobCommunity from "./pages/JobCommunity";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "account/profile",
        element: (
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "resume",
        element: (
          <ProtectedRoute>
            <ResumePreview />
          </ProtectedRoute>
        ),
      },
      {
        path: "applications",
        element: (
          <ProtectedRoute>
            <JobApplications />
          </ProtectedRoute>
        ),
      },
      {
        path: "community",
        element: <JobCommunity />,
      },
    ],
  },
]);
