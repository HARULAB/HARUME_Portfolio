import { motion, AnimatePresence } from 'framer-motion';
import { X, Twitter, Instagram, Github } from 'lucide-react';
import { withBase } from '../utils/paths';

const menuItems = [
  { href: withBase("/"), label: "HOME" },
  { href: withBase("/works"), label: "WORKS" },
  { href: withBase("/price"), label: "PRICE" },
  { href: withBase("/about"), label: "ABOUT" },
];

const MenuOverlay = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[999] bg-black/10 cursor-pointer"
          />

          {/* Premium iOS-friendly Card */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(61,207,212,0.96)] w-full max-h-[92dvh] rounded-b-[48px] overflow-hidden flex flex-col border-b border-white/10"
            style={{ 
              paddingTop: 'calc(env(safe-area-inset-top) + 2rem)',
              paddingBottom: '3.5rem',
              paddingLeft: '2.5rem',
              paddingRight: '2.5rem'
            }}
          >
            {/* Header Area inside Overlay */}
            <div className="flex justify-end mb-6 md:mb-12">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex items-center justify-center text-white bg-white/10 rounded-full border border-white/20"
                aria-label="Close menu"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Main Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center items-start">
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.1 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="group relative inline-block text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter !text-white hover:opacity-60 transition-all active:scale-95 active:opacity-40 font-display uppercase"
                      style={{ lineHeight: '1' }}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Bottom Section - Only SNS Icons, narrowed spacing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex justify-start w-full border-t border-white/10 pt-6"
            >
              <div className="flex gap-2 items-center text-white">
                <a 
                  href="https://x.com/Harulablab"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 hover:opacity-60 transition-all active:scale-90"
                  aria-label="Twitter / X"
                >
                  <Twitter size={22} strokeWidth={2.5} />
                </a>
                <a 
                  href="https://www.instagram.com/harumememe/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 hover:opacity-60 transition-all active:scale-90"
                  aria-label="Instagram"
                >
                  <Instagram size={22} strokeWidth={2.5} />
                </a>
                <a 
                  href="https://github.com/HARULAB"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 hover:opacity-60 transition-all active:scale-90"
                  aria-label="GitHub"
                >
                  <Github size={22} strokeWidth={2.5} />
                </a>
              </div>
            </motion.div>

            {/* Aesthetic Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
