"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Heart, Users, Handshake, Share2, Star } from "lucide-react"

export function HowToHelp() {
  const { t } = useLanguage()

  const donationImpacts = [
    { amount: "10€", impact: t.help.impact1 },
    { amount: "30€", impact: t.help.impact2 },
    { amount: "50€", impact: t.help.impact3 },
    { amount: "70€", impact: t.help.impact4 },
    { amount: "100€", impact: t.help.impact5 },
    { amount: "150€", impact: t.help.impact6 },
    { amount: "1 000€", impact: t.help.impact7 },
  ]

  const volunteerProfiles = [
    t.help.vol1, t.help.vol2, t.help.vol3, t.help.vol4,
    t.help.vol5, t.help.vol6,
  ]

  const partnershipOpportunities = [
    t.help.part1, t.help.part2, t.help.part3, t.help.part4, t.help.part5,
  ]

  const spreadMission = [
    t.help.spread1, t.help.spread2, t.help.spread3, t.help.spread4,
  ]

  const paymentMethods = [
    t.help.pay1, t.help.pay2, t.help.pay3, t.help.pay4,
  ]

  return (
    <section id="aider" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-3 block">
            {t.help.sectionLabel}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.help.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.help.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">

          {/* Faire un Don */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">💰</span>
              <h3 className="font-serif text-2xl font-bold text-foreground">{t.help.donateTitle}</h3>
            </div>
            <p className="text-muted-foreground mb-6">{t.help.donateDesc}</p>

            {/* Impact Table */}
            <div className="mb-6">
              <h4 className="font-serif font-bold text-foreground mb-4">{t.help.impactTitle}</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-3 font-semibold text-foreground rounded-tl-lg">{t.help.tableAmount}</th>
                      <th className="text-left p-3 font-semibold text-foreground rounded-tr-lg">{t.help.tableImpact}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donationImpacts.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-card"}>
                        <td className="p-3 font-bold text-primary">{row.amount}</td>
                        <td className="p-3 text-muted-foreground">{row.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-background rounded-xl p-4 border border-border">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">📧 Email</p>
                  <p className="font-medium text-sm">azhaarlight@outlook.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background rounded-xl p-4 border border-border">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">📞 WhatsApp</p>
                  <p className="font-medium text-sm">+257 67 91 43 87</p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="font-medium text-foreground mb-3">💳 {t.help.payTitle}</h4>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method, i) => (
                  <span key={i} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium">
                    {method}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3 italic">🏦 {t.help.bankNote}</p>
            </div>
          </div>

          {/* Devenir Bénévole */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🙋</span>
              <h3 className="font-serif text-2xl font-bold text-foreground">{t.help.volTitle}</h3>
            </div>
            <p className="text-muted-foreground mb-4">{t.help.volDesc}</p>
            <h4 className="font-medium text-foreground mb-3">{t.help.volProfiles}</h4>
            <div className="grid md:grid-cols-2 gap-2 mb-6">
              {volunteerProfiles.map((profile, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span>
                  {profile}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">📧 {t.help.volContact} : <span className="font-medium text-foreground">azhaarlight@outlook.com</span></p>
          </div>

          {/* Partenariats */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🤝</span>
              <h3 className="font-serif text-2xl font-bold text-foreground">{t.help.partTitle}</h3>
            </div>
            <p className="text-muted-foreground mb-4">{t.help.partDesc}</p>
            <h4 className="font-medium text-foreground mb-3">{t.help.partOpportunities}</h4>
            <ul className="space-y-2 mb-6">
              {partnershipOpportunities.map((opp, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  {opp}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">📧 {t.help.partContact} : <span className="font-medium text-foreground">azhaarlight@outlook.com</span></p>
          </div>

          {/* Diffuser la Mission */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📢</span>
              <h3 className="font-serif text-2xl font-bold text-foreground">{t.help.spreadTitle}</h3>
            </div>
            <p className="text-muted-foreground mb-4">{t.help.spreadDesc}</p>
            <ul className="space-y-2">
              {spreadMission.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Zakat et Sadaqah */}
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🕌</span>
              <h3 className="font-serif text-2xl font-bold text-foreground">{t.help.zakatTitle}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t.help.zakatDesc}</p>
          </div>

        </div>
      </div>
    </section>
  )
}
