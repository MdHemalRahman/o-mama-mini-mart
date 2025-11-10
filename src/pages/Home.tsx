import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShoppingBag, Smartphone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomerLogosSlider from "@/components/TrustBadgeCarousel";
import omamaFreezer from "@/assets/omama-freezer.jpg";
import freshFoodDisplay from "@/assets/fresh-food-display.jpg";
import omamaShell from "@/assets/O_mama_shell.png";
import heroVideo from "@/assets/NRF-store-POS-2_pdp0us.mp4";

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
      <section className="bg-white py-8 md:py-11">
        <div className="container mx-auto px-8 md:px-16 text-center">
          <p className="text-5xl md:text-6xl mb-6 font-bold">
            <span 
              style={{
                color: '#014721',
                animation: 'fadeSlideUp 0.5s ease-out forwards',
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              Fresh Food
            </span> · <span 
              style={{
                color: '#2AA63E',
                animation: 'fadeSlideUp 0.5s ease-out 0.6s forwards',
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              Smart Life
            </span>
          </p>
          <style>{`
            @keyframes fadeSlideUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Making healthy, fresh, and hygienic food accessible for everyone, anytime, anywhere in your workplace.
          </p>
          
          {/* Video Container */}
          <div className="mb-12 flex justify-center">
            <div className="max-w-4xl w-full">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                poster={omamaFreezer}
                className="w-full h-auto rounded-xl"
                style={{aspectRatio: '16/9'}}
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg">
              <Link to="/experience">
                See How It Works <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Differentiator Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8 md:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span style={{color: '#014721'}}>Why O Mama is</span> <span style={{color: '#2AA63E'}}>Different</span>
          </h2>
          <p className="text-center text-gray-600 mb-20 max-w-3xl mx-auto text-xl leading-relaxed">
            Unlike traditional vending machines, O Mama gives you the freedom and convenience of a personal mini-mart
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div className="bg-white border-4 border-primary rounded-3xl p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-primary mb-8">O Mama Smart Freezer</h3>
              <div className="space-y-6">
                <div className="text-lg text-gray-700">
                  <strong>Feels like using your own home freezer</strong> — open, choose freely, take time
                </div>
                <div className="text-lg text-gray-700">
                  <strong>Open the door, pick up any item, check it</strong>, and if you don't like it — simply place it back
                </div>
                <div className="text-lg text-gray-700">
                  <strong>Browse through all the fresh fruits, snacks, and drinks</strong> like shopping from your own mini-mart
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-4 border-gray-200 rounded-3xl p-12">
              <h3 className="text-3xl font-bold mb-8 text-gray-500">Traditional Vending Machine</h3>
              <div className="space-y-6">
                <div className="text-lg text-gray-500">
                  <strong>Press a button</strong> and whatever comes out, you must accept
                </div>
                <div className="text-lg text-gray-500">
                  <strong>Once you press the button</strong>, the item is dispensed — no change of mind possible
                </div>
                <div className="text-lg text-gray-500">
                  <strong>No browsing</strong> — only button pressing based on fixed slot numbers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Mama Benefits Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8 md:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            <span style={{color: '#014721'}}>O Mama, The Future of</span> <span style={{color: '#2AA63E'}}>Fresh Food</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto items-center">
            {/* Left Side Cards */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{color: '#014721'}}>Elevate Employee Experience</h3>
                <p className="text-gray-600">Provide a modern, convenient, and highly valued amenity that boosts morale and productivity for your workforce.</p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{color: '#014721'}}>Seamless, Hands-Off Solution</h3>
                <p className="text-gray-600">Enjoy a zero-cost, zero-maintenance, and fully managed fresh food program for your organization.</p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{color: '#014721'}}>Data-Driven Performance</h3>
                <p className="text-gray-600">Leverage our smart platform's real-time insights for optimal stocking, reduced waste, and understanding employee preferences.</p>
              </div>
            </div>

            {/* Central Image */}
            <div className="flex justify-center">
              <img
                src={omamaShell}
                alt="O Mama Smart Freezer"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Side Cards */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{color: '#014721'}}>Curated Fresh & Healthy Options</h3>
                <p className="text-gray-600">Offer a diverse and rotating menu of nutritionist-approved meals, snacks, and beverages, catering to various tastes and dietary needs.</p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{color: '#014721'}}>Reliable 24/7 Availability</h3>
                <p className="text-gray-600">Provide constant access to fresh food, ensuring employees have options morning, noon, or night, without requiring staff oversight.</p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{color: '#014721'}}>Enterprise-Grade Security & Safety</h3>
                <p className="text-gray-600">Benefit from advanced access control, secure digital payments, and 24/7 cold chain monitoring for ultimate peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8 md:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            <span style={{color: '#014721'}}>Three Pillars of</span> <span style={{color: '#2AA63E'}}>Excellence</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar) => (
              <Link key={pillar.title} to={pillar.link}>
                <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group h-full">
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors" style={{color: '#014721'}}>
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="flex items-center text-primary font-semibold text-lg">
                    Learn more <ArrowRight className="ml-3" size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh Food Preview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span style={{color: '#014721'}}>Healthy, Fresh &</span> <span style={{color: '#2AA63E'}}>Hygienic</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From fresh cut fruits and healthy snacks to beverages and light meals - all maintained at optimal temperature with 24/7 monitoring.
              </p>
              <div className="space-y-6 mb-12">
                <div className="text-lg text-gray-700">
                  <strong>Affordable prices</strong> aligned with market rates
                </div>
                <div className="text-lg text-gray-700">
                  <strong>Health-focused</strong> product lineup
                </div>
                <div className="text-lg text-gray-700">
                  <strong>Contactless, hygienic</strong> experience
                </div>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                <Link to="/menu">
                  Explore Our Menu <ArrowRight className="ml-3" size={20} />
                </Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <img
                src={freshFoodDisplay}
                alt="Fresh healthy food displayed in O Mama smart freezer"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-8 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Workplace?
          </h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Join leading organizations providing 24/7 access to fresh, healthy food for their teams
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 px-12 py-6 text-xl font-semibold">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{color: '#014721'}}>
            The Game Changing Smart Freezer in Action
          </h2>
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

      {/* Trusted By Our Customers */}
      <CustomerLogosSlider />

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{color: '#014721'}}>
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
