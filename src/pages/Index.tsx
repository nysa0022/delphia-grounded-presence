import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProductSection from "@/components/ProductSection";
import ScienceSection from "@/components/ScienceSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ProductSection />
      <ScienceSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
};

export default Index;
