import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import winsoLogo from "@/assets/winso-logo-transparent.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = {
    product: [
      { label: t("footer.features"), href: "#product" },
      { label: t("footer.specifications"), href: "#product" },
      { label: t("footer.installation"), href: "#contact" },
      { label: t("footer.support"), href: "#contact" },
    ],
    company: [
      { label: t("footer.aboutUs"), href: "#about" },
      { label: t("footer.ourTeam"), href: "#team" },
      { label: t("footer.careers"), href: "#contact" },
      { label: t("footer.contact"), href: "#contact" },
    ],
    resources: [
      { label: t("footer.documentation"), href: "#" },
      { label: t("footer.faq"), href: "#" },
      { label: t("footer.blog"), href: "#" },
      { label: t("footer.pressKit"), href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "mailto:project@winso-turbine.com", label: "Email" },
  ];

  return (
    <footer className="bg-foreground py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-cta rounded-lg p-2">
                <img src={winsoLogo} alt="WINSO - Hybrid is simply better" className="h-8 w-auto" />
              </div>
            </a>
            <p className="text-background/60 mb-4">{t("footer.slogan")}</p>
            <p className="text-background/60 mb-6 max-w-sm">{t("footer.description")}</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                  <social.icon className="w-5 h-5 text-background" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t("footer.product")}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-accent transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-accent transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-accent transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/40 text-sm">© {currentYear} {t("footer.copyright")}</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/40 hover:text-background transition-colors">{t("footer.privacy")}</a>
              <a href="#" className="text-background/40 hover:text-background transition-colors">{t("footer.terms")}</a>
              <a href="#" className="text-background/40 hover:text-background transition-colors">{t("footer.cookies")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;