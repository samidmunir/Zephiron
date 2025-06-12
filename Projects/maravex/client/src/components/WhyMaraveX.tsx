// src/components/WhyMaraveX.tsx
import { useTheme } from "../context/Theme";
import { BadgeCheck, Truck, Lock, MessageCircle } from "lucide-react";

const WhyMaraveX = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const accent = isDark ? "text-sky-400" : "text-blue-600";

  return (
    <section
      className={`w-full px-6 md:px-16 py-20 ${
        isDark ? "bg-zinc-950 text-white" : "bg-zinc-50 text-zinc-900"
      }`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Why Shop with <span className={accent}>MaraveX</span>?
          </h2>
          <p className="mb-8 text-lg text-zinc-500 dark:text-zinc-400">
            We’re not just a brand — we’re a movement redefining men's fashion.
            At MaraveX, every product reflects our passion for quality,
            modernity, and elevated experiences.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <Truck className={`${accent} w-6 h-6`} />
              <div>
                <p className="font-semibold">Fast & Free Shipping</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Get your orders delivered swiftly and securely at no extra
                  cost.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <BadgeCheck className={`${accent} w-6 h-6`} />
              <div>
                <p className="font-semibold">Quality You Can Trust</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Every item is handpicked for superior craftsmanship and style.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Lock className={`${accent} w-6 h-6`} />
              <div>
                <p className="font-semibold">Secure Checkout</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Enjoy peace of mind with protected payment options.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MessageCircle className={`${accent} w-6 h-6`} />
              <div>
                <p className="font-semibold">Always-On Support</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Our team is here 24/7 to assist you with anything you need.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column (Image) */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
          <img
            src="/images/why-maravex.jpg"
            alt="Why MaraveX"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyMaraveX;
