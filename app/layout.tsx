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

const baseURL = "https://biloniapride-v1.vercel.app/" // https://www.biloniapride.com/

export const metadata: Metadata = {
  title: {
    default: "Bilonia Pride Property Investment",
    template: "%s | Bilonia Pride",
  },
  description:
    "Bilonia Pride offers premier property investment solutions in lands, buildings, and rentals. Build your wealth through real estate excellence with our expert guidance in Delta and beyond.",

  keywords: [
    "Real Estate",
    "Property Investment",
    "Land for Sale",
    "Building Investment",
    "Property Rental",
    "Real Estate Delta",
    "Land Purchase",
    "Commercial Property",
    "Residential Property",
    "Property Development",
    "Real Estate Nigeria",
    "Investment Property",
    "Estate Management",
    "Property Sales",
    "Real Estate Investment",
    "Land Development",
    "Property Portfolio",
    "Bilonia Pride",
  ],

  authors: [{ name: "Bilonia Pride Team" }],
  creator: "Bilonia Pride",
  publisher: "Bilonia Pride",
  metadataBase: new URL(baseURL),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseURL,
    siteName: "Bilonia Pride",
    title: "Bilonia Pride - Property Investment",
    description:
      "Premier property investment solutions in lands, buildings, and rentals. Building wealth through real estate excellence in Delta and beyond.",
    images: [
      {
        url: `${baseURL}assets/b-logo-bg.png`,  
        width: 1200,
        height: 630,
        alt: "Bilonia Pride - Real Estate Investment",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bilonia Pride - Premium Property Investment Solutions",
    description:
      "Premier property investment solutions in lands, buildings, and rentals. Building wealth through real estate excellence.",
    images: [`${baseURL}assets/b-logo-bg.png`],
    creator: "@biloniapride",
    site: "@biloniapride",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/b-logo-bg.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/assets/b-logo-bg.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",

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

  category: "Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="iui-MhG8VM8Vp35xcMTnPZtDnHsd5GXm56b-AN32sJ0" />
        <meta name="theme-color" content="#000000" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Bilonia Pride",
              "description": "Bilonia Pride offers premier property investment solutions in lands, buildings, and rentals. Build your wealth through real estate excellence.",
              "url": baseURL,
              "logo": `${baseURL}assets/b-logo-bg.png`,
              "image": `${baseURL}assets/b-logo-bg.png`,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delta",
                "addressRegion": "Delta State",
                "addressCountry": "NG"
              },
              "areaServed": {
                "@type": "State",
                "name": "Delta State"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bilonia Pride",
              "url": baseURL,
              "logo": `${baseURL}assets/b-logo-bg.png`,
              "description": "Bilonia Pride offers premier property investment solutions in lands, buildings, and rentals. Build your wealth through real estate excellence."
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}