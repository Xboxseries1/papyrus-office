import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferte și pachete",
  description:
    "Descoperă ofertele PAPYRUS OFFICE, pachetele Student și Office, reducerile pentru comenzi mari și programul PAPYRUS Club.",
};
import {
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  Building2,
  Check,
  Crown,
  GraduationCap,
  Package,
} from "lucide-react";

const packages = [
  {
    icon: GraduationCap,
    name: "Student Start",
    subtitle: "Pentru școală și studiu",
    price: "44,99",
    oldPrice: "54,99",
    featured: false,
    items: [
      "1 caiet A4",
      "1 caiet A5",
      "1 agendă",
      "Set de pixuri",
      "Set evidențiatoare",
      "Mapă cu elastic",
      "Stick USB 32 GB",
    ],
  },
  {
    icon: BriefcaseBusiness,
    name: "Office Basic",
    subtitle: "Pentru biroul de zi cu zi",
    price: "59,99",
    oldPrice: "74,99",
    featured: true,
    items: [
      "1 top hârtie A4",
      "2 bibliorafturi",
      "Set de pixuri",
      "Capsator",
      "Cutie cu capse",
      "Bandă adezivă",
      "Set notițe adezive",
    ],
  },
  {
    icon: Building2,
    name: "Office Pro",
    subtitle: "Pentru echipe și profesioniști",
    price: "99,99",
    oldPrice: "124,99",
    featured: false,
    items: [
      "2 topuri hârtie A4",
      "4 bibliorafturi",
      "100 folii protectoare",
      "2 seturi de pixuri",
      "Capsator + perforator",
      "Set markere",
      "Organizator de birou",
    ],
  },
  {
    icon: Package,
    name: "Corporate Start",
    subtitle: "Pentru firme și echipe",
    price: "249,99",
    oldPrice: "299,99",
    featured: false,
    items: [
      "5 topuri hârtie A4",
      "10 bibliorafturi",
      "20 pixuri",
      "5 seturi notițe",
      "2 capsatoare",
      "Consumabile incluse",
      "Ofertă adaptabilă",
    ],
  },
];

const discounts = [
  {
    value: "100 – 199 lei",
    discount: "5%",
  },
  {
    value: "200 – 399 lei",
    discount: "10%",
  },
  {
    value: "400 – 699 lei",
    discount: "15%",
  },
  {
    value: "Peste 700 lei",
    discount: "20%",
  },
];

const clubLevels = [
  {
    name: "Bronze",
    requirement: "peste 100 lei / lună",
    discount: "5%",
    benefits: [
      "Reducere permanentă de 5%",
      "Acces la promoțiile PAPYRUS Club",
      "Oferte periodice",
    ],
  },
  {
    name: "Silver",
    requirement: "peste 300 lei / lună",
    discount: "10%",
    benefits: [
      "Reducere permanentă de 10%",
      "Acces prioritar la promoții",
      "Pachete speciale pentru membri",
    ],
  },
  {
    name: "Gold",
    requirement: "peste 500 lei / lună",
    discount: "15%",
    benefits: [
      "Reducere permanentă de 15%",
      "Oferte exclusive",
      "Pachete personalizate",
      "Prioritate pentru comenzi mari",
    ],
  },
];

export default function OfertePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
            <BadgePercent size={28} strokeWidth={1.8} />
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Oferte PAPYRUS OFFICE
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Mai multe produse.
            <span className="block text-blue-400">
              Un preț mai bun.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Am pregătit pachete pentru elevi, profesioniști și companii,
            alături de reduceri pentru comenzile mai mari.
          </p>

          <a
            href="#pachete"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition hover:bg-blue-700"
          >
            Vezi ofertele
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* PACHETE */}
      <section id="pachete" className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Pachete speciale
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Alege pachetul potrivit
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              Produsele esențiale reunite în pachete mai avantajoase decât
              achiziționarea individuală.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.name}
                  className={`relative flex flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    item.featured
                      ? "border-blue-600 bg-zinc-950 text-white"
                      : "border-zinc-200 bg-white"
                  }`}
                >
                  {item.featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Recomandat
                    </span>
                  )}

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      item.featured
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <p
                    className={`mt-7 text-sm font-medium ${
                      item.featured ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    {item.subtitle}
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    {item.name}
                  </h3>

                  <div className="mt-6">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold">
                        {item.price}
                      </span>

                      <span className="mb-1 text-sm font-medium">
                        lei
                      </span>
                    </div>

                    <p
                      className={`mt-1 text-sm line-through ${
                        item.featured ? "text-zinc-500" : "text-zinc-400"
                      }`}
                    >
                      {item.oldPrice} lei
                    </p>
                  </div>

                  <div
                    className={`my-6 border-t ${
                      item.featured
                        ? "border-zinc-800"
                        : "border-zinc-200"
                    }`}
                  />

                  <ul className="flex-1 space-y-3">
                    {item.items.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-sm ${
                          item.featured
                            ? "text-zinc-300"
                            : "text-zinc-600"
                        }`}
                      >
                        <Check
                          size={17}
                          className="mt-0.5 shrink-0 text-blue-500"
                        />

                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`mt-8 flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition ${
                      item.featured
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-zinc-950 text-white hover:bg-blue-600"
                    }`}
                  >
                    Solicită pachetul
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* REDUCERI PE VOLUM */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Reduceri de volum
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Cu cât comanzi mai mult,
              <span className="block text-blue-600">
                cu atât economisești mai mult.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-zinc-600">
              Sistemul nostru de discount este conceput pentru clienții
              care au nevoie periodic de produse pentru școală, birou
              sau activitatea unei companii.
            </p>

            <a
              href="/produse"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-600"
            >
              Vezi catalogul
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
            <div className="grid grid-cols-2 bg-zinc-950 px-6 py-4 text-sm font-bold text-white">
              <span>Valoare comandă</span>
              <span className="text-right">Reducere</span>
            </div>

            {discounts.map((item, index) => (
              <div
                key={item.value}
                className={`grid grid-cols-2 items-center px-6 py-5 ${
                  index !== discounts.length - 1
                    ? "border-b border-zinc-200"
                    : ""
                }`}
              >
                <span className="font-medium text-zinc-700">
                  {item.value}
                </span>

                <span className="text-right text-xl font-bold text-blue-600">
                  {item.discount}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PAPYRUS CLUB */}
      <section className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
              <Crown size={28} strokeWidth={1.8} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-widest text-blue-400">
              PAPYRUS Club
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Fidelitatea merită recompensată.
            </h2>

            <p className="mt-5 leading-7 text-zinc-400">
              Un program de fidelitate creat pentru clienții care aleg
              constant produsele și serviciile PAPYRUS OFFICE.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {clubLevels.map((level) => (
              <article
                key={level.name}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">
                    {level.name}
                  </h3>

                  <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold">
                    -{level.discount}
                  </span>
                </div>

                <p className="mt-3 text-sm text-zinc-400">
                  {level.requirement}
                </p>

                <div className="my-6 border-t border-zinc-800" />

                <ul className="space-y-4">
                  {level.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm text-zinc-300"
                    >
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-blue-400"
                      />

                      {benefit}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA SAPTAMANII */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 lg:flex-row lg:items-center">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
              Oferta săptămânii
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Office Basic la 59,99 lei
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-blue-100">
              Un pachet complet pentru organizarea activității zilnice
              la birou, disponibil la un preț promoțional.
            </p>
          </div>

          <div className="shrink-0">
            <p className="text-sm text-blue-100">
              Preț anterior
            </p>

            <p className="text-xl font-semibold text-blue-200 line-through">
              74,99 lei
            </p>

            <a
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
            >
              Solicită oferta
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}