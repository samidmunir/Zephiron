import logo_light from "../assets/logo_light.png";
import logo_dark from "../assets/logo_dark.png";
import { useTheme } from "../context/Theme";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-[#19232a]" : "bg-[#f2f2f2]";
  const textPrimColor = isDark ? "text-gray-100" : "text-gray-800";
  const accentColor = isDark ? "text-[#46a8de]" : "text-[#0e4e87]";

  const year = new Date().getFullYear();

  return (
    <main
      className={`w-full px-6 py-4 border-t-2 shadow-2xl transition-all duration-1500 ${bgColor} ${
        isDark ? "border-gray-500" : "border-gray-700"
      }`}
    >
      <section className="grid grid-cols-4">
        <div className="mb-4 col-span-2">
          <div className="flex items-center transition-all duration-1000">
            <img
              src={isDark ? logo_dark : logo_light}
              className="w-[40px] rounded-full"
            />
            <h1
              className={`text-3xl font-semibold ${
                isDark ? "text-[#45a8dd]" : "text-[#0e4e87]"
              }`}
            >
              CareerNest
            </h1>
          </div>
          <h2
            className={`text-lg ${isDark ? "text-gray-100" : "text-gray-900"}`}
          >
            Your one-stop-shop for career tracking.
          </h2>
          <p
            className={`text-md ${isDark ? "text-gray-500" : "text-gray-700"}`}
          >
            Designed & Developed by Zephiron
          </p>
        </div>
        <div className="mb-4">
          <h3 className={`text-xl font-semibold ${accentColor}`}>
            Customer Care
          </h3>
          <ul className={`text-md space-y-2 ${textPrimColor}`}>
            <li>
              <a href="/support" className="hover:underline">
                Help & Support
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="/account" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={`text-xl font-semibold ${accentColor}`}>Legal</h3>
          <ul className={`text-md space-y-2 ${textPrimColor}`}>
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/cookie-policy" className="hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="text-center text-sm mt-12 border-t pt-6 border-zinc-400/20">
        <p className={`${textPrimColor}`}>
          &copy; {year}{" "}
          <span className={`font-semibold ${accentColor}`}>Zephiron</span> Inc.
          All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default Footer;
