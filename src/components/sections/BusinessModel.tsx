import { Factory, TrendingUp, Package, Repeat } from "lucide-react";

const pillars = [
  {
    icon: Factory,
    title: "In-House Manufacturing",
    description: "Cost-effective production through complete manufacturing control.",
  },
  {
    icon: Package,
    title: "Lean Product Line",
    description: "Initially lean offering for efficiency and lower costs than comparable models.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Model",
    description: "Simple structure designed to scale with growing market demand.",
  },
  {
    icon: Repeat,
    title: "Recurring Revenue",
    description: "One-time sales foundation with stable, recurring revenue and growth potential.",
  },
];

const BusinessModel = () => {
  return (
    <section className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
              Business Model
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Simple and{" "}
              <span className="text-accent">Scalable</span>
            </h2>
            
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              Our business model is simple and scalable. Our goal is to manufacture wind turbines 
              cost-effectively through in-house production. The WINSO turbine is not significantly 
              more expensive than a traditional vertical turbine.
            </p>

            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10">
              Through an initially lean offering, we can provide our product more efficiently 
              and at a lower cost than comparable performance models on the market. Focusing on 
              one-time sales allows us to achieve stable and recurring revenue with growth potential.
            </p>

            {/* Pillars */}
            <div className="space-y-4">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-accent/10 border border-primary-foreground/10 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                    <pillar.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-primary-foreground/70">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary-foreground/5 rounded-3xl blur-xl" />
            <div className="relative bg-foreground/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-primary-foreground/10">
              {/* Revenue Model Visualization */}
              <h3 className="text-xl font-semibold text-primary-foreground mb-8 text-center">
                Revenue Strategy
              </h3>
              
              <div className="space-y-6">
                {/* Primary Revenue */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-primary-foreground">Direct Turbine Sales</span>
                    <span className="text-accent font-semibold">70%</span>
                  </div>
                  <div className="h-3 bg-primary-foreground/10 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-accent rounded-full" />
                  </div>
                </div>

                {/* Secondary Revenue */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-primary-foreground">Installation Services</span>
                    <span className="text-accent font-semibold">15%</span>
                  </div>
                  <div className="h-3 bg-primary-foreground/10 rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-accent/70 rounded-full" />
                  </div>
                </div>

                {/* Tertiary Revenue */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-primary-foreground">Maintenance & Parts</span>
                    <span className="text-accent font-semibold">15%</span>
                  </div>
                  <div className="h-3 bg-primary-foreground/10 rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-accent/50 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="text-center p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <div className="text-2xl font-bold text-accent mb-1">Cost</div>
                  <div className="text-xs text-primary-foreground/70">Effective<br/>Production</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <div className="text-2xl font-bold text-accent mb-1">Lean</div>
                  <div className="text-xs text-primary-foreground/70">Initial<br/>Offering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
