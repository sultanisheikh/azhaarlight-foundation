"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Users, MapPin, Calendar, ArrowRight, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  const stats = [
    { value: "50+", label: t.hero.stat1, icon: Users },
    { value: "2025", label: t.hero.stat2, icon: Calendar },
    { value: "Burundi", label: t.hero.stat3, icon: MapPin },
  ]

  const beneficiaries = [
    { emoji: "👶", label: t.hero.ben1 },
    { emoji: "👩", label: t.hero.ben2 },
    { emoji: "👴", label: t.hero.ben3 },
    { emoji: "🎓", label: t.hero.ben4 },
    { emoji: "🏥", label: t.hero.ben5 },
  ]

  return (
    <section id="accueil" className="relative">

      {/* Hero Banner */}
      <div className="relative py-20 lg:py-28 bg-gradient-to-b from-card to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:24px_24px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Image
                src="/images/azhaarlight-logo.jpg"
                alt="AzhaarLight Foundation Logo"
                width={180}
                height={180}
                className="rounded-full shadow-lg"
                priority
              />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              🌍 AzhaarLight Foundation
            </h1>
            <p className="text-xl md:text-2xl text-primary font-serif italic mb-6">
              {`"${t.hero.tagline}"`}
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
                <Heart className="mr-2 h-5 w-5" />
                {t.hero.donate}
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-6 text-lg">
                {t.hero.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Photo */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/hero-photo.jpg.jpg"
          alt="AzhaarLight Foundation - Education"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <p className="text-white text-2xl md:text-4xl font-serif font-bold text-center px-4 drop-shadow-lg">
            "Rising Together, Changing Lives"
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-6 w-6 text-primary-foreground/70 mx-auto mb-1" />
                <p className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">

          {/* Description */}
          <div className="bg-card rounded-2xl p-8 border border-border mb-8 shadow-sm">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t.hero.welcomeDesc}
            </p>
          </div>

          {/* Beneficiaries */}
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              {t.hero.benTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {beneficiaries.map((ben, index) => (
                <div key={index} className="bg-card rounded-xl p-4 text-center border border-border hover:shadow-md transition-shadow">
                  <p className="text-3xl mb-2">{ben.emoji}</p>
                  <p className="text-sm text-muted-foreground font-medium">{ben.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 mb-8 text-center">
            <p className="text-2xl mb-3">💡</p>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">{t.hero.visionTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.hero.visionDesc}</p>
          </div>

          {/* Join Us */}
          <div className="bg-card rounded-2xl p-8 border border-border mb-8 text-center">
            <p className="text-2xl mb-3">🤝</p>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">{t.hero.joinTitle}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{t.hero.joinDesc}</p>
            <Button size="lg" className="bg-primary text-primary-foreground">
              <Heart className="mr-2 h-5 w-5" />
              {t.hero.donate} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-card rounded-xl p-6 border border-border flex items-center gap-4">
              <Mail className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">📩 Email</p>
                <p className="font-medium text-foreground">azhaarlight@outlook.com</p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border flex items-center gap-4">
              <Phone className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">📞 WhatsApp</p>
                <p className="font-medium text-foreground">+257 67 91 43 87</p>
              </div>
            </div>
          </div>

          {/* Slogan */}
          <div className="text-center">
            <p className="font-serif text-xl font-bold text-primary italic">
              ✨ "{t.footer.tagline}"
            </p>
            <p className="text-muted-foreground mt-2">{t.hero.sloganSub}</p>
          </div>

        </div>
      </div>
    </section>
  )
}
