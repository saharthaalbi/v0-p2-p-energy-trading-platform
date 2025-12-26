import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SearchInput } from "@/components/search-input"
import { MessageCircle, Mail, Phone, FileQuestion } from "lucide-react"

const faqs = [
  {
    question: "How does P2P energy trading work?",
    answer:
      "P2P energy trading allows businesses with excess renewable energy to sell directly to other businesses. Our platform uses blockchain technology to facilitate secure, automated transactions through smart contracts. Sellers list their available energy, buyers browse and purchase, and the blockchain handles payment and delivery verification automatically.",
  },
  {
    question: "What certifications do I need to sell energy?",
    answer:
      "Sellers need relevant renewable energy certifications such as Green-e, REC (Renewable Energy Certificates), or EPA verification depending on their energy source and location. We guide you through the certification process during account setup and provide resources to help you obtain necessary credentials.",
  },
  {
    question: "How are energy prices determined?",
    answer:
      "Energy prices are market-driven and set by sellers based on factors like energy source, production costs, location, and demand. Our platform provides pricing analytics and recommendations to help you set competitive rates. Prices typically range from $0.06 to $0.10 per kWh depending on various factors.",
  },
  {
    question: "Is my data secure on the blockchain?",
    answer:
      "Yes, all transactions are secured by blockchain technology using cryptographic encryption. Smart contracts are audited and immutable, ensuring complete transparency and security. Personal business information is encrypted and stored securely, while transaction data is recorded on the blockchain for verification purposes.",
  },
  {
    question: "How do I track my carbon footprint reduction?",
    answer:
      "Our analytics dashboard provides real-time tracking of your environmental impact, including CO₂ emissions avoided, equivalent trees planted, and percentage of clean energy in your mix. You can generate detailed reports for sustainability reporting and compliance purposes.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support multiple payment methods including cryptocurrency wallets (ETH, USDC), bank transfers, and business credit accounts. All payments are processed through secure smart contracts that automatically release funds upon energy delivery confirmation.",
  },
  {
    question: "Can I schedule energy delivery in advance?",
    answer:
      "Yes, you can schedule both immediate and future energy deliveries. Sellers can offer scheduled delivery options, and buyers can book energy in advance for better planning and potentially better rates. Our platform handles the scheduling and automated execution through smart contracts.",
  },
  {
    question: "What happens if there's a dispute?",
    answer:
      "Our platform includes a dispute resolution process with blockchain-verified transaction records. In case of disputes, our support team reviews the smart contract execution logs and energy delivery confirmations to resolve issues fairly. Most disputes are resolved within 48 hours.",
  },
]

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Help & Support</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Get answers to your questions or reach out to our support team
            </p>
            <div className="max-w-xl mx-auto">
              <SearchInput placeholder="Search for help articles..." />
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-border text-center hover:border-primary/50 transition-colors cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">Chat with our support team in real-time</p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Start Chat</Button>
            </Card>

            <Card className="p-6 bg-card border-border text-center hover:border-primary/50 transition-colors cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Get help via email within 24 hours</p>
              <Button variant="outline" className="bg-transparent">
                Send Email
              </Button>
            </Card>

            <Card className="p-6 bg-card border-border text-center hover:border-primary/50 transition-colors cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Call us for urgent assistance</p>
              <Button variant="outline" className="bg-transparent">
                Call Now
              </Button>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileQuestion className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </div>

            <Card className="p-6 bg-card border-border">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-primary">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" className="bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your question or issue..."
                    className="min-h-32 bg-background"
                  />
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
