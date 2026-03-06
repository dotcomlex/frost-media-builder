import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import logoFrost from "@/assets/logo-frost.png";
import heroMountains from "@/assets/hero-mountains.png";

const Footer = () => {
  const { openForm } = useContactForm();

  return (
    <footer className="bg-alpine-dark border-t border-white/10 relative overflow-hidden">
      {/* Mountain silhouette background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-[0.04] pointer-events-none">
        <img src={heroMountains} alt="" className="w-full h-full object-cover object-top" aria-hidden="true" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/">
              <img src={logoFrost} alt="Frost Media" className="h-7 w-auto" />
            </Link>
            <p className="text-sm text-text-on-dark/50 mt-3 leading-relaxed">
              Design-obsessed marketing systems for growth-focused businesses.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="text-text-on-dark/40 hover:text-ice-blue transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-text-on-dark/40 hover:text-ice-blue transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-text-on-dark/40 hover:text-ice-blue transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-on-dark uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-text-on-dark/50">
              <li><Link to="/services" className="hover:text-text-on-dark transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-text-on-dark transition-colors">Website Designs</Link></li>
              <li><a href="/#faq" className="hover:text-text-on-dark transition-colors">FAQ</a></li>
              <li><button onClick={openForm} className="hover:text-text-on-dark transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-on-dark uppercase tracking-wider mb-4">Get Started</h4>
            <p className="text-sm text-text-on-dark/50 leading-relaxed mb-4">
              Ready to scale? Book a free strategy call and let's build your growth engine.
            </p>
            <Button
              onClick={openForm}
              className="bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-lg px-6 py-2.5 text-sm font-bold shadow-lg shadow-secondary/20 hover:scale-105 transition-all"
            >
              Book a Call →
            </Button>
            <p className="text-[11px] text-text-on-dark/30 mt-4 font-mono-tech tracking-wide">
              📍 Denver, Colorado
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 text-center">
          <p className="text-xs text-text-on-dark/30">© 2026 Frost Media. Denver, Colorado.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
