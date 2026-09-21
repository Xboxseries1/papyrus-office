import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Descoperă PAPYRUS OFFICE SRL, misiunea, viziunea, valorile și activitatea firmei de exercițiu.",
};
import {
  Building2,
  Check,
  Eye,
  GraduationCap,
  Handshake,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Inovație",
    text: "Căutăm permanent idei prin care experiența clienților să fie mai simplă, mai rapidă și mai eficientă.",
  },
  {
    icon: Handshake,
    title: "Încredere",
    text: "Construim relații bazate pe seriozitate, comunicare clară și respect față de clienți și parteneri.",
  },
  {
    icon: Target,
    title: "Orientare spre rezultate",
    text: "Ne concentrăm pe soluții practice și produse care răspund nevoilor reale ale clienților.",
  },
  {
    icon: Users,
    title: "Lucru în echipă",
    text: "Fiecare departament contribuie la dezvoltarea și buna funcționare a firmei.",
  },
];

const departments = [
  {
    title: "Management",
    description:
      "Coordonează activitatea firmei, stabilește obiectivele și urmărește dezvoltarea companiei.",
  },
  {
    title: "Marketing",
    description:
      "Se ocupă de promovarea brandului, campanii, comunicare și imaginea PAPYRUS OFFICE.",
  },
  {
    title: "Vânzări",
    description:
      "Gestionează relația cu clienții, ofertele comerciale și procesul de vânzare.",
  },
  {
    title: "Financiar-Contabil",
    description:
      "Urmărește documentele financiar-contabile, evidențele și activitatea economică a firmei.",
  },
  {
    title: "Achiziții",
    description:
      "Analizează necesarul de produse și gestionează relația cu furnizorii.",
  },
  {
    title: "IT & Web",
    description:
      "Administrează site-ul, soluțiile digitale și prezența online a firmei.",
  },
];

export default function DespreNoiPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute -right-44 -top-44 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-48 -left-36 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Despre PAPYRUS OFFICE
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Construim mai mult decât
            <span className="block text-blue-400">
              un simplu magazin de papetărie.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            PAPYRUS OFFICE SRL este o Firmă de Exercițiu creată pentru a
            simula activitatea unei companii reale și pentru a dezvolta
            competențe antreprenoriale, comerciale și profesionale.
          </p>
        </div>
      </section>

      {/* CINE SUNTEM */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Cine suntem
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              O firmă construită în jurul ideii de organizare, eficiență și
              profesionalism.
            </h2>

            <p className="mt-6 leading-7 text-zinc-600">
              PAPYRUS OFFICE SRL oferă produse de papetărie, birotică,
              instrumente de scris, soluții pentru organizarea documentelor și
              servicii destinate elevilor, studenților, profesioniștilor și
              companiilor.
            </p>

            <p className="mt-4 leading-7 text-zinc-600">
              Activitatea noastră este construită după modelul unei firme reale:
              avem departamente, strategie comercială, produse, servicii,
              promoții și un sistem de relaționare cu clienții.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Catalog variat de produse",
                "Servicii pentru persoane și companii",
                "Pachete comerciale și promoții",
                "Program de fidelitate PAPYRUS Club",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Check size={15} />
                  </div>

                  <p className="font-medium text-zinc-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-3xl bg-blue-600 p-8 text-white sm:col-span-2">
              <Building2 size={36} strokeWidth={1.7} />

              <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-blue-100">
                Compania
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                PAPYRUS OFFICE SRL
              </h3>

              <p className="mt-4 max-w-md leading-7 text-blue-100">
                Produse și soluții pentru școală, birou și mediul de afaceri.
              </p>
            </div>

            <div className="rounded-3xl bg-zinc-100 p-7">
              <p className="text-4xl font-bold">
                60+
              </p>

              <p className="mt-2 text-sm font-medium text-zinc-600">
                Produse în catalog
              </p>
            </div>

            <div className="rounded-3xl bg-zinc-950 p-7 text-white">
              <p className="text-4xl font-bold">
                8+
              </p>

              <p className="mt-2 text-sm font-medium text-zinc-400">
                Servicii disponibile
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FIRMA DE EXERCITIU */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

          <div className="flex min-h-[390px] items-center justify-center rounded-3xl bg-zinc-950 p-10 text-white">
            <div className="max-w-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
                <GraduationCap size={32} strokeWidth={1.7} />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-widest text-blue-400">
                Firma de Exercițiu
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Învățăm prin experiență.
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                Simulăm procesele și activitățile unei companii reale într-un
                mediu educațional.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Educație antreprenorială
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              De la teorie la experiență practică.
            </h2>

            <p className="mt-5 leading-7 text-zinc-600">
              Firma de Exercițiu oferă posibilitatea de a aplica noțiunile
              economice într-un cadru apropiat de mediul real de afaceri.
            </p>

            <p className="mt-4 leading-7 text-zinc-600">
              Prin PAPYRUS OFFICE exersăm procese precum promovarea,
              negocierea, vânzarea, administrarea, lucrul în echipă și
              dezvoltarea unei identități de brand.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="font-bold">
                  Experiență practică
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Aplicarea cunoștințelor economice în activități simulate.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="font-bold">
                  Spirit antreprenorial
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Dezvoltarea inițiativei și a gândirii orientate spre business.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="font-bold">
                  Comunicare
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Dezvoltarea relației cu clienții și partenerii.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="font-bold">
                  Lucru în echipă
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Colaborarea între departamente pentru atingerea obiectivelor.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MISIUNE + VIZIUNE */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 lg:grid-cols-2">

            <article className="rounded-3xl border border-zinc-200 bg-white p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Target size={28} strokeWidth={1.8} />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-widest text-blue-600">
                Misiunea noastră
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Produse utile. Soluții simple. Relații durabile.
              </h2>

              <p className="mt-5 leading-7 text-zinc-600">
                Misiunea PAPYRUS OFFICE este să ofere produse și servicii
                accesibile și bine organizate, care să contribuie la
                eficiența activităților de studiu și de birou.
              </p>
            </article>

            <article className="rounded-3xl bg-zinc-950 p-8 text-white md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                <Eye size={28} strokeWidth={1.8} />
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-widest text-blue-400">
                Viziunea noastră
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Un brand modern pentru o generație organizată.
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                Ne dorim ca PAPYRUS OFFICE să fie perceput ca un brand
                modern, accesibil și bine organizat, capabil să ofere o
                experiență apropiată de cea a unei companii reale.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* VALORI */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Valorile noastre
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Principiile care ne definesc
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-3xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {value.text}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* DEPARTAMENTE */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Echipa PAPYRUS
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                O companie înseamnă mai mult decât un singur departament.
              </h2>

              <p className="mt-5 leading-7 text-zinc-600">
                Activitatea PAPYRUS OFFICE este organizată în departamente
                care colaborează pentru funcționarea și dezvoltarea firmei.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {departments.map((department, index) => (
                <article
                  key={department.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <p className="text-sm font-bold text-blue-600">
                    0{index + 1}
                  </p>

                  <h3 className="mt-3 text-xl font-bold">
                    {department.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {department.description}
                  </p>
                </article>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
              PAPYRUS OFFICE SRL
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Descoperă produsele și serviciile noastre.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/produse"
              className="rounded-xl bg-white px-6 py-3.5 font-semibold text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
            >
              Vezi produsele
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-blue-400 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Contact
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}