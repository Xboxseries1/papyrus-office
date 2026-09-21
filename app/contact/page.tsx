import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează PAPYRUS OFFICE SRL pentru informații despre produse, servicii, oferte și colaborări.",
};

export default function ContactPage() {
  return <ContactClient />;
}