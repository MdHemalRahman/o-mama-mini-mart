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
      <section id="food-freshness-hero" className="py-20" style={{backgroundColor: '#F0FFF0'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span style={{color: '#014721'}}>Food &</span> <span style={{color: '#2AA63E'}}>Freshness</span>
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground mb-8" style={{fontSize: '14px'}}>
              Healthy, fresh, and hygienic food maintained at optimal temperature, available 24/7 for your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Fuel Your Peak Performance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span style={{color: '#014721'}}>Fuel Your Peak Performance:</span> <span style={{color: '#2AA63E'}}>Eat Smart, Work Better</span>
            </h2>
            
            {/* The Critical Three */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: '#014721'}}>
                1. The Critical Three: When to Fuel Up
              </h3>
              <p className="text-sm md:text-lg text-gray-700 mb-6" style={{fontSize: '14px'}}>
                Successful people prioritize consistent, quality energy. Your performance depends on fueling up at these critical points:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3"></div>
                  <div>
                    <strong>Breakfast (Ignition):</strong> Don't run on fumes. Breakfast <strong>activates your brain's concentration and focus</strong>, stabilizing your mood and metabolism for the entire day.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3"></div>
                  <div>
                    <strong>Afternoon Snack (Sustain):</strong> Beat the 3 PM crash. A healthy snack is a <strong>strategic fuel injection</strong> that prevents sugar spikes, maintains energy stability, and keeps you sharp until dinner.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3"></div>
                  <div>
                    <strong>Constant Hydration:</strong> Keeps your brain clear and your energy high.
                  </div>
                </li>
              </ul>
            </div>

            {/* The ROI of Healthy Eating */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: '#014721'}}>
                2. The ROI of Healthy Eating
              </h3>
              <p className="text-sm md:text-lg text-gray-700 mb-8" style={{fontSize: '14px'}}>
                Switching to a healthy habit isn't a cost—it's an investment that delivers guaranteed returns in productivity and well-being.
              </p>
              <div className="bg-white shadow-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-2 py-3 text-xs md:text-base font-semibold text-left">Benefit</th>
                      <th className="px-2 py-3 text-xs md:text-base font-semibold text-left">Impact on Your Workday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-2 py-3 text-xs md:text-base text-gray-700"><strong>Cognitive Clarity</strong></td>
                      <td className="px-2 py-3 text-xs md:text-base text-gray-700">Better food means better decisions. Improve <strong>focus, memory, and complex problem-solving</strong>.</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="px-2 py-3 text-xs md:text-base text-gray-700"><strong>Resilience</strong></td>
                      <td className="px-2 py-3 text-xs md:text-base text-gray-700">Nutrient-dense food strengthens immunity, leading to <strong>fewer sick days</strong> and higher consistency.</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-3 text-xs md:text-base text-gray-700"><strong>Mood Stabilization</strong></td>
                      <td className="px-2 py-3 text-xs md:text-base text-gray-700">Avoid the "hangry" slump. Stable energy leads to a <strong>positive attitude</strong> and enhanced collaboration.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Build a Good Habit with O Mama */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: '#014721'}}>
                3. Build a Good Habit with O Mama
              </h3>
              <p className="text-sm md:text-lg text-gray-700 mb-6" style={{fontSize: '14px'}}>
                Good habits thrive on convenience. O Mama removes the friction, making healthy choices the easiest choices.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3"></div>
                  <div>
                    <strong>Zero Effort:</strong> <strong>Fresh, ready-to-eat options</strong> are available on-site, eliminating preparation time and decision fatigue.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3"></div>
                  <div>
                    <strong>Instant Reward:</strong> The immediate feeling of clarity and energy reinforces the healthy decision, turning it into a seamless, automatic habit.
                  </div>
                </li>
              </ul>
            </div>
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
              <p className="text-sm md:text-lg text-muted-foreground mb-8" style={{fontSize: '14px'}}>
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
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-sm md:text-base" style={{fontSize: '14px'}}>
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
              <p className="text-sm md:text-lg text-muted-foreground mb-6" style={{fontSize: '14px'}}>
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
