import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "PAPYRUS OFFICE SRL",
    template: "%s | PAPYRUS OFFICE",
  },

  description:
    "PAPYRUS OFFICE SRL oferă produse de papetărie, birotică, consumabile și soluții pentru școală, birou și companii.",

  keywords: [
    "PAPYRUS OFFICE",
    "papetărie",
    "birotică",
    "rechizite",
    "produse birou",
    "papetărie Ploiești",
    "firmă de exercițiu",
  ],

  authors: [
    {
      name: "PAPYRUS OFFICE SRL",
    },
  ],

  creator: "PAPYRUS OFFICE SRL",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="overflow-x-hidden bg-white text-zinc-900 antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}