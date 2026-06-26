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
  image: string;
  products: Product[];
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  content: string;
};

export const BUSINESS = {
  name: "Missfiah Organic Products",
  shortName: "Missfiah",
  tagline: "Natural Glow, Everyday Confidence",
  location: "34 Mafia St, Kariakoo, Dar es Salaam, Tanzania",
  mapLink: "https://maps.app.goo.gl/XqAsGU566zhbSNHVA",
  whatsapp: "+255679294595",
  whatsappLink: "https://wa.me/+255679294595",
  instagram: "@missfiahproducts_",
  instagramLink: "https://instagram.com/missfiahproducts_",
  facebook: "@missfiahproducts_",
  facebookLink: "https://www.facebook.com/profile.php?id=61576512292381",
  tiktok: "@missfiahproducts_",
  tiktokLink: "https://www.tiktok.com/@missfiahproducts_",
  year: 2026,
  logo: "/Logo.png",
  favicon: "/the-favicon.png",
  whatsappLogo: "/whatsapp.png",
  heroVideo: "/Background video.mp4",
  aboutImage: "/About us section of homepage.jpeg",
};

export const UNIFORM_PRICE = 50000;

export const CATEGORIES: Category[] = [
  {
    id: "organic-oil",
    title: "Missfiah Organic Oil",
    description:
      "Our signature body oil collection comes in different variants for different skincare needs and preferences.",
    image: "/category-oils.png",
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
        image: "/product-oil-vitamins.png",
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
        image: "/product-oil-24k-gold.png",
      },
      {
        id: "retinol-oil",
        name: "Retinol Organic Oil",
        category: "Body Oil",
        size: "300ml",
        price: UNIFORM_PRICE,
        description:
          "A Retinol-inspired body oil designed for customers who prefer advanced-looking beauty care products.",
        image: "/product-oil-retinol.png",
      },
      {
        id: "almond-oil",
        name: "Almond Organic Oil",
        category: "Body Oil",
        size: "300ml",
        price: UNIFORM_PRICE,
        description:
          "A nourishing face and body oil that helps moisturize, soften and condition dry-looking skin. Ideal for daily body care and massage, it leaves the skin feeling smooth, supple and naturally radiant.",
        image: "/product-oil-almond.png",
      },
    ],
  },
  {
    id: "glow-serum",
    title: "Missfiah Organic Glow Serum",
    description:
      "A beauty serum designed for people who want a glowing, smooth, and radiant skin appearance.",
    image: "/category-serum.png",
    products: [
      {
        id: "intensive-glow-serum",
        name: "Intensive Glow Serum",
        category: "Glow Serum",
        price: UNIFORM_PRICE,
        description:
          "A glow-focused serum created for customers who want to support a radiant, polished, and beautiful skin appearance.",
        popular: true,
        image: "/intensive glow serum-Photoroom.png",
      },
    ],
  },
  {
    id: "organic-soap",
    title: "Missfiah Organic & Glow Soap",
    description:
      "Our soap collection is designed for daily cleansing and body care, with options inspired by popular skincare ingredients.",
    image: "/category-soaps.png",
    products: [
      {
        id: "turmeric-soap",
        name: "Turmeric Organic & Glow Soap",
        category: "Soap",
        price: UNIFORM_PRICE,
        description:
          "A turmeric-inspired soap for customers who enjoy natural-looking body care routines.",
        popular: true,
        image: "/product-soap-turmeric.png",
      },
      {
        id: "glutathione-kojic-soap",
        name: "Glutathione & Kojic Organic & Glow Soap",
        category: "Soap",
        price: UNIFORM_PRICE,
        description:
          "A soap option inspired by Glutathione and Kojic beauty care routines.",
        image: "/product-soap-intensive-glow.png",
      },
    ],
  },
  {
    id: "shower-gel",
    title: "Missfiah Shower Gel",
    description:
      "Missfiah Shower Gels are made for refreshing daily showers and a clean, smooth, and beautiful body care experience.",
    image: "/category-showergels.png",
    products: [
      {
        id: "glow-brightening-shower-gel",
        name: "Glow & Brightening Shower Gel",
        category: "Shower Gel",
        price: UNIFORM_PRICE,
        description:
          "A refreshing shower gel for customers who want a clean and glowing body care routine.",
        image: "/product-showergel-glow-brightening.png",
      },
      {
        id: "pretty-polishing-body-wash",
        name: "Pretty Polishing Body Wash",
        category: "Body Wash",
        price: UNIFORM_PRICE,
        description:
          "A polishing body wash designed to leave the skin feeling fresh, clean, and smooth.",
        image: "/product-showergel-pretty-polishing.png",
      },
      {
        id: "vitamin-c-shower-gel",
        name: "Vitamin C Whitening Shower Gel",
        category: "Shower Gel",
        price: UNIFORM_PRICE,
        description:
          "A Vitamin C-inspired shower gel for customers who prefer brightening body care products.",
        popular: true,
        image: "/product-showergel-vitamin-c.png",
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
      "Choose from Vitamin C, Retinol, Almond, 24K Gold, Turmeric, Kojic, and other popular beauty care options.",
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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "daily-body-care-routine",
    title: "How to Build a Simple Daily Body Care Routine",
    excerpt:
      "A beginner-friendly guide on using shower gel, soap, oil, and serum in a simple daily routine.",
    category: "Routine",
    readTime: "3 min read",
    content: `A good body care routine does not have to be complicated. With just four steps, you can keep your skin feeling clean, soft, and refreshed every day.

Start with a warm shower and a gentle shower gel. This washes away sweat, dirt, and oil that build up on the skin. In the evening, you can also use a body soap for an extra clean feeling.

After your shower, pat your skin dry with a soft towel. While the skin is still slightly damp, apply a body oil. This helps lock in moisture and gives the skin a smooth, glowing look.

Next, use a serum if you want to add a brightening step. A small amount massaged into the skin can support a more radiant appearance over time.

Finally, drink water and be consistent. A simple daily routine works best when you follow it regularly.`,
  },
  {
    id: "body-oil-vs-lotion",
    title: "Body Oil vs Body Lotion: What Is the Difference?",
    excerpt:
      "A simple explanation of how body oils and lotions fit into skincare routines.",
    category: "Guide",
    readTime: "3 min read",
    content: `Body oils and body lotions both help the skin feel soft, but they work in different ways.

Body lotions are usually water-based. They feel light and absorb quickly. They are a good choice for a quick morning routine or when the weather is warm.

Body oils are thicker and richer. They create a protective layer on the skin that helps it stay hydrated for longer. Oils are great after a shower or before bed.

If your skin often feels dry, a body oil can give you longer-lasting softness. If you prefer something light during the day, a lotion may feel better.

Many people use both. They apply lotion in the morning and oil in the evening. Try different options to see what your skin likes best.`,
  },
  {
    id: "use-oil-after-shower",
    title: "How to Use Missfiah Organic Oil After Showering",
    excerpt:
      "A practical guide on applying body oil after bathing for a soft and glowing appearance.",
    category: "Tips",
    readTime: "3 min read",
    content: `The best time to apply body oil is right after a shower. Your skin is clean and slightly damp, which helps the oil spread easily and absorb well.

First, take a warm shower using your favorite Missfiah shower gel or soap. After showering, gently pat your skin with a towel. Do not rub too hard.

Pour a small amount of Missfiah Organic Oil into your palm. Rub your hands together to warm it up. Then massage it into your arms, legs, and body using gentle, upward motions.

Pay extra attention to areas that feel dry, like elbows and knees. Allow the oil a few minutes to settle before getting dressed.

Using oil after every shower can help your skin look smoother, softer, and more glowing over time.`,
  },
  {
    id: "vitamin-c-popular",
    title: "Why Vitamin C Is Popular in Beauty Products",
    excerpt:
      "A simple article explaining why many skincare lovers choose Vitamin C-inspired products.",
    category: "Ingredients",
    readTime: "3 min read",
    content: `Vitamin C is one of the most talked-about ingredients in beauty and skincare. It is popular because many people believe it helps the skin look brighter and fresher.

Vitamin C-inspired products are often used in body oils, serums, and shower gels. They are designed to support a glowing, healthy-looking skin appearance.

These products are usually gentle enough for daily use. They fit easily into a morning or evening routine and can be paired with other products like moisturizers and sun protection.

When choosing a Vitamin C product, look for one that feels good on your skin and is easy to use every day. Consistency is what brings the best results.

Missfiah Vitamin C Organic Oil and Vitamin C Whitening Shower Gel are great options for anyone who wants to add this ingredient to their body care routine.`,
  },
  {
    id: "choose-right-oil",
    title: "How to Choose the Right Missfiah Oil for Your Skin Routine",
    excerpt:
      "A guide comparing Vitamin C, Almond, Retinol, and 24K Gold options.",
    category: "Guide",
    readTime: "3 min read",
    content: `Missfiah Organic Oils come in different variants, so you can choose one that fits your routine.

Vitamin C Organic Oil is a good choice if you want a fresh, bright look. 24K Gold Organic Oil offers a more luxurious feel. Retinol Organic Oil is popular with people who want an advanced-looking skincare routine.

Almond Organic Oil is gentle and helps the skin feel soft and nourished.

Think about what your skin needs and what you enjoy using. You can also switch between oils depending on the season or time of day.

If you are unsure, send us a message on WhatsApp and we will help you choose.`,
  },
  {
    id: "consistent-routine-benefits",
    title: "Benefits of Having a Consistent Body Care Routine",
    excerpt:
      "An article about consistency, hydration, cleansing, and daily self-care.",
    category: "Wellness",
    readTime: "3 min read",
    content: `A consistent body care routine is one of the simplest ways to keep your skin looking and feeling its best.

Cleansing every day removes dirt, sweat, and oil. This helps the skin stay fresh and reduces the chance of clogged pores or irritation.

Moisturizing with oils or lotions keeps the skin soft and hydrated. When the skin is well-hydrated, it looks smoother and healthier.

A routine also gives you a few minutes of self-care each day. Taking time for yourself can help you feel more confident and relaxed.

The key is to be patient. Results come from doing small things regularly, not from using many products once in a while.`,
  },
  {
    id: "shower-gel-or-soap",
    title: "Shower Gel or Soap: Which One Should You Use?",
    excerpt:
      "A helpful guide explaining how both products can be used depending on preference.",
    category: "Guide",
    readTime: "3 min read",
    content: `Both shower gel and soap are good for cleansing the skin. The right choice depends on your skin type and personal preference.

Shower gel has a liquid texture and usually creates a rich lather. It is easy to use with a sponge or loofah and feels refreshing.

Soap is solid and long-lasting. It is a simple, classic option for daily washing. Many people like the clean feeling soap provides.

If you have dry skin, a moisturizing shower gel may feel gentler. If you prefer a deep clean, a soap bar might be your favorite.

You can also use both. Some people use soap in the morning and shower gel in the evening. Choose what works for your lifestyle.`,
  },
  {
    id: "fresh-in-hot-weather",
    title: "How to Keep Your Skin Looking Fresh in Hot Weather",
    excerpt:
      "Tips for customers in Tanzania on cleansing, moisturizing, and staying fresh.",
    category: "Tips",
    readTime: "3 min read",
    content: `Hot weather can make the skin feel sticky and tired. With the right routine, you can stay fresh and comfortable all day.

Start your morning with a cool shower and a refreshing shower gel. This wakes up the skin and removes sweat from the night.

After showering, use a light body oil or skip heavy products if your skin feels oily. A small amount of Missfiah Organic Oil can still keep the skin soft without feeling greasy.

During the day, wear loose clothing and drink plenty of water. If you spend time outside, protect your skin from strong sun.

In the evening, cleanse again and apply your favorite oil or serum before bed. This helps the skin recover overnight.`,
  },
  {
    id: "what-makes-glow-product",
    title: "What Makes a Good Glow Product?",
    excerpt:
      "A simple guide on texture, routine, ingredients, and customer expectations.",
    category: "Ingredients",
    readTime: "3 min read",
    content: `A good glow product is one that makes your skin look healthy, smooth, and radiant without feeling heavy or greasy.

Texture matters. The product should spread easily and absorb well. If it feels too thick or sticky, you may not enjoy using it every day.

The ingredients should support a bright appearance. Look for products inspired by Vitamin C, gold, turmeric, or other popular beauty ingredients.

A good glow product also fits into your routine. It should be easy to apply and work well with your other products.

Most importantly, use it consistently. A glow product works best when it becomes a regular part of your daily body care routine.`,
  },
  {
    id: "how-to-order-online",
    title: "How to Order Missfiah Products Online",
    excerpt:
      "A customer guide explaining how to browse, add to cart, and complete orders via WhatsApp.",
    category: "Ordering",
    readTime: "3 min read",
    content: `Ordering Missfiah Organic Products online is quick and easy.

First, visit our Products page and browse our collection. You will find organic oils, glow serums, soaps, and shower gels.

Click "Add to Cart" on the items you want. You can view your cart at any time by clicking the cart icon in the top right corner.

When you are ready, click "Checkout on WhatsApp." This opens a WhatsApp message with your order details already filled in.

Send the message to us. We will confirm availability, share payment details, and arrange delivery. You can also message us directly on WhatsApp if you have questions before ordering.`,
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

export type MissfiahProductPopup = {
  id: string;
  slug: string;
  name: string;
  category: "Face Serum" | "Face Soap" | "Shower Gel";
  priceTzs: number;
  size: string | null;
  popular: boolean;
  shortDescription: string;
  benefits: string[];
  keyIngredients: string[];
  directions: string[];
  cautions: string[];
  fullIngredients: string;
};

export const missfiahProductPopups: MissfiahProductPopup[] = [
  {
    id: "intensive-glow-serum",
    slug: "intensive-glow-serum",
    name: "Intensive Glow Serum",
    category: "Face Serum",
    priceTzs: 50000,
    size: "40 ml / 1.35 fl oz",
    popular: true,

    shortDescription:
      "A concentrated facial serum formulated with niacinamide, salicylic acid and azelaic acid to support clearer, smoother and more even-looking skin. Its lightweight formula helps improve the appearance of blemishes, dark spots and uneven pigmentation while adding hydration to the skin.",

    benefits: [
      "Helps improve the appearance of blemishes",
      "Helps reduce the visible appearance of dark spots",
      "Supports a brighter and more even-looking complexion",
      "Helps refine the appearance of uneven skin texture",
      "Provides lightweight hydration",
      "Suitable for all skin types",
    ],

    keyIngredients: [
      "Niacinamide",
      "Salicylic Acid (BHA)",
      "Azelaic Acid",
      "Glycerin",
      "Betaine",
      "Trehalose",
      "Hydrolyzed Collagen",
      "Willow Bark Extract",
      "Green botanical extracts",
    ],

    directions: [
      "Cleanse and dry the face and neck before application.",
      "Apply 3 to 4 drops of serum to the face and neck.",
      "Gently massage or press the serum into the skin until absorbed.",
      "Use in the morning and evening before applying moisturizer.",
      "When used during the day, follow with a suitable sunscreen.",
    ],

    cautions: [
      "For external use only.",
      "Avoid direct contact with the eyes.",
      "Patch test before first use.",
      "Discontinue use if irritation occurs.",
      "Keep out of reach of children.",
      "Store in a cool, dry and ventilated place.",
    ],

    fullIngredients:
      "Water, Niacinamide, Butylene Glycol, Glycerin, Trehalose, Glycereth-26, Betaine, 1,2-Hexanediol, Diethoxyethyl Succinate, Euglena Gracilis Polysaccharide, PEG/PPG/Polybutylene Glycol-8/5/3 Glycerin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, PEG-40 Hydrogenated Castor Oil, Hydroxyethylcellulose, Caprylhydroxamic Acid, Ethylhexylglycerin, Disodium EDTA, Hydrolyzed Collagen, Sodium Hydroxide, Fragrance, Sodium Polyacrylate, Anemarrhena Asphodeloides Root Extract, Pueraria Lobata Extract, Phellodendron Amurense Bark Extract, Salix Alba (Willow) Bark Extract, Cynanchum Atratum Extract, Sophora Japonica Bud Extract, Sophora Angustifolia Root Extract, Gynostemma Pentaphyllum Extract, Aspalathus Linearis Extract, Salvia Miltiorrhiza Extract, Sophora Flavescens Extract, Hydroxyacetophenone, Scutellaria Baicalensis Extract, Azelaic Acid and Salicylic Acid.",
  },

  {
    id: "turmeric-organic-glow-soap",
    slug: "turmeric-organic-glow-soap",
    name: "Turmeric Organic & Glow Soap",
    category: "Face Soap",
    priceTzs: 50000,
    size: "200 g",
    popular: true,

    shortDescription:
      "A traditional handmade cleansing soap formulated with turmeric, licorice, kelp extract and sweet almond shell powder. It cleanses and gently exfoliates the skin, helping it feel smoother, refreshed and more radiant.",

    benefits: [
      "Provides deep cleansing",
      "Helps remove dirt, excess oil and impurities",
      "Gently exfoliates the skin",
      "Helps improve the appearance of dull skin",
      "Supports a brighter and more even-looking complexion",
      "Helps improve the visible appearance of dark spots",
      "Leaves the skin feeling smooth and refreshed",
    ],

    keyIngredients: [
      "Turmeric Root Extract",
      "Licorice Root Extract",
      "Kelp Extract",
      "Glycerin",
      "Sweet Almond Shell Powder",
      "Vitamin C",
      "Soybean Oil",
    ],

    directions: [
      "Wet the face or body with clean water.",
      "Work the soap into a rich lather between the hands.",
      "Gently massage the lather over the skin.",
      "Avoid harsh scrubbing, especially on the face.",
      "Rinse completely with clean water.",
      "Follow with moisturizer.",
    ],

    cautions: [
      "For external use only.",
      "Avoid contact with the eyes.",
      "Do not apply to broken or irritated skin.",
      "Discontinue use if irritation occurs.",
      "Keep out of reach of children.",
      "Patch test before first use.",
    ],

    fullIngredients:
      "Sodium Cocoate and/or Sodium Palm Kernelate, Water (Aqua), Glycerin, Macrocystis Pyrifera (Kelp) Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Glycine Soja (Soybean) Oil, Curcuma Longa (Turmeric) Root Extract, Sodium Chloride, Tetrasodium Etidronate, Pentasodium Pentetate, Titanium Dioxide (CI 77891), Ascorbic Acid, Prunus Amygdalus Dulcis (Sweet Almond) Shell Powder, Fragrance (Parfum), Citronellol, Limonene, Hexyl Cinnamal, Hydroxycitronellal, Butylphenyl Methylpropional, Linalool and CI 19140.",
  },

  {
    id: "glutathione-kojic-organic-glow-soap",
    slug: "glutathione-kojic-organic-glow-soap",
    name: "Glutathione & Kojic Organic & Glow Soap",
    category: "Face Soap",
    priceTzs: 50000,
    size: "200 g",
    popular: false,

    shortDescription:
      "A handmade facial cleansing soap formulated with glutathione and kojic-inspired ingredients. It cleanses and exfoliates while helping the skin feel smoother, moisturized and refreshed, with a brighter and more even-looking appearance.",

    benefits: [
      "Provides deep facial cleansing",
      "Helps remove impurities and excess oil",
      "Gently exfoliates rough surface skin",
      "Helps improve the appearance of dullness",
      "Supports a brighter-looking complexion",
      "Helps improve the visible appearance of dark spots",
      "Leaves the skin feeling soft and smooth",
    ],

    keyIngredients: [
      "Glutathione",
      "Kojic ingredients",
      "Kelp Extract",
      "Glycerin",
      "Vitamin C",
      "Sweet Almond Shell Powder",
      "Soybean Oil",
    ],

    directions: [
      "Wet the face or body with clean water.",
      "Work the soap into a rich lather.",
      "Gently massage the lather over the skin.",
      "Avoid applying excessive pressure while exfoliating.",
      "Rinse completely with clean water.",
      "Follow with moisturizer.",
    ],

    cautions: [
      "For external use only.",
      "Avoid contact with the eyes.",
      "Do not apply to broken or irritated skin.",
      "Discontinue use if irritation occurs.",
      "Keep out of reach of children.",
      "Patch test before first use.",
    ],

    fullIngredients:
      "Sodium Cocoate and/or Sodium Palm Kernelate, Water (Aqua), Glycerin, Macrocystis Pyrifera (Kelp) Extract, Glutathione, Kojic-related Extract, Glycine Soja (Soybean) Oil, Sodium Chloride, Tetrasodium Etidronate, Pentasodium Pentetate, Titanium Dioxide (CI 77891), Ascorbic Acid, Prunus Amygdalus Dulcis (Sweet Almond) Shell Powder, Fragrance (Parfum), Citronellol, Limonene, Hexyl Cinnamal, Hydroxycitronellal, Butylphenyl Methylpropional, Linalool and CI 19140.",
  },

  {
    id: "glow-brightening-shower-gel",
    slug: "glow-brightening-shower-gel",
    name: "Glow & Brightening Shower Gel",
    category: "Shower Gel",
    priceTzs: 50000,
    size: "1000 ml / 33.8 fl oz",
    popular: false,

    shortDescription:
      "A refreshing foaming shower gel scrub formulated with vitamin C, vitamin E, collagen, sodium hyaluronate and jojoba esters. It cleanses and gently polishes the body, leaving the skin feeling fresh, smooth and radiant.",

    benefits: [
      "Cleanses away dirt, sweat and daily impurities",
      "Produces a rich and refreshing foam",
      "Gently exfoliates the skin",
      "Helps improve the appearance of dull skin",
      "Leaves the body feeling smoother and refreshed",
      "Supports a radiant and more even-looking complexion",
      "Provides a long-lasting fresh fragrance",
    ],

    keyIngredients: [
      "Vitamin C",
      "Vitamin E",
      "Collagen",
      "Sodium Hyaluronate",
      "Jojoba Esters",
      "Glycerin",
    ],

    directions: [
      "Apply a suitable amount to a wet sponge, washcloth or loofah.",
      "Massage until a rich foam develops.",
      "Gently massage the foam over the body.",
      "Pay extra attention to rough areas such as elbows and knees.",
      "Rinse completely with clean or warm water.",
      "Follow with Missfiah body cream or moisturizer.",
    ],

    cautions: [
      "For external use only.",
      "Avoid direct contact with the eyes.",
      "Do not apply to broken or irritated skin.",
      "Discontinue use if irritation occurs.",
      "Keep out of reach of children.",
    ],

    fullIngredients:
      "Water, Sodium Laureth Sulfate, Sodium Lauryl Sulfate, Acrylates Copolymer, Palm Kernelamide DEA, Sodium Chloride, Fragrance, Potassium Hydroxide, Cocamidopropyl Betaine, PEG-40 Hydrogenated Castor Oil, Lactose, Laureth-7, Microcrystalline Cellulose, Glycerin, Ammonium Laureth Sulfate, Disodium EDTA, Sodium Benzoate, Propylene Glycol, Benzyl Alcohol, Hydroxypropyl Methylcellulose, Methylisothiazolinone, Zea Mays (Corn) Starch, CI 77491, Mannitol, Jojoba Esters, Ascorbic Acid, CI 16255, CI 12490, Sodium Hyaluronate, Tocopherol, Phenoxyethanol, Caprylyl Glycol, 1,2-Hexanediol, Benzoic Acid and Collagen.",
  },

  {
    id: "pretty-polishing-body-wash",
    slug: "pretty-polishing-body-wash",
    name: "Pretty Polishing Body Wash",
    category: "Shower Gel",
    priceTzs: 50000,
    size: null,
    popular: false,

    shortDescription:
      "A rich foaming body wash formulated with vitamin C, niacinamide, collagen, sodium hyaluronate and jojoba esters. It cleanses and gently polishes the body, helping the skin feel fresh, soft and smooth after every shower.",

    benefits: [
      "Deeply cleanses the body",
      "Helps remove sweat, dirt and daily impurities",
      "Gently exfoliates rough-feeling skin",
      "Leaves the skin feeling soft and polished",
      "Supports a fresh and radiant appearance",
      "Helps maintain a more even-looking complexion",
      "Provides a pleasant, long-lasting fragrance",
    ],

    keyIngredients: [
      "Vitamin C",
      "Niacinamide",
      "Collagen",
      "Sodium Hyaluronate",
      "Jojoba Esters",
      "Glycerin",
    ],

    directions: [
      "Apply a suitable amount to a wet sponge, washcloth or loofah.",
      "Massage until a thick foam develops.",
      "Gently massage the foam over the entire body.",
      "Avoid harsh scrubbing.",
      "Rinse completely with clean or warm water.",
      "Follow with body cream or moisturizer.",
    ],

    cautions: [
      "For external use only.",
      "Avoid direct contact with the eyes.",
      "Do not apply to broken or irritated skin.",
      "Discontinue use if irritation occurs.",
      "Keep out of reach of children.",
    ],

    fullIngredients:
      "Water, Sodium Laureth Sulfate, Sodium Lauryl Sulfate, Acrylates Copolymer, Palm Kernelamide DEA, Sodium Chloride, Fragrance, Glycol Distearate, Potassium Hydroxide, Cocamidopropyl Betaine, Lactose, Laureth-7, Microcrystalline Cellulose, Glycerin, Glycol Stearate, Ammonium Laureth Sulfate, Styrene/Acrylates Copolymer, Disodium EDTA, Sodium Benzoate, Propylene Glycol, Benzyl Alcohol, Coco-Glucoside, Methylisothiazolinone, Zea Mays (Corn) Starch, Hydroxypropyl Methylcellulose, CI 77891, Mannitol, Ascorbic Acid, Jojoba Esters, Citric Acid, Benzoic Acid, Sodium Hyaluronate, Niacinamide, 1,2-Hexanediol and Collagen.",
  },

  {
    id: "vitamin-c-whitening-shower-gel",
    slug: "vitamin-c-shower-gel",
    name: "Vitamin C Shower Gel Scrub",
    category: "Shower Gel",
    priceTzs: 50000,
    size: null,
    popular: true,

    shortDescription:
      "A Vitamin C-focused exfoliating shower gel formulated with ascorbic acid, collagen, sodium hyaluronate, jojoba esters, soybean extract and soapnut fruit extract. It produces a rich foam that cleanses and refreshes while leaving the body feeling smooth and radiant.",

    benefits: [
      "Cleanses away dirt, sweat and impurities",
      "Gently exfoliates dull and rough-feeling skin",
      "Leaves the body feeling fresh and smooth",
      "Supports a brighter and more radiant appearance",
      "Helps maintain a more even-looking complexion",
      "Provides a refreshing shower experience",
      "Produces a rich, luxurious foam",
    ],

    keyIngredients: [
      "Vitamin C",
      "Collagen",
      "Sodium Hyaluronate",
      "Jojoba Esters",
      "Soybean Seed Extract",
      "Soapnut Fruit Extract",
      "Glycerin",
    ],

    directions: [
      "Apply a suitable amount to a wet sponge, washcloth or loofah.",
      "Massage until a rich foam develops.",
      "Gently massage the foam over the entire body.",
      "Focus gently on rough areas such as the elbows and knees.",
      "Rinse completely with clean or warm water.",
      "Follow with body cream or moisturizer.",
    ],

    cautions: [
      "For external use only.",
      "Avoid direct contact with the eyes.",
      "Do not apply to broken or irritated skin.",
      "Discontinue use if irritation occurs.",
      "Keep out of reach of children.",
    ],

    fullIngredients:
      "Water, Sodium Laureth Sulfate, Sodium Lauryl Sulfate, Acrylates Copolymer, Sodium Chloride, Palm Kernelamide DEA, Fragrance, Potassium Hydroxide, Cocamidopropyl Betaine, Lactose, Microcrystalline Cellulose, Laureth-7, Glycerin, Ammonium Laureth Sulfate, Disodium EDTA, Sodium Benzoate, Propylene Glycol, Benzyl Alcohol, CI 77492, Methylisothiazolinone, Zea Mays (Corn) Starch, Hydroxypropyl Methylcellulose, Mannitol, CI 19140, Ascorbic Acid, Jojoba Esters, CI 16255, Sodium Hyaluronate, Maltoligosyl Glucoside, Xylitylglucoside, Hydrogenated Starch Hydrolysate, Anhydroxylitol, Glycine Soja (Soybean) Seed Extract, Sapindus Mukorossi Fruit Extract, Xylitol, 1,2-Hexanediol and Soluble Collagen.",
  },
];

export type ProductPopupData = {
  id: string;
  name: string;
  category: string;
  priceTzs: number | null;
  size: string | null;
  popular: boolean;
  status?: "ready" | "awaiting-product-information";
  tagline?: string | null;
  shortDescription: string | null;
  suitableFor?: string[];
  benefits: string[];
  keyIngredients: string[];
  directions: string[];
  cautions: string[];
  storage?: string | null;
  fullIngredients: string | null;
};

function popupToData(
  popup: MissfiahProductPopup | MissfiahOrganicOil
): ProductPopupData {
  return {
    id: popup.id,
    name: popup.name,
    category: popup.category,
    priceTzs: popup.priceTzs,
    size: popup.size,
    popular: popup.popular,
    status: "status" in popup ? popup.status : "ready",
    tagline: "tagline" in popup ? popup.tagline : undefined,
    shortDescription: popup.shortDescription,
    suitableFor: "suitableFor" in popup ? popup.suitableFor : undefined,
    benefits: popup.benefits,
    keyIngredients: popup.keyIngredients,
    directions: popup.directions,
    cautions: popup.cautions,
    storage: "storage" in popup ? popup.storage : undefined,
    fullIngredients: popup.fullIngredients,
  };
}

export function getProductPopup(
  productId: string
): ProductPopupData | undefined {
  // Non-oil products
  const nonOilDirect = missfiahProductPopups.find((p) => p.slug === productId);
  if (nonOilDirect) return popupToData(nonOilDirect);

  const nonOilFallbackMap: Record<string, string> = {
    "turmeric-soap": "turmeric-organic-glow-soap",
    "glutathione-kojic-soap": "glutathione-kojic-organic-glow-soap",
  };
  const nonOilSlug = nonOilFallbackMap[productId];
  if (nonOilSlug) {
    const popup = missfiahProductPopups.find((p) => p.slug === nonOilSlug);
    if (popup) return popupToData(popup);
  }

  // Organic oil products
  const oilMap: Record<string, string> = {
    "vitamin-c-oil": "vitamin-c-organic-oil",
    "24k-gold-oil": "24k-gold-organic-oil",
    "retinol-oil": "retinol-organic-oil",
    "almond-oil": "almond-organic-oil",
  };
  const oilId = oilMap[productId];
  if (oilId) {
    const oil = missfiahOrganicOils.find((p) => p.id === oilId);
    if (oil) return popupToData(oil);
  }

  return undefined;
}

export type MissfiahOrganicOil = {
  id: string;
  slug: string;
  name: string;
  category: "Organic Oil";
  image: string;
  priceTzs: number | null;
  size: string | null;
  popular: boolean;
  status: "ready" | "awaiting-product-information";
  tagline: string | null;
  shortDescription: string | null;
  suitableFor: string[];
  benefits: string[];
  keyIngredients: string[];
  directions: string[];
  cautions: string[];
  storage: string | null;
  fullIngredients: string | null;
  claimsToVerifyBeforePublishing: string[];
};

export const missfiahOrganicOils: MissfiahOrganicOil[] = [
  {
    id: "vitamin-c-organic-oil",
    slug: "vitamin-c-organic-oil",
    name: "Vitamin C Organic Oil",
    category: "Organic Oil",
    image: "/product-oil-vitamins.png",
    priceTzs: null,
    size: "300 ml / 11 fl oz",
    popular: true,
    status: "ready",

    tagline: "Brightening and Glowing Face & Body Oil",

    shortDescription:
      "A moisturizing face and body oil formulated with Vitamin C oil, lemon oil, orange oil and Vitamin E. It helps nourish dry-looking skin while supporting a brighter, smoother and more radiant appearance.",

    suitableFor: [
      "Face and body",
      "Dull-looking skin",
      "Dry or dehydrated-looking skin",
      "Uneven-looking skin tone",
      "Skin with visible dark spots",
    ],

    benefits: [
      "Helps moisturize and soften the skin",
      "Supports a brighter and more radiant appearance",
      "Helps improve the appearance of uneven skin tone",
      "Helps reduce the visible appearance of dark spots",
      "Helps improve the appearance of fine lines",
      "Provides antioxidant skin-conditioning benefits",
      "Suitable for use on the face and body",
    ],

    keyIngredients: ["Vitamin C Oil", "Lemon Oil", "Orange Oil", "Vitamin E"],

    directions: [
      "Cleanse and dry the skin before application.",
      "Place a suitable amount of oil in the palm of your hand.",
      "Apply to the face, neck, back, hands, feet or other desired body areas.",
      "Gently massage the oil into the skin until absorbed.",
      "Use a suitable sunscreen during the daytime.",
    ],

    cautions: [
      "For external use only.",
      "Do not swallow.",
      "Avoid direct contact with the eyes.",
      "Do not apply to broken, damaged or irritated skin.",
      "Patch test before first use.",
      "Discontinue use if irritation occurs.",
      "Keep out of reach of children.",
    ],

    storage:
      "Store tightly closed in a cool, dry place away from direct sunlight and excessive heat.",

    fullIngredients: "Vitamin C Oil, Lemon Oil, Orange Oil and Vitamin E.",

    claimsToVerifyBeforePublishing: [
      "The label displays an SPF 45 claim. Do not advertise SPF protection unless the product has appropriate laboratory testing and regulatory approval.",
      "The label displays a 100% pure organic claim. Confirm that documentation is available to support this statement.",
      "Do not publish label statements suggesting that the oil treats anxiety, stress or insomnia. These are medical claims and are not appropriate for standard cosmetic product copy.",
    ],
  },

  {
    id: "24k-gold-organic-oil",
    slug: "24k-gold-organic-oil",
    name: "24K Gold Organic Oil",
    category: "Organic Oil",
    image: "/product-oil-24k-gold.png",
    priceTzs: null,
    size: "300 ml / 11 fl oz",
    popular: true,
    status: "ready",

    tagline: "Radiance & Moisture Face and Body Oil",

    shortDescription:
      "A luxurious face and body oil formulated with argan oil, Vitamin E, glycerin, hyaluronic acid, arbutin and visible gold-coloured foil particles. It helps replenish moisture while leaving the skin looking softer, smoother and more radiant.",

    suitableFor: [
      "Face and body",
      "Dry or dehydrated-looking skin",
      "Dull-looking skin",
      "Uneven-looking skin tone",
      "Skin showing visible signs of ageing",
    ],

    benefits: [
      "Helps replenish and retain skin moisture",
      "Leaves the skin feeling soft and conditioned",
      "Supports a brighter and more radiant appearance",
      "Helps improve the appearance of dull-looking skin",
      "Helps improve the appearance of fine lines",
      "Supports smoother and more youthful-looking skin",
      "Suitable for face and body massage",
    ],

    keyIngredients: [
      "Argan Oil",
      "Gold-Coloured Foil Particles",
      "Glycerin",
      "Vitamin E",
      "Arbutin",
      "Hyaluronic Acid",
    ],

    directions: [
      "Cleanse and dry the skin before application.",
      "Place a suitable amount of oil in the palm of your hand.",
      "Apply to the face, neck, back, hands, feet or desired body areas.",
      "Gently massage until the oil is evenly distributed and absorbed.",
      "Use a suitable sunscreen during the daytime.",
    ],

    cautions: [
      "For external use only.",
      "Do not swallow.",
      "Avoid direct contact with the eyes.",
      "Do not apply to broken, damaged or irritated skin.",
      "Patch test before first use.",
      "Discontinue use if irritation occurs.",
      "Keep out of reach of children.",
    ],

    storage:
      "Store tightly closed in a cool, dry place away from direct sunlight and excessive heat.",

    fullIngredients:
      "Argan Oil, Gold Foil, Glycerin, Vitamin E, Arbutin and Hyaluronic Acid.",

    claimsToVerifyBeforePublishing: [
      "Avoid stating that the product removes wrinkles. Use the safer wording: helps reduce the visible appearance of fine lines and wrinkles.",
      "Avoid stating that ingredients penetrate deep into the skin unless supported by appropriate product testing.",
      "Avoid stating that the product eliminates free radicals. Use antioxidant skin-conditioning language instead.",
      "Confirm the composition and cosmetic suitability of the decorative gold-coloured particles.",
    ],
  },

  {
    id: "retinol-organic-oil",
    slug: "retinol-organic-oil",
    name: "Retinol Organic Oil",
    category: "Organic Oil",
    image: "/product-oil-retinol.png",
    priceTzs: null,
    size: "300 ml / 11 fl oz",
    popular: true,
    status: "ready",

    tagline: "Smoothing and Renewing Face & Body Oil",

    shortDescription:
      "A nourishing face and body oil formulated with retinol, sweet almond oil, rose oil, Vitamin C and Vitamin E. It is designed to support smoother-looking skin while improving the appearance of fine lines, dark spots, uneven tone and rough texture.",

    suitableFor: [
      "Face and body",
      "Mature-looking skin",
      "Uneven-looking skin texture",
      "Skin with visible fine lines",
      "Skin with visible dark spots",
      "Dull-looking skin",
    ],

    benefits: [
      "Helps reduce the visible appearance of fine lines",
      "Supports smoother and more refined-looking skin",
      "Helps improve the appearance of uneven skin texture",
      "Helps improve the visible appearance of dark spots",
      "Supports the appearance of improved skin elasticity",
      "Helps moisturize and soften dry-looking skin",
      "Supports a brighter and more even-looking complexion",
    ],

    keyIngredients: [
      "Retinol",
      "Sweet Almond Oil",
      "Rose Oil",
      "Vitamin C",
      "Vitamin E",
    ],

    directions: [
      "Cleanse and completely dry the skin before application.",
      "Place a small amount of oil in the palm of your hand.",
      "Apply a thin layer to the face, neck or desired body areas.",
      "Gently massage until absorbed.",
      "New retinol users should introduce the product gradually.",
      "Evening use is recommended.",
      "Apply a suitable broad-spectrum sunscreen during the daytime.",
    ],

    cautions: [
      "For external use only.",
      "Do not swallow.",
      "Avoid direct contact with the eyes and lips.",
      "Do not apply to broken, damaged or irritated skin.",
      "Patch test before first use.",
      "Avoid combining with multiple strong exfoliating products in the same routine.",
      "Discontinue use if persistent redness, burning or irritation occurs.",
      "Keep out of reach of children.",
    ],

    storage:
      "Store tightly closed in a cool, dry place away from direct sunlight and excessive heat.",

    fullIngredients:
      "Vitamin E Oil, Sweet Almond Oil, Retinol (Vitamin A), Rose Oil and Vitamin C.",

    claimsToVerifyBeforePublishing: [
      "Avoid describing the product as an anti-wrinkle treatment. Use appearance-based cosmetic wording.",
      "Avoid promising collagen production or cell renewal unless supported by appropriate testing.",
      "Avoid promising that the product will peel away dead skin.",
      "Confirm the concentration and form of retinol before providing detailed usage-frequency instructions.",
    ],
  },

  {
    id: "almond-organic-oil",
    slug: "almond-organic-oil",
    name: "Almond Organic Oil",
    category: "Organic Oil",
    image: "/product-oil-almond.png",
    priceTzs: null,
    size: "300 ml / 11 fl oz",
    popular: false,
    status: "ready",

    tagline: "Nourishing and Moisturizing Face & Body Oil",

    shortDescription:
      "A nourishing face and body oil designed to moisturize, soften and condition dry-looking skin. Its smooth, lightweight texture helps support a healthier-looking glow while leaving the skin feeling soft, supple and comfortable.",

    suitableFor: [
      "Face and body",
      "Dry or dehydrated-looking skin",
      "Dull-looking skin",
      "Rough-feeling skin",
      "Daily moisturizing and massage",
    ],

    benefits: [
      "Helps moisturize and soften dry-looking skin",
      "Supports a smooth and supple skin texture",
      "Helps reduce the feeling of dryness and tightness",
      "Leaves the skin looking nourished and radiant",
      "Helps condition rough-feeling areas",
      "Suitable for face and body massage",
      "Supports a healthy-looking natural glow",
    ],

    keyIngredients: [
      "Sweet Almond Oil",
      "Skin-conditioning oils",
      "Moisturizing botanical oils",
    ],

    directions: [
      "Cleanse and dry the skin before application.",
      "Place a suitable amount of oil in the palm of your hand.",
      "Apply to the face, neck, hands, feet or desired body areas.",
      "Gently massage into the skin using circular movements until absorbed.",
      "Apply extra oil to particularly dry areas such as the elbows, knees and heels.",
      "Use daily or whenever the skin requires additional moisture.",
    ],

    cautions: [
      "For external use only.",
      "Do not swallow.",
      "Avoid direct contact with the eyes.",
      "Do not apply to broken, damaged or irritated skin.",
      "Patch test before first use.",
      "Do not use if you have a known allergy to almonds or tree nuts.",
      "Discontinue use if irritation occurs.",
      "Keep out of reach of children.",
    ],

    storage:
      "Store tightly closed in a cool, dry place away from direct sunlight and excessive heat.",

    fullIngredients:
      "The complete ingredient list should be copied from the physical Almond Organic Oil packaging before publication.",

    claimsToVerifyBeforePublishing: [
      "Confirm the exact product size from the physical packaging.",
      "Confirm whether the product contains pure sweet almond oil or a blend of oils.",
      "Confirm whether Vitamin E, fragrance or other botanical ingredients are included.",
      "Do not advertise the product as 100% organic unless supporting documentation is available.",
      "Do not claim that the product treats eczema, scars, stretch marks or other medical conditions.",
    ],
  },
];
