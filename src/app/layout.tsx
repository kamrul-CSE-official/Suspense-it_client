import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Suspense-IT",
  description:
    "Suspense-IT is a forward-thinking software development company dedicated to delivering cutting-edge digital solutions tailored to modern business needs. We specialize in building robust web applications, scalable backend systems, and intuitive user experiences using the latest technologies in JavaScript, TypeScript, React, Next.js, Node.js, Python, Flutter and cloud platforms. With a focus on quality, innovation, and performance, Suspense-IT helps startups and enterprises transform ideas into reliable, efficient, and impactful software products.",
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
      <body>{children}</body>
    </html>
  );
}
