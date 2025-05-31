import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import RootProvider from "./rootProvider";

const siteName = "Suspense-IT";
const siteUrl = "https://www.suspense-it.com"; // Change to your real domain
const ogImage = `${siteUrl}/assets/images/og-image.png`; // Create a proper 1200x630 image

export const metadata: Metadata = {
  title: `${siteName} | Home`,
  description:
    "Suspense-IT is a forward-thinking software development company offering full-stack web and mobile app solutions tailored to startups and enterprises.",
  icons: [{ rel: "icon", url: "/assets/images/fav.png" }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${siteName} | Home`,
    description:
      "Suspense-IT provides innovative full-stack development services using React, Next.js, Node.js, Python, Flutter, and cloud platforms like AWS and Firebase.",
    url: siteUrl,
    siteName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Suspense-IT – Full Stack Development",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Home`,
    description:
      "High-performance software solutions for startups and enterprises – Suspense-IT.",
    images: [ogImage],
    creator: "@suspenseit", // (Optional) Add your Twitter handle
  },
  themeColor: "#7e22ce", // Optional: primary brand color for browser UI
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          href="/assets/images/fav.png"
          type="image/x-icon"
        />
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
