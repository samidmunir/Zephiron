import { useTheme } from "../context/Theme";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-indigo-500" : "text-blue-600";

  return (
    <section
      className={`relative w-full h-[100vh] grid grid-cols-1 md:grid-cols-2 transition-all duration-3000 ${
        isDark ? "bg-zinc-950/90 text-zinc-50" : "bg-zinc-50/90 text-zinc-950"
      }`}
    >
      {/* LEFT BG IMG */}
      <div className="relative h-full">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg')] bg-cover bg-center" />
        <div
          className={`transition-all duration-3000 absolute inset-0 ${
            isDark ? "bg-black/50" : "bg-white/50"
          }`}
        />
      </div>
      {/* RIGHT BG IMG */}
      <div className="relative h-full">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg')] bg-cover bg-center" />
        <div
          className={`transition-all duration-3000 absolute inset-0 ${
            isDark ? "bg-black/50" : "bg-white/50"
          }`}
        />
      </div>
      {/* OVERLAY TEXT */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight">
            Premium. Excellence. Original. Quality.
          </h1>
          <p className="text-base md:text-3xl opacity-90 mx-auto">
            Distinguishable Look. Expensive Feel. For Alpha Males. By Alpha
            Males.
          </p>
          <div className="w-full mx-auto flex justify-center items-center gap-4 text-center">
            <button
              className={`text-2xl font-semibold px-2 py-1 border-3 rounded-md ${
                isDark
                  ? "border-indigo-500 bg-zinc-900/75 hover:bg-zinc-100/75 hover:text-zinc-900"
                  : "border-blue-600 bg-zinc-100/75 text-zinc-900 hover:bg-zinc-900/75 hover:text-zinc-100"
              } transition-all duration-1000`}
            >
              Shop Catalog
            </button>
            <button
              className={`text-2xl font-semibold px-2 py-1 border-3 rounded-md ${
                isDark
                  ? "border-indigo-500 bg-zinc-900/75 hover:bg-zinc-100/75 hover:text-zinc-900"
                  : "border-blue-600 bg-zinc-100/75 text-zinc-900 hover:bg-zinc-900/75 hover:text-zinc-100"
              } transition-all duration-1000`}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
