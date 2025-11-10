import { Link } from "react-router-dom";
import { Smartphone, DoorOpen, ShoppingCart, CreditCard, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Experience = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Step 1: Scan QR Code",
      description: "Open the O Mama app and scan the QR code on the freezer. Instant authentication and unlock signal sent.",
    },
    {
      icon: DoorOpen,
      title: "Step 2: Door Opens",
      description: "The smart freezer door unlocks automatically. Browse freely like opening your home refrigerator.",
    },
    {
      icon: ShoppingCart,
      title: "Step 3: Select Your Items",
      description: "Pick up items, examine them closely. Change your mind? Simply place them back. No pressure, no commitment until you close the door.",
    },
    {
      icon: CreditCard,
      title: "Step 4: Close & Auto-Pay",
      description: "Close the door. Smart sensors detect what you took. Payment is automatically deducted from your O Mama Wallet.",
    },
  ];

  const advantages = [
    "Freedom to browse all products without pressing buttons",
    "Ability to inspect items before purchasing",
    "Change your mind freely - place items back if unsure",
    "No stuck products or failed transactions",
    "Completely touchless payment process",
    "Natural shopping experience like your home freezer",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The O Mama Experience
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Shopping should feel natural, not mechanical. That's why O Mama works like your home freezer, not a traditional vending machine.
            </p>
          </div>
        </div>
      </section>

      {/* Client Success Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#014721'}}>
              HR Partner Testimonial
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Watch a testimonial from an HR partner at SAVOR, confirming that the O Mama Smart Freezer has solved their employees' issue with lack of convenient, healthy breakfast and lunch options nearby.
            </p>
            <div className="aspect-[9/16] max-w-sm mx-auto rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/mzh978dzt_E?cc_load_policy=1&cc_lang_pref=en"
                title="O Mama Client Success Story - SAVOR HR Partner Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 4 Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How O Mama Works
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Four simple steps to fresh, healthy food - anytime you need it
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-20 bg-feature-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Mini-Mart vs. Vending Machine
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Experience the difference with O Mama's superior approach
          </p>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-bold">Feature</th>
                  <th className="p-4 text-left font-bold">O Mama Smart Freezer</th>
                  <th className="p-4 text-left font-bold">Traditional Vending</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold">User Experience</td>
                  <td className="p-4">
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>Open door, browse freely, pick up, check, return if desired</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">Press button, accept whatever dispenses</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="p-4 font-semibold">Transaction</td>
                  <td className="p-4">
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>Touchless app-based access, auto-deduction on door close</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">Touch buttons/slots, prone to stuck items</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold">Trust & Hygiene</td>
                  <td className="p-4">
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>24/7 cold chain monitoring, dedicated CCTV, cashless</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">Low visibility on inventory/temperature</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-4 font-semibold">Product Selection</td>
                  <td className="p-4">
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>See all products, inspect physically before purchase</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">Limited view through glass, selection by number</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Users Love O Mama
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Give your team the convenience and freedom they deserve
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;
