"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const TikTokIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
  </svg>
)

export function Contact() {
  const { t, locale } = useLanguage()
  const isFr = locale === "fr"
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("https://formspree.io/f/mjgzvdgk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (!res.ok) throw new Error("Erreur")
      setSubmitted(true)
    } catch (err) {
      setError(
        isFr
          ? "Une erreur est survenue. Veuillez réessayer ou nous contacter par email."
          : "An error occurred. Please try again or contact us by email."
      )
    } finally {
      setLoading(false)
    }
  }

  const reasons = [
    t.contact.reason1, t.contact.reason2, t.contact.reason3,
    t.contact.reason4, t.contact.reason5,
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61589285276789", label: "Facebook", color: "bg-blue-500" },
    { icon: Instagram, href: "https://www.instagram.com/azhaarlight", label: "Instagram", color: "bg-pink-500" },
    { icon: Twitter, href: "https://x.com/azhaarlight", label: "Twitter/X", color: "bg-sky-500" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCAPxLUnCa_eQYAusD8i49jw", label: "YouTube", color: "bg-red-500" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@azhaarlight", label: "TikTok", color: "bg-foreground" },
  ]

  return (
    <section id="contact" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-3 block">
            {t.contact.sectionLabel}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.contact.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">💬 {t.contact.formTitle}</h3>
            <p className="text-sm text-muted-foreground mb-6">{t.contact.formDesc}</p>

            <div className="mb-6">
              <p className="text-sm font-medium text-foreground mb-2">{t.contact.reasonsTitle}</p>
              <ul className="space-y-1">
                {reasons.map((reason, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-primary">•</span> {reason}
                  </li>
                ))}
              </ul>
            </div>

            {submitted ? (
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <p className="text-2xl mb-2">✅</p>
                <p className="font-serif font-bold text-foreground">{t.contact.successTitle}</p>
                <p className="text-muted-foreground text-sm mt-1">{t.contact.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t.contact.formName}</label>
                  <Input type="text" placeholder={t.contact.formName} value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-card" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t.contact.formEmail}</label>
                  <Input type="email" placeholder="email@example.com" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-card" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t.contact.formSubject}</label>
                  <Input type="text" placeholder={t.contact.formSubject} value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="bg-card" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t.contact.formMessage}</label>
                  <Textarea placeholder={t.contact.formMessage} rows={4} value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} required className="bg-card resize-none" />
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg" disabled={loading}>
                  {loading ? (isFr ? "Envoi en cours..." : "Sending...") : t.contact.formSubmit}
                </Button>
                <p className="text-xs text-muted-foreground text-center">{t.contact.responseTime}</p>
              </form>
            )}
          </div>

          <div className="space-y-6">

            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">📍 {t.contact.addressLabel}</h3>
                  <p className="text-muted-foreground text-sm">{t.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">📞 {t.contact.phoneLabel}</h3>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium mb-1">
                      🇧🇮 {isFr ? "Burundi (Afrique de l'Est)" : "Burundi (East Africa)"}
                    </p>
                    <a href="tel:+25767914387" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      +257 67 91 43 87
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">WhatsApp {t.contact.available}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">📧 {t.contact.emailLabel}</h3>
                  <a href="mailto:azhaarlight@outlook.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    azhaarlight@outlook.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">🌐 {t.contact.followUs}</h3>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                    className={`${social.color} text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity`}>
                    <social.icon />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
