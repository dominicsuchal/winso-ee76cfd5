import { Check, Wind, Gauge, Battery, DollarSign, Shrink, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import winsoTurbine from "@/assets/winso-turbine.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Product = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Wind, title: t("product.feat1Title"), description: t("product.feat1Desc") },
    { icon: Gauge, title: t("product.feat2Title"), description: t("product.feat2Desc") },
    { icon: Battery, title: t("product.feat3Title"), description: t("product.feat3Desc") },
    { icon: Shrink, title: t("product.feat4Title"), description: t("product.feat4Desc") },
    { icon: DollarSign, title: t("product.feat5Title"), description: t("product.feat5Desc") },
    { icon: Settings, title: t("product.feat6Title"), description: t("product.feat6Desc") },
  ];

  const benefits = [
    t("product.benefit1"), t("product.benefit2"), t("product.benefit3"),
    t("product.benefit4"), t("product.benefit5"),
  ];

  return (
    <section id="product" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 border border-border rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-accent/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6 backdrop-blur-sm">
            {t("product.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {t("product.headline")} <span className="text-accent">{t("product.headlineHighlight")}</span> {t("product.headlineEnd")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("product.intro")}
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="max-w-lg mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-primary/5 rounded-3xl blur-3xl" />
              <div className="relative">
                <img src={winsoTurbine} alt="WINSO Hybrid Wind-Solar Turbine" className="w-full h-auto relative z-10 drop-shadow-2xl" />
                <div className="absolute -right-8 top-1/4 px-4 py-2 rounded-lg bg-card border border-border text-sm shadow-card backdrop-blur-sm z-20">
                  <span className="font-semibold text-accent">+30%</span>
                  <span className="text-muted-foreground ml-1">{t("product.output")}</span>
                </div>
                <div className="absolute left-0 bottom-1/4 px-4 py-2 rounded-lg bg-card border border-border text-sm shadow-card backdrop-blur-sm z-20">
                  <span className="font-semibold text-accent">{t("product.hybrid")}</span>
                  <span className="text-muted-foreground ml-1">{t("product.technology")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t("product.techTitle")}</h3>
            <p className="text-muted-foreground mb-4">{t("product.techP1")}</p>
            <p className="text-muted-foreground mb-8">{t("product.techP2")}</p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="cta" size="lg" asChild>
              <a href="#contact">{t("product.requestQuote")}</a>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="group p-6 rounded-2xl bg-card backdrop-blur-sm border border-border hover:border-accent/30 transition-all duration-300 shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;