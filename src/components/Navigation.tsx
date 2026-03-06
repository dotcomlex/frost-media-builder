import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";
import { Link, useLocation } from "react-router-dom";
import logoFrost from "@/assets/logo-frost.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Website Designs", href: "/work" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { openForm } = useContactForm();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logoFrost} alt="Frost Media" className="h-7 md:h-8 w-auto" />
          </Link>

          {/* Glassmorphic pill nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.06] backdrop-blur-md border border-white/[0.1] rounded-full px-1.5 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-text-on-dark/70 hover:text-text-on-dark hover:bg-white/[0.08] rounded-full px-4 py-1.5 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={openForm}
              className="text-sm font-semibold text-primary-foreground bg-primary hover:bg-ice-blue rounded-full px-4 py-1.5 transition-all ml-0.5"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-text-on-dark p-2 z-[60]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-alpine-dark/98 backdrop-blur-2xl md:hidden flex flex-col"
          >
            <div className="pt-20 px-8 flex flex-col flex-1">
              <div className="mb-8">
                <img src={logoFrost} alt="Frost Media" className="h-8 w-auto opacity-60" />
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-2xl font-heading font-bold text-text-on-dark/80 hover:text-text-on-dark py-4 border-b border-white/[0.06] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.26 }}
                >
                  <button
                    onClick={() => { setOpen(false); openForm(); }}
                    className="block text-2xl font-heading font-bold text-secondary hover:text-amber-gold py-4 transition-colors text-left w-full"
                  >
                    Contact
                  </button>
                </motion.div>
              </div>

              <div className="mt-auto pb-10">
                <p className="text-xs text-text-on-dark/30 font-mono-tech tracking-widest uppercase">Denver, Colorado</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
