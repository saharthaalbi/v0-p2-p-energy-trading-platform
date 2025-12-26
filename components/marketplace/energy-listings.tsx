"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sun, Wind, Zap, MapPin, Clock, ShoppingCart } from "lucide-react"

const listings = [
  {
    id: 1,
    seller: "SolarTech Industries",
    energyType: "solar",
    icon: Sun,
    amount: 500,
    unit: "kWh",
    price: 0.075,
    location: "San Francisco, CA",
    distance: 15,
    certification: "Green-e Certified",
    availability: "Immediate",
    rating: 4.9,
  },
  {
    id: 2,
    seller: "WindPower Solutions",
    energyType: "wind",
    icon: Wind,
    amount: 1000,
    unit: "kWh",
    price: 0.068,
    location: "Austin, TX",
    distance: 42,
    certification: "REC Certified",
    availability: "Immediate",
    rating: 4.8,
  },
  {
    id: 3,
    seller: "HydroEnergy Corp",
    energyType: "hydro",
    icon: Zap,
    amount: 750,
    unit: "kWh",
    price: 0.082,
    location: "Portland, OR",
    distance: 28,
    certification: "EPA Verified",
    availability: "2 hours",
    rating: 4.7,
  },
  {
    id: 4,
    seller: "Green Solar Farms",
    energyType: "solar",
    icon: Sun,
    amount: 300,
    unit: "kWh",
    price: 0.071,
    location: "Phoenix, AZ",
    distance: 35,
    certification: "Green-e Certified",
    availability: "Immediate",
    rating: 4.9,
  },
  {
    id: 5,
    seller: "Coastal Wind Energy",
    energyType: "wind",
    icon: Wind,
    amount: 1200,
    unit: "kWh",
    price: 0.065,
    location: "Seattle, WA",
    distance: 18,
    certification: "REC Certified",
    availability: "1 hour",
    rating: 5.0,
  },
  {
    id: 6,
    seller: "Mountain Hydro Systems",
    energyType: "hydro",
    icon: Zap,
    amount: 850,
    unit: "kWh",
    price: 0.079,
    location: "Denver, CO",
    distance: 52,
    certification: "EPA Verified",
    availability: "Immediate",
    rating: 4.6,
  },
]

export function EnergyListings() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">{listings.length} listings available</p>
        <select className="px-3 py-2 rounded-lg border border-border bg-card text-sm">
          <option>Sort by: Price (Low to High)</option>
          <option>Sort by: Price (High to Low)</option>
          <option>Sort by: Distance</option>
          <option>Sort by: Rating</option>
        </select>
      </div>

      <div className="grid gap-4">
        {listings.map((listing) => {
          const Icon = listing.icon
          return (
            <Card key={listing.id} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold">{listing.seller}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {listing.certification}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {listing.location} ({listing.distance} miles)
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {listing.availability}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div>
                        <span className="text-2xl font-bold text-primary">${listing.price}</span>
                        <span className="text-sm text-muted-foreground">/kWh</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">
                          {listing.amount} {listing.unit}
                        </span>{" "}
                        available
                      </div>
                      <div className="text-sm">
                        <span className="text-accent">★ {listing.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:flex-col md:items-end">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 md:flex-none">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </Button>
                  <Button variant="outline" className="flex-1 md:flex-none bg-transparent">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
