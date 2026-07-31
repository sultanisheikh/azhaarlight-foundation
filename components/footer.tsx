"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
)

export function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.mission, href: "/mission" },
    { label: t.nav.vision, href: "/vision" },
    { label: t.nav.values, href: "/valeurs" },
    { label: t.nav.help, href: "/aider" },
    { label: t.nav.reports, href: "/rapports" },
    { label: t.nav.partners, href: "/partenaires" },
    { label: t.nav.contact, href: "/contact" },
    { label: t.nav.donPage, href: "/don" },
  ]

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://www.facebook.com/profile.php?id=61589285276789", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/azhaarlight", label: "Instagram" },
    { icon: <TikTokIcon />, href: "https://www.tiktok.com/@azhaarlight", label: "TikTok" },
    { icon: <Youtube size={18} />, href: "https://www.youtube.com/channel/UCAPxLUnCa_eQYAusD8i49jw", label: "YouTube" },
    { icon: <Twitter size={18} />, href: "https://x.com/azhaarlight", label: "Twitter/X" },
  ]

  return (
    <footer className="bg-card border-t border-border pt-12 pb-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/azhaarlight-logo.jpg"
                alt="AzhaarLight Foundation Logo"
                width={44}
                height={44}
                className="rounded-full"
              />
              <span className="font-serif font-bold text-foreground">AzhaarLight Foundation</span>
            </Link>
            <p className="text-muted-foreground text-sm italic mb-4">
              "{t.footer.tagline}"
            </p>
            <a
              href="/don"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              ❤️ {t.nav.donate}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.followUs}</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6 space-y-1 text-sm text-muted-foreground">
              <p>📩 azhaarlight@outlook.com</p>
              <p>📞 🇧🇮 +257 67 91 43 87</p>
              <p>📍 Bujumbura, Burundi</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© 2025–2026 AzhaarLight Foundation. {t.footer.rights}</p>
          <div className="flex gap-4">
            <Link href="/confidentialite" className="hover:text-primary transition-colors">{t.footer.privacy}</Link>
            <Link href="/cgu" className="hover:text-primary transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
