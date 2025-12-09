import { Briefcase, TrendingUp, Zap, ShoppingCart, Megaphone, Factory } from "lucide-react";

const expertise = [
  { icon: Briefcase, label: "Business Strategy" },
  { icon: TrendingUp, label: "Sales & Growth" },
  { icon: Zap, label: "Electrical Engineering" },
  { icon: ShoppingCart, label: "Purchasing" },
  { icon: Megaphone, label: "Marketing" },
  { icon: Factory, label: "Production" },
];

const Team = () => {
  return (
    <section id="team" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Team
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Powered by{" "}
              <span className="gradient-text">Experience</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The WINSO team brings together decades of combined expertise in business 
              development, sales strategy, and electrical engineering. Our founders have 
              successfully built and scaled businesses, and now we're channeling that 
              experience into revolutionizing small wind power.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              As we grow, we're expanding our capabilities across purchasing, production, 
              marketing, and customer success—ensuring every aspect of WINSO operates 
              at the highest level.
            </p>

            {/* Expertise Tags */}
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-3">
                {expertise.map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft border border-border"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl" />
            <div className="relative bg-card rounded-3xl p-8 lg:p-10 shadow-card">
              {/* Team Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 rounded-2xl bg-secondary/50">
                  <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Combined<br/>Experience</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-secondary/50">
                  <div className="text-4xl font-bold gradient-text mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Industries<br/>Mastered</div>
                </div>
              </div>

              {/* Core Values */}
              <h4 className="font-semibold text-foreground mb-4">Our Core Values</h4>
              <div className="space-y-3">
                {[
                  "Innovation in everything we do",
                  "Customer success is our success",
                  "Sustainability without compromise",
                  "Excellence through collaboration",
                ].map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
