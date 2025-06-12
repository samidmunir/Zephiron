import Hero from "../components/Hero";
import LatestArrivals from "../components/LatestArrivals";
import TrendingCategories from "../components/TrendingCategories";
import WhyMaraveX from "../components/WhyMaraveX";
import FeaturedBrands from "../components/FeaturedBrands";
import NewsletterSignup from "../components/NewsletterSignup";
import GlobalDelivery from "../components/GlobalDelivery";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <LatestArrivals />
      <TrendingCategories />
      <WhyMaraveX />
      <FeaturedBrands />
      <NewsletterSignup />
      <GlobalDelivery />
    </main>
  );
};

export default LandingPage;
