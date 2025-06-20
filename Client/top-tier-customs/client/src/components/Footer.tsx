// src/components/Footer.tsx
import { useTheme } from "../context/Theme";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const accent = isDark ? "text-rose-500" : "text-sky-500";

  const year = new Date().getFullYear();

  return (
    <footer
      className={`w-full py-10 px-6 md:px-16 ${
        isDark ? "bg-zinc-950 text-zinc-200" : "bg-zinc-50 text-zinc-800"
      } border-t ${
        isDark ? "border-zinc-800" : "border-zinc-200"
      } transition-all duration-1000`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2
            className={`uppercase text-xl font-bold mb-4 ${
              isDark ? "text-zinc-50" : "text-zinc-900"
            }`}
          >
            Top-Tier <span className={accent}>Customs</span>
          </h2>
          <p className="text-sm">
            Premium products and services for your automotive needs—from
            performance upgrades to sleek customizations.
          </p>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/support" className="hover:underline">
                Help & Support
              </a>
            </li>
            <li>
              <a href="/track-order" className="hover:underline">
                Track Order
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-3">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-5 h-5 hover:text-blue-500 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-5 h-5 hover:text-sky-400 transition" />
            </a>
            <a href="mailto:support@maravex.com">
              <Mail className="w-5 h-5 hover:text-green-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm mt-12 border-t pt-6 border-zinc-400/20">
        <p>
          &copy; {year}{" "}
          <span className={`font-semibold ${accent}`}>Zephiron</span> Inc. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
