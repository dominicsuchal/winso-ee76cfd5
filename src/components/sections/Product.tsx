import { Check, Wind, Gauge, Battery, DollarSign, Shrink, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import winsoTurbine from "@/assets/winso-turbine.png";
const features = [
  {
    icon: Wind,
    title: "Hybrid Design",
    description: "Wind-solar integration with solar cells built directly into the rotor blades.",
  },
  {
    icon: Gauge,
    title: "Superior Efficiency",
    description: "Matches and exceeds horizontal turbine performance with electric boost capability.",
  },
  {
    icon: Battery,
    title: "Low-Wind Operation",
    description: "Electric motor provides additional drive in low-wind conditions for consistent output.",
  },
  {
    icon: Shrink,
    title: "Space Efficient",
    description: "No extra space required—solar integration means everything in one compact unit.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Not significantly more expensive than traditional vertical turbines.",
  },
  {
    icon: Settings,
    title: "Smart Safety",
    description: "Movable blade supports prevent overspeeding while eliminating headwind resistance.",
  },
];

const Product = () => {
  return (
    <section id="product" className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 border border-primary-foreground/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-accent/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            The <span className="text-accent">WINSO</span> Turbine
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Introducing our WINSO turbine—a hybrid wind-solar system that matches, and even exceeds, 
            the performance of horizontal wind turbines. Solar cells integrated directly into the 
            rotor blades power an electric motor that provides additional drive, meaning no extra 
            space is required.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="max-w-lg mx-auto relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary-foreground/10 rounded-3xl blur-3xl" />
              
              {/* Turbine Image */}
              <div className="relative">
                <img 
                  src={winsoTurbine} 
                  alt="WINSO Hybrid Wind-Solar Turbine" 
                  className="w-full h-auto relative z-10 drop-shadow-2xl"
                />
                
                {/* Floating specs */}
                <div className="absolute right-0 top-1/4 px-4 py-2 rounded-lg bg-foreground/90 border border-accent/30 text-sm shadow-lg backdrop-blur-sm">
                  <span className="font-semibold text-accent">+30%</span>
                  <span className="text-primary-foreground/70 ml-1">Output</span>
                </div>
                <div className="absolute left-0 bottom-1/3 px-4 py-2 rounded-lg bg-foreground/90 border border-accent/30 text-sm shadow-lg backdrop-blur-sm">
                  <span className="font-semibold text-accent">Hybrid</span>
                  <span className="text-primary-foreground/70 ml-1">Technology</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">
              Technically Well Thought Out
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              This electric boost also enables continuous energy production in low-wind conditions, 
              contributing up to 30% of the total output and significantly increasing daily energy yield.
            </p>
            <p className="text-primary-foreground/80 mb-8">
              The wind blades are mounted on movable supports that respond to centrifugal forces. 
              At high rotational speeds, they shift into a closed oval configuration, reducing wind 
              impact on the blades. This prevents the system from overspeeding while eliminating 
              headwind resistance—ensuring safer, more efficient operation overall.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Solar cells integrated directly into rotor blades",
                "Electric motor for continuous low-wind operation",
                "Movable supports prevent dangerous overspeeding",
                "Closed oval configuration reduces wind impact at high speeds",
                "Eliminates headwind resistance for safer operation",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-primary-foreground">{benefit}</span>
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
              className="group p-6 rounded-2xl bg-foreground/50 backdrop-blur-sm border border-primary-foreground/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
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
