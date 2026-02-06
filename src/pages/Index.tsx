import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ScienceSection from "@/components/ScienceSection";
import PhilosophySection from "@/components/PhilosophySection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ScienceSection />
      <PhilosophySection />
      <WaitlistSection />
      <Footer />
    </main>
  );
};

export default Index;
