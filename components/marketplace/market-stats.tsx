import { Card } from "@/components/ui/card"
import { TrendingUp, Zap, DollarSign, Users } from "lucide-react"

export function MarketStats() {
  const stats = [
    {
      icon: Zap,
      label: "Available Now",
      value: "1,245 kWh",
      trend: "+12%",
      trendUp: true,
    },
    {
      icon: DollarSign,
      label: "Avg. Price",
      value: "$0.08/kWh",
      trend: "-3%",
      trendUp: false,
    },
    {
      icon: Users,
      label: "Active Sellers",
      value: "127",
      trend: "+8%",
      trendUp: true,
    },
    {
      icon: TrendingUp,
      label: "24h Volume",
      value: "45.2 MWh",
      trend: "+15%",
      trendUp: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="p-6 bg-card border-border">
            <div className="flex items-start justify-between mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded ${
                  stat.trendUp ? "text-primary bg-primary/10" : "text-red-400 bg-red-400/10"
                }`}
              >
                {stat.trend}
              </span>
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        )
      })}
    </div>
  )
}
