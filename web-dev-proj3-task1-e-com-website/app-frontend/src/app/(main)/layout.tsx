import "../globals.css";
import React from "react";
import Banner from "@/app/components/ui/banner";
import Navigation from "@/app/components/ui/navigation";
import Newsletter from "@/app/components/ui/newletter";
import BlurDecor from "@/app/components/ui/blur-decor";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
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
      </>
  );
}
