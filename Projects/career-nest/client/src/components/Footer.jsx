// import { useTheme } from "../contexts/ThemeContext";

// const Footer = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-12">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
//         {/* Left: Logo & Description */}
//         <div>
//           <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
//             CareerNest
//           </h2>
//           <p className="text-muted mt-2 max-w-sm">
//             Helping you organize, track, and succeed in your job search journey.
//           </p>
//         </div>

//         {/* Right: Links */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-muted">
//           <div>
//             <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
//               Product
//             </h4>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#features" className="hover:underline">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#pricing" className="hover:underline">
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a href="/dashboard" className="hover:underline">
//                   Dashboard
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
//               Company
//             </h4>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#" className="hover:underline">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Careers
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
//               Legal
//             </h4>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#" className="hover:underline">
//                   Terms
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Privacy
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
//         &copy; {new Date().getFullYear()} CareerNest. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import { useTheme } from "../contexts/ThemeContext";

// const Footer = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <footer
//       className={`${
//         isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
//       } border-t px-6 py-12`}
//     >
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
//         {/* Left: Logo & Description */}
//         <div>
//           <h2
//             className={`text-xl font-bold ${
//               isDark ? "text-blue-400" : "text-blue-600"
//             }`}
//           >
//             CareerNest
//           </h2>
//           <p className="text-muted mt-2 max-w-sm">
//             Helping you organize, track, and succeed in your job search journey.
//           </p>
//         </div>

//         {/* Right: Links */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-muted">
//           <div>
//             <h4
//               className={`font-semibold mb-2 ${
//                 isDark ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Product
//             </h4>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#features" className="hover:underline">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#pricing" className="hover:underline">
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a href="/dashboard" className="hover:underline">
//                   Dashboard
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4
//               className={`font-semibold mb-2 ${
//                 isDark ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Company
//             </h4>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#" className="hover:underline">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Careers
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4
//               className={`font-semibold mb-2 ${
//                 isDark ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Legal
//             </h4>
//             <ul className="space-y-1">
//               <li>
//                 <a href="#" className="hover:underline">
//                   Terms
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Privacy
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`mt-10 text-center text-xs ${
//           isDark ? "text-gray-400" : "text-gray-500"
//         }`}
//       >
//         &copy; {new Date().getFullYear()} CareerNest. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-600 rounded-full p-2">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0h8m-8 0a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-white font-serif">
                Career Nest
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The professional platform for tracking and optimizing your job
              search journey. Transform your career with intelligent insights
              and seamless organization.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-400 text-sm">
                <Mail className="h-4 w-4 text-emerald-500" />
                <span>hello@careernest.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 text-sm">
                <Phone className="h-4 w-4 text-emerald-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 text-emerald-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Product</h4>
            <div className="space-y-3">
              <Link
                to="/features"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Pricing
              </Link>
              <Link
                to="/dashboard"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Dashboard
              </Link>
              <Link
                to="/analytics"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Analytics
              </Link>
              <Link
                to="/integrations"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Integrations
              </Link>
              <Link
                to="/api"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                API
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Company</h4>
            <div className="space-y-3">
              <Link
                to="/about"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Blog
              </Link>
              <Link
                to="/careers"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Careers
              </Link>
              <Link
                to="/press"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Press Kit
              </Link>
              <Link
                to="/partners"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Partners
              </Link>
              <Link
                to="/investors"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Investors
              </Link>
            </div>
          </div>

          {/* Support & Legal */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Support</h4>
            <div className="space-y-3">
              <Link
                to="/help"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Help Center
              </Link>
              <Link
                to="/contact"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Contact Support
              </Link>
              <Link
                to="/community"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Community
              </Link>
              <Link
                to="/status"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                System Status
              </Link>
              <Link
                to="/privacy"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h4 className="text-white font-semibold text-lg">Stay Updated</h4>
            <p className="text-slate-400 text-sm">
              Get the latest career tips, product updates, and job search
              strategies delivered to your inbox.
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md font-medium transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://twitter.com/careernest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/careernest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/careernest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/careernest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <span>© 2024 Career Nest. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <Link
                  to="/security"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Security
                </Link>
                <Link
                  to="/cookies"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Cookies
                </Link>
                <Link
                  to="/sitemap"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
