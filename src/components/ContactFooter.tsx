import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const ContactFooter = () => {
  const { lang } = useLang();
  const tr = translations.contact;
  const res = translations.reservation;

  return (
    <footer
      id="contact"
      className="text-primary-foreground py-16 md:py-20"
      style={{ background: "var(--gradient-footer)" }}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            {t(tr.title, lang)}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-lg overflow-hidden h-72 md:h-80"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.5!2d3.876!3d43.614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af0f8e5c5e5d%3A0x0!2s4+Bd+Louis+Blanc%2C+34000+Montpellier!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du restaurant Sefed à Montpellier"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <div className="font-body text-sm opacity-85">
                <p className="font-semibold text-base opacity-100">{t(tr.adresse, lang)}</p>
                <p>4 Bd Louis Blanc, 34000 Montpellier</p>
                <p className="text-xs opacity-70 mt-1">{t(tr.tramLouis, lang)}</p>
                <p className="text-xs opacity-70">{t(tr.tramCorum, lang)}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <div className="font-body text-sm opacity-85">
                <p className="font-semibold text-base opacity-100">{t(tr.telephone, lang)}</p>
                <a href="tel:0659144044" className="hover:text-secondary transition-colors">
                  06 59 14 40 44
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <div className="font-body text-sm opacity-85 space-y-1">
                <p className="font-semibold text-base opacity-100 mb-2">{t(tr.horaires, lang)}</p>
                <p><span className="opacity-70">{t(res.days.lundi, lang)} / {t(res.days.dimanche, lang)} :</span> {t(res.closed, lang)}</p>
                <p><span className="opacity-70">{t(res.days.mardi, lang)} – {t(res.days.jeudi, lang)} :</span> 18h30 – 22h30</p>
                <p><span className="opacity-70">{t(res.days.vendredi, lang)} – {t(res.days.samedi, lang)} :</span> 12h – 15h / 18h30 – 22h30</p>
              </div>
            </div>

            <form
              className="pt-4 space-y-3"
              action="https://formsubmit.co/ethiosefed@gmail.com"
              method="POST"
            >
              <div className="flex items-center gap-2 mb-1">
                <Mail className="w-4 h-4 text-secondary" />
                <p className="font-body font-semibold text-sm">{t(tr.contactUs, lang)}</p>
              </div>
              <input type="hidden" name="_next" value="https://id-preview--7f2e76cd-da76-4f44-a843-a3bffd1b2099.lovable.app/#contact" />
              <input type="hidden" name="_subject" value="Nouveau message depuis le site Sefed" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="email"
                name="email"
                placeholder={t(tr.emailPlaceholder, lang)}
                required
                className="w-full px-4 py-2.5 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <textarea
                placeholder={t(tr.messagePlaceholder, lang)}
                name="message"
                rows={3}
                required
                className="w-full px-4 py-2.5 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-md bg-secondary text-secondary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                {t(tr.send, lang)}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-16 pt-6 border-t border-primary-foreground/15 flex flex-col items-center gap-4">
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/sefedmontpellier/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/sefedrestaurant/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-secondary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <p className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} {t(tr.copyright, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
