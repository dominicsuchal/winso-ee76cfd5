import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-primary-foreground/10 rounded-lg p-1">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          language === "en"
            ? "bg-cta text-cta-foreground"
            : "text-primary-foreground/70 hover:text-primary-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("de")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          language === "de"
            ? "bg-cta text-cta-foreground"
            : "text-primary-foreground/70 hover:text-primary-foreground"
        }`}
      >
        DE
      </button>
      <button
        onClick={() => setLanguage("sk")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          language === "sk"
            ? "bg-cta text-cta-foreground"
            : "text-primary-foreground/70 hover:text-primary-foreground"
        }`}
      >
        SK
      </button>
    </div>
  );
};

export default LanguageToggle;