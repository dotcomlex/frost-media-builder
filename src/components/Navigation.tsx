import { useState, useEffect } from "react";
import { Menu, Phone, X } from "lucide-react";
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
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ${scrolled ? "shadow-lg shadow-muted/50" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-heading font-bold text-2xl">
          <span className="text-foreground">FROST</span>
          <span className="text-primary"> MEDIA</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2 rounded-lg hover:bg-muted transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
            className="text-xs font-mono-tech text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className={lang === "EN" ? "text-primary font-semibold" : ""}>EN</span>
            {" | "}
            <span className={lang === "ES" ? "text-primary font-semibold" : ""}>ES</span>
          </button>
          <a href="tel:7202887101" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
            <Phone className="h-3.5 w-3.5" />
            (720) 288-7101
          </a>
          <Button className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl px-6 font-semibold shadow-lg shadow-secondary/20 hover:shadow-xl transition-all">
            Let's Talk
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-foreground p-2">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:7202887101" className="text-base text-muted-foreground flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (720) 288-7101
              </a>
              <Button className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl font-semibold w-full mt-4">
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
