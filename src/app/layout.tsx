import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navBar/NavBar";
import ThemeClientEffect from "@/components/ThemeClientEffect";

const getInter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Ignacio Colli | FullStack Developer",
  description: "Juan Ignacio Colli Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${getInter.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeClientEffect/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
