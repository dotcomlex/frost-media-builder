import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { useContactForm } from "@/components/ContactFormDialog";
import { Link } from "react-router-dom";
import logoFrost from "@/assets/logo-frost.png";
import { motion, AnimatePresence } from "framer-motion";

const dropdowns: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "Meta Ads", href: "/services/meta-ads" },
    { label: "Web Design", href: "/services/web-design" },
    { label: "E-Commerce", href: "/services/ecommerce" },
    { label: "Lead Generation", href: "/services/lead-generation" },
  ],
  Industries: [
    { label: "HVAC", href: "/industries/hvac" },
    { label: "Plumbing", href: "/industries/plumbing" },
    { label: "Concrete", href: "/industries/concrete" },
    { label: "Electrical", href: "/industries/electrical" },
    { label: "Roofing", href: "/industries/roofing" },
    { label: "Contractors", href: "/industries/contractors" },
  ],
  About: [
    { label: "Our Story", href: "/about" },
    { label: "Process", href: "/process" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/resources" },
    { label: "FAQ", href: "/#faq" },
  ],
};

const navItems = [
  { label: "Services", hasDropdown: true },
  { label: "Industries", hasDropdown: true },
  { label: "Results", href: "/results", hasDropdown: false },
  { label: "About", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const { openForm } = useContactForm();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logoFrost} alt="Frost Media" className="h-7 md:h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasDropdown ? (
                  <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md hover:bg-muted transition-all">
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform" />
                  </button>
                ) : item.label === "Contact" ? (
                  <button
                    onClick={openForm}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md hover:bg-muted transition-all"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.href!}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md hover:bg-muted transition-all"
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasDropdown && dropdowns[item.label] && (
                  <div className="absolute top-full left-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card/95 backdrop-blur-xl border border-border rounded-lg shadow-2xl p-1.5 min-w-[200px] z-50">
                    {dropdowns[item.label].map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                    {item.label === "Services" && (
                      <Link
                        to="/services"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-primary hover:bg-muted transition-colors mt-1 border-t border-border pt-2"
                      >
                        All Services →
                      </Link>
                    )}
                    {item.label === "Industries" && (
                      <Link
                        to="/industries"
                        className="block px-3 py-2 rounded-md text-sm font-medium text-primary hover:bg-muted transition-colors mt-1 border-t border-border pt-2"
                      >
                        All Industries →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+17202887101" className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              (720) 288-7101
            </a>
            <button
              onClick={openForm}
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground font-semibold px-5 py-2 rounded-lg text-sm hover:shadow-lg transition-all"
            >
              Free Strategy Session
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-foreground p-2 z-[60]" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-background/98 backdrop-blur-2xl lg:hidden flex flex-col"
          >
            <div className="pt-20 px-6 flex flex-col flex-1 overflow-y-auto">
              <div className="mb-6">
                <img src={logoFrost} alt="Frost Media" className="h-8 w-auto opacity-60" />
              </div>

              <div className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full text-xl font-heading font-bold text-foreground/80 py-3.5 border-b border-border transition-colors"
                        >
                          {item.label}
                          <ChevronDown className={`h-5 w-5 transition-transform ${expandedMobile === item.label ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {expandedMobile === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 flex flex-col gap-1">
                                {dropdowns[item.label].map((sub) => (
                                  <Link
                                    key={sub.href}
                                    to={sub.href}
                                    onClick={() => setOpen(false)}
                                    className="text-base text-muted-foreground hover:text-foreground py-2 transition-colors"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.label === "Contact" ? (
                      <button
                        onClick={() => { setOpen(false); openForm(); }}
                        className="block text-xl font-heading font-bold text-secondary hover:text-amber-gold py-3.5 transition-colors text-left w-full"
                      >
                        Contact
                      </button>
                    ) : (
                      <Link
                        to={item.href!}
                        onClick={() => setOpen(false)}
                        className="block text-xl font-heading font-bold text-foreground/80 hover:text-foreground py-3.5 border-b border-border transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a href="tel:+17202887101" className="flex items-center gap-2 text-foreground font-medium">
                  <Phone className="h-4 w-4" /> (720) 288-7101
                </a>
                <button
                  onClick={() => { setOpen(false); openForm(); }}
                  className="bg-secondary text-secondary-foreground font-bold px-6 py-3 rounded-lg text-base w-full"
                >
                  Free Strategy Session
                </button>
              </div>

              <div className="mt-auto pb-10">
                <p className="text-xs text-muted-foreground font-mono-tech tracking-widest uppercase">Denver, Colorado</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
