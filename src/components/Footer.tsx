import { Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-alpine-dark border-t border-white/10">
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <span className="font-heading font-bold text-xl">
            <span className="text-text-on-dark">FROST</span>
            <span className="text-ice-blue"> MEDIA</span>
          </span>
          <p className="text-sm text-text-on-dark/50 mt-3">AI-powered marketing systems for growth-focused businesses.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-text-on-dark/40 hover:text-ice-blue transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-text-on-dark/40 hover:text-ice-blue transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-text-on-dark/40 hover:text-ice-blue transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-text-on-dark uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-text-on-dark/50">
            <li><a href="#work" className="hover:text-text-on-dark transition-colors">Work</a></li>
            <li><a href="#about" className="hover:text-text-on-dark transition-colors">About</a></li>
            <li><a href="#faq" className="hover:text-text-on-dark transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-text-on-dark transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 mt-10 text-center">
        <p className="text-xs text-text-on-dark/30">© 2026 Frost Media. Denver, Colorado.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
