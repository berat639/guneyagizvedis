"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Menu, X, Calendar, Navigation } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      {/* Full-Width Minimal Top Bar */}
      <div className="w-full bg-rose-50/70 border-b border-rose-100/80 text-slate-700 text-xs">
        <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24 py-2 flex items-center justify-between gap-3">
          <a
            href={CLINIC_INFO.address.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-red-700 transition-colors truncate min-h-[28px]"
          >
            <MapPin className="w-3.5 h-3.5 text-red-700 shrink-0" />
            <span className="truncate font-medium">
              {CLINIC_INFO.address.full}
            </span>
          </a>

          <a
            href={CLINIC_INFO.address.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 font-bold text-slate-900 hover:text-red-700 transition-colors shrink-0 min-h-[28px]"
          >
            <Navigation className="w-3.5 h-3.5 text-red-700" />
            <span>Yol Tarifi Al</span>
          </a>
        </div>
      </div>

      {/* Full-Width Main Navbar */}
      <div className="w-full px-4 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex h-18 sm:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 min-h-[44px]">
            <Image
              src={CLINIC_INFO.images.logo}
              alt={CLINIC_INFO.officialTitle}
              width={48}
              height={48}
              priority
              quality={80}
              sizes="48px"
              className="h-11 sm:h-12 w-auto object-contain mix-blend-multiply"
            />
            <div className="flex items-center gap-3">
              <div>
                <span className="block text-lg sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
                  Güney
                </span>
                <span className="block text-xs font-bold text-slate-700 mt-0.5">
                  Ağız ve Diş Sağlığı
                </span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-slate-200" />
              <span className="hidden sm:block text-xs font-medium text-slate-600 leading-tight max-w-[135px]">
                Diş Hekimi ve Diş Sağlığı Kliniği
              </span>
            </div>
          </Link>

          {/* Clean Horizontal Navigation */}
          <nav
            aria-label="Ana Menü"
            className="hidden lg:flex items-center gap-7"
          >
            {[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hakkımızda", href: "/hakkimizda" },
              { label: "Tedavilerimiz", href: "/tedavilerimiz" },
              { label: "İletişim", href: "/iletisim" },
            ].map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-2 py-2.5 text-sm font-bold transition-colors min-h-[44px] flex items-center ${
                    active
                      ? "text-red-700"
                      : "text-slate-800 hover:text-red-700"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-red-700" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Direct Link to External Assistant System */}
          <div className="hidden lg:flex items-center">
            <a
              href={CLINIC_INFO.assistantUrl}
              className="inline-flex items-center gap-2 rounded-full bg-red-700 px-6 py-3 text-sm font-bold text-white shadow-xs hover:bg-red-800 transition-colors min-h-[44px]"
            >
              <Calendar className="w-4 h-4" />
              <span>Randevu Al</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
              aria-expanded={mobileMenuOpen}
              className="rounded-xl border border-slate-200 p-2.5 text-slate-800 hover:bg-slate-50 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <nav aria-label="Mobil Menü" className="flex flex-col space-y-1">
            {[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hakkımızda", href: "/hakkimizda" },
              { label: "Tedavilerimiz", href: "/tedavilerimiz" },
              { label: "İletişim", href: "/iletisim" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-bold min-h-[44px] flex items-center ${
                  isActive(item.href)
                    ? "bg-rose-50 text-red-700"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-100">
            <a
              href={CLINIC_INFO.assistantUrl}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-red-700 px-4 py-3 text-sm font-bold text-white min-h-[48px]"
            >
              <Calendar className="w-4 h-4" />
              <span>Asistan ile Randevu & Bilgi Al</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
