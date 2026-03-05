import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useContactForm } from "@/components/ContactFormDialog";
import { Link, useLocation } from "react-router-dom";
import logoFrost from "@/assets/logo-frost.png";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/#about" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openForm } = useContactForm();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || !isHome ? "bg-alpine-dark/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src={logoFrost} alt="Frost Media" className="h-7 md:h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-text-on-dark/70 hover:text-text-on-dark transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-on-dark/70 hover:text-text-on-dark transition-colors"
              >
                {link.label}
              </a>
            )
          ))}
          <button
            onClick={openForm}
            className="text-sm font-medium text-text-on-dark/70 hover:text-text-on-dark transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="hidden md:block">
          <Button onClick={openForm} className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-6 font-semibold shadow-lg shadow-secondary/30">
            Let's Talk
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-text-on-dark p-2">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-alpine-dark border-white/10">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-text-on-dark/70 hover:text-text-on-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-text-on-dark/70 hover:text-text-on-dark transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <button
                onClick={() => { setOpen(false); openForm(); }}
                className="text-lg font-medium text-text-on-dark/70 hover:text-text-on-dark transition-colors text-left"
              >
                Contact
              </button>
              <Button onClick={() => { setOpen(false); openForm(); }} className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl font-semibold w-full mt-4">
                Let's Talk
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;