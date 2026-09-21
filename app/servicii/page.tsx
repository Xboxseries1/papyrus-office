
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Descoperă serviciile PAPYRUS OFFICE: printare, scanare, laminare, spiralare și soluții complete pentru birouri și companii.",
};import {
  Building2,
  Copy,
  FileArchive,
  Layers,
  PackageCheck,
  Printer,
  ScanLine,
  ShieldCheck,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Printare alb-negru",
    description:
      "Printare rapidă pentru documente, proiecte, formulare și materiale de lucru.",
    price: "de la 0,50 lei / pagină",
  },
  {
    icon: Printer,
    title: "Printare color",
    description:
      "Documente, prezentări și materiale promoționale imprimate color.",
    price: "de la 1,50 lei / pagină",
  },
  {
    icon: Copy,
    title: "Copiere documente",
    description:
      "Copiere documente în format A4 și A3 pentru școală și birou.",
    price: "de la 0,40 lei / pagină",
  },
  {
    icon: ScanLine,
    title: "Scanare documente",
    description:
      "Digitalizarea documentelor pentru arhivare sau transmitere electronică.",
    price: "de la 2,00 lei",
  },
  {
    icon: Layers,
    title: "Spiralare",
    description:
      "Spiralare pentru proiecte, referate, prezentări și documente.",
    price: "de la 7,99 lei",
  },
  {
    icon: ShieldCheck,
    title: "Laminare",
    description:
      "Protejarea diplomelor, certificatelor și documentelor importante.",
    price: "de la 5,99 lei",
  },
  {
    icon: FileArchive,
    title: "Pregătire dosare",
    description:
      "Organizarea documentelor și pregătirea dosarelor pentru firme.",
    price: "ofertă personalizată",
  },
  {
    icon: Building2,
    title: "Pachete pentru companii",
    description:
      "Produse de papetărie și birotică adaptate necesităților fiecărui birou.",
    price: "ofertă personalizată",
  },
];

export default function ServiciiPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Servicii PAPYRUS OFFICE
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Mai mult decât produse.
            <span className="block text-blue-400">
              Soluții complete pentru tine.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Servicii pentru școală, studiu, birou și companii, de la
            printare și scanare până la soluții personalizate.
          </p>
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Ce oferim
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Servicii pentru fiecare nevoie
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[96px] text-sm leading-6 text-zinc-600">
                    {service.description}
                  </p>

                  <p className="mt-5 border-t border-zinc-100 pt-4 text-sm font-bold text-blue-600">
                    {service.price}
                  </p>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Pentru companii
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Echipăm biroul tău de la A la Z.
            </h2>

            <p className="mt-5 leading-7 text-zinc-600">
              Pregătim pachete personalizate pentru firme și echipe în
              funcție de necesarul lor.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Pachete personalizate de papetărie și birotică",
                "Comenzi recurente pentru consumabile",
                "Reduceri pentru comenzi de volum",
                "Soluții adaptate fiecărui departament",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={19} className="text-blue-600" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-xl bg-zinc-950 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-600"
            >
              Solicită o ofertă →
            </a>
          </div>

          <div className="rounded-3xl bg-blue-600 p-10 text-white">
            <PackageCheck size={42} strokeWidth={1.7} />

            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-blue-100">
              Pachet recomandat
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              Corporate Start
            </h3>

            <p className="mt-4 text-blue-100">
              Un pachet pentru un birou mic sau o echipă aflată la început.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="rounded-xl bg-white/10 p-4">5 × Top hârtie A4</li>
              <li className="rounded-xl bg-white/10 p-4">10 × Bibliorafturi</li>
              <li className="rounded-xl bg-white/10 p-4">20 × Pixuri</li>
              <li className="rounded-xl bg-white/10 p-4">5 × Seturi notițe</li>
              <li className="rounded-xl bg-white/10 p-4">2 × Capsatoare</li>
            </ul>

            <div className="mt-8 border-t border-white/20 pt-6">
              <p className="text-sm text-blue-100">Preț de la</p>
              <p className="mt-1 text-4xl font-bold">249,99 lei</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}