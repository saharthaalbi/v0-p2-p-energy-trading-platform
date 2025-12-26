import { Card } from "@/components/ui/card"
import { Lock, Coins, Leaf, Network } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Blockchain Security",
    description: "Immutable smart contracts ensure transparent, tamper-proof transactions with automated execution.",
  },
  {
    icon: Coins,
    title: "Direct Savings",
    description: "Eliminate intermediaries and access wholesale energy prices directly from local producers.",
  },
  {
    icon: Leaf,
    title: "Sustainability Impact",
    description: "Track your carbon footprint reduction and contribute to a cleaner, greener future.",
  },
  {
    icon: Network,
    title: "Decentralized Network",
    description: "Join a growing network of businesses creating a resilient, distributed energy ecosystem.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Why Choose <span className="text-primary">EnergyFlow</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">The future of renewable energy trading is here</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
