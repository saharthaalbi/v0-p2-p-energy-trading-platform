import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchInput } from "@/components/search-input"
import { BookOpen, Video, FileText, Award } from "lucide-react"

const articles = [
  {
    category: "Getting Started",
    title: "Introduction to P2P Energy Trading",
    description: "Learn the basics of peer-to-peer energy trading and how blockchain enables transparent transactions.",
    readTime: "5 min read",
    level: "Beginner",
    icon: BookOpen,
  },
  {
    category: "Blockchain",
    title: "Understanding Smart Contracts in Energy Trading",
    description:
      "Discover how smart contracts automate energy transactions and ensure secure, tamper-proof agreements.",
    readTime: "8 min read",
    level: "Intermediate",
    icon: FileText,
  },
  {
    category: "Sustainability",
    title: "Measuring Your Carbon Footprint Reduction",
    description: "Track and understand the environmental impact of switching to renewable energy sources.",
    readTime: "6 min read",
    level: "Beginner",
    icon: BookOpen,
  },
  {
    category: "Marketplace",
    title: "How to Set Competitive Energy Prices",
    description: "Pricing strategies for sellers to maximize revenue while remaining competitive in the marketplace.",
    readTime: "10 min read",
    level: "Advanced",
    icon: FileText,
  },
  {
    category: "Compliance",
    title: "Energy Trading Regulations & Certifications",
    description: "Navigate compliance requirements and obtain necessary certifications for energy trading.",
    readTime: "12 min read",
    level: "Advanced",
    icon: Award,
  },
  {
    category: "Technology",
    title: "Renewable Energy Sources: Solar, Wind & Hydro",
    description: "Compare different renewable energy sources and their efficiency in various climates.",
    readTime: "7 min read",
    level: "Beginner",
    icon: BookOpen,
  },
]

const videos = [
  {
    title: "Platform Walkthrough: Getting Started",
    duration: "12:30",
    views: "5.2K",
  },
  {
    title: "Setting Up Your First Energy Listing",
    duration: "8:45",
    views: "3.8K",
  },
  {
    title: "Understanding the Analytics Dashboard",
    duration: "15:20",
    views: "2.9K",
  },
]

export default function LearnPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Center</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to know about P2P energy trading, blockchain, and renewable energy
            </p>
            <div className="max-w-xl mx-auto">
              <SearchInput placeholder="Search articles, guides, and tutorials..." />
            </div>
          </div>

          {/* Video Tutorials */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Video Tutorials</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="p-0 bg-card border-border overflow-hidden group cursor-pointer">
                  <div className="relative aspect-video bg-muted flex items-center justify-center">
                    <Video className="w-12 h-12 text-muted-foreground" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-primary-foreground border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{video.duration}</span>
                      <span>•</span>
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Articles & Guides</h2>
              <select className="px-4 py-2 rounded-lg border border-border bg-card text-sm">
                <option>All Categories</option>
                <option>Getting Started</option>
                <option>Blockchain</option>
                <option>Sustainability</option>
                <option>Marketplace</option>
                <option>Compliance</option>
                <option>Technology</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article, index) => {
                const Icon = article.icon
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {article.category}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              article.level === "Beginner"
                                ? "border-primary/30 text-primary"
                                : article.level === "Intermediate"
                                  ? "border-secondary/30 text-secondary"
                                  : "border-accent/30 text-accent"
                            }`}
                          >
                            {article.level}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{article.description}</p>
                        <div className="text-xs text-muted-foreground">{article.readTime}</div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
