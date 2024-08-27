import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import CoverParticles from "@/components/cover-particles";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElFabrikador Portfolio",
  description: "Landing page by ElFabrikador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="fondo" lang="en">
      <body className={urbanist.className}>
        <CoverParticles />
        <Header/>
        <Navbar/>
        {children}</body>
    </html>
  );
}
