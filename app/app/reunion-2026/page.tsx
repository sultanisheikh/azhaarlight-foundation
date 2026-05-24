import ReunionResume from "@/components/ReunionResume"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Reunion 2026 - AzhaarLight Foundation",
  description: "Compte-rendu de la premiere reunion officielle des membres - 23 mai 2026",
}

export default function ReunionPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F8]">
      <Header />
      <div className="py-10">
        <ReunionResume />
      </div>
      <Footer />
    </main>
  )
}
