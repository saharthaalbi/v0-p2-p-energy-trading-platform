import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, ShieldCheck, Settings, Sun } from "lucide-react"

export default function ProfilePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Profile Header */}
          <Card className="p-8 bg-card border-border mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <Building2 className="w-12 h-12 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">SolarTech Industries</h1>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    Verified Seller
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Leading provider of commercial solar energy solutions since 2015
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Location:</span>{" "}
                    <span className="font-medium">San Francisco, CA</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Energy Source:</span>{" "}
                    <span className="font-medium">Solar</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Rating:</span>{" "}
                    <span className="font-medium text-accent">★ 4.9 (127 reviews)</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="bg-transparent">
                <Settings className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </Card>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Card className="p-6 bg-card border-border">
              <div className="text-sm text-muted-foreground mb-1">Total Energy Sold</div>
              <div className="text-2xl font-bold text-primary">1,245 MWh</div>
              <div className="text-xs text-accent mt-1">+15% this month</div>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="text-sm text-muted-foreground mb-1">Active Contracts</div>
              <div className="text-2xl font-bold">43</div>
              <div className="text-xs text-accent mt-1">8 pending</div>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="text-sm text-muted-foreground mb-1">Total Revenue</div>
              <div className="text-2xl font-bold">$93,375</div>
              <div className="text-xs text-accent mt-1">+22% this month</div>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="text-sm text-muted-foreground mb-1">CO₂ Offset</div>
              <div className="text-2xl font-bold">520 tons</div>
              <div className="text-xs text-muted-foreground mt-1">Lifetime</div>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="listings" className="space-y-6">
            <TabsList className="bg-muted">
              <TabsTrigger value="listings">Active Listings</TabsTrigger>
              <TabsTrigger value="transactions">Transaction History</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="listings" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Your Active Listings</h2>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Create New Listing</Button>
              </div>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Sun className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Solar Energy - Peak Hours</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        High-efficiency solar energy available during peak production hours
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div>
                          <span className="text-2xl font-bold text-primary">$0.075</span>
                          <span className="text-muted-foreground">/kWh</span>
                        </div>
                        <div>
                          <span className="font-semibold">500 kWh</span> available
                        </div>
                        <Badge className="bg-primary/10 text-primary border-primary/20">Active</Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Edit
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Sun className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Solar Energy - Off-Peak</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Discounted rates for off-peak solar energy delivery
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div>
                          <span className="text-2xl font-bold text-primary">$0.065</span>
                          <span className="text-muted-foreground">/kWh</span>
                        </div>
                        <div>
                          <span className="font-semibold">800 kWh</span> available
                        </div>
                        <Badge className="bg-primary/10 text-primary border-primary/20">Active</Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Edit
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
              <Card className="divide-y divide-border bg-card border-border">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-4 flex items-center justify-between">
                    <div>
                      <div className="font-semibold mb-1">Energy Sale #{1000 + i}</div>
                      <div className="text-sm text-muted-foreground">Tech Corp - 250 kWh @ $0.075/kWh</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">+$18.75</div>
                      <div className="text-xs text-muted-foreground">2 days ago</div>
                    </div>
                  </div>
                ))}
              </Card>
            </TabsContent>

            <TabsContent value="certifications" className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Certifications & Compliance</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Green-e Certified</h3>
                      <p className="text-sm text-muted-foreground mb-2">Valid until Dec 2025</p>
                      <Badge className="bg-primary/10 text-primary border-primary/20">Active</Badge>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">EPA Energy Star</h3>
                      <p className="text-sm text-muted-foreground mb-2">Valid until Aug 2026</p>
                      <Badge className="bg-primary/10 text-primary border-primary/20">Active</Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
              <Card className="p-6 bg-card border-border">
                <p className="text-muted-foreground">Account settings content would go here...</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </main>
  )
}
