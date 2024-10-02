import Layout from "./components/common/layout";
import HeroSection from "./pages/Home/HeroSection";
import FeaturesSection from "./pages/Home/FeaturesSection";
import AboutSection from "./pages/Home/AboutSection";
import OfferSection from "./pages/Home/OfferSection";

const App = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <OfferSection />
    </Layout>
  );
};

export default App;
