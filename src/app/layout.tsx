import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/luxury/Navbar";
import Footer from "@/components/luxury/Footer";
import Script from "next/script";

const playfair = Playfair_Display({
  variable: "--font-luxury",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-modern",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const metadataBase =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL("https://www.luxuryketocookies.com");

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase,
    title:
      "Luxury KETO Cookie Subscriptions | Premium Artisan Cookies Delivered",
    description:
      "Indulge in our exclusive KETO cookie subscription boxes. Premium artisan cookies crafted with the finest ingredients, delivered monthly in limited drops.",
    alternates: {
      canonical: "https://www.luxuryketocookies.com",
    },
    openGraph: {
      title: "Luxury KETO Cookie Subscriptions | Premium Artisan Cookies",
      description:
        "Experience the ultimate indulgence with our curated KETO cookie subscription boxes. Limited monthly drops featuring White Chocolate Macadamia, Stuffed Red Velvet, and Thin Mint.",
      url: "https://www.luxuryketocookies.com",
      siteName: "Luxury KETO Cookies",
      type: "website",
      images: ["/luxury-cookies-hero.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Luxury KETO Cookies | Premium Subscription Boxes",
      description:
        "Indulge in our exclusive KETO cookie subscription boxes with premium artisan cookies delivered monthly.",
      images: ["https://www.luxuryketocookies.com/luxury-cookies-hero.jpg"],
    },
  };
}

function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.luxuryketocookies.com/#organization",
    name: "Luxury KETO Cookies",
    url: "https://www.luxuryketocookies.com",
    email: "hello@luxuryketocookies.com",
    serviceType: ["KETO Cookie Subscriptions", "Premium Artisan Cookies"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      areaServed: ["US"],
      availableLanguage: ["English"],
    },
    description:
      "Luxury KETO Cookies offers premium artisan cookie subscription boxes with limited monthly drops featuring the finest KETO-friendly ingredients.",
    sameAs: ["https://instagram.com/luxuryketocookies"],
    image: "https://www.luxuryketocookies.com/luxury-cookies-logo.png",
    priceRange: "$$$",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getJsonLd();
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive" // ← KEY: SSR-compatible
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
