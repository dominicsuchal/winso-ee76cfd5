import { Factory, TrendingUp, Package, Repeat } from "lucide-react";

const pillars = [
  {
    icon: Factory,
    title: "In-House Manufacturing",
    description: "Full control over production processes ensures quality while keeping costs competitive.",
  },
  {
    icon: Package,
    title: "Lean Product Line",
    description: "Focused initial offering allows for operational efficiency and continuous improvement.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Model",
    description: "Designed to grow with demand while maintaining profitability at every stage.",
  },
  {
    icon: Repeat,
    title: "Recurring Revenue",
    description: "One-time sales foundation with potential for service contracts and expansions.",
  },
];

const BusinessModel = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-gradient-to-r from-secondary to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Business Model
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Simple, Scalable,{" "}
              <span className="gradient-text">Sustainable</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              WINSO's business model is built for growth. By controlling our manufacturing 
              process and focusing on a streamlined product line, we deliver exceptional 
              value while building a sustainable, profitable enterprise.
            </p>

            {/* Pillars */}
            <div className="space-y-4">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <pillar.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl" />
            <div className="relative bg-card rounded-3xl p-8 lg:p-10 shadow-card">
              {/* Revenue Model Visualization */}
              <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
                Revenue Strategy
              </h3>
              
              <div className="space-y-6">
                {/* Primary Revenue */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">Direct Turbine Sales</span>
                    <span className="text-primary font-semibold">70%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[70%] gradient-hero rounded-full" />
                  </div>
                </div>

                {/* Secondary Revenue */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">Installation Services</span>
                    <span className="text-accent font-semibold">15%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-accent rounded-full" />
                  </div>
                </div>

                {/* Tertiary Revenue */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">Maintenance & Parts</span>
                    <span className="text-cta font-semibold">15%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-cta rounded-full" />
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <div className="text-2xl font-bold text-primary mb-1">3x</div>
                  <div className="text-xs text-muted-foreground">Growth Target<br/>by 2027</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50">
                  <div className="text-2xl font-bold text-accent mb-1">35%</div>
                  <div className="text-xs text-muted-foreground">Gross Margin<br/>Target</div>
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
