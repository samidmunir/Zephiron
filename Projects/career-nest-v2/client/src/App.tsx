import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useTheme } from "./contexts/ThemeContext";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ui/ScrollProgressBar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
    >
      <ScrollProgressBar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
