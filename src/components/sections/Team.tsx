import { Briefcase, TrendingUp, Zap, ShoppingCart, Megaphone, Factory } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const { t } = useLanguage();

  const expertise = [
    { icon: Briefcase, label: t("team.exp1") },
    { icon: TrendingUp, label: t("team.exp2") },
    { icon: Zap, label: t("team.exp3") },
    { icon: ShoppingCart, label: t("team.exp4") },
    { icon: Megaphone, label: t("team.exp5") },
    { icon: Factory, label: t("team.exp6") },
  ];

  const areas = [t("team.area1"), t("team.area2"), t("team.area3"), t("team.area4")];

  return (
    <section id="team" className="py-24 lg:py-32 bg-background relative overflow-hidden">
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
              {t("team.badge")}
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {t("team.headline")}{" "}
              <span className="text-accent">{t("team.headlineHighlight")}</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("team.p1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{t("team.p2")}</p>

            {/* Expertise Tags */}
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">{t("team.expertise")}</h4>
              <div className="flex flex-wrap gap-3">
                {expertise.map((item) => (
                  <div key={item.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card backdrop-blur-sm border border-border">
                    <item.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/5 rounded-3xl blur-xl" />
            <div className="relative bg-card backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-border shadow-card">
              {/* Team Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 rounded-2xl bg-muted/50 border border-border">
                  <div className="text-4xl font-bold text-accent mb-2">{t("team.years")}</div>
                  <div className="text-sm text-muted-foreground">{t("team.combined")}<br/>{t("team.experience")}</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-muted/50 border border-border">
                  <div className="text-4xl font-bold text-accent mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">{t("team.industries")}<br/>{t("team.mastered")}</div>
                </div>
              </div>

              {/* Growth Areas */}
              <h4 className="font-semibold text-foreground mb-4">{t("team.expanding")}</h4>
              <div className="space-y-3">
                {areas.map((value, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border">
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