import { Zap, Shield, Wallet, Cpu, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Maximum Efficiency",
    description: "Our hybrid design captures more wind energy than traditional turbines, giving you more power from every breeze.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Engineered with premium materials and rigorous testing for 20+ years of reliable operation.",
  },
  {
    icon: Wallet,
    title: "Affordable Excellence",
    description: "Competitive pricing without cutting corners. True value that pays for itself over time.",
  },
  {
    icon: Cpu,
    title: "Modern Engineering",
    description: "Cutting-edge technology meets practical design. Smart features that simplify your life.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Backed by decades of combined experience in business, sales, and electrical engineering.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Every turbine is tested and certified to meet the highest European standards.",
  },
];

const WhyWinso = () => {
  return (
    <section id="why-winso" className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            Why Choose WINSO?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            When it comes to small wind power, WINSO delivers on every front. 
            Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 lg:p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-5 group-hover:bg-cta group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground group-hover:text-cta-foreground transition-colors" />
              </div>
              <h4 className="text-xl font-semibold text-primary-foreground mb-3">
                {benefit.title}
              </h4>
              <p className="text-primary-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-primary-foreground/80 mb-6">
            Ready to power your future with clean, efficient wind energy?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cta text-cta-foreground font-semibold shadow-cta hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyWinso;
