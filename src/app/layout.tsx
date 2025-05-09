import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanak Retail – Authentic Indian Spices & Pulses",
  description: `Kanak Retail is your trusted source for premium Indian spices and pulses, delivering quality, purity, and tradition to every kitchen across India. With our official pan-India launch, we bring our legacy of flavor from South India to every household nationwide. Our wide range includes turmeric, cumin, coriander, red chili powder, garam masala, black pepper, mustard seeds, fenugreek, cardamom, and more – all handpicked, hygienically processed, and packaged to retain freshness and aroma.

We also specialize in high-quality pulses including moong dal, toor dal, urad dal, chana dal, and masoor dal sourced from trusted farms. Every product from Kanak Retail meets high standards of purity and taste, perfect for home cooks and chefs alike.

Our mission is to bring the rich heritage of Indian cooking to your plate with consistent quality and unmatched flavor. Whether you're in Chennai, Delhi, Mumbai, Hyderabad, or any corner of the country, Kanak Retail is committed to delivering authentic ingredients at your doorstep.

With a focus on natural processing, no artificial additives, and eco-friendly packaging, Kanak Retail stands for health, tradition, and flavor. Join thousands of happy customers who trust Kanak Retail for their daily cooking essentials. Discover the real taste of India – one spice at a time.`,
  keywords: [
    "Kanak",
    "Kanak Retail",
    "Indian spices online",
    "buy spices India",
    "pan India spice supplier",
    "best quality pulses",
    "turmeric, cumin, red chili",
    "Indian masala wholesaler",
    "South Indian spices",
    "authentic Indian pulses",
  ],
  openGraph: {
    title: "Kanak Retail – Authentic Indian Spices & Pulses",
    description:
      "Shop pure and flavorful spices & pulses with Kanak Retail. Now delivering across India. Taste the tradition with every ingredient.",
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
  metadataBase: new URL("https://kanakretail.com"),
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
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="zSN38N5ZBdA-BFgIKoh1_J3nQvv6yep7pwZLh1Slkyc" />
        <meta name="author" content="Kanak Retail" />
        <meta name="copyright" content="Kanak Retail" />
        <meta name="theme-color" content="#7BC043" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kanak Retail – Authentic Indian Spices & Pulses" />
        <meta property="og:description" content="Shop pure and flavorful spices & pulses with Kanak Retail. Now delivering across India. Taste the tradition with every ingredient." />
        <meta property="og:url" content="https://kanakretail.com" />
        <meta property="og:site_name" content="Kanak Retail" />
        <meta property="og:image" content="https://kanakretail.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Kanak Retail – Authentic Spices and Pulses" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kanak Retail – Authentic Indian Spices & Pulses" />
        <meta name="twitter:description" content="Shop pure and flavorful spices & pulses with Kanak Retail. Now delivering across India. Taste the tradition with every ingredient." />
        <meta name="twitter:image" content="https://kanakretail.com/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kanak Retail",
              url: "https://kanakretail.com",
              logo: "https://kanakretail.com/logo.png",
              sameAs: [
                "https://www.facebook.com/kanakretail",
                "https://www.instagram.com/kanakretail",
              ],
              description:
                "Kanak Retail offers a wide selection of premium spices and pulses in South India. Quality you can trust.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "South India",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
