import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Users, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Partnership = () => {
  const omamaCommitments = [
    "Smart Freezer Solution Provided and Fully Managed",
    "Complete installation at your location",
    "Ongoing maintenance and technical support",
    "Daily inventory management and restocking",
    "Quality assurance of all food products",
    "24/7 remote monitoring and support",
  ];

  const clientResponsibilities = [
    {
      title: "Stable Internet Connection",
      description: "A dedicated, stable Wi-Fi connection for real-time inventory and remote monitoring",
      icon: "🌐",
    },
    {
      title: "Continuous Power Supply",
      description: "Ensures 24/7 operation and maintains cold chain integrity",
      icon: "⚡",
    },
    {
      title: "Physical Security",
      description: "A secure, indoor location for the unit, ensuring the safety of the equipment and products",
      icon: "🔒",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section id="partnership-hero" className="py-20" style={{backgroundColor: '#F0FFF0'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span style={{color: '#014721'}}>Partnership &</span> <span style={{color: '#2AA63E'}}>Terms</span>
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground mb-8" style={{fontSize: '14px'}}>
              A transparent, full-service partnership model designed for mutual success and long-term collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* O Mama's Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Shield size={48} className="mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                O Mama's Full-Service Commitment
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground" style={{fontSize: '14px'}}>
                We handle everything so you can focus on your core business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {omamaCommitments.map((commitment, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                      <span className="font-medium">{commitment}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Responsibilities */}
      <section className="py-20 bg-feature-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Users size={48} className="mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Minimal Client Requirements for a Seamless Launch
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground" style={{fontSize: '14px'}}>
                Three essential requirements for successful operation
              </p>
            </div>

            <Alert className="mb-8 border-primary bg-primary/5">
              <AlertCircle className="h-5 w-5 text-primary" />
              <AlertDescription className="text-base">
                <strong>Important:</strong> These infrastructure requirements are mandatory for O Mama Smart Freezer operation and must be maintained throughout the partnership.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clientResponsibilities.map((item, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Terms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Clock size={48} className="mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Commercial Terms
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground" style={{fontSize: '14px'}}>
                Clear, straightforward terms for a successful partnership
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Security Deposit</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold mb-2">BDT 100,000</div>
                      <p className="text-muted-foreground">One-time refundable security deposit</p>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> This deposit is fully refundable upon successful completion of the contract term, securing your access to the latest smart technology.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Contract Duration</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold mb-2">24 Months</div>
                      <p className="text-muted-foreground">Minimum contract tenure</p>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> The 24-month term guarantees long-term stable pricing and full access to all platform updates and support services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Termination Conditions */}
            <Card className="mt-8 border-2 border-muted">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Early Termination Conditions</h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base" style={{fontSize: '14px'}}>
                  SOHUB reserves the right to terminate the partnership under the following circumstances:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground flex-shrink-0 mt-2"></div>
                    <span>Performance falls below agreed ROI benchmarks for three consecutive months</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground flex-shrink-0 mt-2"></div>
                    <span>Failure to maintain required infrastructure (internet, power, physical security)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground flex-shrink-0 mt-2"></div>
                    <span>Lack of operational cooperation or repeated policy violations</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  In case of early termination, security deposit refund is subject to evaluation of circumstances and equipment condition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits of Partnership */}
      <section className="py-20" style={{backgroundColor: '#F0FFF0'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{color: '#014721'}}>
              Partnership Benefits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#2AA63E'}}>
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <div>
                  <strong className="text-lg">Zero Capital Investment</strong>
                  <p className="text-muted-foreground">Only refundable security deposit required</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#2AA63E'}}>
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <div>
                  <strong className="text-lg">No Operational Hassle</strong>
                  <p className="text-muted-foreground">We manage inventory and maintenance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#2AA63E'}}>
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <div>
                  <strong className="text-lg">Employee Welfare</strong>
                  <p className="text-muted-foreground">24/7 access to fresh, healthy food</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#2AA63E'}}>
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <div>
                  <strong className="text-lg">Modern Workplace Amenity</strong>
                  <p className="text-muted-foreground">Enhance your company's appeal to talent</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#2AA63E'}}>
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <div>
                  <strong className="text-lg">Revenue Sharing Potential</strong>
                  <p className="text-muted-foreground">Benefit from high-performing locations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#2AA63E'}}>
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <div>
                  <strong className="text-lg">Scalable Solution</strong>
                  <p className="text-muted-foreground">Add more units as your organization grows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Employee Amenity Program?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Let's discuss how O Mama can enhance your workplace environment
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Start the Partnership</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;
