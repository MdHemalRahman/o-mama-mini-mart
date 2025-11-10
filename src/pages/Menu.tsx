import { Link } from "react-router-dom";
import { Apple, Coffee, Salad, Sandwich, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import freshFruits from "@/assets/fresh-fruits.jpg";
import freshFoodDisplay from "@/assets/fresh-food-display.jpg";

const Menu = () => {
  const categories = [
    {
      icon: Apple,
      title: "Fresh Cut Fruits & Salad",
      items: [
        "Seasonal fresh cut fruit cups",
        "Mixed tropical fruit bowls",
        "Garden fresh salads",
        "Fruit and yogurt parfaits",
      ],
    },
    {
      icon: Salad,
      title: "Healthy Snacks",
      items: [
        "Mixed nuts and seeds",
        "Protein bars and energy bites",
        "Whole grain crackers",
        "Vegetable sticks with hummus",
      ],
    },
    {
      icon: Coffee,
      title: "Beverages & Juice",
      items: [
        "Fresh pressed juices",
        "Smoothies and shakes",
        "Mineral water and sparkling water",
        "Healthy energy drinks",
      ],
    },
    {
      icon: Sandwich,
      title: "Light Meals",
      items: [
        "Whole grain sandwiches",
        "Fresh wraps and rolls",
        "Yogurt and granola",
        "Meal prep containers",
      ],
    },
  ];

  const qualityPoints = [
    {
      title: "Fresh Daily",
      description: "All products are stocked fresh daily with strict quality control",
    },
    {
      title: "Cold Chain Maintained",
      description: "24/7 temperature monitoring from kitchen to your freezer",
    },
    {
      title: "Hygienic Preparation",
      description: "All food prepared in certified, hygienic kitchen facilities",
    },
    {
      title: "Market-Aligned Pricing",
      description: "Affordable prices comparable to local market rates",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Food & Freshness
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Healthy, fresh, and hygienic food maintained at optimal temperature, available 24/7 for your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <img
                src={freshFruits}
                alt="Fresh tropical fruits beautifully arranged showing quality and variety"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every product in O Mama Smart Freezer meets our strict quality and hygiene standards. From sourcing to serving, we maintain the highest level of food safety.
              </p>
              
              <div className="space-y-4">
                {qualityPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <strong className="text-lg">{point.title}</strong>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-feature-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Menu Categories
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A diverse selection of healthy options to suit every taste and dietary preference
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Affordable & Accessible
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                O Mama is committed to providing healthy food options at prices aligned with local market rates. We believe that quality nutrition should be accessible to everyone.
              </p>
              
              <div className="bg-feature-bg p-6 rounded-xl mb-6">
                <h3 className="font-bold text-xl mb-3">Our Pricing Promise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Competitive pricing comparable to local markets</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Regular promotional deals and combo offers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Flash sales for seasonal items</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src={freshFoodDisplay}
                alt="Variety of fresh healthy food options in O Mama smart freezer"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Customized to Your Needs
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Every organization is unique. We work with you to customize the product selection based on your team's preferences, dietary requirements, and consumption patterns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background/10 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-2">Menu Customization</h3>
                <p className="opacity-75">Tailor products to your team's preferences</p>
              </div>
              <div className="bg-background/10 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-2">Dietary Options</h3>
                <p className="opacity-75">Accommodate special dietary needs</p>
              </div>
              <div className="bg-background/10 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-2">Seasonal Rotation</h3>
                <p className="opacity-75">Fresh seasonal items added regularly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bring Fresh, Healthy Food to Your Workplace
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Let's discuss menu options that work best for your organization
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Request a Food Trial</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
