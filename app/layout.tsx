import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/components/cart-provider";

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
  title: "Missfiah Organic Products | Organic Beauty & Skincare Products in Tanzania",
  description:
    "Shop Missfiah Organic Products in Tanzania. Explore organic oils, glow serum, soaps, and shower gels for your daily beauty and skincare routine.",
  keywords: [
    "Missfiah",
    "organic products",
    "skincare",
    "beauty",
    "body oil",
    "glow serum",
    "soap",
    "shower gel",
    "Tanzania",
    "Dar es Salaam",
    "Kariakoo",
  ],
  authors: [{ name: "Missfiah Organic Products" }],
  icons: {
    icon: "/the-favicon.png",
    shortcut: "/the-favicon.png",
    apple: "/the-favicon.png",
  },
  openGraph: {
    title: "Missfiah Organic Products | Organic Beauty & Skincare Products in Tanzania",
    description:
      "Shop Missfiah Organic Products in Tanzania. Explore organic oils, glow serum, soaps, and shower gels for your daily beauty and skincare routine.",
    type: "website",
    locale: "en_TZ",
    siteName: "Missfiah Organic Products",
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
      </body>
    </html>
  );
}
