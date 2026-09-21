"use client";

import Image from "next/image";
import { Search, X } from "lucide-react";
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

export default function ProduseClient() {
  const [selectedCategory, setSelectedCategory] = useState("Toate");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Toate" ||
        product.category === selectedCategory;

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  function resetFilters() {
    setSelectedCategory("Toate");
    setSearch("");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-zinc-900">

      {/* HERO */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
            Catalog PAPYRUS OFFICE
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Produse pentru școală,
            <span className="block text-blue-400">
              birou și organizare.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:mt-6 sm:text-lg sm:leading-8">
            Descoperă selecția noastră de produse de papetărie,
            instrumente de scris, accesorii și produse pentru birou.
          </p>
        </div>
      </section>

      {/* SEARCH + FILTRE */}
      <section className="sticky top-[76px] z-30 border-b border-zinc-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 sm:py-6">

          <div className="relative max-w-xl">
            <Search
              size={19}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              type="text"
              placeholder="Caută un produs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 bg-white py-3.5 pl-11 pr-11 text-base text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Șterge căutarea"
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="-mx-5 mt-4 overflow-x-auto px-5 pb-1 sm:mx-0 sm:mt-5 sm:overflow-visible sm:px-0">
            <div className="flex w-max gap-2.5 sm:w-auto sm:flex-wrap sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-5 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-sm"
                      : "border border-zinc-200 bg-white text-zinc-700 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* PRODUSE */}
      <section className="bg-zinc-50 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="mb-7 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 sm:text-sm">
                Produsele noastre
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                {selectedCategory === "Toate"
                  ? "Catalog complet"
                  : selectedCategory}
              </h2>
            </div>

            <p className="text-sm text-zinc-500">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "produs găsit"
                : "produse găsite"}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <article
                  key={product.name}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="relative h-52 overflow-hidden bg-white sm:h-56">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={600}
                      height={450}
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105 sm:p-4"
                    />

                    {product.badge && (
                      <span
                        className={`absolute left-3 top-3 rounded-full px-3 py-1.5 text-xs font-bold ${
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

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-lg font-bold leading-snug">
                      {product.name}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
                      {product.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-end gap-2">
                      <span className="text-xl font-bold text-zinc-950">
                        {product.price}
                      </span>

                      {product.oldPrice && (
                        <span className="mb-0.5 text-sm text-zinc-400 line-through">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>

                    <a
                      href="/contact"
                      className="mt-5 flex w-full items-center justify-center rounded-xl bg-zinc-950 px-4 py-3 text-sm font-semibold transition hover:bg-blue-600"
                      style={{ color: "#ffffff" }}
                    >
                      Solicită produsul
                    </a>
                  </div>

                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-zinc-200 bg-white px-5 py-16 text-center sm:px-6 sm:py-20">
              <h3 className="text-2xl font-bold">
                Nu am găsit produsul
              </h3>

              <p className="mx-auto mt-3 max-w-lg leading-7 text-zinc-500">
                Încearcă un alt termen de căutare sau selectează o altă categorie.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Resetează filtrele
              </button>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-12 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-6 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-100 sm:text-sm">
              Ai nevoie de mai multe produse?
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Soluții pentru firme și comenzi mari
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-blue-100">
              Pentru companii și instituții putem pregăti pachete
              personalizate în funcție de necesități.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold transition hover:bg-zinc-950"
            style={{ color: "#18181b" }}
          >
            Cere o ofertă →
          </a>

        </div>
      </section>

    </main>
  );
}