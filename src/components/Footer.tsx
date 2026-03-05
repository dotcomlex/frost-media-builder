import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useContactForm } from "@/components/ContactFormDialog";
import logoFrost from "@/assets/logo-frost.png";

const Footer = () => {
  const { openForm } = useContactForm();

  return (
    <footer className="bg-alpine-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <Link to="/">
              <img src={logoFrost} alt="Frost Media" className="h-7 w-auto" />
            </Link>
            <p className="text-sm text-text-on-dark/50 mt-3">Design-obsessed marketing systems for growth-focused businesses.</p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-text-on-dark/40 hover:text-ice-blue transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-text-on-dark/40 hover:text-ice-blue transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-text-on-dark/40 hover:text-ice-blue transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-on-dark uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-text-on-dark/50">
              <li><Link to="/services" className="hover:text-text-on-dark transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-text-on-dark transition-colors">Website Designs</Link></li>
              <li><a href="/#faq" className="hover:text-text-on-dark transition-colors">FAQ</a></li>
              <li><button onClick={openForm} className="hover:text-text-on-dark transition-colors">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-10 text-center">
          <p className="text-xs text-text-on-dark/30">© 2026 Frost Media. Denver, Colorado.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
