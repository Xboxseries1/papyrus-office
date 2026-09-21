"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Acasă", href: "/" },
  { name: "Produse", href: "/produse" },
  { name: "Servicii", href: "/servicii" },
  { name: "Oferte", href: "/oferte" },
  { name: "Despre noi", href: "/despre-noi" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 text-zinc-900 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
         <Image
  src="/images/papyrus-logo.png"
  alt="PAPYRUS OFFICE"
  width={665}
  height={345}
  priority
  className="h-auto w-[125px] object-contain sm:w-[145px]"
/>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  active
                    ? "text-blue-600"
                    : "text-zinc-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

       <Link
  href="/contact"
  className="rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold transition hover:bg-blue-600"
  style={{ color: "#ffffff" }}
>
  Contact
</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-900 transition hover:bg-zinc-100 lg:hidden"
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[77px] z-50 h-[calc(100vh-77px)] bg-white lg:hidden">
          <div className="mx-auto flex h-full max-w-7xl flex-col px-6 py-6">

            <nav className="flex flex-col">
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`border-b border-zinc-100 py-5 text-xl font-semibold transition ${
                      active
                        ? "text-blue-600"
                        : "text-zinc-900 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="mt-7 flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Contactează-ne
            </Link>

            <div className="mt-auto border-t border-zinc-200 pt-6">
              <p className="text-sm text-zinc-500">
                PAPYRUS OFFICE SRL
              </p>

              <a
                href="mailto:papyrusoffice865@gmail.com"
                className="mt-2 block text-sm font-semibold text-blue-600"
              >
                papyrusoffice865@gmail.com
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}