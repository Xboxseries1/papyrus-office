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
    "consumabile birou",
    "firmă de exercițiu",
  ],

  authors: [
    {
      name: "PAPYRUS OFFICE SRL",
    },
  ],

  creator: "PAPYRUS OFFICE SRL",

  publisher: "PAPYRUS OFFICE SRL",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://papyrus-office.vercel.app",
  },

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "PAPYRUS OFFICE SRL",
    description:
      "Produse de papetărie, birotică și soluții pentru școală, birou și companii.",
    url: "https://papyrus-office.vercel.app",
    siteName: "PAPYRUS OFFICE",
    images: [
      {
        url: "/images/papyrus-og.png",
        width: 1200,
        height: 630,
        alt: "PAPYRUS OFFICE SRL",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PAPYRUS OFFICE SRL",
    description:
      "Produse de papetărie, birotică și soluții pentru școală, birou și companii.",
    images: ["/images/papyrus-og.png"],
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