import { Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react";

const serviceLinks = [
  { label: "Lead Generation", href: "#services" },
  { label: "Web Design", href: "#services" },
  { label: "AI Automation", href: "#services" },
  { label: "Branding", href: "#services" },
  { label: "SEO & Content", href: "#services" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-slate-dark border-t border-primary-foreground/10">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <span className="font-heading font-bold text-xl">
            <span className="text-primary-foreground">FROST</span>
            <span className="text-primary"> MEDIA</span>
          </span>
          <p className="text-sm text-primary-foreground/50 mt-3">
            AI-powered marketing systems for growth-focused businesses
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="text-primary-foreground/40 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/40 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/40 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">Denver Office</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/50">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" /> Commerce City, Colorado 80022
            </li>
            <li>
              <a href="tel:7202887101" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> (720) 288-7101
              </a>
            </li>
            <li>
              <a href="mailto:hello@frostmedia.co" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 shrink-0" /> hello@frostmedia.co
              </a>
            </li>
            <li className="pt-2 text-primary-foreground/40">English | Español</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-primary-foreground/30">© 2026 Frost Media. Made in Denver, Colorado.</p>
        <div className="flex gap-4 text-xs text-primary-foreground/30">
          <a href="#" className="hover:text-primary-foreground/50">Privacy Policy</a>
          <a href="#" className="hover:text-primary-foreground/50">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
