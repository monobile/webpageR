import type { Locale } from "@/lib/i18n";

export type LocalizedText = Record<Locale, string>;

export interface MenuCategory {
  id: string;
  name: LocalizedText;
  /** Optional note rendered under the category items. */
  note?: LocalizedText;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: LocalizedText;
  /** Price in Russian rubles. Two values = two sizes (see `size`). */
  price: number | [number, number];
  /** Size label when two prices are provided, e.g. "250/350 мл". */
  size?: LocalizedText;
  description?: LocalizedText;
  featured?: boolean;
}

export const categories: MenuCategory[] = [
  {
    id: "breakfast",
    name: { ru: "Завтраки", en: "Breakfast", ar: "الإفطار" },
  },
  {
    id: "soups",
    name: { ru: "Супы", en: "Soups", ar: "الشوربات" },
  },
  {
    id: "salads",
    name: { ru: "Салаты", en: "Salads", ar: "السلطات" },
  },
  {
    id: "mains",
    name: {
      ru: "Основные блюда",
      en: "Main dishes",
      ar: "الأطباق الرئيسية",
    },
  },
  {
    id: "indian",
    name: { ru: "Индийские блюда", en: "Indian dishes", ar: "الأطباق الهندية" },
  },
  {
    id: "plov",
    name: {
      ru: "Плов и бирьяни",
      en: "Plov & biryani",
      ar: "البلوف والبرياني",
    },
  },
  {
    id: "sides",
    name: { ru: "Гарниры", en: "Side dishes", ar: "الأطباق الجانبية" },
  },
  {
    id: "desserts",
    name: { ru: "Десерты", en: "Desserts", ar: "الحلويات" },
  },
  {
    id: "hot-drinks",
    name: {
      ru: "Горячие напитки",
      en: "Hot drinks",
      ar: "المشروبات الساخنة",
    },
  },
  {
    id: "cold-drinks",
    name: {
      ru: "Холодные напитки",
      en: "Cold drinks",
      ar: "المشروبات الباردة",
    },
  },
  {
    id: "lemonades",
    name: { ru: "Лимонады", en: "Lemonades", ar: "الليمونادة" },
  },
  {
    id: "alt-drinks",
    name: {
      ru: "Альтернативные напитки",
      en: "Alternative drinks",
      ar: "مشروبات بديلة",
    },
    note: {
      ru: "Также в наличии: кофе, мате, чай в ассортименте.",
      en: "Also available: coffee, mate and a selection of teas.",
      ar: "متوفر أيضًا: قهوة، ماتيه وتشكيلة من الشاي.",
    },
  },
];

const HOT_SIZES: LocalizedText = {
  ru: "250/350 мл",
  en: "250/350 ml",
  ar: "250/350 مل",
};

const COLD_SIZES: LocalizedText = {
  ru: "350/450 мл",
  en: "350/450 ml",
  ar: "350/450 مل",
};

export const menuItems: MenuItem[] = [
  // ── Breakfast ──────────────────────────────────────────────
  {
    id: "syrniki",
    categoryId: "breakfast",
    name: { ru: "Сырники", en: "Syrniki", ar: "سيرنيكي" },
    price: 45,
  },
  {
    id: "siskal",
    categoryId: "breakfast",
    name: { ru: "Сискал", en: "Siskal", ar: "سيسكال" },
    price: 50,
  },
  {
    id: "fried-eggs",
    categoryId: "breakfast",
    name: { ru: "Яичница", en: "Fried eggs", ar: "بيض مقلي" },
    price: 40,
  },
  {
    id: "fried-sausages",
    categoryId: "breakfast",
    name: { ru: "Сосиски жареные", en: "Fried sausages", ar: "نقانق مقلية" },
    price: 40,
  },

  // ── Soups ──────────────────────────────────────────────────
  {
    id: "cheese-soup",
    categoryId: "soups",
    name: { ru: "Сырный суп", en: "Cheese soup", ar: "شوربة الجبن" },
    price: 200,
  },
  {
    id: "lentil-soup",
    categoryId: "soups",
    name: { ru: "Чечевичный суп", en: "Lentil soup", ar: "شوربة العدس" },
    price: 180,
  },
  {
    id: "meatball-soup",
    categoryId: "soups",
    name: {
      ru: "Суп с тефтелями",
      en: "Meatball soup",
      ar: "شوربة كرات اللحم",
    },
    price: 240,
  },
  {
    id: "tom-yum",
    categoryId: "soups",
    name: {
      ru: "Том Ям с курицей",
      en: "Chicken Tom Yum",
      ar: "توم يام بالدجاج",
    },
    price: 290,
  },
  {
    id: "nokhchi-chorpa",
    categoryId: "soups",
    name: {
      ru: "Нохчи чорпа",
      en: "Nokhchi chorpa",
      ar: "نوخشي تشوربا",
    },
    price: 220,
  },

  // ── Salads ─────────────────────────────────────────────────
  {
    id: "olivier",
    categoryId: "salads",
    name: { ru: "Оливье", en: "Olivier salad", ar: "سلطة أوليفييه" },
    price: 140,
  },
  {
    id: "crab-salad",
    categoryId: "salads",
    name: { ru: "Крабовый салат", en: "Crab stick salad", ar: "سلطة الكراب" },
    price: 140,
  },
  {
    id: "vinegret",
    categoryId: "salads",
    name: { ru: "Винегрет", en: "Vinegret", ar: "سلطة فينيغريت" },
    price: 140,
  },
  {
    id: "carrot-salad",
    categoryId: "salads",
    name: { ru: "Морковный салат", en: "Carrot salad", ar: "سلطة الجزر" },
    price: 100,
  },
  {
    id: "pickled-cucumbers",
    categoryId: "salads",
    name: { ru: "Солёные огурцы", en: "Pickled cucumbers", ar: "خيار مخلل" },
    price: 25,
  },
  {
    id: "cabbage-salad",
    categoryId: "salads",
    name: { ru: "Капустный салат", en: "Cabbage salad", ar: "سلطة الملفوف" },
    price: 100,
  },
  {
    id: "green-tomatoes",
    categoryId: "salads",
    name: { ru: "Зелёные помидоры", en: "Green tomatoes", ar: "طماطم خضراء" },
    price: 120,
  },
  {
    id: "caesar",
    categoryId: "salads",
    name: { ru: "Цезарь", en: "Caesar salad", ar: "سلطة سيزر" },
    price: 160,
  },

  // ── Main dishes ────────────────────────────────────────────
  {
    id: "goulash",
    categoryId: "mains",
    name: { ru: "Гуляш", en: "Goulash", ar: "جولاش" },
    price: 210,
  },
  {
    id: "thai-meat",
    categoryId: "mains",
    name: {
      ru: "Мясо по-тайски",
      en: "Thai-style meat",
      ar: "لحم على الطريقة التايلاندية",
    },
    price: 200,
  },
  {
    id: "chicken-cream-sauce",
    categoryId: "mains",
    name: {
      ru: "Курица в сливочном соусе",
      en: "Chicken in cream sauce",
      ar: "دجاج بصلصة الكريمة",
    },
    price: 210,
  },
  {
    id: "meat-cream-sauce",
    categoryId: "mains",
    name: {
      ru: "Мясо в сливочном соусе",
      en: "Meat in cream sauce",
      ar: "لحم بصلصة الكريمة",
    },
    price: 210,
  },
  {
    id: "meat-ragout",
    categoryId: "mains",
    name: { ru: "Рагу с мясом", en: "Meat ragout", ar: "يخنة اللحم" },
    price: 240,
  },
  {
    id: "meat-cutlet",
    categoryId: "mains",
    name: { ru: "Котлета мясная", en: "Meat cutlet", ar: "كفتة اللحم" },
    price: 90,
  },
  {
    id: "chicken-cutlet",
    categoryId: "mains",
    name: { ru: "Котлета куриная", en: "Chicken cutlet", ar: "كفتة الدجاج" },
    price: 80,
  },
  {
    id: "baked-chicken-leg",
    categoryId: "mains",
    name: {
      ru: "Окорочок запечённый",
      en: "Baked chicken leg",
      ar: "فخذ دجاج بالفرن",
    },
    price: 210,
  },
  {
    id: "homemade-sausage",
    categoryId: "mains",
    name: {
      ru: "Колбаса домашняя",
      en: "Homemade sausage",
      ar: "نقانق منزلية",
    },
    price: 210,
  },
  {
    id: "chicken-kyiv",
    categoryId: "mains",
    name: {
      ru: "Котлета по-киевски",
      en: "Chicken Kyiv",
      ar: "دجاج بالطريقة الكييفية",
    },
    price: 140,
  },
  {
    id: "baked-fish",
    categoryId: "mains",
    name: { ru: "Рыба запечённая", en: "Baked fish", ar: "سمك بالفرن" },
    price: 170,
  },
  {
    id: "meat-casserole",
    categoryId: "mains",
    name: {
      ru: "Мясная запеканка",
      en: "Meat casserole",
      ar: "طاجن اللحم بالفرن",
    },
    price: 230,
  },
  {
    id: "baked-mushrooms",
    categoryId: "mains",
    name: {
      ru: "Грибы запечённые",
      en: "Baked mushrooms",
      ar: "فطر بالفرن",
    },
    price: 120,
  },
  {
    id: "chicken-breast",
    categoryId: "mains",
    name: { ru: "Куриная грудка", en: "Chicken breast", ar: "صدر دجاج" },
    price: 170,
  },
  {
    id: "chicken-curry",
    categoryId: "mains",
    name: { ru: "Карри с курицей", en: "Chicken curry", ar: "كاري الدجاج" },
    price: 180,
  },
  {
    id: "caucasian-liver",
    categoryId: "mains",
    name: {
      ru: "Печень по-кавказски",
      en: "Caucasian-style liver",
      ar: "كبدة على الطريقة القوقازية",
    },
    price: 160,
  },

  // ── Indian dishes ──────────────────────────────────────────
  {
    id: "rogan-josh",
    categoryId: "indian",
    name: { ru: "Роган Джош", en: "Rogan Josh", ar: "روغان جوش" },
    price: 250,
  },
  {
    id: "madras-curry",
    categoryId: "indian",
    name: { ru: "Мадрас Карри", en: "Madras Curry", ar: "كاري مدراس" },
    price: 230,
  },
  {
    id: "chicken-korma",
    categoryId: "indian",
    name: { ru: "Корма Чиккен", en: "Chicken Korma", ar: "كورما الدجاج" },
    price: 210,
  },
  {
    id: "chicken-65",
    categoryId: "indian",
    name: { ru: "Chicken 65", en: "Chicken 65", ar: "تشيكن 65" },
    price: 300,
  },
  {
    id: "tandoori-chicken",
    categoryId: "indian",
    name: { ru: "Тандури курица", en: "Tandoori chicken", ar: "دجاج تندوري" },
    price: 250,
  },
  {
    id: "tikka-masala",
    categoryId: "indian",
    name: { ru: "Тикка масала", en: "Tikka Masala", ar: "تيكا ماسالا" },
    price: 250,
  },

  // ── Plov & biryani ─────────────────────────────────────────
  {
    id: "tajik-plov",
    categoryId: "plov",
    name: { ru: "Таджикский плов", en: "Tajik plov", ar: "بلوف طاجيكي" },
    price: 330,
    featured: true,
  },
  {
    id: "beef-biryani",
    categoryId: "plov",
    name: {
      ru: "Бирьяни с говядиной",
      en: "Beef biryani",
      ar: "برياني باللحم البقري",
    },
    price: 400,
    featured: true,
  },
  {
    id: "chicken-biryani",
    categoryId: "plov",
    name: {
      ru: "Бирьяни с курицей",
      en: "Chicken biryani",
      ar: "برياني بالدجاج",
    },
    price: 300,
    featured: true,
  },
  {
    id: "dungan-plov",
    categoryId: "plov",
    name: { ru: "Дунганский плов", en: "Dungan plov", ar: "بلوف دونغاني" },
    price: 350,
    featured: true,
  },

  // ── Side dishes ────────────────────────────────────────────
  {
    id: "buckwheat",
    categoryId: "sides",
    name: { ru: "Гречка", en: "Buckwheat", ar: "حنطة سوداء" },
    price: 80,
  },
  {
    id: "pasta",
    categoryId: "sides",
    name: { ru: "Макароны", en: "Pasta", ar: "معكرونة" },
    price: 80,
  },
  {
    id: "mashed-potatoes",
    categoryId: "sides",
    name: {
      ru: "Картофельное пюре",
      en: "Mashed potatoes",
      ar: "بطاطس مهروسة",
    },
    price: 80,
  },
  {
    id: "hawaiian-rice",
    categoryId: "sides",
    name: {
      ru: "Рис по-гавайски",
      en: "Hawaiian-style rice",
      ar: "أرز على الطريقة الهاوايية",
    },
    price: 80,
  },
  {
    id: "spaghetti",
    categoryId: "sides",
    name: { ru: "Спагетти", en: "Spaghetti", ar: "سباغيتي" },
    price: 80,
  },
  {
    id: "baked-potatoes",
    categoryId: "sides",
    name: {
      ru: "Картофель запечённый",
      en: "Baked potatoes",
      ar: "بطاطس بالفرن",
    },
    price: 90,
  },
  {
    id: "basmati-rice",
    categoryId: "sides",
    name: { ru: "Рис басмати", en: "Basmati rice", ar: "أرز بسمتي" },
    price: 100,
  },
  {
    id: "navy-pasta",
    categoryId: "sides",
    name: {
      ru: "Макароны по-флотски",
      en: "Navy-style pasta",
      ar: "معكرونة باللحم المفروم",
    },
    price: 160,
  },

  // ── Desserts ───────────────────────────────────────────────
  {
    id: "raspberry-jam",
    categoryId: "desserts",
    name: {
      ru: "Варенье малиновое",
      en: "Raspberry jam",
      ar: "مربى توت العليق",
    },
    price: 80,
  },
  {
    id: "white-cherry-jam",
    categoryId: "desserts",
    name: {
      ru: "Варенье из белой вишни",
      en: "White cherry jam",
      ar: "مربى الكرز الأبيض",
    },
    price: 80,
  },
  {
    id: "pumpkin-orange-jam",
    categoryId: "desserts",
    name: {
      ru: "Варенье «Тыква-апельсин»",
      en: "Pumpkin & orange jam",
      ar: "مربى اليقطين والبرتقال",
    },
    price: 80,
  },

  // ── Hot drinks ─────────────────────────────────────────────
  {
    id: "espresso",
    categoryId: "hot-drinks",
    name: { ru: "Эспрессо", en: "Espresso", ar: "إسبريسو" },
    price: 150,
  },
  {
    id: "americano",
    categoryId: "hot-drinks",
    name: { ru: "Американо", en: "Americano", ar: "أمريكانو" },
    price: 180,
  },
  {
    id: "cappuccino",
    categoryId: "hot-drinks",
    name: { ru: "Капучино", en: "Cappuccino", ar: "كابتشينو" },
    price: [200, 250],
    size: HOT_SIZES,
  },
  {
    id: "flat-white",
    categoryId: "hot-drinks",
    name: { ru: "Флэт Уайт", en: "Flat White", ar: "فلات وايت" },
    price: [200, 250],
    size: HOT_SIZES,
  },
  {
    id: "latte",
    categoryId: "hot-drinks",
    name: { ru: "Латте", en: "Latte", ar: "لاتيه" },
    price: [200, 250],
    size: HOT_SIZES,
  },
  {
    id: "raf-citrus",
    categoryId: "hot-drinks",
    name: { ru: "Раф «Цитрус»", en: "Citrus Raf", ar: "راف الحمضيات" },
    price: [250, 300],
    size: HOT_SIZES,
  },
  {
    id: "raf-urbech",
    categoryId: "hot-drinks",
    name: { ru: "Раф «Урбеч»", en: "Urbech Raf", ar: "راف أوربيتش" },
    price: [250, 300],
    size: HOT_SIZES,
  },
  {
    id: "hot-chocolate",
    categoryId: "hot-drinks",
    name: {
      ru: "Горячий шоколад",
      en: "Hot chocolate",
      ar: "شوكولاتة ساخنة",
    },
    price: [200, 250],
    size: HOT_SIZES,
  },

  // ── Cold drinks ────────────────────────────────────────────
  {
    id: "espresso-tonic",
    categoryId: "cold-drinks",
    name: { ru: "Эспрессо тоник", en: "Espresso tonic", ar: "إسبريسو تونيك" },
    price: 200,
  },
  {
    id: "iced-urbech",
    categoryId: "cold-drinks",
    name: { ru: "Айс урбеч", en: "Iced Urbech", ar: "أوربيتش مثلج" },
    price: [280, 330],
    size: COLD_SIZES,
  },
  {
    id: "iced-latte",
    categoryId: "cold-drinks",
    name: { ru: "Айс латте", en: "Iced latte", ar: "لاتيه مثلج" },
    price: [280, 330],
    size: COLD_SIZES,
  },
  {
    id: "bumble",
    categoryId: "cold-drinks",
    name: { ru: "Бамбл", en: "Bumble", ar: "بامبل" },
    price: 300,
  },
  {
    id: "pomegranate-tonic",
    categoryId: "cold-drinks",
    name: {
      ru: "Гранатовый тоник",
      en: "Pomegranate tonic",
      ar: "تونيك الرمان",
    },
    price: 250,
  },
  {
    id: "blackberry-bazaar",
    categoryId: "cold-drinks",
    name: {
      ru: "Ежевичный базар",
      en: "Blackberry Bazaar",
      ar: "«بازار التوت الأسود»",
    },
    description: {
      ru: "Фирменный напиток Райдан",
      en: "Raydan signature drink",
      ar: "مشروب رايدان المميز",
    },
    price: 250,
    featured: true,
  },
  {
    id: "kiwi-apple",
    categoryId: "cold-drinks",
    name: { ru: "Киви-яблоко", en: "Kiwi & apple", ar: "كيوي وتفاح" },
    price: 250,
  },
  {
    id: "taste-of-summer",
    categoryId: "cold-drinks",
    name: { ru: "Вкус лета", en: "Taste of Summer", ar: "طعم الصيف" },
    price: 250,
  },

  // ── Lemonades ──────────────────────────────────────────────
  {
    id: "mango-passionfruit",
    categoryId: "lemonades",
    name: {
      ru: "Манго-маракуйя",
      en: "Mango & passion fruit",
      ar: "مانجو وباشن فروت",
    },
    price: 200,
  },
  {
    id: "citrus-lemonade",
    categoryId: "lemonades",
    name: { ru: "Цитрусовый", en: "Citrus", ar: "حمضيات" },
    price: 200,
  },
  {
    id: "pear-lemonade",
    categoryId: "lemonades",
    name: { ru: "Грушевый", en: "Pear", ar: "كمثرى" },
    price: 200,
  },
  {
    id: "berry-lemonade",
    categoryId: "lemonades",
    name: { ru: "Ягодный", en: "Berry", ar: "توت مشكل" },
    price: 200,
  },
  {
    id: "watermelon-melon",
    categoryId: "lemonades",
    name: {
      ru: "Арбуз-дыня",
      en: "Watermelon & melon",
      ar: "بطيخ وشمام",
    },
    price: 200,
  },

  // ── Alternative drinks ─────────────────────────────────────
  {
    id: "fresh-orange",
    categoryId: "alt-drinks",
    name: {
      ru: "Фреш апельсиновый",
      en: "Fresh orange juice",
      ar: "عصير برتقال طازج",
    },
    price: 250,
  },
  {
    id: "fresh-apple",
    categoryId: "alt-drinks",
    name: {
      ru: "Фреш яблочный",
      en: "Fresh apple juice",
      ar: "عصير تفاح طازج",
    },
    price: 250,
  },
  {
    id: "glintwein",
    categoryId: "alt-drinks",
    name: { ru: "Глинтвейн", en: "Glintwein", ar: "جلينتفاين" },
    price: 200,
  },
];

/** Items shown in the dedicated signature plov section. */
export const signatureItems = menuItems.filter(
  (item) => item.categoryId === "plov",
);

export function itemsByCategory(categoryId: string): MenuItem[] {
  return menuItems.filter((item) => item.categoryId === categoryId);
}
