import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Wallet,
  Rocket,
  TrendingUp,
  Shield,
  Instagram as Telegram,
  Github,
  Twitter,
  CheckCircle,
  Star,
} from "lucide-react"

export default function SmartAlertBotLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Telegram className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Smart Alert Bot</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-accent transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-accent transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-accent transition-colors">
              FAQ
            </a>
          </nav>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="https://t.me/smartalert_notifier_bot" target="_blank" rel="noopener noreferrer">
              <Telegram className="w-4 h-4 mr-2" />
              Add to Telegram
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            The On-Chain Edge You've Been Waiting For
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Stop Guessing. <span className="text-primary">Start Tracking.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Get real-time, actionable intelligence on wallet movements, new token launches, and smart money activity,
            sent directly to your Telegram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="https://t.me/smartalert_notifier_bot" target="_blank" rel="noopener noreferrer">
                <Telegram className="w-5 h-5 mr-2" />
                Add to Telegram for Free
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#pricing">Explore Pro Features</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gain an Unfair Advantage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our bot monitors the Ethereum blockchain 24/7 with sub-second precision so you don't have to miss critical
              opportunities or fall victim to scams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <Wallet className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Track Any Wallet, Instantly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Monitor comprehensive on-chain activity for up to 50 Ethereum wallets. See buys, sells, token
                  approvals, NFT transfers, and more in real-time.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <Rocket className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Be First to New Tokens</CardTitle>
                <Badge className="w-fit bg-primary/20 text-primary">Premium</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Receive push notifications the exact moment new liquidity is added to Uniswap V2. Discover potential
                  10x+ gems before public awareness.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Follow the Whales</CardTitle>
                <Badge className="w-fit bg-primary/20 text-primary">Premium</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Leverage our AI-powered 'Smart Money' tracker to identify and follow wallets of historically
                  profitable traders.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Automated Scam Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our proprietary heuristic engine automatically analyzes new token names and contract patterns for
                  suspicious indicators.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock On-Chain Alpha in Just 3 Steps</h2>
            <p className="text-xl text-muted-foreground">
              Seamless integration, instant insights. Get started in minutes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p className="text-muted-foreground mb-4">
                Click 'Add to Telegram' and hit '/start'. Zero setup, no wallet connection required.
              </p>
              <code className="bg-muted px-3 py-1 rounded text-sm">/start</code>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-accent-foreground mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Explore</h3>
              <p className="text-muted-foreground mb-4">
                Send '/menu' to explore our full suite of 15+ commands, from basic wallet tracking to advanced alerts.
              </p>
              <code className="bg-muted px-3 py-1 rounded text-sm">/menu</code>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Empower</h3>
              <p className="text-muted-foreground mb-4">
                Activate your first full wallet tracker or subscribe to premium alerts. Start receiving actionable
                intelligence immediately.
              </p>
              <code className="bg-muted px-3 py-1 rounded text-sm">/trackfullwallet 0x... Vitalik</code>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Competitive Edge</h2>
            <p className="text-xl text-muted-foreground">
              Unlock unparalleled insights. Upgrade your trading strategy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Explorer</CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground ml-2">/ month</span>
                </div>
                <CardDescription>
                  Perfect for essential tracking and getting started with on-chain insights.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Track up to 3 Wallets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Unlimited Basic Token Alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Automated Scam Detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Community Support
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <a href="https://t.me/smartalert_notifier_bot" target="_blank" rel="noopener noreferrer">
                    Start for Free
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro Trader</CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$15</span>
                  <span className="text-muted-foreground ml-2">/ month</span>
                </div>
                <CardDescription>
                  For serious traders seeking real-time alpha and advanced market intelligence.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Track up to 50 Wallets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    All Explorer features, plus:
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-accent mr-3" />
                    Real-Time New Liquidity Alerts
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-accent mr-3" />
                    Smart Money Whale Tracker
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Multi-Chain Support (Coming Soon)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Priority Support & Feedback Access
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="https://your-payment-link-here" target="_blank" rel="noopener noreferrer">
                    Go Pro Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">
              Join a growing community of traders who gain an edge with Smart Alert Bot.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "This bot is a game-changer. The new liquidity alerts alone have paid for my subscription multiple
                  times over. Pure alpha!"
                </p>
                <div>
                  <p className="font-semibold">Crypto_Degenerator</p>
                  <p className="text-sm text-muted-foreground">Full-Time Trader</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "Finally, a way to track smart money without spending hours on Etherscan. The interface is clean and
                  the alerts are instant. Highly recommend."
                </p>
                <div>
                  <p className="font-semibold">DeFi_Enthusiast</p>
                  <p className="text-sm text-muted-foreground">Investor</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "The scam detection feature saved me from a major phishing attempt last week. It's more than just
                  alerts; it's peace of mind."
                </p>
                <div>
                  <p className="font-semibold">HODL_Queen</p>
                  <p className="text-sm text-muted-foreground">Community Manager</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="blockchains" className="bg-card border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">What blockchains do you support?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We currently offer deep, real-time analysis for Ethereum Mainnet. Support for Base and Solana is
                actively in development and will be available to Pro Trader members first, expanding your trading
                opportunities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="security" className="bg-card border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">Is my data or wallet secure?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. Your security is our top priority. We only require your public Telegram ID to send alerts.
                We never ask for your private keys, seed phrases, or require you to connect your wallet, ensuring your
                digital assets remain 100% in your control and completely secure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="accuracy" className="bg-card border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">How accurate and fast are the alerts?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our alerts are powered by direct, real-time on-chain data via the Alchemy API, the industry standard for
                blockchain data. Alerts for critical events are typically delivered within 5-20 seconds of a transaction
                being confirmed on the blockchain, providing you with a significant speed advantage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="smart-money" className="bg-card border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">How does the 'Smart Money' tracker work?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our proprietary algorithms analyze millions of on-chain transactions to identify wallets with a
                statistically proven track record of high profitability and early entry into winning tokens. This list
                is constantly updated, giving you direct access to the trading activity of verified market leaders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cancellation" className="bg-card border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">Can I cancel my subscription anytime?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, flexibility is key. You can easily manage or cancel your Pro Trader subscription at any time
                directly through our payment portal, with no hidden fees or questions asked.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Trading?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join hundreds of traders leveraging real-time on-chain intelligence. Get started with the free tier or
            unlock all premium features today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="https://t.me/smartalert_notifier_bot" target="_blank" rel="noopener noreferrer">
                <Telegram className="w-5 h-5 mr-2" />
                Add to Telegram for Free
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#pricing">Explore Pro Trader</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Telegram className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Smart Alert Bot</span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://twitter.com/YourBotTwitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Lakshya2099/Web3_Bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2025 Smart Alert Bot. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
