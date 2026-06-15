export type CartItem = {
  product: Product;
  quantity: number;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  size?: string;
  price: number;
  description: string;
  popular?: boolean;
  image?: string;
};

export type Category = {
  id: string;
  title: string;
  description: string;
  products: Product[];
};

export const BUSINESS = {
  name: "Missfiah Organic Products",
  shortName: "Missfiah",
  tagline: "Natural Glow, Everyday Confidence",
  location: "Kariakoo, Dar es Salaam, Tanzania",
  whatsapp: "+255679294595",
  whatsappLink: "https://wa.me/+255679294595",
  instagram: "@missfiahproducts_",
  instagramLink: "https://instagram.com/missfiahproducts_",
  year: 2026,
  logo: "/Logo.png",
  favicon: "/the-favicon.png",
  whatsappLogo: "/whatsapp.png",
  heroVideo: "/Background video.mp4",
  aboutImage: "/About us page.jpeg",
};

export const UNIFORM_PRICE = 50000;

export const CATEGORIES: Category[] = [
  {
    id: "organic-oil",
    title: "Missfiah Organic Oil",
    description:
      "Our signature body oil collection comes in different variants for different skincare needs and preferences.",
    products: [
      {
        id: "vitamin-c-oil",
        name: "Vitamin C Organic Oil",
        category: "Body Oil",
        size: "300ml",
        price: UNIFORM_PRICE,
        description:
          "A Vitamin C-inspired body oil for customers who want a fresh, bright, and glowing skin routine.",
        popular: true,
        image: "/Missfiah Organic Oil.png",
      },
      {
        id: "24k-gold-oil",
        name: "24K Gold Organic Oil",
        category: "Body Oil",
        size: "300ml",
        price: UNIFORM_PRICE,
        description:
          "A premium body oil option with a luxurious gold-inspired skincare feel.",
        popular: true,
        image: "/missfiah 24k gold.png",
      },
      {
        id: "retinol-oil",
        name: "Retinol Organic Oil",
        category: "Body Oil",
        size: "300ml",
        price: UNIFORM_PRICE,
        description:
          "A Retinol-inspired body oil designed for customers who prefer advanced-looking beauty care products.",
        image: "/missfiah retinol.png",
      },
      {
        id: "almond-oil",
        name: "Almond Organic Oil",
        category: "Body Oil",
        size: "300ml",
        price: UNIFORM_PRICE,
        description:
          "An almond-inspired body oil for smooth, soft, and nourished-looking skin.",
        image: "/Missfiah-almond.png",
      },
      {
        id: "carrot-oil",
        name: "Carrot Organic Oil",
        category: "Body Oil",
        size: "300ml",
        price: UNIFORM_PRICE,
        description:
          "A carrot-inspired body oil for customers who love rich, glowing body care products.",
      },
    ],
  },
  {
    id: "glow-serum",
    title: "Missfiah Organic Glow Serum",
    description:
      "A beauty serum designed for people who want a glowing, smooth, and radiant skin appearance.",
    products: [
      {
        id: "intensive-glow-serum",
        name: "Intensive Glow Serum",
        category: "Glow Serum",
        price: UNIFORM_PRICE,
        description:
          "A glow-focused serum created for customers who want to support a radiant, polished, and beautiful skin appearance.",
        popular: true,
      },
    ],
  },
  {
    id: "organic-soap",
    title: "Missfiah Organic & Glow Soap",
    description:
      "Our soap collection is designed for daily cleansing and body care, with options inspired by popular skincare ingredients.",
    products: [
      {
        id: "turmeric-soap",
        name: "Turmeric Organic & Glow Soap",
        category: "Soap",
        price: UNIFORM_PRICE,
        description:
          "A turmeric-inspired soap for customers who enjoy natural-looking body care routines.",
        popular: true,
      },
      {
        id: "glutathione-kojic-soap",
        name: "Glutathione & Kojic Organic & Glow Soap",
        category: "Soap",
        price: UNIFORM_PRICE,
        description:
          "A soap option inspired by Glutathione and Kojic beauty care routines.",
      },
    ],
  },
  {
    id: "shower-gel",
    title: "Missfiah Shower Gel",
    description:
      "Missfiah Shower Gels are made for refreshing daily showers and a clean, smooth, and beautiful body care experience.",
    products: [
      {
        id: "glow-brightening-shower-gel",
        name: "Glow & Brightening Shower Gel",
        category: "Shower Gel",
        price: UNIFORM_PRICE,
        description:
          "A refreshing shower gel for customers who want a clean and glowing body care routine.",
      },
      {
        id: "pretty-polishing-body-wash",
        name: "Pretty Polishing Body Wash",
        category: "Body Wash",
        price: UNIFORM_PRICE,
        description:
          "A polishing body wash designed to leave the skin feeling fresh, clean, and smooth.",
      },
      {
        id: "vitamin-c-shower-gel",
        name: "Vitamin C Whitening Shower Gel",
        category: "Shower Gel",
        price: UNIFORM_PRICE,
        description:
          "A Vitamin C-inspired shower gel for customers who prefer brightening body care products.",
        popular: true,
      },
    ],
  },
];

export const ALL_PRODUCTS: Product[] = CATEGORIES.flatMap((c) => c.products);

export const POPULAR_PRODUCTS = ALL_PRODUCTS.filter((p) => p.popular);

export const WHY_CHOOSE = [
  {
    title: "Beautiful Skin Routine",
    description:
      "Our products are made to fit into your daily skincare routine, whether you use oils, soaps, serums, or shower gels.",
  },
  {
    title: "Wide Product Variety",
    description:
      "Choose from Vitamin C, Retinol, Almond, Carrot, 24K Gold, Turmeric, Kojic, and other popular beauty care options.",
  },
  {
    title: "Easy Ordering",
    description:
      "Customers can order directly through WhatsApp for quick communication and product assistance.",
  },
  {
    title: "Located in Dar es Salaam",
    description:
      "We are based in Kariakoo, making it easier for customers in Dar es Salaam and across Tanzania to reach us.",
  },
  {
    title: "Premium Beauty Look",
    description:
      "Our products are designed with a beautiful, luxurious, and clean presentation suitable for modern skincare lovers.",
  },
];

export const HOW_TO_ORDER = [
  {
    step: "01",
    title: "Browse Products",
    description: "View our oils, soaps, serums, and shower gels on the website.",
  },
  {
    step: "02",
    title: "Add to Cart",
    description: "Select the products you want and add them to your cart.",
  },
  {
    step: "03",
    title: "Checkout via WhatsApp",
    description:
      "Send your order directly to us on WhatsApp for confirmation, payment instructions, and delivery details.",
  },
  {
    step: "04",
    title: "Receive Your Products",
    description: "Get your Missfiah products and enjoy your skincare routine.",
  },
];

export const BLOG_POSTS = [
  {
    id: "daily-body-care-routine",
    title: "How to Build a Simple Daily Body Care Routine",
    excerpt:
      "A beginner-friendly guide on using shower gel, soap, oil, and serum in a simple daily routine.",
    category: "Routine",
  },
  {
    id: "body-oil-vs-lotion",
    title: "Body Oil vs Body Lotion: What Is the Difference?",
    excerpt:
      "A simple explanation of how body oils and lotions fit into skincare routines.",
    category: "Guide",
  },
  {
    id: "use-oil-after-shower",
    title: "How to Use Missfiah Organic Oil After Showering",
    excerpt:
      "A practical guide on applying body oil after bathing for a soft and glowing appearance.",
    category: "Tips",
  },
  {
    id: "vitamin-c-popular",
    title: "Why Vitamin C Is Popular in Beauty Products",
    excerpt:
      "A simple article explaining why many skincare lovers choose Vitamin C-inspired products.",
    category: "Ingredients",
  },
  {
    id: "choose-right-oil",
    title: "How to Choose the Right Missfiah Oil for Your Skin Routine",
    excerpt:
      "A guide comparing Vitamin C, Almond, Carrot, Retinol, and 24K Gold options.",
    category: "Guide",
  },
  {
    id: "consistent-routine-benefits",
    title: "Benefits of Having a Consistent Body Care Routine",
    excerpt:
      "An article about consistency, hydration, cleansing, and daily self-care.",
    category: "Wellness",
  },
  {
    id: "shower-gel-or-soap",
    title: "Shower Gel or Soap: Which One Should You Use?",
    excerpt:
      "A helpful guide explaining how both products can be used depending on preference.",
    category: "Guide",
  },
  {
    id: "fresh-in-hot-weather",
    title: "How to Keep Your Skin Looking Fresh in Hot Weather",
    excerpt:
      "Tips for customers in Tanzania on cleansing, moisturizing, and staying fresh.",
    category: "Tips",
  },
  {
    id: "what-makes-glow-product",
    title: "What Makes a Good Glow Product?",
    excerpt:
      "A simple guide on texture, routine, ingredients, and customer expectations.",
    category: "Ingredients",
  },
  {
    id: "how-to-order-online",
    title: "How to Order Missfiah Products Online",
    excerpt:
      "A customer guide explaining how to browse, add to cart, and complete orders via WhatsApp.",
    category: "Ordering",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function formatPrice(price: number): string {
  return `Tsh ${new Intl.NumberFormat("en-TZ").format(price)}`;
}
