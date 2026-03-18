import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Calendar } from "lucide-react";

const ReservationDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-accent text-accent-foreground px-3 py-6 rounded-l-lg font-body font-semibold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          boxShadow: "var(--shadow-warm)",
        }}
      >
        Réserver
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-md z-50 bg-background border-l border-border overflow-y-auto"
              style={{ boxShadow: "-10px 0 40px hsla(25, 22%, 15%, 0.15)" }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Réserver une Table
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Quick call */}
                  <a
                    href="tel:0659144044"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground">Appelez-nous</p>
                      <p className="font-body text-sm text-muted-foreground">06 59 14 40 44</p>
                    </div>
                  </a>

                  {/* Form */}
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Merci ! Nous vous contacterons pour confirmer votre réservation.");
                      setIsOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <p className="font-body font-semibold text-sm text-foreground">Ou réservez en ligne</p>
                    </div>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <input
                      type="tel"
                      placeholder="Téléphone"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <select
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Nombre de personnes</option>
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5">5+ personnes</option>
                    </select>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Service</option>
                      <option value="midi">Midi (12h-14h)</option>
                      <option value="soir">Soir (19h-22h)</option>
                    </select>
                    <textarea
                      placeholder="Message (optionnel)"
                      rows={3}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 rounded-md bg-accent text-accent-foreground font-body font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                      Envoyer la demande
                    </button>
                  </form>

                  {/* Hours */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-display text-lg font-semibold text-foreground mb-3">Horaires</p>
                    <div className="font-body text-sm text-muted-foreground space-y-1">
                      <p>Mar – Jeu : 12h–14h / 19h–22h</p>
                      <p>Vendredi : 12h–14h / 19h–22h30</p>
                      <p>Samedi : 19h–22h30</p>
                      <p className="text-accent font-medium mt-2">Fermé Dimanche & Lundi</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ReservationDrawer;
