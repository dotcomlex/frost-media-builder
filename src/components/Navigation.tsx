import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-alpine-dark/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/20" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-heading font-bold text-2xl">
          <span className="text-text-on-dark">FROST</span>
          <span className="text-ice-blue"> MEDIA</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-on-dark/70 hover:text-text-on-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-6 font-semibold shadow-lg shadow-secondary/30">
            <a href="#contact">Let's Talk</a>
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
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-text-on-dark/70 hover:text-text-on-dark transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl font-semibold w-full mt-4">
                <a href="#contact" onClick={() => setOpen(false)}>Let's Talk</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
