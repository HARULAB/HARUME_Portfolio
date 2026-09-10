import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuOverlay from "./MenuOverlay";
import Breadcrumbs from "./Breadcrumbs";

export default function Header({ breadcrumbReplacements = {}, hidden = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed bottom-0 md:top-0 left-0 right-0 md:bottom-auto z-[1001] p-6 md:p-12 lg:p-24 flex items-center justify-center md:justify-start pointer-events-none">
        {/* Desktop/Mobile Controls */}
        <AnimatePresence>
          {!isMenuOpen && !hidden && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center rounded-full pointer-events-auto h-12 border border-white/50 shadow-[0_12px_32px_color-mix(in_srgb,var(--corporate-color)_44%,transparent)] backdrop-blur-xl"
              style={{ backgroundColor: "color-mix(in srgb, var(--corporate-color) 92%, transparent)" }}
            >
              <motion.button
                onClick={() => setIsMenuOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-full pl-6 pr-3 flex items-center justify-center group relative z-10"
              >
                <div className="flex flex-col gap-1 w-5">
                  <span className="h-[2px] w-full bg-white rounded-full" />
                  <span className="h-[2px] w-full bg-white rounded-full" />
                </div>
              </motion.button>

              {/* Divider Line */}
              <div className="w-[1px] h-4 bg-white/55" />
              
              <div className="pl-3 pr-6 flex items-center h-full">
                <Breadcrumbs replacements={breadcrumbReplacements} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
