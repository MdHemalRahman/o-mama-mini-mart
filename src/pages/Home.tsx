import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShoppingBag, Smartphone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import omamaFreezer from "@/assets/omama-freezer.jpg";
import freshFoodDisplay from "@/assets/fresh-food-display.jpg";

const Home = () => {
  const pillars = [
    {
      icon: ShoppingBag,
      title: "The Experience",
      description: "Like using your own home freezer. Browse freely, pick what you want, change your mind - it's your mini-mart.",
      link: "/experience",
    },
    {
      icon: Smartphone,
      title: "The Platform",
      description: "24/7 remote monitoring, touchless access, real-time inventory management, and complete operational transparency.",
      link: "/platform",
    },
    {
      icon: Shield,
      title: "The Partnership",
      description: "Full-service solution. We own, install, maintain, and manage inventory. You provide space, power, and internet.",
      link: "/partnership",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                A Mini-Mart,<br />Not a Vending Machine
              </h1>
              <p className="text-xl md:text-2xl mb-4 opacity-95">
                Fresh Food · Smart Life
              </p>
              <p className="text-lg mb-8 opacity-90 max-w-xl">
                Making healthy, fresh, and hygienic food accessible for everyone, anytime, anywhere in your workplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/experience">
                    See How It Works <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={omamaFreezer}
                alt="O Mama Smart Freezer showcasing fresh food in modern office environment"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiator Section */}
      <section className="py-20 bg-feature-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why O Mama is Different
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Unlike traditional vending machines, O Mama gives you the freedom and convenience of a personal mini-mart
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-primary shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">O Mama Smart Freezer</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <span>Feels like using your own home freezer — open, choose freely, take time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <span>Open the door, pick up any item, check it, and if you don't like it — simply place it back</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <span>Browse through all the fresh fruits, snacks, and drinks like shopping from your own mini-mart</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 bg-muted/50">
                <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Traditional Vending Machine</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1 text-destructive">✗</div>
                    <span>Press a button and whatever comes out, you must accept</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1 text-destructive">✗</div>
                    <span>Once you press the button, the item is dispensed — no change of mind possible</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex-shrink-0 mt-1 text-destructive">✗</div>
                    <span>No browsing — only button pressing based on fixed slot numbers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Three Pillars of Excellence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Link key={pillar.title} to={pillar.link}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-primary group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <pillar.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {pillar.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Learn more <ArrowRight className="ml-2" size={18} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh Food Preview */}
      <section className="py-20 bg-feature-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Healthy, Fresh & Hygienic
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From fresh cut fruits and healthy snacks to beverages and light meals - all maintained at optimal temperature with 24/7 monitoring.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span>Affordable prices aligned with market rates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span>Health-focused product lineup</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span>Contactless, hygienic experience</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/menu">
                  Explore Our Menu <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div>
              <img
                src={freshFoodDisplay}
                alt="Fresh healthy food displayed in O Mama smart freezer"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workplace?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join leading organizations providing 24/7 access to fresh, healthy food for their teams
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/o8ahmgEQtZU"
              title="O Mama Smart Freezer Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get answers to common questions about O Mama Smart Freezer
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What makes O Mama different from traditional vending machines?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                O Mama is a mini-mart experience, not a vending machine. You can open the door, browse freely, pick up items to check them, and place them back if you change your mind—just like using your home freezer. Traditional vending machines lock you into a choice once you press a button.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How does the payment system work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Payment is completely touchless and automatic. Simply scan the QR code with your phone to open the door, take what you want, and close the door. The system automatically detects what you've taken and deducts the amount from your digital wallet through the app.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                What are the requirements to install O Mama at our workplace?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You need to provide three essentials: stable internet connection, continuous power supply, and physical security for the unit. O Mama handles everything else—ownership, installation, maintenance, and inventory management are all included in our full-service partnership.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                What is the cost and contract duration?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The only upfront cost is a BDT 100,000 refundable security deposit. The minimum contract is 24 months. Installation, maintenance, and inventory management are all provided at no additional cost as part of our full-service model.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                How is food quality and freshness maintained?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We maintain a complete cold chain from our hygienic kitchen to your freezer with 24/7 IoT monitoring of temperature and inventory. Each unit has dedicated CCTV for security and quality assurance. Fresh items are restocked regularly based on real-time demand data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Can we customize the menu for our organization?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! We offer a diverse menu of fresh cut fruits, healthy snacks, beverages, and light meals. We can work with you to understand your team's preferences and adjust the product mix accordingly to ensure maximum satisfaction and utilization.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                How long does installation take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Installation is quick and hassle-free. Once the location and power/internet requirements are confirmed, our team can typically complete the installation and setup within 1-2 business days, including staff training on how to use the system.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                What kind of organizations benefit most from O Mama?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                O Mama is ideal for corporate offices, hospitals, universities, and any workplace with 50+ employees who value health, convenience, and 24/7 access to fresh food. It's especially beneficial for organizations with shift workers or extended operating hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
