import { motion } from "framer-motion";
import interiorImage from "@/assets/restaurant-interior.jpg";
import coffeeImage from "@/assets/coffee-ceremony.jpg";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const IntroductionSection = () => {
  const { lang } = useLang();
  const tr = translations.intro;
  const lexItems = translations.lexique;

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
            {t(tr.welcome, lang)} <span className="text-gradient-warm">Sefed</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

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
              {t(tr.cadreTitle, lang)}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              {t(tr.cadreP1, lang)}
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              {t(tr.cadreP2, lang)}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-5">
              {t(tr.cuisineTitle, lang)}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              {t(tr.cuisineP1, lang)}
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              {t(tr.cuisineP2, lang)}
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

        {/* Lexique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
            {t(tr.lexiqueTitle, lang)} <span className="text-gradient-warm">{t(tr.lexiqueSpan, lang)}</span>
          </h3>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            {t(tr.lexiqueSubtitle, lang)}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lexItems.map((item, i) => (
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
                {item[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
