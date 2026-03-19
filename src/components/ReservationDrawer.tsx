import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Clock, Phone } from "lucide-react";

interface ReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationDrawer = ({ isOpen, onClose }: ReservationDrawerProps) => {
  return (
    <>
      {/* Floating button (visible when drawer is closed) */}
      {!isOpen && (
        <button
          onClick={() => {
            // dispatch custom event so Index can open
            window.dispatchEvent(new CustomEvent("open-reservation"));
          }}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-accent text-accent-foreground px-3 py-6 rounded-l-lg font-body font-semibold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            boxShadow: "var(--shadow-warm)",
          }}
        >
          Réserver
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/40"
              onClick={onClose}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-lg z-50 bg-background border-l border-border overflow-y-auto"
              style={{ boxShadow: "-10px 0 40px hsla(25, 22%, 15%, 0.15)" }}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-10">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Réserver une Table
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-8">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Réservez votre table pour une expérience culinaire éthiopienne authentique.
                    Cliquez ci-dessous pour choisir votre créneau en ligne :
                  </p>

                  <a
                    href="https://reservation.dish.co/widget/hydra-cf6ae8f0-cb26-11ee-94a7-ffdf9f0fdcb3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-md bg-accent text-accent-foreground font-body font-semibold text-base uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Réserver en ligne
                  </a>

                  {/* Hours */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-secondary" />
                      <p className="font-display text-lg font-semibold text-foreground">Horaires</p>
                    </div>
                    <div className="font-body text-sm text-muted-foreground space-y-2">
                      {[
                        { day: "Lundi", hours: "Fermé" },
                        { day: "Mardi", hours: "18h30 – 22h30" },
                        { day: "Mercredi", hours: "18h30 – 22h30" },
                        { day: "Jeudi", hours: "18h30 – 22h30" },
                        { day: "Vendredi", hours: "12h – 15h / 18h30 – 22h30" },
                        { day: "Samedi", hours: "12h – 15h / 18h30 – 22h30" },
                        { day: "Dimanche", hours: "Fermé" },
                      ].map(({ day, hours }) => (
                        <div
                          key={day}
                          className={`flex justify-between items-center py-2 px-4 rounded-md ${
                            hours === "Fermé" ? "opacity-50" : "bg-muted/50"
                          }`}
                        >
                          <span className="font-medium text-foreground">{day}</span>
                          <span className={hours === "Fermé" ? "text-accent font-medium" : ""}>
                            {hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Phone className="w-5 h-5 text-secondary" />
                      <p className="font-display text-lg font-semibold text-foreground">Par téléphone</p>
                    </div>
                    <a
                      href="tel:0659144044"
                      className="font-body text-primary font-medium hover:underline"
                    >
                      06 59 14 40 44
                    </a>
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
