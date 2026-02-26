import { Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Systems", href: "#systems" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="font-heading font-bold text-xl">
            <span className="text-background">FROST</span>
            <span className="text-primary"> MEDIA</span>
          </span>
          <p className="text-sm text-background/60 mt-2">
            AI-powered lead generation for Denver contractors.
          </p>
          <p className="text-sm text-background/50 mt-4 flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Commerce City, Colorado
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Contact</h4>
          <ul className="space-y-3">
            <li>
              <a href="mailto:alex@frostmedia.com" className="text-sm text-background/60 hover:text-background transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4" /> alex@frostmedia.com
              </a>
            </li>
            <li>
              <a href="tel:7202887101" className="text-sm text-background/60 hover:text-background transition-colors flex items-center gap-2">
                <Phone className="h-4 w-4" /> 720-288-7101
              </a>
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-background/40">© 2026 Frost Media LLC. All rights reserved.</p>
        <p className="text-xs text-background/40">Built with precision in Denver</p>
      </div>
    </div>
  </footer>
);

export default Footer;
