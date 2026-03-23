import { Zap, Shield, Wallet, Cpu, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyWinso = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Zap, title: t("why.benefit1Title"), description: t("why.benefit1Desc") },
    { icon: Shield, title: t("why.benefit2Title"), description: t("why.benefit2Desc") },
    { icon: Wallet, title: t("why.benefit3Title"), description: t("why.benefit3Desc") },
    { icon: Cpu, title: t("why.benefit4Title"), description: t("why.benefit4Desc") },
    { icon: Users, title: t("why.benefit5Title"), description: t("why.benefit5Desc") },
    { icon: Award, title: t("why.benefit6Title"), description: t("why.benefit6Desc") },
  ];

  return (
    <section id="why-winso" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6 backdrop-blur-sm">
            {t("why.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {t("why.headline")} <span className="text-accent">{t("why.headlineHighlight")}</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("why.subheadline")}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="group p-6 lg:p-8 rounded-2xl bg-card backdrop-blur-sm border border-border hover:border-accent/30 transition-all duration-300 shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">{t("why.cta")}</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold shadow-cta hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            {t("why.ctaButton")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyWinso;