import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import React from "react";
import Banner from "@/app/components/ui/banner";
import Navigation from "@/app/components/ui/navigation";
import Newsletter from "@/app/components/ui/newletter";
import BlurDecor from "@/app/components/ui/blur-decor";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
    title: {
        template: '%s - The Real E-Commerce',
        default: 'The Real E-Commerce',
    },
    description: 'A NextJs SpringBoot E-Commerce Application Frontend',
    icons: [
        {
            rel: 'icon',
            url: 'favicon.ico'
        },
        {
            rel: 'apple-touch-icon',
            url: 'apple-icon.png',
        }
    ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html className="h-full" lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <header>
                <Banner/>
                <Navigation/>
            </header>
            <main>
                <BlurDecor/>
                {children}
            </main>
            <footer>
                <Newsletter/>
            </footer>
        </body>
      </html>
  );
}
