import { Globe, Home, Sailboat, TreePine, Tent, Truck, Sun, Wind, Cpu } from "lucide-react";

const applications = [
  { icon: Home, label: "Private Households" },
  { icon: TreePine, label: "Garden Houses" },
  { icon: Globe, label: "Island Applications" },
  { icon: Tent, label: "Vacation Homes" },
  { icon: Truck, label: "Mobile Homes" },
  { icon: Sailboat, label: "Boats & Yachts" },
];

const features = [
  { icon: Sun, label: "Solar-powered motor support" },
  { icon: Wind, label: "Flexible solar blades" },
  { icon: Cpu, label: "Intelligent control systems" },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
              About WINSO
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Technology That{" "}
              <span className="text-accent">Adapts</span>
            </h2>
            
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              At WINSO, we aim to make renewable energy simpler, smarter, and more efficient. 
              Our turbine combines wind and solar power into one hybrid system that produces 
              stable energy even when weather conditions change.
            </p>
            
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              We believe the future of energy lies in technology that adapts, not waits. 
              That's why WINSO uses solar-powered motor support, flexible solar blades, 
              and intelligent control systems to keep performance high at all times.
            </p>

            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10">
              Our vision is clear: deliver reliable clean energy anywhere, with a system 
              that works day and night — and moves renewable power a step forward.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-primary-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications Grid */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary-foreground/5 rounded-3xl blur-xl" />
            <div className="relative bg-foreground/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-primary-foreground/10">
              <h3 className="text-xl font-semibold text-primary-foreground mb-6">
                Perfect for Every Application
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {applications.map((app, index) => (
                  <div
                    key={app.label}
                    className="group p-4 rounded-2xl bg-primary-foreground/5 hover:bg-accent/20 transition-all duration-300 cursor-default border border-primary-foreground/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-3 group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                      <app.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-primary-foreground">
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
