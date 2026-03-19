import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import sefedLogo from "@/assets/sefed-logo.png";

interface NavbarProps {
  onOpenReservation?: () => void;
}

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Le Restaurant", href: "#introduction" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ onOpenReservation }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={sefedLogo} alt="Sefed" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-2xl font-bold text-primary">Sefed</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenReservation}
            className="px-5 py-2 rounded-md bg-accent text-accent-foreground font-body font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Réserver
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-body text-sm font-medium text-foreground py-2 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenReservation?.();
            }}
            className="block w-full text-left font-body text-sm font-semibold text-accent py-2"
          >
            Réserver
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
