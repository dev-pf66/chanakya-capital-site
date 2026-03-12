import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { playfair, inter } from "./fonts";

export const metadata: Metadata = {
  title: "Chanakya Capital",
  description: "Great Indian businesses deserve great owners. We acquire established B2B businesses from founders ready for their next chapter.",
  metadataBase: new URL("https://chanakya.capital"),
  alternates: {
    canonical: "https://chanakya.capital",
  },
  openGraph: {
    title: "Chanakya Capital",
    description: "Great Indian businesses deserve great owners. We acquire established B2B businesses from founders ready for their next chapter.",
    url: "https://chanakya.capital",
    siteName: "Chanakya Capital",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chanakya Capital",
    description: "Great Indian businesses deserve great owners.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Organization Schema (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Chanakya Capital",
  description: "We acquire established Indian B2B businesses from founders ready for their next chapter.",
  url: "https://chanakya.capital",
  logo: "https://chanakya.capital/logo.png",
  foundingDate: "2025",
  founders: [
    { "@type": "Person", name: "Nehal Shah" },
    { "@type": "Person", name: "Karishma Swali" },
    { "@type": "Person", name: "Dev Shah" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98200-59357",
    contactType: "sales",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
