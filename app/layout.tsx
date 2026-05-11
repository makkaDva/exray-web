import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "EX-Ray — AI Relationship Analyzer | Decode Mixed Signals Instantly",
  description:
    "Confused by mixed signals, ghosting, or situationship drama? EX-Ray's AI analyzes your relationship situation and gives you brutally honest answers. Upload screenshots, describe the situation — get clarity in seconds.",
  keywords: [
    "ai relationship analyzer",
    "decode mixed signals",
    "situationship analyzer app",
    "relationship clarity app",
    "ghosting red flags detector",
    "ai chat analyzer relationship",
    "is he interested app",
    "relationship advice ai",
    "breakup analyzer",
    "toxic relationship signs",
    "attachment style analyzer",
    "love bombing detector",
    "breadcrumbing relationship",
    "read between the lines relationship",
    "ex relationship analyzer ios",
  ],
  authors: [{ name: "EX-Ray" }],
  creator: "EX-Ray",
  publisher: "EX-Ray",
  metadataBase: new URL("https://getexray.app"),
  alternates: {
    canonical: "https://getexray.app",
  },
  openGraph: {
    title: "EX-Ray — AI Relationship Analyzer",
    description:
      "Upload your screenshots. Describe the situation. Get brutally honest AI analysis from Remy — your AI relationship best friend who never lies.",
    url: "https://getexray.app",
    siteName: "EX-Ray",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EX-Ray — AI Relationship Analyzer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EX-Ray — AI Relationship Analyzer",
    description:
      "Stop guessing. Upload screenshots, describe your situation, get brutal honesty from AI. Less than a coffee. Worth more than months of overthinking.",
    images: ["/og-image.png"],
  },
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} h-full`}
    >
      <head>
        <meta name="theme-color" content="#050706" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "EX-Ray: Relationship Analyzer",
              description:
                "AI-powered relationship analysis app. Upload screenshots of chats, describe your situation, and get brutally honest analysis from Remy — your AI relationship advisor.",
              applicationCategory: "EntertainmentApplication",
              operatingSystem: "iOS",
              offers: {
                "@type": "Offer",
                price: "4.99",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "10000",
              },
              url: "https://getexray.app",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050706] text-white antialiased">
        {children}
      </body>
    </html>
  );
}