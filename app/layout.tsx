import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/components/cart-provider";
import { JsonLd } from "@/components/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://missfiah.vercel.app"),
  title: {
    default: "Missfiah Organic Products | Organic Beauty & Skincare in Tanzania",
    template: "%s | Missfiah Organic Products",
  },
  description:
    "Shop Missfiah Organic Products in Tanzania. Buy organic body oils, glow serums, organic soaps, and shower gels for your daily skincare routine. Based in Kariakoo, Dar es Salaam.",
  keywords: [
    "Missfiah Organic Products",
    "organic beauty products Tanzania",
    "skincare products Dar es Salaam",
    "body oil Tanzania",
    "glow serum",
    "organic soap",
    "shower gel",
    "Vitamin C oil",
    "24K Gold oil",
    "Retinol oil",
    "Almond oil",
    "Carrot oil",
    "Turmeric soap",
    "Kojic soap",
    "Glutathione soap",
    "whitening shower gel",
    "brightening body wash",
    "Kariakoo beauty products",
    "Dar es Salaam skincare",
    "Tanzania organic skincare",
    "Missfiah Kariakoo",
    "WhatsApp order skincare Tanzania",
  ],
  authors: [{ name: "Missfiah Organic Products" }],
  creator: "Missfiah Organic Products",
  publisher: "Missfiah Organic Products",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/the-favicon.png",
    shortcut: "/the-favicon.png",
    apple: "/the-favicon.png",
  },
  openGraph: {
    title: "Missfiah Organic Products | Organic Beauty & Skincare in Tanzania",
    description:
      "Shop Missfiah Organic Products in Tanzania. Explore organic oils, glow serums, soaps, and shower gels for your daily beauty and skincare routine.",
    type: "website",
    locale: "en_TZ",
    siteName: "Missfiah Organic Products",
    url: "https://missfiah.vercel.app",
    images: [
      {
        url: "/Logo.png",
        width: 1046,
        height: 1011,
        alt: "Missfiah Organic Products Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Missfiah Organic Products | Organic Beauty & Skincare in Tanzania",
    description:
      "Shop Missfiah Organic Products in Tanzania. Explore organic oils, glow serums, soaps, and shower gels.",
    images: ["/Logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
        <JsonLd />
      </body>
    </html>
  );
}
