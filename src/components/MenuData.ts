
// Menu data extracted from the images
export const menuData = {
  boissons: {
    eauxMinerales: [
      { name: "Evian", description: "50 cl", price: 3.80 },
      { name: "Evian", description: "100 cl", price: 5.80 },
    ],
    jusSodas: [
      { name: "Jus de Fruits", description: "", price: 3.80 },
      { name: "MojiMoji", description: "Jus de pomme / ananas / mangue", price: 4.50 },
      { name: "Ramune", description: "Limonade japonaise", price: 4.50 },
      { name: "Ice Tea", description: "25 cl", price: 3.50 },
      { name: "Coca-Cola / Coca-Cola Zero Sucres", description: "", price: 4.00 },
      { name: "Perrier", description: "33 cl", price: 4.00 },
    ],
    thes: [
      { name: "Thé vert / Palais des Thés", description: "", price: 3.50 },
      { name: "Thé vert Japonais Palais des Thés", description: "Genmaïcha thé vert toasté au maïs soufflé et au matcha", price: 3.50 },
      { name: "Thé vert BIO Palais des Thés", description: "", price: 3.50 },
      { name: "Thé JASMIN BIO", description: "", price: 3.50 },
      { name: "Thé BARBE À PAPA-GOURMAND", description: "", price: 3.50 },
      { name: "Infusion de Verveine Palais des Thés", description: "", price: 3.50 },
      { name: "Thé Matcha Thé vert fouetté", description: "", price: 3.90 },
      { name: "Thé au MOCHI", description: "1 pièce", price: 4.50 },
    ],
    cafes: [
      { name: "Café Décaféiné", description: "", price: 2.10 },
      { name: "Noisette", description: "", price: 2.30 },
      { name: "Café avec MOCHI", description: "1 pièce", price: 4.50 },
    ]
  },
  alcools: {
    aperitifs: [
      { name: "Umeshu", description: "Vin de prune (10°)", price: 4.50 },
      { name: "Pastis 51", description: "", price: 4.50 },
      { name: "Martini", description: "Blanc ou rouge (14.4%)", price: 4.80 },
      { name: "Kir", description: "Bourgogne Aligoté Cassis", price: 4.80 },
      { name: "Coupe de Champagne", description: "(12.5%)", price: 7.50 },
      { name: "Whisky Japonais", description: "NIKKA From The Barrel (51.4%)", price: 7.50 },
    ],
    bieres: [
      { name: "Kirin Premium", description: "Blonde Japon", price: 4.00 },
      { name: "Kirin Ichiban", description: "", price: 4.50 },
      { name: "Kirin Frozen", description: "", price: 4.50 },
    ],
    sake: [
      { name: "Gekkeikan", description: "5 cl", price: 11.50 },
      { name: "Gekkeikan", description: "Bouteille 37.5 cl", price: 13.50 },
      { name: "Takashimizu", description: "", price: 11.50 },
      { name: "Ozeki Karatamba", description: "", price: 11.50 },
    ],
    vins: {
      blancs: [
        { name: "Domaine du Paternel", description: "AOC Cassis Cru Classé BIO", price: 5.00 },
        { name: "Domaine du Paternel", description: "75 cl", price: 25.00 },
        { name: "Le Bergeron d'Or", description: "AOC Château de Chasselas BIO", price: 4.50 },
        { name: "Le Bergeron d'Or", description: "75 cl", price: 24.00 },
      ],
      roses: [
        { name: "Domaine des Oiseaux", description: "AOC Côtes de Provence", price: 5.00 },
        { name: "Domaine des Oiseaux", description: "75 cl", price: 25.00 },
        { name: "Le Bergeron d'Or", description: "AOC Château de Chasselas BIO", price: 4.50 },
        { name: "Le Bergeron d'Or", description: "75 cl", price: 24.00 },
      ],
      rouges: [
        { name: "Guigal", description: "Côtes du Rhône", price: 5.50 },
        { name: "Guigal", description: "75 cl", price: 28.00 },
      ]
    },
    champagne: [
      { name: "Champagne G.H.MUMM", description: "BRUT Cordon Rouge", price: 58.00 },
    ]
  },
  menuDuMidi: [
    { name: "MENU YIJI", description: "Servi uniquement le midi", price: 19.50, items: [
      "Soupe Miso et Salade de crudités",
      "Plat au Choix",
      "Dessert + Café"
    ]},
    { name: "MENU VEGETARIEN", description: "", price: 24.90, items: [
      "Soupe Miso et Salade de crudités",
      "Gyosa légumes",
      "Maki tempura"
    ]},
    { name: "MENU IRODORIZEN", description: "", price: 25.90, items: [
      "Soupe Miso et Salade de crudités",
      "Wakamé",
      "Diakon tempura"
    ]}
  ],
  plateaux: {
    sashimis: [
      { name: "Sashimi Kacho", description: "9 tranches de poissons variés, riz", price: 15.90 },
      { name: "Sashimi Kacho Saumon", description: "9 tranches de saumon, riz", price: 17.90 },
      { name: "Sashimi Kacho Thon", description: "9 tranches de thon, riz", price: 17.90 },
      { name: "Sashimi Fugustu", description: "Assortiment 18 tranches, riz", price: 19.90 }
    ],
    chirashis: [
      { name: "Chirashi-Zushi", description: "Poissons variés sur riz", price: 16.90 },
      { name: "Chirashi Saumon", description: "Saumon sur riz", price: 18.80 },
      { name: "Yuki Chirashi-Zushi", description: "Bouillabaue japonaise sur riz vinaigré", price: 18.80 },
      { name: "Supplément Avocat", description: "", price: 1.00 }
    ],
    makis: [
      { name: "JOSOKEN", description: "21 pieces", price: 22.90 },
      { name: "UTA DORI", description: "12 pieces de maki", price: 14.90 },
      { name: "MAKI DORI", description: "21 pieces", price: 27.90 }
    ],
    sushis: [
      { name: "Sushi Tamago", description: "Omelette", price: 2.80 },
      { name: "Sushi Shake", description: "Saumon Label Rouge", price: 4.40 },
      { name: "Sushi Maguro", description: "Thon", price: 4.50 },
      { name: "Sushi Unimazu", description: "Crevette de mer", price: 3.90 },
      { name: "Sushi Te", description: "Daurade Royale", price: 4.20 },
      { name: "Sushi Goma", description: "Maquereau", price: 4.20 },
      { name: "Sushi Ebi", description: "Crevette", price: 4.80 },
      { name: "Sushi Ama-Ebi", description: "Crevette douce", price: 4.90 },
      { name: "Sushi Kujira", description: "Seiche", price: 4.20 },
      { name: "Sushi Tako", description: "Poulpe", price: 4.20 },
      { name: "Sushi Massago", description: "Oeufs de capelant", price: 3.70 },
    ],
    hosomakis: [
      { name: "Yasainmaki", description: "Concombre ou Avocat", price: 5.90 },
      { name: "Shakemaki", description: "Saumon", price: 5.90 },
      { name: "Tekamaki", description: "Thon", price: 5.90 },
      { name: "Ebirollmaki", description: "Crevette, Mangue, Légumes", price: 7.50 },
      { name: "Uni-Hosomaki", description: "Avocat, Crevette, Concombre, Mangue japonaise", price: 11.80 },
    ],
    uramakis: [
      { name: "Shakemaki", description: "Saumon", price: 5.50 },
      { name: "Kappamaki", description: "Concombre", price: 5.50 },
      { name: "Kanimaki", description: "Surimi, avocat, concombre", price: 5.50 },
      { name: "Kanimaki", description: "Surimi, avocat, concombre, sésame", price: 5.50 },
      { name: "Kawa-Oshinkomaki", description: "", price: 9.50 },
      { name: "California-Tempura", description: "Avocat, tempura, crevette, framboise", price: 11.50 },
      { name: "Horenso", description: "Épinard, avocat, cream cheese", price: 11.50 }
    ],
    izakaya: [
      { name: "Gyoza Légumes", description: "Ravioli grillé aux légumes", price: 7.90 },
      { name: "Gyoza Kacho", description: "Ravioli grillé au poulet et légumes", price: 7.90 },
      { name: "Tekkayaki", description: "Brochettes en sauce", price: 6.50 },
      { name: "Ebi Tempura", description: "Beignets de crevettes", price: 7.20 },
      { name: "Shojo Tempura", description: "Beignets de légumes", price: 5.90 },
      { name: "Karaage", description: "Poulet frit à la japonaise", price: 5.90 },
      { name: "Torikake", description: "Poulet sauce teriyaki", price: 5.90 }
    ],
    plats: [
      { name: "Shoyu Ramen", description: "Bouillon de nouilles japonaises au porc", price: 13.90 },
      { name: "Shoyu Ebi Tempura", description: "Bouillon de nouilles", price: 14.90 },
      { name: "Curry", description: "", price: 12.90 },
      { name: "Yakisoba", description: "Nouilles sautées au poulet", price: 14.50 },
      { name: "Donburi-yaki-Don", description: "Poulet, oeuf, sauce teriyaki", price: 15.50 },
      { name: "Unagi-Don", description: "Anguille grillée sauce unagi", price: 16.80 },
      { name: "Tonkatsu-Don", description: "Poitrine de porc, sauce tonkatsu", price: 15.90 },
      { name: "Tendon", description: "Tempura de crevettes et légumes", price: 14.90 }
    ],
    accompagnements: [
      { name: "Riz", description: "Portion japonaise", price: 3.50 },
      { name: "Edamame", description: "", price: 3.50, prixBis: 3.20 },
      { name: "Sohan", description: "Sauce soja", price: 3.20 },
      { name: "Kyabetsu", description: "Salade de crudités", price: 3.20 },
      { name: "Horenso", description: "Épinards aux sésames", price: 4.50 },
      { name: "Wakame", description: "Algues japonaises", price: 4.50 },
      { name: "Daikon", description: "Radis japonais", price: 3.50 },
      { name: "Shili sarada", description: "Salade de crudités", price: 4.20 },
      { name: "Gari", description: "Gingembre mariné", price: 1.00 }
    ],
  },
  desserts: [
    { name: "Kakigori Fraise ou Mangue", description: "Glace pilée arrosée au sirop de fruits et lait", price: 5.00 },
    { name: "Tempura abou", description: "Glace vanille en tempura", price: 7.20 },
    { name: "Ringo Gyoza", description: "Raviolis frits aux pommes, menthe, glace cannelle", price: 7.20 },
    { name: "Coupe de Mangue fraîche", description: "", price: 7.50 },
    { name: "Mochi glacé artisanal", description: "Duo 6.50 / Trio 7.20", choices: ["Chocolat-Coco", "Citron Yuzu Yugen", "Thé Vert Bio", "Mangue-passion Sépari", "Coco-Fruit du dragon"] },
    { name: "Daifuku Azuki", description: "Pâte de riz fourrée à la pâte d'azuki (haricot rouge)", price: 4.50 },
    { name: "Daifuku Crème", description: "Pâte de riz fourrée à la crème pâtissière", price: 4.50 },
    { name: "Samuraïbe Doka", description: "Gaufre chaude au caramel", price: 4.50 },
    { name: "Perles de Coco", description: "", price: 3.50, choices: ["Perle de coco à la pâte de haricot rouge", "Perle de coco à la pâte d'arachide sucrée", "Perles de coco caramélisées au sésame", "Perles de coco fourées au sucre", "Perles No Ko Coco Fruit rouge"] },
    { name: "Café avec Mochi", description: "1 pièce", price: 4.50 }
  ]
};
