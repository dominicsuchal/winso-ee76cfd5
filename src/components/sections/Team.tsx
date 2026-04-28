import { Factory, MapPin, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const { t } = useLanguage();

  const trustBlocks = [
    { icon: Factory, title: t("team.trust1Title"), description: t("team.trust1Desc") },
    { icon: MapPin, title: t("team.trust2Title"), description: t("team.trust2Desc") },
    { icon: ShieldCheck, title: t("team.trust3Title"), description: t("team.trust3Desc") },
  ];

  return (
    <section id="team" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6 backdrop-blur-sm">
            {t("team.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {t("team.headline")}{" "}
            <span className="text-accent">{t("team.headlineHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("team.subheadline")}
          </p>
        </div>

        {/* Trust blocks */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustBlocks.map((b) => (
            <div
              key={b.title}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-soft hover:border-accent/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                <b.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;