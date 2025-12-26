import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <Card className="relative z-10 w-full max-w-md p-8 bg-card border-border text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2">Check Your Email</h1>
        <p className="text-muted-foreground mb-6">
          We&apos;ve sent you a confirmation email. Please click the link in the email to verify your account and
          complete the registration process.
        </p>

        <div className="flex items-center gap-2 justify-center p-4 bg-primary/5 border border-primary/20 rounded-lg mb-6">
          <Mail className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Check your inbox and spam folder</span>
        </div>

        <Button asChild className="w-full">
          <Link href="/login">Return to Login</Link>
        </Button>
      </Card>
    </main>
  )
}
