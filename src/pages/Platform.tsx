import { Link } from "react-router-dom";
import { Thermometer, BarChart3, Wallet, Camera, Wifi, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import techDashboard from "@/assets/tech-dashboard.jpg";
import officeTech from "@/assets/office-technology.jpg";

const Platform = () => {
  const features = [
    {
      icon: Thermometer,
      title: "24/7 Cold Chain Monitoring",
      description: "Maintain 100% Food Safety Compliance. Real-time temperature alerts ensure product integrity and immediate issue resolution.",
    },
    {
      icon: BarChart3,
      title: "Smart Inventory Management",
      description: "Minimize Waste & Guarantee Stock. Our AI-driven system predicts demand and reduces restocking time by X%.",
    },
    {
      icon: Wallet,
      title: "Seamless Digital Payments",
      description: "Integrated O Mama Wallet with bKash and digital payment options. Completely touchless and secure.",
    },
    {
      icon: Camera,
      title: "Security & Transparency",
      description: "Dedicated CCTV camera for accountability. Complete visibility and trust in every transaction.",
    },
    {
      icon: Wifi,
      title: "IoT-Enabled Connectivity",
      description: "Cloud-connected sensors provide real-time data on usage patterns, temperature, and inventory levels.",
    },
    {
      icon: Zap,
      title: "Instant Access Control",
      description: "Effortless User Onboarding. Grant and revoke access instantly via our cloud platform.",
    },
  ];

  const appFeatures = [
    "Digital wallet with easy top-up via bKash",
    "QR code scanner for instant freezer access",
    "Transaction history and spending analytics",
    "Promotional deals and combo offers",
    "24/7 customer support through app",
    "Nutritional information for all products",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section id="platform-hero" className="py-20" style={{backgroundColor: '#F0FFF0'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span style={{color: '#014721'}}>Advanced Technology</span> <span style={{color: '#2AA63E'}}>Platform</span>
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground mb-8" style={{fontSize: '14px'}}>
              Built on cutting-edge IoT technology with real-time monitoring, AI-powered inventory management, and complete operational transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Enterprise-Grade Technology
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-sm md:text-base" style={{fontSize: '14px'}}>
            Every O Mama Smart Freezer is equipped with advanced sensors and connectivity for complete operational control
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Monitoring */}
      <section className="py-20 bg-feature-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <img
                src={techDashboard}
                alt="Real-time IoT monitoring dashboard showing temperature and inventory data"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Data That Drives Decision-Making
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground mb-6" style={{fontSize: '14px'}}>
                Our cloud-based platform provides complete visibility into every aspect of your O Mama Smart Freezer operation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <strong>Temperature Stability:</strong> Continuous monitoring with instant alerts for any deviations
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <strong>Inventory Levels:</strong> Real-time stock tracking with automated reorder notifications
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <strong>Usage Analytics:</strong> Demand prediction based on consumption patterns
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <strong>Performance Metrics:</strong> Comprehensive reporting on transaction volume and revenue
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <strong>Consumption Trends for Menu Planning:</strong> Provide aggregated data on peak usage times and popular products, allowing the client to subsidize specific items or optimize break schedules
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O Mama App */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Tolpar App
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground mb-6" style={{fontSize: '14px'}}>
                A seamless mobile experience that puts convenience at your fingertips. Access fresh food with just a scan.
              </p>
              
              <h3 className="text-xl font-bold mb-4">App Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={officeTech}
                alt="Professionals using O Mama mobile app for touchless access"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Camera size={48} className="mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Security & Accountability
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Every O Mama Smart Freezer is equipped with a dedicated CCTV camera that provides transparency and security for both users and operators. Combined with cloud-based monitoring and secure digital payments, you can trust that every transaction is safe and accountable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Technology Platform
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            See how our advanced platform can transform your workplace food service
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Try Out Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platform;
