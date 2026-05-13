import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProductSection from "@/components/ProductSection";
import FounderSection from "@/components/FounderSection";
import ScienceSection from "@/components/ScienceSection";
import StorefrontSection from "@/components/StorefrontSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ProductSection />
      <FounderSection />
      <ScienceSection />
      <StorefrontSection />
      <Footer />
    </main>
  );
};

export default Index;
