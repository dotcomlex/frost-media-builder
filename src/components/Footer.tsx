import { Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => (
  <footer className="bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="font-heading font-bold text-xl">
            <span className="text-foreground">FROST</span>
            <span className="text-primary"> MEDIA</span>
          </span>
          <p className="text-sm text-muted-foreground mt-2">
            Performance marketing that actually performs.
          </p>
          <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Denver, Colorado
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3">
            <li>
              <a href="mailto:alex@frostmedia.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4" /> alex@frostmedia.com
              </a>
            </li>
            <li>
              <a href="tel:7202887101" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Phone className="h-4 w-4" /> 720-288-7101
              </a>
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-muted-foreground/60">© 2026 Frost Media LLC. All rights reserved.</p>
        <p className="text-xs text-muted-foreground/60">Built with 🧠 and ☕ in Denver</p>
      </div>
    </div>
  </footer>
);

export default Footer;
