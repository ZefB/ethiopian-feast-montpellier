import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import MenuSection from "@/components/MenuSection";
import ReservationDrawer from "@/components/ReservationDrawer";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  const [reservationOpen, setReservationOpen] = useState(false);

  useEffect(() => {
    const handler = () => setReservationOpen(true);
    window.addEventListener("open-reservation", handler);
    return () => window.removeEventListener("open-reservation", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenReservation={() => setReservationOpen(true)} />
      <HeroSection />
      <IntroductionSection />
      <MenuSection />
      <ContactFooter />
      <ReservationDrawer isOpen={reservationOpen} onClose={() => setReservationOpen(false)} />
    </div>
  );
};

export default Index;
