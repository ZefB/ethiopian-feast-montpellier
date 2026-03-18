import { motion } from "framer-motion";
import interiorImage from "@/assets/restaurant-interior.jpg";
import coffeeImage from "@/assets/coffee-ceremony.jpg";

const IntroductionSection = () => {
  return (
    <section id="introduction" className="py-20 md:py-28 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Bienvenue chez <span className="text-gradient-warm">Sefed</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Split layout: image + text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-lg"
            style={{ boxShadow: "var(--shadow-warm)" }}
          >
            <img
              src={interiorImage}
              alt="Intérieur chaleureux du restaurant Sefed à Montpellier"
              className="w-full h-80 md:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-5">
              Le Cadre
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Le restaurant éthiopien Sefed offre un cadre exceptionnellement chaleureux et accueillant, 
              où les convives se sentent instantanément transportés en Éthiopie grâce à une atmosphère 
              authentique et conviviale.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Situé au cœur de Montpellier, entre le Corum et l'Esplanade Charles-de-Gaulle, 
              notre restaurant vous invite à partager un moment unique autour de plats préparés 
              avec passion et savoir-faire traditionnel.
            </p>
          </motion.div>
        </div>

        {/* Reverse split: text + image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-5">
              Notre Histoire
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Chaque assiette servie chez Sefed est le reflet de la cuisine éthiopienne à son meilleur, 
              fabriquée à la main avec les produits les plus frais, les meilleures viandes et les 
              meilleurs légumes, herbes et épices disponibles.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Du Doro Wat mijoté pendant 6 heures au café Jebena Buna préparé selon la tradition, 
              chaque plat raconte l'histoire d'un héritage culinaire riche et généreux.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 md:order-2 overflow-hidden rounded-lg"
            style={{ boxShadow: "var(--shadow-warm)" }}
          >
            <img
              src={coffeeImage}
              alt="Cérémonie traditionnelle du café éthiopien avec Jebena"
              className="w-full h-80 md:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
