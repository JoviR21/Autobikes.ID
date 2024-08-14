import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autobikes.ID - Find Your Dream Bikes | Homepages",
  description: "Dealer and Importir Motorcycles",
  keywords: "Autobikes, Motorcycles, Sport, Naked, Touring, Adventure, Custom, Trails, Bikes",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: {
    name: "Jovi Rachman"
  },
  openGraph: {
    title: "Autobikes.ID",
    type: "website",
    images: "/og.jpg",
    description: "Dealer and Importir Motorcycles"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
