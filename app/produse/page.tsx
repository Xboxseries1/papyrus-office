"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const products = [
  {
    name: "Caiet A4 Dictando",
    category: "Papetărie",
    price: "12,99 lei",
    oldPrice: null,
    badge: "Bestseller",
    image: "/images/products/caiet-a4-dictando.jpg",
    description: "80 file, copertă rezistentă, ideal pentru școală și birou.",
  },
  {
    name: "Caiet A5 Matematică",
    category: "Papetărie",
    price: "7,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/caiet-a5-matematica.jpg",
    description: "48 file, format compact și hârtie de calitate.",
  },
  {
    name: "Top Hârtie A4",
    category: "Papetărie",
    price: "19,99 lei",
    oldPrice: "24,99 lei",
    badge: "Ofertă",
    image: "/images/products/top-hartie-a4.jpg",
    description:
      "500 coli, 80 g/m², compatibilă cu imprimante laser și inkjet.",
  },
  {
    name: "Agendă Premium A5",
    category: "Papetărie",
    price: "29,99 lei",
    oldPrice: null,
    badge: "Nou",
    image: "/images/products/agenda-premium-a5.jpg",
    description:
      "Copertă elegantă și pagini potrivite pentru organizare zilnică.",
  },
  {
    name: "Bloc de desen A4",
    category: "Papetărie",
    price: "9,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/bloc-desen-a4.jpg",
    description: "Foi albe pentru desen, schițe și proiecte creative.",
  },
  {
    name: "Mapă cu elastic",
    category: "Papetărie",
    price: "8,49 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/mapa-elastic.jpg",
    description: "Ideală pentru păstrarea documentelor și proiectelor.",
  },

  {
    name: "Pix Papyrus Blue",
    category: "Instrumente de scris",
    price: "3,49 lei",
    oldPrice: null,
    badge: "Bestseller",
    image: "/images/products/pix-papyrus-blue.jpg",
    description: "Scriere fluentă, cerneală albastră și design ergonomic.",
  },
  {
    name: "Set Pixuri Colorate",
    category: "Instrumente de scris",
    price: "14,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/set-pixuri-colorate.jpg",
    description: "Set de 8 culori pentru notițe, proiecte și organizare.",
  },
  {
    name: "Stilou Office Classic",
    category: "Instrumente de scris",
    price: "24,99 lei",
    oldPrice: null,
    badge: "Nou",
    image: "/images/products/stilou-office-classic.jpg",
    description: "Stilou elegant pentru școală și birou.",
  },
  {
    name: "Marker Permanent",
    category: "Instrumente de scris",
    price: "6,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/marker-permanent.jpg",
    description: "Marker permanent negru cu uscare rapidă.",
  },
  {
    name: "Set Evidențiatoare",
    category: "Instrumente de scris",
    price: "16,99 lei",
    oldPrice: "19,99 lei",
    badge: "Ofertă",
    image: "/images/products/set-evidentiatoare.jpg",
    description: "4 culori pastel pentru notițe și documente.",
  },
  {
    name: "Creion Mecanic",
    category: "Instrumente de scris",
    price: "8,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/creion-mecanic.jpg",
    description: "Creion mecanic 0.5 mm pentru scriere precisă.",
  },

  {
    name: "Biblioraft A4",
    category: "Organizare",
    price: "14,99 lei",
    oldPrice: null,
    badge: "Bestseller",
    image: "/images/products/biblioraft-a4.jpg",
    description: "Biblioraft rezistent pentru arhivarea documentelor.",
  },
  {
    name: "Dosar cu șină",
    category: "Organizare",
    price: "3,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/dosar-sina.jpg",
    description: "Dosar practic pentru documente și proiecte.",
  },
  {
    name: "Folii Protectoare A4",
    category: "Organizare",
    price: "17,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/folii-protectoare-a4.jpg",
    description: "Set de 100 folii transparente pentru documente.",
  },
  {
    name: "Organizator birou",
    category: "Organizare",
    price: "34,99 lei",
    oldPrice: "39,99 lei",
    badge: "Ofertă",
    image: "/images/products/organizator-birou.jpg",
    description: "Organizator compact pentru pixuri și accesorii.",
  },
  {
    name: "Clipboard A4",
    category: "Organizare",
    price: "15,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/clipboard-a4.jpg",
    description: "Clipboard rigid pentru documente și formulare.",
  },
  {
    name: "Cutie de arhivare",
    category: "Organizare",
    price: "11,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/cutie-arhivare.jpg",
    description: "Cutie din carton rezistent pentru arhivare.",
  },

  {
    name: "Capsator Office Pro",
    category: "Accesorii",
    price: "18,99 lei",
    oldPrice: null,
    badge: "Bestseller",
    image: "/images/products/capsator-office-pro.jpg",
    description: "Capsator metalic pentru până la 25 de coli.",
  },
  {
    name: "Perforator A4",
    category: "Accesorii",
    price: "22,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/perforator-a4.jpg",
    description: "Perforator robust pentru activități de birou.",
  },
  {
    name: "Foarfecă Office",
    category: "Accesorii",
    price: "10,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/foarfeca-office.jpg",
    description: "Foarfecă ergonomică pentru hârtie și carton subțire.",
  },
  {
    name: "Bandă adezivă",
    category: "Accesorii",
    price: "5,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/banda-adeziva.jpg",
    description: "Bandă transparentă pentru uz general.",
  },
  {
    name: "Lipici solid",
    category: "Accesorii",
    price: "4,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/lipici-solid.jpg",
    description: "Lipici solid potrivit pentru hârtie și carton.",
  },
  {
    name: "Set geometric",
    category: "Accesorii",
    price: "13,99 lei",
    oldPrice: "16,99 lei",
    badge: "Ofertă",
    image: "/images/products/set-geometric.jpg",
    description: "Riglă, echer, raportor și compas.",
  },

  {
    name: "Stick USB 32 GB",
    category: "Tehnologie",
    price: "29,99 lei",
    oldPrice: null,
    badge: "Nou",
    image: "/images/products/stick-usb-32gb.jpg",
    description: "Memorie USB compactă pentru documente și proiecte.",
  },
  {
    name: "Stick USB 64 GB",
    category: "Tehnologie",
    price: "44,99 lei",
    oldPrice: "49,99 lei",
    badge: "Ofertă",
    image: "/images/products/stick-usb-64gb.jpg",
    description: "Spațiu generos pentru documente, poze și prezentări.",
  },
  {
    name: "Mouse Wireless Office",
    category: "Tehnologie",
    price: "49,99 lei",
    oldPrice: null,
    badge: "Nou",
    image: "/images/products/mouse-wireless-office.jpg",
    description: "Mouse wireless ergonomic pentru birou și studiu.",
  },
  {
    name: "Calculator de birou",
    category: "Tehnologie",
    price: "39,99 lei",
    oldPrice: null,
    badge: null,
    image: "/images/products/calculator-birou.jpg",
    description: "Calculator cu afișaj mare și funcții esențiale.",
  },
];

const categories = [
  "Toate",
  "Papetărie",
  "Instrumente de scris",
  "Organizare",
  "Accesorii",
  "Tehnologie",
];

export default function ProdusePage() {
  const [selectedCategory, setSelectedCategory] = useState("Toate");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Toate" ||
        product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="border-b border-zinc-800 bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Catalog PAPYRUS OFFICE
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
            Produse pentru școală,
            <span className="block text-blue-400">
              birou și organizare.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Descoperă selecția noastră de produse de papetărie,
            instrumente de scris, accesorii și produse pentru birou.
          </p>
        </div>
      </section>

      {/* FILTRE */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">

          <div className="max-w-xl">
            <input
              type="text"
              placeholder="Caută un produs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "border border-zinc-200 bg-white text-zinc-700 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* PRODUSE */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Produsele noastre
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {selectedCategory === "Toate"
                  ? "Catalog complet"
                  : selectedCategory}
              </h2>
            </div>

            <p className="text-sm text-zinc-500">
              {filteredProducts.length} produse găsite
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <article
                  key={product.name}
                  className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* IMAGINE PRODUS */}
                  <div className="relative h-56 overflow-hidden bg-white">
                  <Image
  src={product.image}
  alt={product.name}
  width={600}
  height={450}
  loading={index === 0 ? "eager" : "lazy"}
  fetchPriority={index === 0 ? "high" : "auto"}
  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
/>

                    {product.badge && (
                      <span
                        className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${
                          product.badge === "Ofertă"
                            ? "bg-red-500 text-white"
                            : product.badge === "Nou"
                            ? "bg-blue-600 text-white"
                            : "bg-zinc-950 text-white"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* INFORMAȚII */}
                  <div className="p-5">

                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-lg font-bold">
                      {product.name}
                    </h3>

                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-zinc-600">
                      {product.description}
                    </p>

                    <div className="mt-5 flex items-end gap-2">
                      <span className="text-xl font-bold text-zinc-950">
                        {product.price}
                      </span>

                      {product.oldPrice && (
                        <span className="text-sm text-zinc-400 line-through">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>

                    <button className="mt-5 w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
                      Vezi produsul
                    </button>

                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-zinc-200 bg-white px-6 py-20 text-center">

              <h3 className="text-2xl font-bold">
                Nu am găsit produsul
              </h3>

              <p className="mt-3 text-zinc-500">
                Încearcă un alt termen de căutare sau selectează altă categorie.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("Toate");
                }}
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Resetează filtrele
              </button>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
              Ai nevoie de mai multe produse?
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Soluții pentru firme și comenzi mari
            </h2>

            <p className="mt-4 max-w-xl text-blue-100">
              Pentru companii și instituții putem pregăti pachete
              personalizate în funcție de necesități.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex rounded-xl bg-white px-6 py-3.5 font-semibold text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
          >
            Cere o ofertă →
          </a>

        </div>
      </section>

    </main>
  );
}