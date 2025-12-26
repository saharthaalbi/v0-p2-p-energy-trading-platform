import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Wind, Sun } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            Powered by Blockchain Technology
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
            Empowering Businesses Through <span className="text-primary">Decentralized</span> Energy Trading
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Connect directly with renewable energy producers. Buy and sell clean energy through secure, automated
            blockchain transactions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              Start Selling Energy
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card bg-transparent">
              Buy Renewable Energy
            </Button>
          </div>

          {/* Energy type icons */}
          <div className="flex items-center justify-center gap-8 pt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                <Sun className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xs text-muted-foreground">Solar</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                <Wind className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-xs text-muted-foreground">Wind</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">Hydro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
