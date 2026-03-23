import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import winsoLogo from "@/assets/winso-logo-transparent.png";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero animate-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float delay-300" />
      </div>

      {/* Floating Logo with Green Glow */}
      <div className="absolute right-10 lg:right-32 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative">
          {/* Green glow effect rings */}
          <div className="absolute inset-0 w-96 h-96 rounded-full bg-cta/10 blur-3xl animate-pulse" />
          <div className="absolute inset-4 w-88 h-88 rounded-full bg-cta/15 blur-2xl" />
          
          {/* Rotating border rings */}
          <div className="w-96 h-96 rounded-full border-2 border-cta/30 flex items-center justify-center animate-spin-slow">
            <div className="absolute w-80 h-80 rounded-full border border-cta/20" />
            <div className="absolute w-64 h-64 rounded-full border border-cta/30" />
          </div>
          
          {/* Logo in center with green glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8">
            <img 
              src={winsoLogo} 
              alt="WINSO" 
              className="h-40 w-40 object-contain drop-shadow-[0_0_35px_hsl(var(--cta))] drop-shadow-[0_0_70px_hsl(var(--cta)/0.5)]"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto lg:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-up mx-auto lg:mx-0 mt-24 lg:mt-0 relative z-20">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              {t("hero.badge")}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100 text-center lg:text-left">
            {t("hero.headline")}{" "}
            <span className="relative text-primary">
              {t("hero.headlineHighlight")}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 2 100 2 150 6C200 10 250 10 298 6"
                  stroke="hsl(var(--accent))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-up delay-200">
            {t("hero.subheadline")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button variant="cta" size="xl" asChild>
              <a href="#product">
                {t("hero.learnMore")}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="xl" asChild className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              <a href="#contact">{t("hero.contactUs")}</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border animate-fade-up delay-400">
            <div className="flex flex-wrap gap-8 text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">5+</span>
                </div>
                <span className="text-sm">{t("hero.yearsExp")}<br />{t("hero.experience")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">100%</span>
                </div>
                <span className="text-sm">{t("hero.cleanEnergy")}<br />{t("hero.energy")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">EU</span>
                </div>
                <span className="text-sm">{t("hero.designed")}<br />{t("hero.manufactured")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;