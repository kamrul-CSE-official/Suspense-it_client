import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import RootProvider from "./rootProvider";

export const metadata: Metadata = {
  title: "Suspense-IT | Home",
  description:
    "Suspense-IT is a forward-thinking software development company providing full-stack web development, mobile app development, and custom software solutions for startups and enterprises. Our team specializes in React, Next.js, TypeScript, JavaScript, Node.js, Python, Flutter, MongoDB, PostgreSQL, and cloud platforms like AWS and Firebase. From scalable backend systems to responsive frontend interfaces, we deliver high-performance digital products tailored to business goals. Whether you're building SaaS platforms, e-commerce sites, admin dashboards, APIs, or cross-platform mobile apps, Suspense-IT brings innovation, quality, and speed to every project. Partner with us to bring your digital vision to life.",
  icons: [{ rel: "icon", url: "/assets/images/fav.png" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${geist.variable}`}>
      <head>
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
