export type Spice = "mild" | "medium" | "hot";

export type Dish = {
  id: string;
  name: string;
  note: string;
  price: string;
  spice: Spice;
  tags: string[];
  sourcing?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  kicker: string;
  dishes: Dish[];
};

export const spiceMark: Record<Spice, string> = {
  mild: "○",
  medium: "◐",
  hot: "●",
};

export const spiceLabel: Record<Spice, string> = {
  mild: "Mild",
  medium: "Medium",
  hot: "Hot",
};

export const menu: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    kicker: "To begin, at the table",
    dishes: [
      {
        id: "kata-kat",
        name: "Kata Kat, Table-Side",
        note: "Minced offal and spice cut on the tawa until it sings; the sound is the dish.",
        price: "PKR ——",
        spice: "medium",
        tags: ["Halal"],
        sourcing: "Trotters and brain from Bakar Mandi, dawn delivery.",
      },
      {
        id: "dahi-bhalla",
        name: "Dahi Bhalla, Deconstructed",
        note: "Lentil dumplings under set yoghurt, tamarind reduction, pomegranate.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian"],
      },
      {
        id: "seekh",
        name: "Seekh, Charcoal & Coriander",
        note: "Hand-pounded beef seekh on a skewer of green chilli and coriander stalk.",
        price: "PKR ——",
        spice: "medium",
        tags: ["Halal"],
      },
      {
        id: "bihari-tart",
        name: "Bihari Boti Tartlet",
        note: "Twelve-hour papaya-tenderised beef in a crisp shell.",
        price: "PKR ——",
        spice: "hot",
        tags: ["Halal"],
      },
      {
        id: "fried-fish",
        name: "Fried Fish, Ravi Style",
        note: "Rohu in ajwain batter, chaat masala, lime.",
        price: "PKR ——",
        spice: "medium",
        tags: ["Halal"],
        sourcing: "River rohu, sourced Thursdays.",
      },
    ],
  },
  {
    id: "grill",
    title: "Grill & Charcoal",
    kicker: "Mango wood, clay, open flame",
    dishes: [
      {
        id: "champ",
        name: "The Champ",
        note: "Mutton chops in raw papaya and white pepper, finished over mango wood.",
        price: "PKR ——",
        spice: "medium",
        tags: ["Halal"],
      },
      {
        id: "chargha",
        name: "Chargha, Whole Bird",
        note: "Steamed a full day in spice, then fried to lacquer. Serves two.",
        price: "PKR ——",
        spice: "medium",
        tags: ["Halal", "Serves two"],
      },
      {
        id: "malai-boti",
        name: "Malai Boti, Kashmiri Chilli",
        note: "Chicken thigh set in cream and cheese overnight.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Contains dairy"],
      },
      {
        id: "quail",
        name: "Tandoori Quail",
        note: "Four birds, yoghurt marinade, burnt lemon.",
        price: "PKR ——",
        spice: "medium",
        tags: ["Halal"],
      },
      {
        id: "reshmi",
        name: "Reshmi Kebab, Almond",
        note: "Silk-textured chicken kebab bound with almond paste.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Contains nuts"],
      },
    ],
  },
  {
    id: "rice",
    title: "Rice & Biryani",
    kicker: "Sealed, layered, opened at your table",
    dishes: [
      {
        id: "lahori-biryani",
        name: "Lahori Biryani, Sealed",
        note: "Layered in a clay pot, sealed with dough, opened at your table.",
        price: "PKR ——",
        spice: "hot",
        tags: ["Halal"],
        sourcing: "Aged sella rice, eighteen months.",
      },
      {
        id: "yakhni-pulao",
        name: "Mutton Yakhni Pulao",
        note: "Rice cooked in the meat's own broth; no colour, no shortcuts.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal"],
      },
      {
        id: "prawn-biryani",
        name: "Prawn Biryani, Coastal Line",
        note: "Karachi prawns, the Lahori masala.",
        price: "PKR ——",
        spice: "medium",
        tags: ["Halal"],
      },
      {
        id: "zarda",
        name: "Zarda Pulao Bahar",
        note: "Saffron sweet rice with khoya, pistachio, candied orange.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian", "Contains nuts"],
      },
    ],
  },
  {
    id: "curries",
    title: "Curries",
    kicker: "The long fires",
    dishes: [
      {
        id: "nihari",
        name: "Nihari, Eight Hours",
        note: "Shank simmered overnight, marrow served in the bone, first cut of the morning.",
        price: "PKR ——",
        spice: "hot",
        tags: ["Halal"],
        sourcing: "Beef shank from a single supplier since 2014.",
      },
      {
        id: "paya",
        name: "Paya, Clarified",
        note: "Trotters reduced to a clear, gelatinous broth.",
        price: "PKR ——",
        spice: "medium",
        tags: ["Halal"],
      },
      {
        id: "haleem",
        name: "Haleem, Stone-Ground",
        note: "Seven grains and beef pounded to silk over nine hours.",
        price: "PKR ——",
        spice: "medium",
        tags: ["Halal"],
      },
      {
        id: "palak-paneer",
        name: "Palak Paneer, House Cheese",
        note: "Spinach cooked twice, cheese set that morning.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian"],
      },
      {
        id: "daal-maash",
        name: "Daal Maash, Butter-Finished",
        note: "White lentils, ginger julienne, burnt-butter tarka.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian"],
      },
    ],
  },
  {
    id: "street",
    title: "Street, Reimagined",
    kicker: "Anarkali and Gawalmandi, plated",
    dishes: [
      {
        id: "gol-gappa",
        name: "Anarkali Gol Gappa Flight",
        note: "Six shells, six waters, served on a chilled slate.",
        price: "PKR ——",
        spice: "medium",
        tags: ["Halal", "Vegetarian"],
      },
      {
        id: "chana-chaat",
        name: "Chana Chaat, Plated",
        note: "Chickpeas, tamarind gel, papdi shards, mint air.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian"],
      },
      {
        id: "halwa-puri",
        name: "Halwa Puri, Small Plate",
        note: "One puri, one spoon of suji halwa, one of chana.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian"],
      },
      {
        id: "fruit-chaat",
        name: "Fruit Chaat, Winter Cut",
        note: "Whatever the mandi had best this morning, black salt, orange juice.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegan"],
        sourcing: "Cut to order from the morning's Badami Bagh lot.",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    kicker: "Milk, reduced and reduced again",
    dishes: [
      {
        id: "kulfi-falooda",
        name: "Kulfi Falooda, Tall Glass",
        note: "Slow-churned khoya kulfi, rose vermicelli, basil seed.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian", "Contains nuts"],
      },
      {
        id: "shahi-tukray",
        name: "Shahi Tukray",
        note: "Ghee-fried bread in cardamom rabri, silver leaf.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian", "Contains nuts"],
      },
      {
        id: "gajar-halwa",
        name: "Gajar Halwa, Winter Only",
        note: "Red carrots reduced in milk for five hours.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian"],
        sourcing: "Red carrots from Kasur, December through February.",
      },
      {
        id: "rabri",
        name: "Rabri Set, Pistachio",
        note: "Milk reduced to ribbons, chilled overnight.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian", "Contains nuts"],
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    kicker: "Clay, ice, forty minutes of whisking",
    dishes: [
      {
        id: "kashmiri-chai",
        name: "Kashmiri Chai, Pink Salt",
        note: "Whisked forty minutes to colour.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian"],
      },
      {
        id: "doodh-soda",
        name: "Doodh Soda, House",
        note: "Cold milk and soda, the old Lahori order.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian"],
      },
      {
        id: "lassi",
        name: "Lassi, Sweet or Salted",
        note: "Clay tumbler, churned to order.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegetarian"],
      },
      {
        id: "sardai",
        name: "Sardai",
        note: "Almond, melon seed, fennel, cooled on ice.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegan", "Contains nuts"],
      },
      {
        id: "sikanjabeen",
        name: "Sikanjabeen",
        note: "Mint, lime, black salt.",
        price: "PKR ——",
        spice: "mild",
        tags: ["Halal", "Vegan"],
      },
    ],
  },
];

export const allDishes: Dish[] = menu.flatMap((c) => c.dishes);

export const RESTAURANT = {
  name: "Mehfil",
  descriptor: "Lahore",
  phone: "+92 300 000 0000",
  whatsapp: "00000000000",
  address: "12 Ganga Ram Building, Mall Road, Lahore",
  hours: [
    { day: "Tuesday — Thursday", time: "6:00 pm — 12:30 am" },
    { day: "Friday — Sunday", time: "1:00 pm — 1:30 am" },
    { day: "Monday", time: "Closed" },
  ],
};

export function whatsappLink(message: string) {
  return `https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(message)}`;
}
