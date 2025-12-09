import { Globe, Home, Sailboat, TreePine, Tent, Truck } from "lucide-react";

const applications = [
  { icon: Home, label: "Private Households" },
  { icon: TreePine, label: "Garden Houses" },
  { icon: Globe, label: "Island Applications" },
  { icon: Tent, label: "Vacation Homes" },
  { icon: Truck, label: "Mobile Homes" },
  { icon: Sailboat, label: "Boats & Yachts" },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              About WINSO
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Making Wind Power{" "}
              <span className="gradient-text">Accessible</span> for Everyone
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The market for small wind turbines is growing rapidly as more people seek 
              independence from traditional power grids. WINSO is at the forefront of this 
              revolution, making efficient wind power technology accessible to everyone.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Our mission is simple: provide reliable, cost-effective wind energy solutions 
              for private use—whether you're powering a home, a boat, or an off-grid cabin 
              in the mountains.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-2xl bg-card shadow-soft">
                <div className="text-3xl font-bold gradient-text mb-1">2030</div>
                <div className="text-sm text-muted-foreground">Market Growth<br/>Projection</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-card shadow-soft">
                <div className="text-3xl font-bold gradient-text mb-1">45%</div>
                <div className="text-sm text-muted-foreground">More<br/>Efficient</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-card shadow-soft">
                <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Power<br/>Generation</div>
              </div>
            </div>
          </div>

          {/* Applications Grid */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl" />
            <div className="relative bg-card rounded-3xl p-8 lg:p-10 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Perfect for Every Application
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {applications.map((app, index) => (
                  <div
                    key={app.label}
                    className="group p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:shadow-soft cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <app.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {app.label}
                    </span>
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

export default About;
