export type Lang = "fr" | "en";

export const translations = {
  // Navbar
  nav: {
    accueil: { fr: "Accueil", en: "Home" },
    restaurant: { fr: "Le Restaurant", en: "The Restaurant" },
    menu: { fr: "Menu", en: "Menu" },
    reserver: { fr: "Réserver", en: "Reserve" },
    contact: { fr: "Contact", en: "Contact" },
  },

  // Hero
  hero: {
    subtitle: { fr: "Cuisine Éthiopienne Authentique", en: "Authentic Ethiopian Cuisine" },
    description: {
      fr: "Découvrez les saveurs authentiques de l'Éthiopie à Montpellier, où chaque bouchée est une invitation au voyage culinaire.",
      en: "Discover the authentic flavors of Ethiopia in Montpellier, where every bite is an invitation to a culinary journey.",
    },
    cta: { fr: "Découvrir", en: "Discover" },
  },

  // Introduction
  intro: {
    welcome: { fr: "Bienvenue chez", en: "Welcome to" },
    cadreTitle: { fr: "Le Cadre", en: "The Setting" },
    cadreP1: {
      fr: "Le restaurant éthiopien Sefed offre un cadre exceptionnellement chaleureux et accueillant, où les convives se sentent instantanément transportés en Éthiopie grâce à une atmosphère authentique et conviviale.",
      en: "The Ethiopian restaurant Sefed offers an exceptionally warm and welcoming setting, where guests instantly feel transported to Ethiopia through an authentic and convivial atmosphere.",
    },
    cadreP2: {
      fr: "Situé au cœur de Montpellier, entre le Corum et Louis Blanc Agora de la Danse, notre restaurant vous invite à partager un moment unique autour de plats préparés avec passion et savoir-faire traditionnel — à déguster avec les doigts, en famille ou entre amis, comme le veut la tradition éthiopienne.",
      en: "Located in the heart of Montpellier, between the Corum and Louis Blanc Agora de la Danse, our restaurant invites you to share a unique moment around dishes prepared with passion and traditional expertise — to be enjoyed with your fingers, with family or friends, as Ethiopian tradition calls for.",
    },
    cuisineTitle: { fr: "Notre Cuisine", en: "Our Cuisine" },
    cuisineP1: {
      fr: "Chaque assiette servie chez Sefed est le reflet de la cuisine éthiopienne à son meilleur, préparée avec les produits les plus frais et sublimée par des épices traditionnelles comme le Berbere et le Mitmita.",
      en: "Every dish served at Sefed reflects Ethiopian cuisine at its finest, prepared with the freshest ingredients and elevated by traditional spices like Berbere and Mitmita.",
    },
    cuisineP2: {
      fr: "Notre carte propose une grande variété de plats — des ragoûts mijotés aux émincés sautés à l'Awaze, en passant par le Kitfo, le Shiro et une sélection généreuse de plats végétariens. Le tout servi sur de l'Injera, pain légèrement acidulé à base de Teff, pour une expérience de partage unique.",
      en: "Our menu offers a wide variety of dishes — from slow-cooked stews to Awaze-sautéed slices, including Kitfo, Shiro, and a generous selection of vegetarian dishes. All served on Injera, a somewhat tangy flatbread made with a slight addition of Teff, for a unique sharing experience.",
    },
    lexiqueTitle: { fr: "Le", en: "The" },
    lexiqueSpan: { fr: "Lexique", en: "Glossary" },
    lexiqueSubtitle: {
      fr: "Découvrez les termes essentiels de la gastronomie éthiopienne.",
      en: "Discover the essential terms of Ethiopian gastronomy.",
    },
  },

  // Lexique items
  lexique: [
    {
      term: "Sefed",
      fr: "Paniers et nattes traditionnels d'Éthiopie, magnifiquement conçus et fabriqués à la main à partir de pailles cultivées localement. Utilisés pour vanner le grain, attiser le feu, retirer l'Injera du gril en argile, ou stocker des objets.",
      en: "Traditional Ethiopian baskets and mats, beautifully designed and handcrafted from locally grown straw. Used for winnowing grain, fanning fires, removing Injera from the clay grill, or storing items.",
    },
    {
      term: "Injera",
      fr: "Pain plat au levain légèrement spongieux, fabriqué à partir d'un super grain appelé Teff. Incontournable de la cuisine éthiopienne depuis plus de 3 000 ans.",
      en: "A slightly spongy sourdough flatbread made from a super grain called Teff. A staple of Ethiopian cuisine for over 3,000 years.",
    },
    {
      term: "Berbere",
      fr: "Mélange d'épices avec du piment comme composant principal, incluant ail, gingembre, coriandre, basilic éthiopien et fenugrec. Un ingrédient clé de la cuisine éthiopienne.",
      en: "A spice blend with chili as the main component, including garlic, ginger, coriander, Ethiopian basil, and fenugreek. A key ingredient in Ethiopian cuisine.",
    },
    {
      term: "Mitmita",
      fr: "Mélange d'épices en poudre de piment fort, d'ail, de clous de girofle et d'autres épices. Plus épicé que le Berbere, souvent utilisé comme condiment.",
      en: "A powdered spice blend of hot chili, garlic, cloves, and other spices. Spicier than Berbere, often used as a condiment.",
    },
    {
      term: "Awaze",
      fr: "Sauce très épicée à base de Berbere, ail, gingembre, oignon, cardamome, clous de girofle et cannelle. Utilisée comme base de saveur ou condiment.",
      en: "A very spicy sauce made from Berbere, garlic, ginger, onion, cardamom, cloves, and cinnamon. Used as a flavor base or condiment.",
    },
    {
      term: "Aïeb",
      fr: "Fromage blanc saumuré éthiopien fait maison, fabriqué à partir de lait de chèvre. Servi avec des plats épicés pour contraster et compléter les saveurs.",
      en: "Homemade Ethiopian brined white cheese made from goat's milk. Served with spicy dishes to contrast and complement the flavors.",
    },
  ],

  // Menu section
  menu: {
    title: { fr: "Notre", en: "Our" },
    titleSpan: { fr: "Menu", en: "Menu" },
    subtitle: {
      fr: "Attention : il existe des règles pour déguster l'Injera — ne jamais se lécher les doigts et manger ce qu'il y a devant vous. Bon appétit !",
      en: "Please note: there are rules for enjoying Injera — never lick your fingers and eat what's in front of you. Bon appétit!",
    },
    entrees: { fr: "Entrées", en: "Starters" },
    viandes: { fr: "Plats à base de viande", en: "Meat Dishes" },
    vegetariens: { fr: "Plats végétariens", en: "Vegetarian Dishes" },
    accompagnements: { fr: "Accompagnements", en: "Sides" },
    boissons: { fr: "Boissons", en: "Drinks" },
    desserts: { fr: "Desserts", en: "Desserts" },
    dessertNote: {
      fr: "Nos desserts sont disponibles à la carte sur place — demandez à votre serveur !",
      en: "Our desserts are available à la carte on-site — ask your server!",
    },
    vinsEtAlcools: { fr: "Vins & Alcools", en: "Wines & Spirits" },
    eauxEtSofts: { fr: "Eaux & Softs", en: "Water & Soft Drinks" },
    boissonsChaudes: { fr: "Boissons Chaudes", en: "Hot Drinks" },
    footer1: { fr: "Viandes d'origine française", en: "French-origin meats" },
    footer2: { fr: "Prix net — service compris", en: "Net prices — service included" },
    footer3: { fr: "Nous n'acceptons pas les chèques", en: "We do not accept cheques" },
    tags: {
      vegan: { fr: "Vegan", en: "Vegan" },
      soirUniquement: { fr: "Uniquement le soir", en: "Evening only" },
      pour1ou2: { fr: "Pour 1 ou 2 pers.", en: "For 1 or 2 people" },
    },
  },

  // Menu item descriptions
  menuItems: {
    kitfoFourre: {
      name: { fr: "Kitfo Fourré", en: "Kitfo Fourré" },
      desc: {
        fr: "Roulé d'Injera au bœuf haché, fromage blanc saumuré maison et épinards. (4 pièces)",
        en: "Injera roll filled with minced beef, homemade brined white cheese, and spinach. (4 pieces)",
      },
    },
    sambussaVegan: {
      name: { fr: "Sambussa Vegan", en: "Vegan Sambussa" },
      desc: {
        fr: "Pâte croustillante en forme de triangle farcie de lentilles, oignons et poivrons. (2 pièces)",
        en: "Crispy triangular pastry filled with lentils, onions, and peppers. (2 pieces)",
      },
    },
    tomatoFitfit: {
      name: { fr: "Tomato Fitfit", en: "Tomato Fitfit" },
      desc: {
        fr: "Morceaux d'Injera marinés avec tomates, piments Jalapeño, oignon rouge, huile d'olive et citron.",
        en: "Injera pieces marinated with tomatoes, Jalapeño peppers, red onion, olive oil, and lemon.",
      },
    },
    awazeTibsPoulet: {
      name: { fr: "Awaze Tibs — Poulet", en: "Awaze Tibs — Chicken" },
      desc: {
        fr: "Émincé de poulet sauté aux oignons, épices éthiopiennes à l'Awaze.",
        en: "Sliced chicken sautéed with onions and Ethiopian Awaze spices.",
      },
    },
    awazeTibsBoeuf: {
      name: { fr: "Awaze Tibs — Bœuf", en: "Awaze Tibs — Beef" },
      desc: {
        fr: "Émincé de bœuf sauté aux oignons, épices éthiopiennes à l'Awaze.",
        en: "Sliced beef sautéed with onions and Ethiopian Awaze spices.",
      },
    },
    doroTibs: {
      name: { fr: "Doro Tibs", en: "Doro Tibs" },
      desc: {
        fr: "Émincé de poulet mariné aux oignons, épinards et épices éthiopiennes, piments Jalapeño.",
        en: "Marinated sliced chicken with onions, spinach, Ethiopian spices, and Jalapeño peppers.",
      },
    },
    doroWat: {
      name: { fr: "Doro Wat", en: "Doro Wat" },
      desc: {
        fr: "Plat de célébration traditionnel. Sauce mijotée 6h, poulet assaisonné de Berbere, œuf dur, Aïeb et salade éthiopienne.",
        en: "Traditional celebration dish. 6-hour simmered sauce, Berbere-seasoned chicken, hard-boiled egg, Aïeb, and Ethiopian salad.",
      },
    },
    dinitchBeKaro: {
      name: { fr: "Dinitch be Karo Aleche", en: "Dinitch be Karo Aleche" },
      desc: {
        fr: "Ragoût de pommes de terre et carottes mijotées dans une sauce éthiopienne parfumée aux épices traditionnelles.",
        en: "Potato and carrot stew simmered in a traditional Ethiopian spiced sauce.",
      },
    },
    misserEtSega: {
      name: { fr: "Misser et Sega", en: "Misser et Sega" },
      desc: {
        fr: "Ragoût de lentilles corail et bœuf haché mijoté avec oignons, ail, gingembre, assaisonné de Berbere. Accompagné d'une salade éthiopienne.",
        en: "Red lentil and minced beef stew simmered with onions, garlic, ginger, seasoned with Berbere. Served with Ethiopian salad.",
      },
    },
    kitfo: {
      name: { fr: "Kitfo", en: "Kitfo" },
      desc: {
        fr: "Steak tartare éthiopien : bœuf extra maigre haché, assaisonné aux herbes Mitmita et épices éthiopiennes, légèrement grillé. Accompagné d'Aïeb et d'épinards hachés aux épices éthiopiennes.",
        en: "Ethiopian steak tartare: extra lean minced beef seasoned with Mitmita herbs and Ethiopian spices, lightly grilled. Served with Aïeb and Ethiopian-spiced chopped spinach.",
      },
    },
    shiro: {
      name: { fr: "Shiro", en: "Shiro" },
      desc: {
        fr: "Purée de pois chiches mijotée dans une sauce légèrement épicée faite maison à base d'oignons, ail et gingembre. Salade éthiopienne.",
        en: "Chickpea purée simmered in a lightly spiced homemade sauce with onions, garlic, and ginger. Ethiopian salad.",
      },
    },
    misser: {
      name: { fr: "Misser", en: "Misser" },
      desc: {
        fr: "Ragoût épicé de lentilles corail mijoté avec oignons, ail et gingembre, assaisonné de Berbere. Salade éthiopienne.",
        en: "Spiced red lentil stew simmered with onions, garlic, and ginger, seasoned with Berbere. Ethiopian salad.",
      },
    },
    kikeAlecha: {
      name: { fr: "Kike Alecha", en: "Kike Alecha" },
      desc: {
        fr: "Ragoût de pois cassés mijoté avec oignons, ail et gingembre. Salade éthiopienne.",
        en: "Split pea stew simmered with onions, garlic, and ginger. Ethiopian salad.",
      },
    },
    vegeLover: {
      name: { fr: "Végé Lover", en: "Végé Lover" },
      desc: {
        fr: "Assortiment de salade, chou, betteraves, épinards ou haricots verts, Kike Alecha, Shiro et Misser.",
        en: "Assortment of salad, cabbage, beets, spinach or green beans, Kike Alecha, Shiro, and Misser.",
      },
    },
    vegeLoverCombo: {
      name: { fr: "Végé Lover + Doro Wat + 2 Sambussa", en: "Végé Lover + Doro Wat + 2 Sambussa" },
      desc: {
        fr: "Le meilleur des deux mondes : assortiment végétarien accompagné du Doro Wat et de 2 pièces de Sambussa.",
        en: "The best of both worlds: vegetarian assortment with Doro Wat and 2 Sambussa pieces.",
      },
    },
    injera: {
      name: { fr: "Injera", en: "Injera" },
      desc: { fr: "Pain traditionnel éthiopien au Teff.", en: "Traditional Ethiopian Teff flatbread." },
    },
    salade: {
      name: { fr: "Salade", en: "Salad" },
      desc: { fr: "Salade maison de style éthiopienne.", en: "Homemade Ethiopian-style salad." },
    },
    oeufDur: {
      name: { fr: "Œuf Dur", en: "Hard-Boiled Egg" },
      desc: { fr: "", en: "" },
    },
    awaze: {
      name: { fr: "Awaze", en: "Awaze" },
      desc: { fr: "Sauce épicée éthiopienne.", en: "Spicy Ethiopian sauce." },
    },
    mitmita: {
      name: { fr: "Mitmita", en: "Mitmita" },
      desc: { fr: "Condiment pimenté éthiopien.", en: "Spicy Ethiopian condiment." },
    },
  },

  // Drinks menu
  drinkItems: {
    athenaRouge: {
      name: { fr: "Domaine Maspiquet « Athena » Rouge", en: "Domaine Maspiquet 'Athena' Red" },
      desc: { fr: "60% Marselan, 40% Petit Verdot — Nez intense et épicé aux notes de vanille. Bouche ample et structurée.", en: "60% Marselan, 40% Petit Verdot — Intense, spicy nose with vanilla notes. Full-bodied and structured." },
    },
    metisRouge: {
      name: { fr: "Domaine Maspiquet « Le Métis » Rouge", en: "Domaine Maspiquet 'Le Métis' Red" },
      desc: { fr: "100% Marselan — Nez expressif de baies des bois, de cassis et de poivre noir. Bouche équilibrée et charnue.", en: "100% Marselan — Expressive nose of wild berries, blackcurrant and black pepper. Balanced and full." },
    },
    initialRouge: {
      name: { fr: "Domaine Maspiquet « Initial » Rouge", en: "Domaine Maspiquet 'Initial' Red" },
      desc: { fr: "100% Carignan (en conversion Bio) — Nez intense aux notes de fruits confiturés et de sous-bois. Bouche souple.", en: "100% Carignan (organic conversion) — Intense nose of candied fruit and undergrowth. Supple palate." },
    },
    initialBlanc: {
      name: { fr: "Domaine Maspiquet « Initial » Blanc", en: "Domaine Maspiquet 'Initial' White" },
      desc: { fr: "100% Chardonnay — Nez typé sur des notes de badiane et de citron. Bouche profonde et onctueuse.", en: "100% Chardonnay — Distinctive nose with star anise and lemon notes. Deep and smooth palate." },
    },
    initialRose: {
      name: { fr: "Domaine Maspiquet « Initial » Rosé", en: "Domaine Maspiquet 'Initial' Rosé" },
      desc: { fr: "100% Syrah — Nez éclatant sur des notes de groseille et de fraise. Jolie bouche gourmande.", en: "100% Syrah — Bright nose of redcurrant and strawberry. Lovely, indulgent palate." },
    },
    tedj: {
      name: { fr: "Tedj — Hydromel éthiopien", en: "Tedj — Ethiopian Mead" },
      desc: { fr: "Boisson traditionnelle éthiopienne, vin de miel, fait maison et fermenté.", en: "Traditional Ethiopian honey wine, homemade and fermented." },
    },
    biereMoment: {
      name: { fr: "Bière du moment", en: "Beer of the Day" },
      desc: { fr: "33cl", en: "33cl" },
    },
    eauPlate: {
      name: { fr: "Eau minérale plate", en: "Still Mineral Water" },
      desc: { fr: "1L", en: "1L" },
    },
    eauPetillante: {
      name: { fr: "Eau pétillante", en: "Sparkling Water" },
      desc: { fr: "1L", en: "1L" },
    },
    soft: {
      name: { fr: "Softs sans alcool", en: "Non-Alcoholic Soft Drinks" },
      desc: { fr: "33cl", en: "33cl" },
    },
    jusFruits: {
      name: { fr: "Jus de fruits (orange, pomme)", en: "Fruit Juice (orange, apple)" },
      desc: { fr: "25cl", en: "25cl" },
    },
    sirop: {
      name: { fr: "Sirop", en: "Syrup Drink" },
      desc: { fr: "", en: "" },
    },
    jebenaBuna: {
      name: { fr: "Jebena Buna — Café éthiopien", en: "Jebena Buna — Ethiopian Coffee" },
      desc: { fr: "Préparé et servi dans un récipient traditionnel, accompagné de popcorn (+1€). Pour 2 personnes.", en: "Prepared and served in a traditional vessel, with popcorn (+€1). For 2 people." },
    },
    cafe: {
      name: { fr: "Café", en: "Coffee" },
      desc: { fr: "", en: "" },
    },
    theEthiopien: {
      name: { fr: "Thé éthiopien", en: "Ethiopian Tea" },
      desc: { fr: "Infusé à la cannelle, cardamome et clous de girofle. Pour 1 personne.", en: "Infused with cinnamon, cardamom, and cloves. For 1 person." },
    },
    the: {
      name: { fr: "Thé", en: "Tea" },
      desc: { fr: "", en: "" },
    },
  },

  // Reservation drawer
  reservation: {
    title: { fr: "Réserver une Table", en: "Reserve a Table" },
    description: {
      fr: "Réservez votre table pour une expérience culinaire éthiopienne authentique. Cliquez ci-dessous pour choisir votre créneau en ligne :",
      en: "Reserve your table for an authentic Ethiopian dining experience. Click below to choose your time slot online:",
    },
    cta: { fr: "Réserver en ligne", en: "Reserve Online" },
    hours: { fr: "Horaires", en: "Hours" },
    phone: { fr: "Par téléphone", en: "By Phone" },
    closed: { fr: "Fermé", en: "Closed" },
    days: {
      lundi: { fr: "Lundi", en: "Monday" },
      mardi: { fr: "Mardi", en: "Tuesday" },
      mercredi: { fr: "Mercredi", en: "Wednesday" },
      jeudi: { fr: "Jeudi", en: "Thursday" },
      vendredi: { fr: "Vendredi", en: "Friday" },
      samedi: { fr: "Samedi", en: "Saturday" },
      dimanche: { fr: "Dimanche", en: "Sunday" },
    },
  },

  // Contact footer
  contact: {
    title: { fr: "Nous Trouver", en: "Find Us" },
    adresse: { fr: "Adresse", en: "Address" },
    tramLouis: {
      fr: "🚊 2 min à pied du tram Louis Blanc (lignes 1 & 4)",
      en: "🚊 2 min walk from Louis Blanc tram (lines 1 & 4)",
    },
    tramCorum: {
      fr: "🚊 5 min à pied du tram Corum (ligne 2)",
      en: "🚊 5 min walk from Corum tram (line 2)",
    },
    telephone: { fr: "Téléphone", en: "Phone" },
    horaires: { fr: "Horaires", en: "Hours" },
    contactUs: { fr: "Contactez-nous", en: "Contact Us" },
    emailPlaceholder: { fr: "Votre email", en: "Your email" },
    messagePlaceholder: { fr: "Votre message", en: "Your message" },
    send: { fr: "Envoyer", en: "Send" },
    copyright: {
      fr: "Sefed Restaurant — Cuisine Éthiopienne Authentique à Montpellier",
      en: "Sefed Restaurant — Authentic Ethiopian Cuisine in Montpellier",
    },
  },
} as const;

export function t(obj: { fr: string; en: string }, lang: Lang): string {
  return obj[lang];
}
