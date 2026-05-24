export default function ReunionResume() {
  return (
    <section style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem", fontFamily: "sans-serif" }}>

      {/* En-tête */}
      <div style={{ background: "#1F4E79", borderRadius: 14, padding: "2rem", marginBottom: "1.5rem" }}>
        <span style={{ background: "#C9A84C", color: "#fff", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 20, display: "inline-block", marginBottom: "0.85rem" }}>
          Compte-rendu officiel
        </span>
        <h2 style={{ color: "#fff", fontSize: 24, marginBottom: "0.35rem" }}>
          Première réunion officielle des membres
        </h2>
        <p style={{ color: "#B5D4F4", fontSize: 15 }}>AzhaarLight Foundation — Samedi 23 mai 2026</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: "1.5rem" }}>
        {[
          { val: "150", lbl: "membres actifs présents" },
          { val: "4",   lbl: "domaines d'action" },
          { val: "2026", lbl: "projet kits scolaires" },
        ].map((s) => (
          <div key={s.val} style={{ background: "#EBF3FB", borderRadius: 10, padding: "1rem", textAlign: "center" }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: 28, color: "#1F4E79", display: "block" }}>{s.val}</span>
            <span style={{ fontSize: 12, color: "#6B8CAE", display: "block", marginTop: 3 }}>{s.lbl}</span>
          </div>
        ))}
      </div>

      {/* Contexte */}
      <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: "0.75rem" }}>Contexte</p>
      <div style={{ background: "#fff", border: "1px solid #E8E8E8", borderRadius: 12, padding: "1.25rem", marginBottom: "1.25rem" }}>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444" }}>
          AzhaarLight Foundation est une ONG humanitaire fondée en janvier 2025 à Bujumbura, Burundi,
          au service des populations les plus vulnérables : enfants orphelins, femmes en difficulté,
          personnes âgées sans ressources et jeunes sans accès à l&apos;éducation.
        </p>
      </div>

      {/* Projet kits */}
      <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: "0.75rem" }}>Projet phare — kits scolaires 2026-2027</p>
      <div style={{ background: "#fff", border: "1px solid #E8E8E8", borderRadius: 12, padding: "1.25rem", marginBottom: "1.25rem" }}>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444" }}>
          Pour la rentrée scolaire 2026-2027, la Fondation prépare une grande campagne de distribution
          de kits scolaires complets au profit des enfants orphelins et vulnérables de Bujumbura.
          Chaque kit est estimé entre 15 et 25 EUR.
        </p>
      </div>

      {/* Citation */}
      <blockquote style={{ borderLeft: "3px solid #C9A84C", padding: "0.85rem 1.25rem", marginBottom: "1.5rem", background: "#FDFAF3", borderRadius: "0 10px 10px 0" }}>
        <p style={{ fontSize: 15, fontStyle: "italic", color: "#555", lineHeight: 1.75, margin: 0 }}>
          « Ensemble, nous sommes la lumière de ceux qui vivent dans l&apos;obscurité.
          Rising Together, Changing Lives ! »
        </p>
      </blockquote>

      {/* Footer */}
      <div style={{ background: "#1F4E79", borderRadius: 12, padding: "1.1rem 1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8 }}>
        <span style={{ fontSize: 13, color: "#B5D4F4" }}>azhaarlight@outlook.com · +32 470 90 46 20</span>
        <a href="https://azhaarlight-foundation-one.vercel.app" style={{ fontSize: 13, color: "#C9A84C", textDecoration: "none" }}>
          azhaarlight-foundation-one.vercel.app ↗
        </a>
      </div>

    </section>
  );
}
