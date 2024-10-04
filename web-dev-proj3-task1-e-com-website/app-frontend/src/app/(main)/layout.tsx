import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import React from "react";

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
            url: 'apple-touch-icon.png',
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
            {children}
        </body>
      </html>
  );
}
