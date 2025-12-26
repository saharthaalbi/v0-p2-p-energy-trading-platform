"use client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Sun, Wind, Zap } from "lucide-react"
import { useState } from "react"

export function MarketplaceFilters() {
  const [priceRange, setPriceRange] = useState([0, 20])

  const energyTypes = [
    { id: "solar", label: "Solar Energy", icon: Sun },
    { id: "wind", label: "Wind Energy", icon: Wind },
    { id: "hydro", label: "Hydro Energy", icon: Zap },
  ]

  const locations = [
    { id: "local", label: "Within 50 miles" },
    { id: "regional", label: "Within 200 miles" },
    { id: "national", label: "Nationwide" },
  ]

  return (
    <Card className="p-6 bg-card border-border sticky top-24">
      <h3 className="text-lg font-semibold mb-6">Filters</h3>

      <div className="space-y-6">
        {/* Energy Type */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Energy Type</Label>
          <div className="space-y-3">
            {energyTypes.map((type) => {
              const Icon = type.icon
              return (
                <div key={type.id} className="flex items-center gap-2">
                  <Checkbox id={type.id} />
                  <label htmlFor={type.id} className="flex items-center gap-2 text-sm cursor-pointer">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    {type.label}
                  </label>
                </div>
              )
            })}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-3 block">
            Price Range ($/kWh): ${priceRange[0] / 100} - ${priceRange[1] / 100}
          </Label>
          <Slider min={0} max={20} step={1} value={priceRange} onValueChange={setPriceRange} className="mb-2" />
        </div>

        {/* Location */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Location</Label>
          <div className="space-y-3">
            {locations.map((location) => (
              <div key={location.id} className="flex items-center gap-2">
                <Checkbox id={location.id} />
                <label htmlFor={location.id} className="text-sm cursor-pointer">
                  {location.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Availability</Label>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="immediate" />
              <label htmlFor="immediate" className="text-sm cursor-pointer">
                Available Now
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="scheduled" />
              <label htmlFor="scheduled" className="text-sm cursor-pointer">
                Scheduled Delivery
              </label>
            </div>
          </div>
        </div>

        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Apply Filters</Button>
        <Button variant="outline" className="w-full bg-transparent">
          Reset
        </Button>
      </div>
    </Card>
  )
}
