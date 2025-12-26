import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-2xl border border-border bg-card p-12 md:p-16">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Transform Your Energy Strategy?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Join hundreds of businesses already trading renewable energy on the world's most advanced P2P platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                Start Trading Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
