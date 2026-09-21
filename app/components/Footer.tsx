import {
  Building2,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                P
              </div>

              <div>
                <p className="text-lg font-bold leading-none">
                  PAPYRUS OFFICE
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Firma de exercițiu
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-6 text-zinc-400">
              Produse de papetărie, birotică și soluții pentru elevi,
              profesioniști și companii.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-zinc-400">
              <Building2 size={17} className="text-blue-400" />
              PAPYRUS OFFICE SRL
            </div>
          </div>

          {/* NAVIGARE */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white">
              Navigare
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-400">
              <a
                href="/"
                className="transition hover:text-blue-400"
              >
                Acasă
              </a>

              <a
                href="/produse"
                className="transition hover:text-blue-400"
              >
                Produse
              </a>

              <a
                href="/servicii"
                className="transition hover:text-blue-400"
              >
                Servicii
              </a>

              <a
                href="/oferte"
                className="transition hover:text-blue-400"
              >
                Oferte
              </a>

              <a
                href="/despre-noi"
                className="transition hover:text-blue-400"
              >
                Despre noi
              </a>

              <a
                href="/contact"
                className="transition hover:text-blue-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* UTILE */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white">
              PAPYRUS OFFICE
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-400">
              <a
                href="/produse"
                className="transition hover:text-blue-400"
              >
                Catalog produse
              </a>

              <a
                href="/oferte"
                className="transition hover:text-blue-400"
              >
                Pachete speciale
              </a>

              <a
                href="/oferte"
                className="transition hover:text-blue-400"
              >
                PAPYRUS Club
              </a>

              <a
                href="/servicii"
                className="transition hover:text-blue-400"
              >
                Servicii pentru companii
              </a>

              <a
                href="/contact"
                className="transition hover:text-blue-400"
              >
                Cere o ofertă
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </p>

            <div className="mt-6 space-y-5">

              <a
                href="mailto:papyrusoffice865@gmail.com"
                className="group flex items-start gap-3 text-sm text-zinc-400 transition hover:text-white"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span className="break-all">
                  papyrusoffice865@gmail.com
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-zinc-400">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
                  Ploiești, Prahova
                  <br />
                  România
                </span>
              </div>

            </div>

            <a
              href="/contact"
              className="mt-7 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Contactează-ne
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} PAPYRUS OFFICE SRL. Toate drepturile
            rezervate.
          </p>

          <p>
            Firmă de Exercițiu • Proiect educațional
          </p>

        </div>

      </div>

    </footer>
  );
}