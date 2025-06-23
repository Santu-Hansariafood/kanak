import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kanak Retail – Authentic Indian Spices & Pulses",
  description: `Kanak Retail is your trusted source for premium Indian spices and pulses, delivering quality, purity, and tradition across India.`,
  keywords: [
    "Kanak Retail",
    "buy Indian spices online",
    "authentic Indian pulses supplier",
    "natural turmeric powder India",
    "pure cumin seeds online",
    "hygienic red chili powder",
    "premium garam masala blend",
    "moong dal online India",
    "eco-friendly spice packaging",
    "traditional Indian cooking ingredients",
  ],
  metadataBase: new URL("https://kanakretail.com"),
  openGraph: {
    title: "Kanak Retail – Authentic Indian Spices & Pulses",
    description: "Shop pure and flavorful spices & pulses with Kanak Retail. Now delivering across India.",
    url: "https://kanakretail.com",
    siteName: "Kanak Retail",
    images: [
      {
        url: "https://kanakretail.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kanak Retail – Authentic Spices and Pulses",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kanakretail",
    title: "Kanak Retail – Authentic Indian Spices & Pulses",
    description: "Shop pure and flavorful spices & pulses with Kanak Retail. Now delivering across India.",
    images: ["https://kanakretail.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <head>
        <link rel="canonical" href="https://kanakretail.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#7BC043" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#7BC043" />
        <meta name="msapplication-TileColor" content="#7BC043" />
        <meta name="author" content="Kanak Retail" />
        <meta name="google-site-verification" content="zSN38N5ZBdA-BFgIKoh1_J3nQvv6yep7pwZLh1Slkyc" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Kanak Retail",
                  url: "https://kanakretail.com",
                  logo: "https://kanakretail.com/logo.png",
                  sameAs: [
                    "https://www.facebook.com/kanakretail",
                    "https://www.instagram.com/kanakretail",
                  ],
                  description: "Kanak Retail offers premium spices and pulses from South India.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "123 Market Road",
                    addressLocality: "Chennai",
                    addressRegion: "Tamil Nadu",
                    postalCode: "600001",
                    addressCountry: "IN",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-9876543210",
                    contactType: "customer service",
                    email: "purchase@kanakretail.com",
                  },
                },
                {
                  "@type": "Product",
                  name: "Ragi",
                  image: "https://kanakretail.com/images/ragi.jpg",
                  description: "Pure like gold turmeric powder from South India.",
                  brand: {
                    "@type": "Brand",
                    name: "Kanak Retail",
                  },
                },
                {
                  "@type": "Product",
                  name: "Moong Dal",
                  image: "https://kanakretail.com/images/rice.jpg",
                  description: "Handpicked moong dal – clean, fresh, and perfect for Indian cooking.",
                  brand: {
                    "@type": "Brand",
                    name: "Kanak Retail",
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://kanakretail.com",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Products",
                      item: "https://kanakretail.com/home",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
