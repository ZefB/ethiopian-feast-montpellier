import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

const ContactFooter = () => {
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
            Nous Trouver
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
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

          {/* Info + Contact form */}
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
                <p className="font-semibold text-base opacity-100">Adresse</p>
                <p>4 Bd Louis Blanc, 34000 Montpellier</p>
                <p className="text-xs opacity-70 mt-1">
                  Entre les stations Corum et Louis-Blanc (Ligne 1 & 4)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <div className="font-body text-sm opacity-85">
                <p className="font-semibold text-base opacity-100">Téléphone</p>
                <a href="tel:0659144044" className="hover:text-secondary transition-colors">
                  06 59 14 40 44
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <div className="font-body text-sm opacity-85">
                <p className="font-semibold text-base opacity-100">Horaires</p>
                <p>Mar – Jeu : 12h–14h / 19h–22h</p>
                <p>Vendredi : 12h–14h / 19h–22h30</p>
                <p>Samedi : 19h–22h30</p>
              </div>
            </div>

            {/* Simple contact form */}
            <form
              className="pt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Merci pour votre message ! Nous vous répondrons rapidement.");
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Mail className="w-4 h-4 text-secondary" />
                <p className="font-body font-semibold text-sm">Contactez-nous</p>
              </div>
              <input
                type="email"
                placeholder="Votre email"
                required
                className="w-full px-4 py-2.5 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
              <textarea
                placeholder="Votre message"
                rows={3}
                required
                className="w-full px-4 py-2.5 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-md bg-secondary text-secondary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-primary-foreground/15 text-center font-body text-xs opacity-50">
          <p>© {new Date().getFullYear()} Sefed Restaurant — Cuisine Éthiopienne Authentique à Montpellier</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
