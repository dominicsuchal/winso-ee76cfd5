import { CloudSun, BatteryCharging, Wrench, Gauge } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const KeyBenefits = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: CloudSun, title: t("benefits.b1Title"), description: t("benefits.b1Desc") },
    { icon: BatteryCharging, title: t("benefits.b2Title"), description: t("benefits.b2Desc") },
    { icon: Wrench, title: t("benefits.b3Title"), description: t("benefits.b3Desc") },
    { icon: Gauge, title: t("benefits.b4Title"), description: t("benefits.b4Desc") },
  ];

  return (
    <section id="benefits" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6 backdrop-blur-sm">
            {t("benefits.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {t("benefits.headline")}{" "}
            <span className="text-accent">{t("benefits.headlineHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("benefits.subheadline")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-6 lg:p-7 rounded-2xl bg-card border border-border shadow-soft hover:border-accent/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                <b.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;