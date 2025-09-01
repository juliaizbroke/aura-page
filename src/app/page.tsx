"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/Badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Sparkles, Leaf, Recycle, Package, Heart, Star } from "lucide-react"

export default function AuraPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    setIsVisible(true)
    
    // Set up intersection observer for smooth section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = (entry.target as HTMLElement).id
            setVisibleSections(prev => new Set([...prev, sectionId]))
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    )

    // Observe all sections with the animation class
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section.section-fade-in'))
    sections.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Carousel effect for packaging images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const setSectionRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-primary animate-color-shift" />
            <h1 className="text-2xl font-serif font-black text-primary">Aura</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#overview" className="text-foreground hover:text-primary transition-colors">
              Overview
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#loyalty" className="text-foreground hover:text-primary transition-colors">
              Loyalty
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated Stars */}
        <Star className="star" size={24} />
        <Star className="star" size={20} />
        <Star className="star" size={28} />
        <Star className="star" size={16} />
        <Star className="star" size={22} />
        <Star className="star" size={18} />
        <Star className="star" size={26} />
        <Star className="star" size={20} />
        
        {/* Floating Sparkles */}
        <Sparkles className="sparkle" size={16} />
        <Sparkles className="sparkle" size={20} />
        <Sparkles className="sparkle" size={14} />
        
        <div className="container mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <Badge variant="default" className="mb-4">
              Revolutionary Skincare
            </Badge>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-primary mb-6">
              Experience the Magic of
              <span className="block text-yellow-200 transition-all duration-300 hover:text-yellow-100 hover:drop-shadow-lg hover:drop-shadow-yellow-200/70">Aura</span>
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto mb-8 font-sans">
              The world&apos;s first color-changing herbal scrub that transforms your skincare routine into a magical
              experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover-lift">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-lift bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section 
        id="overview" 
        ref={setSectionRef("overview")}
        className={`py-16 px-4 bg-card section-fade-in ${visibleSections.has("overview") ? "visible" : ""}`}
      >
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-4xl font-serif font-bold text-card-foreground mb-4">Product Overview</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            AURA Scrub is not just a skincare product — it’s a
            healing companion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Leaf className="h-10 w-10 text-muted-foreground mt-1" />
                <div>
                  <h4 className="text-xl font-serif font-semibold text-card-foreground mb-2">
                    100% Natural Ingredients
                  </h4>
                  <p className="text-muted-foreground font-sans">
                  Infused with Thai herbal extracts and the soft
                  fragrance of Moke flower, it is specially formulated to relieve
                  muscle pain and inflammation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Sparkles className="h-10 w-10 text-muted-foreground mt-1" />
                <div>
                  <h4 className="text-xl font-serif font-semibold text-card-foreground mb-2">
                    Color-Changing Technology
                  </h4>
                  <p className="text-muted-foreground font-sans">
                    Unique formula that shifts from blue to violet, indicating muscle pain or
                    swelling. After healing, returns to Blue showing that recovery is complete.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Heart className="h-10 w-10 text-muted-foreground mt-1"  />
                <div>
                  <h4 className="text-xl font-serif font-semibold text-card-foreground mb-2">
                    Better Healing Process
                  </h4>
                  <p className="text-muted-foreground font-sans">
                  This visible transformation allows users to see their body’s
                  healing process in real time, turning each self-care routine into an
                  interactive, mindful ritual.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square flex items-center justify-center">
                <img
                  src="/image/auraLogo.png"
                  alt="Aura Color Changing Herbal Scrub"
                  className="w-100 h-100 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section 
        id="features" 
        ref={setSectionRef("features")}
        className={`py-16 px-4 section-fade-in ${visibleSections.has("features") ? "visible" : ""}`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-foreground mb-4">Unique Features</h3>
            <p className="text-lg text-foreground max-w-2xl mx-auto font-sans">
              What makes Aura different from traditional scrubs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <Sparkles className="h-8 w-8  text-accent" />
                </div>
                <CardTitle className="font-serif">Color Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center font-sans">
                  Watch as the scrub changes from blue to vibrant violet, indicating inflammation or muscle pain
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <Leaf className="h-8 w-8  text-accent" />
                </div>
                <CardTitle className="font-serif">Botanical Infusion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center font-sans">
                  Enriched with aloe vera, peppermint, and butterfly pea extract to soothe and refresh the skin. Blended with sodium citrate and innovative thermochromic pigments, bringing both balance and a touch of magic to your skincare ritual.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-serif">Smart Exfoliation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center font-sans">
                  Micro-beads dissolve as you massage, preventing over-exfoliation and ensuring gentle treatment
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section 
        id="benefits" 
        ref={setSectionRef("benefits")}
        className={`py-16 px-4 bg-card section-fade-in ${visibleSections.has("benefits") ? "visible" : ""}`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-card-foreground mb-4">Benefits</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
              Transform your skin with every use
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              { title: "Healing Indicator", desc: "The scrub changes color based on muscle pain and inflammation" },
              { title: "Targeted Relief", desc: "Herbal actives soothe sore muscles and support recovery." },
              { title: "Skin Glow", desc: "Gently exfoliates and renews skin texture." },
              { title: "Relaxing Aroma", desc: "Infused with Moke flower for calmness and freshness." },
              { title: "Connection", desc: "Combines science, nature, and sensory experience." },
            ].map((benefit, index) => (
              <div key={index} className="p-6 rounded-lg bg-background h-full text-center hover-lift">
                <h4 className="text-lg font-serif font-semibold text-secondary mb-2">{benefit.title}</h4>
                <p className="text-foreground/80 font-sans text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section 
        id="how-to-apply"
        ref={setSectionRef("how-to-apply")}
        className={`py-16 px-4 section-fade-in ${visibleSections.has("how-to-apply") ? "visible" : ""}`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-foreground mb-4">How to Apply</h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-sans">
              Simple steps for the perfect skincare experience
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Cleanse", desc: "Start with clean, damp skin" },
              { step: "2", title: "Apply", desc: "Massage a small amount gently over sore muscles and inflamed areas" },
              { step: "3", title: "Watch", desc: "Observe the color change from blue to violet" },
              { step: "4", title: "Rinse", desc: "Rinse thoroughly with warm water" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-serif font-bold">
                  {step.step}
                </div>
                <h4 className="text-xl font-serif font-semibold text-secondary mb-2">{step.title}</h4>
                <p className="text-foreground/70 font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Badge System */}
      <section 
        id="loyalty"
        ref={setSectionRef("loyalty")}
        className={`py-16 px-4 bg-card section-fade-in ${visibleSections.has("loyalty") ? "visible" : ""}`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-card-foreground mb-4">AURA Loyalty Program  </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
              Earn points, unlock tiers, and redeem exclusive rewards as you discover the magic of Aura
            </p>
          </div>
          
          
          {/* Tiers Section */}
          <div className="text-center mb-8">
            <h4 className="text-2xl font-serif font-bold text-card-foreground mb-4">Loyalty Tiers</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Silver Tier */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center hover-lift border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600"></div>
              <div className="mx-auto mb-6 w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg p-2">
                <img 
                  src="/image/badge-silver.png" 
                  alt="Silver Badge" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-2xl font-serif font-bold text-gray-800 mb-2">Silver</h4>
              <p className="text-sm text-gray-600 mb-6 font-sans font-medium">Wellness Seeker - Unlocks at 1,000 Points</p>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-800 font-sans font-medium">Enhanced point earning rates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700 font-sans">Access to exclusive wellness content</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700 font-sans">Birthday rewards and special offers</p>
                </div>
              </div>
            </div>

            {/* Gold Tier */}
            <div className="relative bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-8 text-center hover-lift border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-600"></div>
              <div className="mx-auto mb-6 w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg p-2">
                <img 
                  src="/image/badge-gold.png" 
                  alt="Gold Badge" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-2xl font-serif font-bold text-amber-800 mb-2">Gold</h4>
              <p className="text-sm text-amber-700 mb-6 font-sans font-medium">Luxury Healer - Unlocks at 3,000 Points</p>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-amber-800 font-sans font-medium">Premium point earning rates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-amber-700 font-sans">Free gift wrapping and personalized notes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-amber-700 font-sans">Early access to new product launches</p>
                </div>
              </div>
            </div>

            {/* Platinum Tier */}
            <div className="relative bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-8 text-center hover-lift border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-600"></div>
              <div className="mx-auto mb-6 w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg p-2">
                <img 
                  src="/image/badge-plat.png" 
                  alt="Platinum Badge" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-2xl font-serif font-bold text-purple-800 mb-2">Platinum</h4>
              <p className="text-sm text-purple-700 mb-6 font-sans font-medium">Aura Elite - Unlocks at 6,000 Points</p>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-purple-800 font-sans font-medium">Maximum point earning rates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-purple-700 font-sans">VIP spa invites and consultations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-purple-700 font-sans">Exclusive experiences and early pre-orders</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Refill Program */}
      <section 
        id="refill-program"
        ref={setSectionRef("refill-program")}
        className={`py-20 px-4 bg-card section-fade-in ${visibleSections.has("refill-program") ? "visible" : ""}`}
      >
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Recycle className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-5xl font-serif font-bold text-card-foreground mb-4">Sustainable Refill Program</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
              Join our eco-friendly refill program and save 30% while making a positive impact on our planet
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <div className="order-1 lg:order-none relative">
              <div className="h-200 relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/image/refill.jfif"
                  alt="Aura Refill Program"
                  className="w-full object-contain rounded-3xl hover:scale-105 transition-transform duration-700"
                  
                />
              </div>
            </div>

            {/* Content Right */}
            <div className="text-left space-y-8">
              <div>
                <h4 className="text-3xl font-serif font-bold text-card-foreground mb-4">Keep Your Beautiful Jar, Just Refill!</h4>
                <p className="text-lg text-muted-foreground mb-6 font-sans leading-relaxed">
                  Your Aura jar is designed to last forever. Now, instead of buying new packaging or pouches, simply bring your jar to one of our refill stations. Refill at a lower cost, reduce waste, and keep your skincare ritual sustainable.
                </p>
              </div>

              {/* Benefits Cards */}
              <div className="grid gap-6">
                <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-accent">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h5 className="text-xl font-serif font-bold text-card-foreground mb-1">Save Money</h5>
                      <p className="text-muted-foreground font-sans">30% off every refill order - keep more money in your pocket</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-background">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <h5 className="text-xl font-serif font-bold text-card-foreground mb-1">Eco-Friendly</h5>
                      <p className="text-muted-foreground font-sans">Reduce packaging waste by 80% - help protect our planet</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-chart-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-chart-5/10 rounded-full flex items-center justify-center">
                      <Package className="h-6 w-6 text-chart-5" />
                    </div>
                    <div>
                      <h5 className="text-xl font-serif font-bold text-card-foreground mb-1">Community & Convenience</h5>
                      <p className="text-muted-foreground font-sans">Find refill stations at select partner stores and events near you – refill your Aura jar anytime, with zero waste.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Packaging */}
      <section 
        ref={setSectionRef("packaging")}
        className={`py-16 px-4 section-fade-in ${visibleSections.has("packaging") ? "visible" : ""}`}
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Package className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-4xl font-serif font-bold text-foreground mb-4">Sustainable Packaging</h3>
              <p className="text-lg text-foreground/80 mb-6 font-sans">
                Our commitment to the environment extends beyond our natural ingredients. Aura comes in a beautiful,
                reusable glass jar made from 100% recycled materials.
              </p>
              <ul className="space-y-3 text-foreground/70 font-sans">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>100% recycled glass jar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Biodegradable labels and packaging</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Carbon-neutral shipping</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Refillable design for long-term use</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="h-180 bg-gradient-to-br from-muted/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* First Image */}
                <img
                  src="/image/bottle.jpg"
                  alt="Sustainable Aura Packaging - Glass Jar"
                  className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ${
                    currentImageIndex === 0 ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {/* Second Image */}
                <img
                  src="/image/empty_bottle.jpg"
                  alt="Sustainable Aura Packaging - Refill System"
                  className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ${
                    currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {/* Third Image */}
                <img
                  src="/image/bottle2.jpg"
                  alt="Sustainable Aura Packaging - Eco-Friendly"
                  className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ${
                    currentImageIndex === 2 ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section 
        id="contact" 
        ref={setSectionRef("contact")}
        className={`py-16 px-4 bg-card section-fade-in ${visibleSections.has("contact") ? "visible" : ""}`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-card-foreground mb-4">Contact Us</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
              Have questions about Aura? We&apos;re here to help you on your skincare journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover-lift">
              <CardHeader>
                <Mail className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <CardTitle className="font-serif">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-sans">hello@aura-skincare.com</p>
                <p className="text-sm text-muted-foreground font-sans mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift">
              <CardHeader>
                <Phone className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <CardTitle className="font-serif">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-sans">1-800-AURA-SKIN</p>
                <p className="text-sm text-muted-foreground font-sans mt-2">Mon-Fri 9AM-6PM EST</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift">
              <CardHeader>
                <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <CardTitle className="font-serif">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-sans">
                  123 Beauty Lane
                  <br />
                  Skincare City, SC 12345
                </p>
                <p className="text-sm text-muted-foreground font-sans mt-2">By appointment only</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary" />
            <h4 className="text-xl font-serif font-bold text-primary">Aura</h4>
          </div>
          <p className="text-primary font-sans mb-4">
            Transform your skincare routine with the magic of color-changing herbal scrub
          </p>
          <Separator className="my-6" />
          <p className="text-sm text-primary font-sans">
            © 2025 Aura Skincare. All rights reserved.
          </p>
          <p className="text-sm text-primary font-sans">
            Developed by <a href="https://www.juliathwin.me" className="text-secondary">@Julia</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
