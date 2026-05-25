import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import sefedLogo from "@/assets/sefed-logo.png";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const LANG_OPTIONS = [
  { code: "en" as const, label: "English", flag: "🇺🇸" },
  { code: "fr" as const, label: "Français", flag: "🇫🇷" },
  { code: "am" as const, label: "አማርኛ", flag: "🇪🇹" },
];

interface NavbarProps {
  onOpenReservation?: () => void;
}

const Navbar = ({ onOpenReservation }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLang();
  const currentLang = LANG_OPTIONS.find((l) => l.code === lang) ?? LANG_OPTIONS[1];

  const navLinks = [
    { label: t(translations.nav.accueil, lang), href: "#" },
    { label: t(translations.nav.restaurant, lang), href: "#introduction" },
    { label: t(translations.nav.menu, lang), href: "#menu" },
    { label: t(translations.nav.reserver, lang), href: "#reserve" },
    { label: t(translations.nav.contact, lang), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleReserveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenReservation?.();
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={sefedLogo} alt="Sefed" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-2xl font-bold text-primary">Sefed</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href === "#reserve" ? (
              <a
                key={link.label}
                href="#"
                onClick={handleReserveClick}
                className={`font-body text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ) : (
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
            )
          )}

          {/* Language dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider transition-colors ${
                  scrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
                aria-label="Select language"
              >
                <span className="text-base leading-none">{currentLang.flag}</span>
                {currentLang.code}
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[10rem]">
              {LANG_OPTIONS.map((opt) => (
                <DropdownMenuItem
                  key={opt.code}
                  onClick={() => setLang(opt.code)}
                  className="gap-2 cursor-pointer"
                >
                  <span className="text-base leading-none">{opt.flag}</span>
                  <span className="font-body text-sm">{opt.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1 p-2 font-body text-xs font-bold uppercase ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
                aria-label="Select language"
              >
                <span className="text-base leading-none">{currentLang.flag}</span>
                {currentLang.code}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[10rem]">
              {LANG_OPTIONS.map((opt) => (
                <DropdownMenuItem
                  key={opt.code}
                  onClick={() => setLang(opt.code)}
                  className="gap-2 cursor-pointer"
                >
                  <span className="text-base leading-none">{opt.flag}</span>
                  <span className="font-body text-sm">{opt.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href === "#reserve" ? "#" : link.href}
              onClick={(e) => {
                if (link.href === "#reserve") {
                  e.preventDefault();
                  setMobileOpen(false);
                  onOpenReservation?.();
                } else {
                  setMobileOpen(false);
                }
              }}
              className="block font-body text-sm font-medium text-foreground py-2 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
