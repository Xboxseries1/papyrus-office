"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name")?.toString() || "";
    const email = form.get("email")?.toString() || "";
    const subject = form.get("subject")?.toString() || "Mesaj de pe site";
    const message = form.get("message")?.toString() || "";

    const body = `
Nume: ${name}
Email: ${email}

Mesaj:
${message}
    `.trim();

    const mailto = `mailto:papyrusoffice865@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setSent(true);
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute -right-48 -top-48 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Contact PAPYRUS OFFICE
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Ai o întrebare?
            <span className="block text-blue-400">
              Suntem aici să te ajutăm.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Contactează echipa PAPYRUS OFFICE pentru informații despre
            produse, servicii, pachete sau colaborări.
          </p>
        </div>
      </section>

      {/* CONTACT PRINCIPAL */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* DATE CONTACT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Date de contact
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Vorbește cu echipa noastră.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-zinc-600">
              Pentru întrebări, oferte sau informații despre activitatea
              PAPYRUS OFFICE, ne poți contacta folosind datele de mai jos.
            </p>

            <div className="mt-10 space-y-4">

              {/* EMAIL */}
              <a
                href="mailto:papyrusoffice865@gmail.com"
                className="group flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={23} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-sm font-medium text-zinc-500">
                    Email
                  </p>

                  <p className="mt-1 font-bold text-zinc-900">
                    papyrusoffice865@gmail.com
                  </p>

                  <p className="mt-1 text-sm text-blue-600">
                    Trimite-ne un email →
                  </p>
                </div>
              </a>

              {/* LOCATIE */}
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={23} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-sm font-medium text-zinc-500">
                    Locație
                  </p>

                  <p className="mt-1 font-bold text-zinc-900">
                    Ploiești, Prahova
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    România
                  </p>
                </div>
              </div>

              {/* PROGRAM */}
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Clock3 size={23} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-sm font-medium text-zinc-500">
                    Program
                  </p>

                  <p className="mt-1 font-bold text-zinc-900">
                    Luni – Vineri
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Programul exact va fi afișat în curând.
                  </p>
                </div>
              </div>

            </div>

            {/* FIRMA EXERCITIU */}
            <div className="mt-6 rounded-2xl bg-zinc-950 p-6 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                <Building2 size={23} strokeWidth={1.8} />
              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-widest text-blue-400">
                Firmă de Exercițiu
              </p>

              <h3 className="mt-2 text-xl font-bold">
                PAPYRUS OFFICE SRL
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Activitatea desfășurată în cadrul firmei are caracter
                educațional și simulează activitatea unei companii reale.
              </p>
            </div>
          </div>

          {/* FORMULAR */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm md:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <MessageSquareText size={27} strokeWidth={1.8} />
            </div>

            <h2 className="mt-6 text-3xl font-bold">
              Trimite-ne un mesaj
            </h2>

            <p className="mt-3 leading-7 text-zinc-600">
              Completează formularul, iar mesajul va fi pregătit pentru
              trimitere către adresa oficială PAPYRUS OFFICE.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* NUME + EMAIL */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-zinc-700"
                  >
                    Nume
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Numele tău"
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 outline-none transition placeholder:text-zinc-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-zinc-700"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@exemplu.ro"
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 outline-none transition placeholder:text-zinc-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

              </div>

              {/* SUBIECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-zinc-700"
                >
                  Subiect
                </label>

                <select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  required
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3.5 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Selectează motivul contactării
                  </option>

                  <option value="Informații despre produse">
                    Informații despre produse
                  </option>

                  <option value="Solicitare ofertă">
                    Solicitare ofertă
                  </option>

                  <option value="Pachet pentru companie">
                    Pachet pentru companie
                  </option>

                  <option value="Servicii PAPYRUS OFFICE">
                    Servicii
                  </option>

                  <option value="Colaborare PAPYRUS OFFICE">
                    Colaborare
                  </option>

                  <option value="Altă solicitare">
                    Altă solicitare
                  </option>
                </select>
              </div>

              {/* MESAJ */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-zinc-700"
                >
                  Mesaj
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Scrie mesajul tău aici..."
                  className="w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3.5 outline-none transition placeholder:text-zinc-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Trimite mesajul
                <Send size={18} />
              </button>

              {sent && (
                <div className="flex items-start gap-3 rounded-xl bg-green-50 p-4 text-sm text-green-800">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0"
                  />

                  <p>
                    Mesajul a fost pregătit. Aplicația ta de email ar trebui
                    să se deschidă pentru trimitere.
                  </p>
                </div>
              )}

            </form>
          </div>

        </div>
      </section>

      {/* CERERI OFERTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-3xl bg-zinc-950 p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
                  Pentru companii
                </p>

                <h2 className="mt-3 max-w-3xl text-4xl font-bold">
                  Ai nevoie de produse pentru întreaga echipă?
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                  Trimite-ne necesarul tău și putem pregăti o ofertă
                  personalizată pentru papetărie, birotică și consumabile.
                </p>
              </div>

              <a
                href="mailto:papyrusoffice865@gmail.com?subject=Solicitare%20oferta%20PAPYRUS%20OFFICE"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Cere o ofertă
                <ArrowRight size={18} />
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            PAPYRUS OFFICE SRL
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Hai să construim împreună soluția potrivită.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-600">
            Pentru orice întrebare despre produse, servicii sau colaborări,
            echipa PAPYRUS OFFICE este la un mesaj distanță.
          </p>

          <a
            href="mailto:papyrusoffice865@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-600"
          >
            <Mail size={18} />
            papyrusoffice865@gmail.com
          </a>

        </div>
      </section>

    </main>
  );
}