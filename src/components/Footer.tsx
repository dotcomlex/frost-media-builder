import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#capabilities" },
  { label: "Systems", href: "#systems" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-[#0A0E1A] border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="font-heading font-bold text-xl">
            <span className="text-white">FROST</span>
            <span className="text-frost-blue"> MEDIA</span>
          </span>
          <p className="text-sm text-slate-400 mt-2">
            Cutting-edge AI systems for Colorado businesses
          </p>
          <p className="text-sm text-slate-500 mt-4 flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Denver, Colorado
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3">
            <li>
              <a href="mailto:hello@frostmedia.co" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@frostmedia.co
              </a>
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-slate-400 hover:text-frost-blue transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-frost-blue transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-slate-600">2026 Frost Media LLC. All rights reserved.</p>
        <p className="text-xs text-slate-600">Built with precision in Denver, Colorado</p>
      </div>
    </div>
  </footer>
);

export default Footer;
