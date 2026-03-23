import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, CheckCircle, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({ title: t("contact.thankYou"), description: t("contact.thankYouMsg") });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6 backdrop-blur-sm">
              {t("contact.badge")}
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {t("contact.headline")}{" "}
              <span className="text-accent">{t("contact.headlineHighlight")}</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{t("contact.subheadline")}</p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t("contact.person")}</h4>
                  <span className="text-muted-foreground">Marian Suchal</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t("contact.emailUs")}</h4>
                  <a href="mailto:project@winso-turbine.com" className="text-muted-foreground hover:text-accent transition-colors">
                    project@winso-turbine.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t("contact.callUs")}</h4>
                  <a href="tel:+421902900115" className="text-muted-foreground hover:text-accent transition-colors">
                    +421 902 900 115
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/5 rounded-3xl blur-xl" />
            <div className="relative bg-card backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-border shadow-card">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t("contact.thankYou")}</h3>
                  <p className="text-muted-foreground mb-6">{t("contact.thankYouMsg")}</p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)} className="border-border text-foreground hover:bg-muted">
                    {t("contact.sendAnother")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">{t("contact.name")}</label>
                      <Input id="name" name="name" placeholder={t("contact.namePlaceholder")} required className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">{t("contact.email")}</label>
                      <Input id="email" name="email" type="email" placeholder={t("contact.emailPlaceholder")} required className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">{t("contact.subject")}</label>
                    <Input id="subject" name="subject" placeholder={t("contact.subjectPlaceholder")} required className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">{t("contact.message")}</label>
                    <Textarea id="message" name="message" placeholder={t("contact.messagePlaceholder")} rows={5} required className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground resize-none" />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        {t("contact.sending")}
                      </>
                    ) : (
                      <>
                        {t("contact.sendMessage")}
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;