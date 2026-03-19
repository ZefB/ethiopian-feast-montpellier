import { motion } from "framer-motion";
import interiorImage from "@/assets/restaurant-interior.jpg";
import coffeeImage from "@/assets/coffee-ceremony.jpg";

const lexiqueItems = [
  {
    term: "Sefed",
    description:
      "Paniers et nattes traditionnels d'Éthiopie, magnifiquement conçus et fabriqués à la main à partir de pailles cultivées localement. Utilisés pour vanner le grain, attiser le feu, retirer l'Injera du gril en argile, ou stocker des objets.",
  },
  {
    term: "Injera",
    description:
      "Pain plat au levain légèrement spongieux, fabriqué à partir d'un super grain appelé Teff. Incontournable de la cuisine éthiopienne depuis plus de 3 000 ans.",
  },
  {
    term: "Berbere",
    description:
      "Mélange d'épices avec du piment comme composant principal, incluant ail, gingembre, coriandre, basilic éthiopien et fenugrec. Un ingrédient clé de la cuisine éthiopienne.",
  },
  {
    term: "Mitmita",
    description:
      "Mélange d'épices en poudre de piment fort, d'ail, de clous de girofle et d'autres épices. Plus épicé que le Berbere, souvent utilisé comme condiment.",
  },
  {
    term: "Awaze",
    description:
      "Sauce très épicée à base de Berbere, ail, gingembre, oignon, cardamome, clous de girofle et cannelle. Utilisée comme base de saveur ou condiment.",
  },
  {
    term: "Aïeb",
    description:
      "Fromage blanc saumuré éthiopien fait maison, fabriqué à partir de lait de chèvre. Servi avec des plats épicés pour contraster et compléter les saveurs.",
  },
];

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
              On y mange avec les doigts en partageant en famille et entre amis comme le veut la tradition,
              autour de grands plateaux servis sur de magnifiques paniers tressés — les <em className="text-foreground font-medium">Sefed</em>.
            </p>
          </motion.div>
        </div>

        {/* Reverse split: text + image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-5">
              Notre Cuisine
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Chaque assiette servie chez Sefed est le reflet de la cuisine éthiopienne à son meilleur,
              fabriquée à la main avec les produits les plus frais, les meilleures viandes et les
              meilleurs légumes, herbes et épices disponibles.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Du Doro Wat mijoté pendant 6 heures au café Jebena Buna préparé selon la tradition,
              notre menu met l'accent sur une grande variété de plats végétariens et à base de viande.
              Passée la première surprise, on apprend à aimer le mélange de saveurs entre l'Injera et les plats.
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

        {/* Lexique Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
            Le <span className="text-gradient-warm">Lexique</span>
          </h3>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Découvrez les termes essentiels de la gastronomie éthiopienne.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lexiqueItems.map((item, i) => (
            <motion.div
              key={item.term}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-lg border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h4 className="font-display text-xl font-bold text-primary mb-2">
                {item.term}
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
