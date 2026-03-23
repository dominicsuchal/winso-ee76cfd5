import { Factory, TrendingUp, Package, Repeat } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BusinessModel = () => {
  const { t } = useLanguage();

  const pillars = [
    { icon: Factory, title: t("business.pillar1Title"), description: t("business.pillar1Desc") },
    { icon: Package, title: t("business.pillar2Title"), description: t("business.pillar2Desc") },
    { icon: TrendingUp, title: t("business.pillar3Title"), description: t("business.pillar3Desc") },
    { icon: Repeat, title: t("business.pillar4Title"), description: t("business.pillar4Desc") },
  ];

  return (
    <section className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6 backdrop-blur-sm">
              {t("business.badge")}
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {t("business.headline")}{" "}
              <span className="text-accent">{t("business.headlineHighlight")}</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("business.p1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{t("business.p2")}</p>

            {/* Pillars */}
            <div className="space-y-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="group flex items-start gap-4 p-4 rounded-xl bg-card hover:bg-accent/10 border border-border transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                    <pillar.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{pillar.title}</h4>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/5 rounded-3xl blur-xl" />
            <div className="relative bg-card backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-border shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-8 text-center">{t("business.approach")}</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="text-2xl font-bold text-accent mb-1">{t("business.costEffective")}</div>
                  <div className="text-xs text-muted-foreground">{t("business.effectiveProd")}<br/>{t("business.production")}</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="text-2xl font-bold text-accent mb-1">{t("business.lean")}</div>
                  <div className="text-xs text-muted-foreground">{t("business.initial")}<br/>{t("business.offering")}</div>
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