import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import winsoTurbineIcon from "@/assets/winso-turbine-icon.png";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { label: t("nav.about"), href: "#about" },
  { label: t("nav.product"), href: "#product" },
  { label: t("nav.whyWinso"), href: "#why-winso" },
  { label: t("nav.team"), href: "#team" }];


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ?
      "bg-card/95 backdrop-blur-lg shadow-soft border-b border-border" :
      "bg-transparent"}`
      }>
      
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo - left */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="rounded-xl p-2 flex items-center justify-center bg-accent">
              <img
                src={winsoTurbineIcon}
                alt="WINSO - Hybrid is simply better"
                className="h-10 w-10 object-contain" />
              
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.label}
              href={link.href}
              className="font-medium transition-colors duration-200 text-foreground/70 hover:text-accent">
              
                {link.label}
              </a>
            )}
          </div>

          {/* CTA Button & Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <Button variant="cta" size="default" asChild>
              <a href="#contact">{t("nav.contact")}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">
            
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen &&
        <div className="md:hidden absolute top-20 left-0 right-0 bg-card/95 backdrop-blur-lg shadow-card animate-fade-in border-b border-border">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <a
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-accent font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              
                  {link.label}
                </a>
            )}
              <div className="py-2">
                <LanguageToggle />
              </div>
              <Button variant="cta" className="w-full mt-2" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  {t("nav.contact")}
                </a>
              </Button>
            </div>
          </div>
        }
      </div>
    </header>);

};

export default Header;