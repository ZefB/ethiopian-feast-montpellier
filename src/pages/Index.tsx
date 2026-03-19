import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import MenuSection from "@/components/MenuSection";
import ReservationDrawer from "@/components/ReservationDrawer";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <MenuSection />
      <ContactFooter />
      <ReservationDrawer />
    </div>
  );
};

export default Index;
