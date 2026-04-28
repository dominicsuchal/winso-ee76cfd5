import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Building2, Sailboat, Caravan, Mountain, Briefcase, Factory, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Audiences = () => {
  const { t } = useLanguage();

  const individualUseCases = [
    { icon: Sailboat, label: t("audiences.ind.use1") },
    { icon: Caravan, label: t("audiences.ind.use2") },
    { icon: Mountain, label: t("audiences.ind.use3") },
  ];

  const businessUseCases = [
    { icon: Building2, label: t("audiences.biz.use1") },
    { icon: Factory, label: t("audiences.biz.use2") },
    { icon: Briefcase, label: t("audiences.biz.use3") },
  ];

  return (
    <section id="audiences" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6 backdrop-blur-sm">
            {t("audiences.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {t("audiences.headline")}{" "}
            <span className="text-accent">{t("audiences.headlineHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("audiences.subheadline")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Individuals */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-accent/15 to-primary/5 rounded-3xl blur-xl" />
            <div className="relative h-full bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-card flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 self-start mb-5">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                  {t("audiences.ind.tag")}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("audiences.ind.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("audiences.ind.desc")}
              </p>

              <div className="space-y-3 mb-8">
                {individualUseCases.map((u) => (
                  <div key={u.label} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                      <u.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{u.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground italic mb-6">
                {t("audiences.ind.note")}
              </p>

              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" asChild className="flex-1">
                  <a href="#contact">
                    {t("audiences.ind.ctaPrimary")}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="flex-1">
                  <a href="#contact">{t("audiences.ind.ctaSecondary")}</a>
                </Button>
              </div>
            </div>
          </div>

          {/* For Businesses */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/15 to-accent/5 rounded-3xl blur-xl" />
            <div className="relative h-full bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-card flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 self-start mb-5">
                <Handshake className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                  {t("audiences.biz.tag")}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("audiences.biz.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("audiences.biz.desc")}
              </p>

              <div className="space-y-3 mb-8">
                {businessUseCases.map((u) => (
                  <div key={u.label} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                      <u.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{u.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground italic mb-6">
                {t("audiences.biz.note")}
              </p>

              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Button variant="default" size="lg" asChild className="flex-1">
                  <a href="#contact">
                    {t("audiences.biz.ctaPrimary")}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="flex-1">
                  <a href="#contact">{t("audiences.biz.ctaSecondary")}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audiences;