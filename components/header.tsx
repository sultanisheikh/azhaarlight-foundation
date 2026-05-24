"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.mission, href: "/mission" },
    { label: t.nav.vision, href: "/vision" },
    { label: t.nav.values, href: "/valeurs" },
    { label: t.nav.news, href: "/actualites" },
    { label: t.nav.help, href: "/aider" },
    { label: t.nav.contact, href: "/contact" },
    { label: t.nav.reports, href: "/rapports" },
    { label: "Réunion 2026", href: "/reunion-2026" },
  ]

  const toggleLanguage = () => {
    setLocale(locale === "fr" ? "en" : "fr")
  }

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/azhaarlight-logo.jpg"
              alt="AzhaarLight Foundation Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="font-serif font-bold text-lg lg:text-xl text-foreground">
              AzhaarLight Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            {/* Search Icon */}
            <Link
              href="/recherche"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="Recherche"
            >
              <Search className="h-4 w-4" />
            </Link>
            <div className="ml-1 flex items-center border border-foreground/20 rounded-lg overflow-hidden text-xs">
              <button
                onClick={() => setLocale("fr")}
                className={`px-2 py-1 font-medium transition-colors ${locale === "fr" ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground"}`}
              >
                FR
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2 py-1 font-medium transition-colors ${locale === "en" ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground"}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
