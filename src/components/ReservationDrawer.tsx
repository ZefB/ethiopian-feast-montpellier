import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

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
                  <p className="font-body text-sm text-muted-foreground">
                    Réservez votre table directement en ligne via notre partenaire Dish :
                  </p>

                  <a
                    href="https://reservation.dish.co/widget/hydra-cf6ae8f0-cb26-11ee-94a7-ffdf9f0fdcb3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-md bg-accent text-accent-foreground font-body font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Réserver en ligne
                  </a>

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
