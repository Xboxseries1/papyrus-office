import type { Metadata } from "next";
import ProduseClient from "./ProduseClient";

export const metadata: Metadata = {
  title: "Produse",
  description:
    "Descoperă catalogul PAPYRUS OFFICE cu produse de papetărie, instrumente de scris, organizare, accesorii și produse pentru birou.",
};

export default function ProdusePage() {
  return <ProduseClient />;
}