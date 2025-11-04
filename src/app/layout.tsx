import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/common/Header/Header"));
const Footer = dynamic(() => import("@/components/common/Footer/Footer"));
const I18nProviderWrapper = dynamic(
  () => import("@/components/I18nProviderWrapper/I18nProviderWrapper")
);

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kanak Retail – Authentic Indian Spices & Pulses | Premium Quality at Best Price",
  description:
    "Buy authentic Indian spices and pulses online from Kanak Retail. Discover pure turmeric, cumin, moong dal, and garam masala — sourced from trusted farms and packed hygienically.",
  keywords: [
    "Kanak Retail",
    "Indian spices online",
    "buy pulses online",
    "pure Indian turmeric powder",
    "organic cumin seeds supplier",
    "moong dal wholesale India",
    "premium garam masala blend",
    "natural Indian ingredients",
    "healthy lentils and grains",
    "eco-friendly spice packaging",
    "best spice exporter India",
    "traditional Indian masala",
    "pure and hygienic food products",
  ],
  authors: [{ name: "Kanak Retail Developers", url: "https://kanakretail.com" }],
  creator: "Kanak Retail Web Team",
  publisher: "Kanak Retail",
  metadataBase: new URL("https://kanakretail.com"),
  openGraph: {
    title: "Kanak Retail – Authentic Indian Spices & Pulses",
    description:
      "Shop pure and flavorful Indian spices & pulses with Kanak Retail. Quality, purity, and tradition — now delivering across India.",
    url: "https://kanakretail.com",
    siteName: "Kanak Retail",
    images: [
      {
        url: "https://kanakretail.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kanak Retail – Authentic Indian Spices and Pulses",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kanakretail",
    title: "Kanak Retail – Authentic Indian Spices & Pulses",
    description:
      "Buy pure, handpicked spices and pulses from Kanak Retail — trusted by homes and chefs across India.",
    images: ["https://kanakretail.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://kanakretail.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#7BC043" />
        <meta name="author" content="Kanak Retail Developers" />
        <meta name="developer" content="Developed by Santu De – Frontend Developer (Next.js, React, Node.js)" />
        <meta name="designer" content="Kanak Retail Creative Team" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="copyright" content="© 2025 Kanak Retail. All rights reserved." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#7BC043" />
        <meta name="msapplication-TileColor" content="#7BC043" />
        <meta name="google-site-verification" content="zSN38N5ZBdA-BFgIKoh1_J3nQvv6yep7pwZLh1Slkyc" />
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
                    "https://www.linkedin.com/company/kanakretail",
                  ],
                  description:
                    "Kanak Retail is a trusted name in authentic Indian spices and pulses, offering high-quality, pure ingredients from South India.",
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
                  "@type": "WebSite",
                  url: "https://kanakretail.com",
                  name: "Kanak Retail",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://kanakretail.com/search?query={search_term_string}",
                    "query-input": "required name=search_term_string",
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
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "teams",
                      item: "https://kanakretail.com/teams",
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      name: "About",
                      item: "https://kanakretail.com/about",
                    },
                    {
                      "@type": "ListItem",
                      position: 5,
                      name: "Contact",
                      item: "https://kanakretail.com/contact",
                    },
                    {
                      "@type": "ListItem",
                      position: 6,
                      name: "blog",
                      item: "https://kanakretail.com/blog",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>

      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <Header />
        <I18nProviderWrapper>{children}</I18nProviderWrapper>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log("%cDeveloped by Santu De 🧠 – Next.js & React Developer | https://kanakretail.com", "color: teal; font-size:14px;");`,
          }}
        />
      </body>
    </html>
  );
}
