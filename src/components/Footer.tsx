import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
import logoFrost from "@/assets/logo-frost.png";

const Footer = () => {
  const { openForm } = useContactForm();

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/">
              <img src={logoFrost} alt="Frost Media" className="h-7 w-auto" />
            </Link>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              AI-powered marketing systems for home service contractors.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/services/ai-automation" className="hover:text-white transition-colors">AI Automation</Link></li>
              <li><Link to="/services/meta-ads" className="hover:text-white transition-colors">Meta Ads</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Web Design</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><button onClick={openForm} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get Started</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Ready to scale? Book a free strategy call and let's build your growth engine.
            </p>
            <Button
              onClick={openForm}
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-lg px-6 py-2.5 text-sm font-bold shadow-lg transition-all"
            >
              Book a Call →
            </Button>
            <p className="text-xs text-slate-500 mt-4 tracking-wide">
              📍 Denver, Colorado
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 mt-12 text-center">
          <p className="text-xs text-slate-500">© 2026 Frost Media. Denver, Colorado.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
