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
      "A guide comparing Vitamin C, Almond, Carrot, Retinol, and 24K Gold options.",
    category: "Guide",
    readTime: "3 min read",
    content: `Missfiah Organic Oils come in different variants, so you can choose one that fits your routine.

Vitamin C Organic Oil is a good choice if you want a fresh, bright look. 24K Gold Organic Oil offers a more luxurious feel. Retinol Organic Oil is popular with people who want an advanced-looking skincare routine.

Almond Organic Oil is gentle and helps the skin feel soft and nourished. Carrot Organic Oil is rich and gives the skin a warm, glowing appearance.

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
