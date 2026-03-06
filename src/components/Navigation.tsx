import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";
import { Link } from "react-router-dom";
import frostmediaLogo from "@/assets/frostmedia-logo.webp";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Social Media Ads", href: "/services/meta-ads" },
  { label: "Web Design", href: "/work" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { openForm } = useContactForm();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={frostmediaLogo} alt="Frost Media" className="h-[120px] w-auto mt-4" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-slate-300 hover:text-white font-medium transition-colors flex items-center gap-1">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about" className="text-slate-300 hover:text-white font-medium transition-colors">
              About
            </Link>
          </div>

          {/* CTA Button */}
          <button
            onClick={openForm}
            className="hidden md:block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-lg"
          >
            Book a Call
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? null : <Menu className="h-6 w-6" />}
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
            className="fixed inset-0 z-[60] bg-alpine-dark/98 backdrop-blur-2xl md:hidden flex flex-col"
          >
            {/* Close button inside the overlay */}
            <div className="flex items-center justify-between px-4 h-20">
              <img src={frostmediaLogo} alt="Frost Media" className="h-10 w-auto opacity-60" />
              <button
                className="text-white p-2"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="px-8 flex flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col gap-1">
                <Link to="/" onClick={() => setOpen(false)} className="text-2xl font-bold text-white/80 py-4 border-b border-slate-700/50">
                  Home
                </Link>

                {/* Services Expandable */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-2xl font-bold text-white/80 py-4 border-b border-slate-700/50"
                  >
                    Services <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            onClick={() => setOpen(false)}
                            className="block text-lg text-slate-300 hover:text-white py-3 border-b border-slate-800/50"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/about" onClick={() => setOpen(false)} className="text-2xl font-bold text-white/80 py-4 border-b border-slate-700/50">
                  About
                </Link>
              </div>

              <div className="mt-auto pb-10 pt-8">
                <button
                  onClick={() => { setOpen(false); openForm(); }}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Book a Call
                </button>
                <p className="text-xs text-slate-500 mt-4 tracking-widest uppercase text-center">Denver, Colorado</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
