import {
  BookOpen,
  Building2,
  Check,
  FileText,
  FolderOpen,
  PenLine,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white text-zinc-900">

      {/* HERO */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <FileText size={17} />
              Papetărie • Birotică • Soluții pentru birou
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Idei pe hârtie.
              <span className="block text-blue-600">
                Performanță la birou.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              PAPYRUS OFFICE oferă produse de papetărie, birotică,
              consumabile și soluții complete pentru elevi, studenți,
              profesioniști și companii.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/produse"
                className="rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Vezi produsele →
              </a>

              <a
                href="/oferte"
                className="rounded-xl border border-zinc-300 px-6 py-3.5 font-semibold transition hover:border-zinc-900"
              >
                Vezi ofertele
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-600">
              <span className="flex items-center gap-2">
                <Check size={17} className="text-blue-600" />
                Produse atent selectate
              </span>

              <span className="flex items-center gap-2">
                <Check size={17} className="text-blue-600" />
                Pachete avantajoase
              </span>

              <span className="flex items-center gap-2">
                <Check size={17} className="text-blue-600" />
                Soluții pentru companii
              </span>
            </div>
          </div>

          {/* OFERTA */}
          <div className="relative">
            <div className="rounded-3xl bg-zinc-950 p-8 text-white shadow-2xl md:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Oferta săptămânii
              </p>

              <h2 className="mt-5 text-3xl font-bold">
                Pachet Office Start
              </h2>

              <p className="mt-4 leading-7 text-zinc-300">
                Tot ce ai nevoie pentru un birou bine organizat,
                într-un singur pachet.
              </p>

              <ul className="mt-7 space-y-4 text-zinc-200">
                {[
                  "Top hârtie A4 – 500 coli",
                  "2 bibliorafturi",
                  "Set pixuri",
                  "Capsator + capse",
                  "Set notițe adezive",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check size={18} className="text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-end gap-3">
                <span className="text-4xl font-bold">59,99 lei</span>
                <span className="mb-1 text-lg text-zinc-500 line-through">
                  74,99 lei
                </span>
              </div>

              <a
                href="/oferte"
                className="mt-8 block rounded-xl bg-white px-5 py-3 text-center font-semibold text-zinc-950 transition hover:bg-blue-500 hover:text-white"
              >
                Descoperă oferta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORII */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Categorii
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Totul într-un singur loc
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-600">
            Produse pentru școală, birou și organizarea activității zilnice.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <CategoryCard
              icon={<BookOpen size={30} />}
              title="Papetărie"
              text="Caiete, hârtie, agende, mape și articole pentru școală."
            />

            <CategoryCard
              icon={<PenLine size={30} />}
              title="Instrumente de scris"
              text="Pixuri, stilouri, markere, creioane și evidențiatoare."
            />

            <CategoryCard
              icon={<FolderOpen size={30} />}
              title="Organizare"
              text="Bibliorafturi, dosare, separatoare și arhivare."
            />

            <CategoryCard
              icon={<Building2 size={30} />}
              title="Pentru companii"
              text="Pachete și soluții adaptate mediului de afaceri."
              href="/servicii"
            />

          </div>
        </div>
      </section>

      {/* DESPRE */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              De ce PAPYRUS OFFICE?
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Mai mult decât o simplă papetărie.
            </h2>

            <p className="mt-5 leading-7 text-zinc-600">
              Oferim soluții complete pentru școală, studiu și mediul de
              afaceri, prin produse utile, pachete avantajoase și servicii
              adaptate fiecărui client.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Stat number="60+" text="Produse disponibile" />
            <Stat number="8+" text="Servicii" />
            <Stat number="4" text="Pachete speciale" />

            <div className="rounded-2xl bg-blue-600 p-6 text-white">
              <p className="text-2xl font-bold">PAPYRUS CLUB</p>
              <p className="mt-2 font-medium text-blue-100">
                Program de fidelitate
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

function CategoryCard({
  icon,
  title,
  text,
  href = "/produse",
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-zinc-600">
        {text}
      </p>

      <p className="mt-5 font-semibold text-blue-600">
        Descoperă →
      </p>
    </a>
  );
}

function Stat({ number, text }: { number: string; text: string }) {
  return (
    <div className="rounded-2xl bg-zinc-100 p-6">
      <p className="text-3xl font-bold">{number}</p>
      <p className="mt-2 font-medium">{text}</p>
    </div>
  );
}