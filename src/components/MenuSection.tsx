import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

const entrees: MenuItem[] = [
  {
    name: "Kitfo Fourré",
    description: "Roulé d'Injera au bœuf haché, fromage blanc saumuré maison et épinards. (4 pièces)",
    price: "10€",
    tag: "Uniquement le soir",
  },
  {
    name: "Sambussa Vegan",
    description: "Pâte croustillante en forme de triangle farcie de lentilles, oignons et poivrons. (2 pièces)",
    price: "5,50€",
    tag: "Vegan",
  },
  {
    name: "Tomato Fitfit",
    description: "Morceaux d'Injera marinés avec tomates, piments Jalapeño, oignon rouge, huile d'olive et citron.",
    price: "4,50€",
    tag: "Vegan",
  },
];

const viandes: MenuItem[] = [
  {
    name: "Awaze Tibs — Poulet",
    description: "Émincé de poulet sauté aux oignons, épices éthiopiennes à l'Awaze.",
    price: "17€",
  },
  {
    name: "Awaze Tibs — Bœuf",
    description: "Émincé de bœuf sauté aux oignons, épices éthiopiennes à l'Awaze.",
    price: "18€",
  },
  {
    name: "Doro Tibs",
    description: "Émincé de poulet mariné aux oignons, épinards et épices éthiopiennes, piments Jalapeño.",
    price: "16€",
  },
  {
    name: "Doro Wat",
    description: "Plat de célébration traditionnel. Sauce mijotée 6h, poulet assaisonné de Berbere, œuf dur, Aïeb et salade éthiopienne.",
    price: "19€",
  },
  {
    name: "Dinitch be Karo Aleche",
    description: "Ragoût de pommes de terre et carottes mijotées dans une sauce éthiopienne parfumée aux épices traditionnelles.",
    price: "14€",
  },
  {
    name: "Misser et Sega",
    description: "Ragoût de lentilles corail et bœuf haché mijoté avec oignons, ail, gingembre, assaisonné de Berbere. Accompagné d'une salade éthiopienne.",
    price: "17€",
  },
  {
    name: "Kitfo",
    description: "Steak tartare éthiopien : bœuf extra maigre haché, assaisonné aux herbes Mitmita et épices éthiopiennes, légèrement grillé.",
    price: "17€",
    tag: "Uniquement le soir",
  },
  {
    name: "Kitfo Spécial",
    description: "Kitfo accompagné d'Aïeb et d'épinards hachés aux épices éthiopiennes.",
    price: "19€",
    tag: "Uniquement le soir",
  },
];

const vegetariens: MenuItem[] = [
  {
    name: "Shiro",
    description: "Purée de pois chiches mijotée dans une sauce légèrement épicée faite maison à base d'oignons, ail et gingembre. Salade éthiopienne.",
    price: "12€",
    tag: "Vegan",
  },
  {
    name: "Misser",
    description: "Ragoût épicé de lentilles corail mijoté avec oignons, ail et gingembre, assaisonné de Berbere. Salade éthiopienne.",
    price: "14€",
    tag: "Vegan",
  },
  {
    name: "Kike Alecha",
    description: "Ragoût de pois cassés mijoté avec oignons, ail et gingembre. Salade éthiopienne.",
    price: "12€",
    tag: "Vegan",
  },
  {
    name: "Végé Lover",
    description: "Assortiment de salade, chou, betteraves, épinards ou haricots verts, Kike Alecha, Shiro et Misser.",
    price: "18€ / 32€",
    tag: "Pour 1 ou 2 pers.",
  },
  {
    name: "Végé Lover + Doro Wat + 2 Sambussa",
    description: "Le meilleur des deux mondes : assortiment végétarien accompagné du Doro Wat et de 2 pièces de Sambussa.",
    price: "40€",
  },
];

const accompagnements: MenuItem[] = [
  { name: "Injera", description: "Pain traditionnel éthiopien au Teff.", price: "1,50€" },
  { name: "Salade", description: "Salade maison de style éthiopienne.", price: "3,50€" },
  { name: "Œuf Dur", description: "", price: "1,50€" },
  { name: "Awaze", description: "Sauce épicée éthiopienne.", price: "1,50€" },
  { name: "Mitmita", description: "Condiment pimenté éthiopien.", price: "1,50€" },
];

const MenuCategory = ({
  title,
  items,
  delay = 0,
}: {
  title: string;
  items: MenuItem[];
  delay?: number;
}) => (
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
      {items.map((item) => (
        <div key={item.name} className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-display text-lg font-semibold text-foreground">
                {item.name}
              </span>
              {item.tag && (
                <span className="text-[10px] uppercase tracking-wider font-body font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                  {item.tag}
                </span>
              )}
            </div>
            {item.description && (
              <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
          <span className="font-display text-lg font-bold text-primary shrink-0">
            {item.price}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

const MenuSection = () => {
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
            Notre <span className="text-gradient-warm">Menu</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm">
            Attention : il existe des règles pour déguster l'Injera — ne jamais se lécher les doigts
            et manger ce qu'il y a devant vous. Bon appétit !
          </p>
        </motion.div>

        <MenuCategory title="Entrées" items={entrees} />
        <MenuCategory title="Plats à base de viande" items={viandes} delay={0.1} />
        <MenuCategory title="Plats végétariens" items={vegetariens} delay={0.15} />
        <MenuCategory title="Accompagnements" items={accompagnements} delay={0.2} />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-body text-xs text-muted-foreground text-center mt-8 space-x-3"
        >
          <span>Viandes d'origine française</span>
          <span>·</span>
          <span>Prix net — service compris</span>
          <span>·</span>
          <span>Nous n'acceptons pas les chèques</span>
        </motion.p>
      </div>
    </section>
  );
};

export default MenuSection;
