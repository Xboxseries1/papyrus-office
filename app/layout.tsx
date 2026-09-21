import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://papyrus-office.vercel.app"),

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
    "produse papetărie",
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

  openGraph: {
    title: "PAPYRUS OFFICE SRL",
    description:
      "Produse de papetărie, birotică și soluții pentru școală, birou și companii.",
    url: "https://papyrus-office.vercel.app",
    siteName: "PAPYRUS OFFICE",
    locale: "ro_RO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PAPYRUS OFFICE SRL",
    description:
      "Produse de papetărie, birotică și soluții pentru școală, birou și companii.",
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