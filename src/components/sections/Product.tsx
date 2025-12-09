import { Check, Wind, Gauge, Battery, DollarSign, Shrink, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Wind,
    title: "Hybrid/Vertical Design",
    description: "Advanced aerodynamic design captures wind from all directions for maximum efficiency.",
  },
  {
    icon: Gauge,
    title: "Superior Efficiency",
    description: "Up to 45% more efficient than traditional vertical turbines with the same footprint.",
  },
  {
    icon: Battery,
    title: "Reliable Power",
    description: "Consistent energy generation even in variable wind conditions.",
  },
  {
    icon: Shrink,
    title: "Compact Size",
    description: "Space-efficient design perfect for residential and mobile applications.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Competitive pricing without compromising on quality or performance.",
  },
  {
    icon: Settings,
    title: "Low Maintenance",
    description: "Engineered for durability with minimal upkeep requirements.",
  },
];

const Product = () => {
  return (
    <section id="product" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 border border-primary/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-accent/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Product
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            The WINSO Turbine
          </h2>
          <p className="text-lg text-muted-foreground">
            A revolutionary hybrid/vertical wind turbine designed for efficiency, 
            reliability, and accessibility—all at a competitive price point.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              
              {/* Turbine representation */}
              <div className="relative h-full flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Rotating rings */}
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-spin-slow" />
                  <div className="absolute inset-4 rounded-full border-2 border-accent/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                  <div className="absolute inset-8 rounded-full border-2 border-primary/20 animate-spin-slow" style={{ animationDuration: '25s' }} />
                  
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full gradient-hero flex items-center justify-center shadow-glow">
                      <Wind className="w-12 h-12 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Floating specs */}
                  <div className="absolute -right-4 top-1/4 px-3 py-2 rounded-lg bg-card shadow-card text-sm">
                    <span className="font-semibold text-primary">500W</span>
                    <span className="text-muted-foreground ml-1">Output</span>
                  </div>
                  <div className="absolute -left-4 bottom-1/4 px-3 py-2 rounded-lg bg-card shadow-card text-sm">
                    <span className="font-semibold text-accent">Silent</span>
                    <span className="text-muted-foreground ml-1">Operation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Our Hybrid Design Stands Out
            </h3>
            <p className="text-muted-foreground mb-8">
              The WINSO turbine combines the best of vertical and horizontal axis technologies, 
              resulting in a system that's not significantly more expensive than traditional 
              vertical turbines—but far more efficient.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Captures wind from any direction without repositioning",
                "Lower noise levels than horizontal axis turbines",
                "Safer for birds and local wildlife",
                "Easy installation with minimal structural requirements",
                "Built for 20+ years of reliable operation",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="cta" size="lg" asChild>
              <a href="#contact">Request a Quote</a>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
