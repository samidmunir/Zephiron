// src/components/FeaturedBrands.tsx
const brandLogos = [
  "/images/brands/nike.svg",
  "/images/brands/adidas.svg",
  "/images/brands/zara.svg",
  "/images/brands/uniqlo.svg",
  "/images/brands/levi.svg",
];

const FeaturedBrands = () => {
  return (
    <section className="w-full px-6 md:px-16 py-14 bg-zinc-100 dark:bg-zinc-900 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Trusted by Leading Brands
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {brandLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="Brand"
            className="h-12 w-auto grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrands;
