import { Globe, Home, Sailboat, TreePine, Tent, Truck, Sun, Wind, Cpu, MousePointerClick } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import mobileHomeImg from "@/assets/app-mobile-home.jpeg";
import boatYachtImg from "@/assets/app-boat-yacht.jpeg";

const About = () => {
  const { t } = useLanguage();
  const [activeApp, setActiveApp] = useState<number | null>(null);

  const applications = [
    { icon: Home, label: t("about.app1"), desc: t("about.appDesc1"), image: null as string | null },
    { icon: TreePine, label: t("about.app2"), desc: t("about.appDesc2"), image: null as string | null },
    { icon: Globe, label: t("about.app3"), desc: t("about.appDesc3"), image: null as string | null },
    { icon: Tent, label: t("about.app4"), desc: t("about.appDesc4"), image: null as string | null },
    { icon: Truck, label: t("about.app5"), desc: t("about.appDesc5"), image: mobileHomeImg },
    { icon: Sailboat, label: t("about.app6"), desc: t("about.appDesc6"), image: boatYachtImg },
  ];

  const features = [
    { icon: Sun, label: t("about.feature1") },
    { icon: Wind, label: t("about.feature2") },
    { icon: Cpu, label: t("about.feature3") },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6 backdrop-blur-sm">
              {t("about.badge")}
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {t("about.headline")}{" "}
              <span className="text-accent">{t("about.headlineHighlight")}</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("about.p2")}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {t("about.p3")}
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications Grid */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/5 rounded-3xl blur-xl" />
            <div className="relative bg-card backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-border shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {t("about.appTitle")}
              </h3>
              <div className="flex items-center gap-2 mb-5 px-4 py-2.5 rounded-xl bg-accent/10 border border-accent/20">
                <MousePointerClick className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {t("about.appHint")}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {applications.map((app, index) => (
                  <div
                    key={app.label}
                    className={`group p-4 rounded-2xl transition-all duration-300 cursor-pointer border ${
                      activeApp === index
                        ? "bg-accent/10 border-accent/30 shadow-md"
                        : "bg-muted/50 hover:bg-accent/10 border-border"
                    }`}
                    onClick={() => setActiveApp(activeApp === index ? null : index)}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      activeApp === index
                        ? "bg-accent scale-105"
                        : "bg-accent/15 group-hover:bg-accent group-hover:scale-105"
                    }`}>
                      <app.icon className={`w-6 h-6 transition-colors ${
                        activeApp === index
                          ? "text-accent-foreground"
                          : "text-accent group-hover:text-accent-foreground"
                      }`} />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {app.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description panel */}
              {activeApp !== null && (
                <div className="mt-6 p-5 rounded-2xl bg-accent/5 border border-accent/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {applications[activeApp].image && (
                      <img
                        src={applications[activeApp].image as string}
                        alt={applications[activeApp].label}
                        className="w-32 sm:w-36 h-auto object-contain rounded-xl shrink-0"
                        loading="lazy"
                      />
                    )}
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      {(() => {
                        const ActiveIcon = applications[activeApp].icon;
                        return <ActiveIcon className="w-5 h-5 text-accent mt-0.5 shrink-0" />;
                      })()}
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {applications[activeApp].label}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {applications[activeApp].desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
