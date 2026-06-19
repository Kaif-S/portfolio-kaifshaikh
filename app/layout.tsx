import type { Metadata } from "next";
import {DM_Sans, Syne} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaif Shaikh | React & Next.js Developer",
  description:
    "Modern high-performance websites built with React, Next.js, Tailwind CSS, and Framer Motion. Explore projects, animations, and premium web experiences.",

  keywords: [
    "Kaif Shaikh",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Tailwind CSS",
    "Framer Motion",
    "Web Developer Portfolio",
    "UI Developer",
    "Modern Website Developer",
    "Freelance Web Developer",
  ],

  authors: [{ name: "Kaif Shaikh" }],
  creator: "Kaif Shaikh",

  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "Kaif Shaikh | React & Next.js Developer",
    description:
      "Building modern, animated, and high-performance web experiences.",
    url: "https://yourdomain.com",
    siteName: "Kaif Shaikh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaif Shaikh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kaif Shaikh | React & Next.js Developer",
    description:
      "Modern websites built with React, Next.js, Tailwind CSS, and Framer Motion.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

const epilogue = Syne({
  display:"swap",
  subsets:['latin'],
  variable:"--font-epilogue",
})
const dm_sans = DM_Sans({
  display:"auto",
  subsets:['latin'],
  variable:"--font-dm-sans"
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${epilogue.variable} ${dm_sans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
