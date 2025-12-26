import { Card } from "@/components/ui/card"
import { Search, Zap, ShieldCheck, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse Marketplace",
    description:
      "Discover available renewable energy from local producers with transparent pricing and real-time availability.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Transaction",
    description:
      "Smart contracts automatically handle payments and energy delivery with complete transparency and security.",
  },
  {
    icon: Zap,
    title: "Energy Delivery",
    description:
      "Receive clean energy directly from producers through existing grid infrastructure with automated metering.",
  },
  {
    icon: TrendingUp,
    title: "Track Impact",
    description:
      "Monitor your carbon footprint reduction, energy savings, and financial benefits in real-time analytics.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            How P2P Energy <span className="text-primary">Trading</span> Works
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Simple, transparent, and automated energy trading in four easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={index}
                className="relative p-6 bg-card border-border hover:border-primary/50 transition-colors group"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
