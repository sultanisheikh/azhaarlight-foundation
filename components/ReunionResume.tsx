export default function ReunionResume() {
  return (
    <section style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem", fontFamily: "sans-serif" }}>

      <div style={{ background: "#1F4E79", borderRadius: 14, padding: "2rem", marginBottom: "1.5rem" }}>
        <span style={{ background: "#C9A84C", color: "#fff", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "4px 14px", borderRadius: 20, display: "inline-block", marginBottom: "0.85rem" }}>
          Compte-rendu officiel
        </span>
        <h2 style={{ color: "#fff", fontSize: 24, marginBottom: "0.35rem", margin: "0 0 0.35rem" }}>
          Premiere reunion officielle des membres
        </h2>
        <p style={{ color: "#B5D4F4", fontSize: 15, margin: 0 }}>AzhaarLight Foundation — Samedi 23 mai 2026</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: "1.5rem" }}>
        {[
          { val: "150", lbl: "membres actifs presents" },
          { val: "4",   lbl: "domaines d action" },
          { val: "2026", lbl: "projet kits scolaires" },
        ].map((s) => (
          <div key={s.val} style={{ background: "#EBF3FB", borderRadius: 10, padding: "1rem", textAlign: "center" as const }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: 28, color: "#1F4E79", display: "block" }}>{s.val}</span>
            <span style={{ fontSize: 12, color: "#6B8CAE", display: "block", marginTop: 3 }}>{s.lbl}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#999", marginBottom: "0.75rem" }}>Contexte</p>
      <div style={{ background: "#fff", border: "1px solid #E8E8E8", borderRadius: 12, padding: "1.25rem", marginBottom: "1.25rem" }}>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444", margin: 0 }}>
          AzhaarLight Foundation est une ONG humanitaire fondee en janvier 2025 a Bujumbura, Burundi,
          au service des populations les plus vulnerables : enfants orphelins, femmes en difficulte,
          personnes agees sans ressources et jeunes sans acces a l&apos;education.
        </p>
      </div>

      <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#999", marginBottom: "0.75rem" }}>Ordre du jour</p>
      <div style={{ background: "#fff", border: "1px solid #E8E8E8", borderRadius: 12, padding: "1.25rem", marginBottom: "1.25rem" }}>
        {[
          { n: "1", t: "Ouverture et mots de bienvenue", d: "5 min" },
          { n: "2", t: "Presentation de la Fondation", d: "10 min" },
          { n: "3", t: "Activites concretes sur le terrain", d: "10 min" },
          { n: "4", t: "Projet kits scolaires 2026-2027", d: "8 min" },
          { n: "5", t: "Comment participer ?", d: "8 min" },
          { n: "6", t: "Transparence et fonctionnement", d: "7 min" },
          { n: "7", t: "Questions et echanges libres", d: "10 min" },
          { n: "8", t: "Cloture et prochaines etapes", d: "7 min" },
        ].map((item, i) => (
          <div key={item.n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 7 ? "1px solid #F0F0F0" : "none" }}>
            <span style={{ minWidth: 26, height: 26, background: "#1F4E79", color: "#fff", borderRadius: "50%", fontSize: 12, fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.n}</span>
            <span style={{ fontSize: 14, color: "#444", flex: 1 }}>{item.t}</span>
            <span style={{ fontSize: 12, color: "#aaa", whiteSpace: "nowrap" as const }}>{item.d}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#999", marginBottom: "0.75rem" }}>Projet phare — kits scolaires 2026-2027</p>
      <div style={{ background: "#fff", border: "1px solid #E8E8E8", borderRadius: 12, padding: "1.25rem", marginBottom: "1.25rem" }}>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444", margin: 0 }}>
          Pour la rentree scolaire 2026-2027, la Fondation prepare une grande campagne de distribution
          de kits scolaires complets au profit des enfants orphelins et vulnerables de Bujumbura.
          Chaque kit est estime entre 15 et 25 EUR. Tout montant, meme modeste, change une vie.
        </p>
      </div>

      <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#999", marginBottom: "0.75rem" }}>Comment contribuer</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: "1.25rem" }}>
        {[
          { title: "Don financier", desc: "PayPal, MoneyGram, Western Union ou virement bancaire. A partir de 10 EUR." },
          { title: "Don en nature", desc: "Fournitures scolaires, vetements, medicaments non perimes, denrees non perissables." },
          { title: "Benevolat", desc: "Participation aux activites terrain et a l organisation des distributions a Bujumbura." },
          { title: "Sensibilisation", desc: "Partager nos messages et inviter d autres personnes engagees a rejoindre la famille." },
        ].map((c) => (
          <div key={c.title} style={{ background: "#fff", border: "1px solid #E8E8E8", borderRadius: 10, padding: "1rem" }}>
            <p style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a", marginBottom: 5, margin: "0 0 5px" }}>{c.title}</p>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ borderLeft: "3px solid #C9A84C", padding: "0.85rem 1.25rem", marginBottom: "1.5rem", background: "#FDFAF3", borderRadius: "0 10px 10px 0" }}>
        <p style={{ fontSize: 15, fontStyle: "italic", color: "#555", lineHeight: 1.75, margin: 0 }}>
          Ensemble, nous sommes la lumiere de ceux qui vivent dans l&apos;obscurite.
          Rising Together, Changing Lives !
        </p>
      </div>

      <div style={{ background: "#1F4E79", borderRadius: 12, padding: "1.1rem 1.5rem", display: "flex", flexWrap: "wrap" as const, justifyContent: "space-between", gap: 8 }}>
        <span style={{ fontSize: 13, color: "#B5D4F4" }}>azhaarlight@outlook.com · +32 470 90 46 20</span>
        <a href="https://azhaarlight-foundation-one.vercel.app" style={{ fontSize: 13, color: "#C9A84C", textDecoration: "none" }}>
          azhaarlight-foundation-one.vercel.app
        </a>
      </div>

    </section>
  )
}
