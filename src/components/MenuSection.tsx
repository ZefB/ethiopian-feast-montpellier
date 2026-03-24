import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import type { Lang } from "@/i18n/translations";

interface MenuItem {
  nameKey: string;
  price: string;
  tagKey?: string;
}

const entrees: MenuItem[] = [
  { nameKey: "kitfoFourre", price: "10€", tagKey: "soirUniquement" },
  { nameKey: "sambussaVegan", price: "5,50€", tagKey: "vegan" },
  { nameKey: "tomatoFitfit", price: "4,50€", tagKey: "vegan" },
];

const viandes: MenuItem[] = [
  { nameKey: "awazeTibsPoulet", price: "17€" },
  { nameKey: "awazeTibsBoeuf", price: "18€" },
  { nameKey: "doroTibs", price: "16€" },
  { nameKey: "doroWat", price: "19€" },
  { nameKey: "dinitchBeKaro", price: "14€" },
  { nameKey: "misserEtSega", price: "17€" },
  { nameKey: "kitfo", price: "19€", tagKey: "soirUniquement" },
];

const vegetariens: MenuItem[] = [
  { nameKey: "shiro", price: "12€", tagKey: "vegan" },
  { nameKey: "misser", price: "14€", tagKey: "vegan" },
  { nameKey: "kikeAlecha", price: "12€", tagKey: "vegan" },
  { nameKey: "vegeLover", price: "18€ / 32€", tagKey: "pour1ou2" },
  { nameKey: "vegeLoverCombo", price: "40€" },
];

const accompagnements: MenuItem[] = [
  { nameKey: "injera", price: "1,50€" },
  { nameKey: "salade", price: "3,50€" },
  { nameKey: "oeufDur", price: "1,50€" },
  { nameKey: "awaze", price: "1,50€" },
  { nameKey: "mitmita", price: "1,50€" },
];

const MenuCategory = ({
  title,
  items,
  lang,
  delay = 0,
}: {
  title: string;
  items: MenuItem[];
  lang: Lang;
  delay?: number;
}) => {
  const mi = translations.menuItems as Record<string, { name: { fr: string; en: string }; desc: { fr: string; en: string } }>;
  const tags = translations.menu.tags as Record<string, { fr: string; en: string }>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className="mb-12"
    >
      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
        {title}
      </h3>
      <div className="space-y-5">
        {items.map((item) => {
          const data = mi[item.nameKey];
          if (!data) return null;
          return (
            <div key={item.nameKey} className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-display text-lg font-semibold text-foreground">
                    {t(data.name, lang)}
                  </span>
                  {item.tagKey && tags[item.tagKey] && (
                    <span className="text-[10px] uppercase tracking-wider font-body font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                      {t(tags[item.tagKey], lang)}
                    </span>
                  )}
                </div>
                {t(data.desc, lang) && (
                  <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t(data.desc, lang)}
                  </p>
                )}
              </div>
              <span className="font-display text-lg font-bold text-primary shrink-0">
                {item.price}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const MenuSection = () => {
  const { lang } = useLang();
  const tr = translations.menu;

  return (
    <section id="menu" className="py-20 md:py-28 bg-card">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t(tr.title, lang)} <span className="text-gradient-warm">{t(tr.titleSpan, lang)}</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm">
            {t(tr.subtitle, lang)}
          </p>
        </motion.div>

        <MenuCategory title={t(tr.entrees, lang)} items={entrees} lang={lang} />
        <MenuCategory title={t(tr.viandes, lang)} items={viandes} lang={lang} delay={0.1} />
        <MenuCategory title={t(tr.vegetariens, lang)} items={vegetariens} lang={lang} delay={0.15} />
        <MenuCategory title={t(tr.accompagnements, lang)} items={accompagnements} lang={lang} delay={0.2} />

        {/* Desserts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
            {t(tr.desserts, lang)}
          </h3>
          <p className="font-body text-muted-foreground text-sm italic">
            {t(tr.dessertNote, lang)}
          </p>
        </motion.div>

        {/* Boissons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
            {t(tr.boissons, lang)}
          </h3>
          <p className="font-body text-muted-foreground text-sm italic">
            {t(tr.drinksSoon, lang)}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-body text-xs text-muted-foreground text-center mt-8 space-x-3"
        >
          <span>{t(tr.footer1, lang)}</span>
          <span>·</span>
          <span>{t(tr.footer2, lang)}</span>
          <span>·</span>
          <span>{t(tr.footer3, lang)}</span>
        </motion.p>
      </div>
    </section>
  );
};

export default MenuSection;
