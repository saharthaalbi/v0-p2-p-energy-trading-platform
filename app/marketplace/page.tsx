import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MarketplaceFilters } from "@/components/marketplace/filters"
import { EnergyListings } from "@/components/marketplace/energy-listings"
import { MarketStats } from "@/components/marketplace/market-stats"

export default function MarketplacePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Energy Marketplace</h1>
            <p className="text-muted-foreground">
              Browse and purchase renewable energy from verified producers in your region
            </p>
          </div>

          <MarketStats />

          <div className="grid lg:grid-cols-4 gap-6 mt-8">
            <aside className="lg:col-span-1">
              <MarketplaceFilters />
            </aside>

            <div className="lg:col-span-3">
              <EnergyListings />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
