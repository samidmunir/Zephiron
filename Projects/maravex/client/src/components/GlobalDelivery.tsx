// src/components/GlobalDelivery.tsx
import { MapPin, Globe, Check } from "lucide-react";

const GlobalDelivery = () => {
  return (
    <section className="w-full px-6 md:px-16 py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Global Reach, Local Service
          </h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            MaraveX delivers to over 50+ countries and counting. Whether you're
            in New York or Tokyo, we’ve got your style covered.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Globe className="text-blue-600 dark:text-sky-400" />
              Worldwide Shipping Available
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-blue-600 dark:text-sky-400" />
              Find Stores Near You (Coming Soon)
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-blue-600 dark:text-sky-400" />
              Localized Support & Tracking
            </li>
          </ul>
        </div>

        {/* Right (Map or World Image) */}
        <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/global-map.jpg"
            alt="Global Delivery"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalDelivery;
