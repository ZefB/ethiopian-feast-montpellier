import { motion } from "framer-motion";
import heroImage from "@/assets/hero-platter.jpg";
import sefedLogo from "@/assets/sefed-logo.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Plateau traditionnel éthiopien Mesob avec injera et ragoûts"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.img
          src={sefedLogo}
          alt="Sefed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover mb-4"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="font-display italic text-2xl md:text-3xl text-secondary mb-6"
        >
          Cuisine Éthiopienne Authentique
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="font-body text-base md:text-lg text-primary-foreground/80 max-w-xl leading-relaxed"
        >
          Découvrez les saveurs authentiques de l'Éthiopie à Montpellier, où chaque bouchée est une invitation au voyage culinaire.
        </motion.p>
        <motion.a
          href="#introduction"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          className="mt-8 px-8 py-3 rounded-md bg-accent text-accent-foreground font-body font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Découvrir
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
