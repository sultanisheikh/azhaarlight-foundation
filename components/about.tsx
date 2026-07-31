"use client"

import { Heart, Users, Globe, Award, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  const pillars = [
    {
      icon: Heart,
      title: t.about.pillar1Title,
      description: t.about.pillar1Desc,
      color: "primary",
    },
    {
      icon: Users,
      title: t.about.pillar2Title,
      description: t.about.pillar2Desc,
      color: "secondary",
    },
    {
      icon: Globe,
      title: t.about.pillar3Title,
      description: t.about.pillar3Desc,
      color: "primary",
    },
  ]

  return (
    <section id="apropos" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-3 block">
            {t.about.sectionLabel}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.about.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        </div>

        {/* Qui sommes-nous */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
            {t.about.whoTitle}
          </h3>
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
            <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
              {t.about.whoDesc1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.about.whoDesc2}
            </p>
            <p className="text-foreground font-semibold leading-relaxed italic border-l-4 border-primary pl-4">
              {t.about.whoMission}
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className={`w-16 h-16 ${pillar.color === "primary" ? "bg-primary/10" : "bg-secondary/10"} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <pillar.icon className={`h-8 w-8 ${pillar.color === "primary" ? "text-primary" : "text-secondary"}`} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Notre Fondateur */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            {t.about.founderTitle}
          </h3>
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 text-center">
                <p className="font-serif font-bold text-foreground">{t.about.founderName}</p>
                <p className="text-primary text-sm font-medium">{t.about.founderRole}</p>
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mb-2" />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t.about.founderDesc1}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t.about.founderDesc2}
                </p>
                <p className="text-foreground font-medium leading-relaxed italic border-l-4 border-primary pl-4">
                  {t.about.founderQuote}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notre Parcours */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            {t.about.journeyTitle}
          </h3>
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              {t.about.journeyDesc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-background rounded-xl p-6 text-center shadow-sm">
                <p className="font-serif text-4xl font-bold text-primary mb-2">50+</p>
                <p className="text-muted-foreground">{t.about.journeyStat1}</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center shadow-sm">
                <p className="font-serif text-4xl font-bold text-primary mb-2">2025</p>
                <p className="text-muted-foreground">{t.about.journeyStat2}</p>
              </div>
            </div>
            <p className="text-center text-foreground font-serif font-bold text-lg italic">
              "{t.about.slogan}"
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
