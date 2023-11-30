import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Exo_2 } from "next/font/google";

import { CustomFlowbiteTheme, Flowbite,  } from "flowbite-react";
import customTheme from "./lib/customTheme";

import "./globals.css";

import ParticleComponent from "./components/ParticleComponent/ParticleComponent";
import CustomNav from "./components/Navbar/page";
import CustomFooter from "./components/Footer/page";

// const inter = Inter({ subsets: ["latin"] });
const exo_2 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "codeKase Freelance Web Development",
  description: "codeKase Freelance Web Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const customFlowbiteTheme: CustomFlowbiteTheme = customTheme;

  console.log(exo_2.className);
  
  return (
    <html lang="en" className="bg-zinc-800">
      <body className={`${exo_2.className} dark`}>
        <Flowbite theme={{ theme: customFlowbiteTheme }}>
          <ParticleComponent />
          <CustomNav />
          <div className="footer-v-spacer dark">{children}</div>
          <CustomFooter />
        </Flowbite>
      </body>
    </html>
  );
}
