import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EnergyChart } from "@/components/analytics/energy-chart"
import { RevenueChart } from "@/components/analytics/revenue-chart"
import { CarbonImpactChart } from "@/components/analytics/carbon-impact-chart"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, Zap, DollarSign, Leaf } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Analytics & Reports</h1>
              <p className="text-muted-foreground">Track your energy trading performance and environmental impact</p>
            </div>
            <Button variant="outline" className="bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">+12%</span>
              </div>
              <div className="text-3xl font-bold mb-1">1,245 MWh</div>
              <div className="text-sm text-muted-foreground">Total Energy Traded</div>
              <div className="text-xs text-muted-foreground mt-2">Last 30 days</div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">+22%</span>
              </div>
              <div className="text-3xl font-bold mb-1">$93,375</div>
              <div className="text-sm text-muted-foreground">Total Revenue</div>
              <div className="text-xs text-muted-foreground mt-2">Last 30 days</div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">+18%</span>
              </div>
              <div className="text-3xl font-bold mb-1">520 tons</div>
              <div className="text-sm text-muted-foreground">CO₂ Offset</div>
              <div className="text-xs text-muted-foreground mt-2">Last 30 days</div>
            </Card>
          </div>

          {/* Charts */}
          <Tabs defaultValue="energy" className="space-y-6">
            <TabsList className="bg-muted">
              <TabsTrigger value="energy">Energy Performance</TabsTrigger>
              <TabsTrigger value="financial">Financial Analytics</TabsTrigger>
              <TabsTrigger value="impact">Carbon Impact</TabsTrigger>
            </TabsList>

            <TabsContent value="energy" className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Energy Production & Sales</h3>
                    <p className="text-sm text-muted-foreground">Monthly overview of energy traded</p>
                  </div>
                  <select className="px-3 py-2 rounded-lg border border-border bg-background text-sm">
                    <option>Last 12 months</option>
                    <option>Last 6 months</option>
                    <option>Last 3 months</option>
                  </select>
                </div>
                <EnergyChart />
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-4">Energy by Source</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Solar</span>
                        <span className="text-sm text-muted-foreground">65%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "65%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Wind</span>
                        <span className="text-sm text-muted-foreground">25%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: "25%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Hydro</span>
                        <span className="text-sm text-muted-foreground">10%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{ width: "10%" }} />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-4">Peak Performance Hours</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <div>
                        <div className="font-medium">12:00 PM - 2:00 PM</div>
                        <div className="text-sm text-muted-foreground">Peak production time</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">450 kWh</div>
                        <div className="text-xs text-muted-foreground">Avg/day</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <div className="font-medium">10:00 AM - 12:00 PM</div>
                        <div className="text-sm text-muted-foreground">High production</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">380 kWh</div>
                        <div className="text-xs text-muted-foreground">Avg/day</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="financial" className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Revenue Overview</h3>
                    <p className="text-sm text-muted-foreground">Monthly revenue from energy sales</p>
                  </div>
                  <select className="px-3 py-2 rounded-lg border border-border bg-background text-sm">
                    <option>Last 12 months</option>
                    <option>Last 6 months</option>
                    <option>Last 3 months</option>
                  </select>
                </div>
                <RevenueChart />
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-4">Top Buyers</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Tech Corp", amount: "$12,450", transactions: 23 },
                      { name: "Green Industries", amount: "$9,820", transactions: 18 },
                      { name: "Metro Solutions", amount: "$7,650", transactions: 15 },
                      { name: "Urban Energy", amount: "$6,200", transactions: 12 },
                    ].map((buyer, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                        <div>
                          <div className="font-medium">{buyer.name}</div>
                          <div className="text-xs text-muted-foreground">{buyer.transactions} transactions</div>
                        </div>
                        <div className="font-bold text-primary">{buyer.amount}</div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h3 className="text-lg font-semibold mb-4">Pricing Trends</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Average Price/kWh</span>
                        <span className="text-sm font-bold text-primary">$0.075</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <TrendingUp className="w-3 h-3 text-primary" />
                        <span>+5% from last month</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Peak Rate</span>
                        <span className="text-sm font-bold">$0.085</span>
                      </div>
                      <div className="text-xs text-muted-foreground">12 PM - 4 PM</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Off-Peak Rate</span>
                        <span className="text-sm font-bold">$0.065</span>
                      </div>
                      <div className="text-xs text-muted-foreground">10 PM - 6 AM</div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="impact" className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Carbon Footprint Reduction</h3>
                    <p className="text-sm text-muted-foreground">Environmental impact over time</p>
                  </div>
                  <select className="px-3 py-2 rounded-lg border border-border bg-background text-sm">
                    <option>Last 12 months</option>
                    <option>Last 6 months</option>
                    <option>Last 3 months</option>
                  </select>
                </div>
                <CarbonImpactChart />
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-card border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">520 tons</div>
                  <div className="text-sm text-muted-foreground mb-3">CO₂ Emissions Avoided</div>
                  <div className="text-xs text-primary">Equivalent to 1,120 trees planted</div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm text-muted-foreground mb-3">Clean Energy Mix</div>
                  <div className="text-xs text-muted-foreground">2% traditional grid backup</div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold mb-2">45%</div>
                  <div className="text-sm text-muted-foreground mb-3">Improvement YoY</div>
                  <div className="text-xs text-muted-foreground">Compared to 2023</div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </main>
  )
}
