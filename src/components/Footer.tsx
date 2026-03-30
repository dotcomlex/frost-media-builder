import { Link } from "react-router-dom";
import { useContactForm } from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const { openForm } = useContactForm();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <Link to="/">
              <span className="font-heading font-black text-2xl tracking-tight text-text-on-dark">
                BrainBrite<sup className="text-[0.5em] align-super">®</sup>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              Growth systems for home service businesses. Ads, AI, and websites that actually convert.
            </p>
            <p className="text-xs text-slate-500 mt-3">
              11821 Altura St, Commerce City, CO 80603 · (720) 452-9304 · brainbritellc@gmail.com
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Services</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><Link to="/services/ai-automation" className="hover:text-white transition-colors">AI Automation</Link></li>
                <li><Link to="/services/meta-ads" className="hover:text-white transition-colors">Social Media Ads</Link></li>
                <li><Link to="/work" className="hover:text-white transition-colors">Web Design</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-lg font-heading font-bold text-white">Ready to grow?</h3>
            <p className="text-sm text-slate-400 mt-1">Book a free strategy call and let's build your growth engine.</p>
          </div>
          <Button
            onClick={openForm}
            className="bg-amber hover:bg-amber/90 text-white rounded-lg px-8 py-3 text-sm font-bold shadow-lg transition-all whitespace-nowrap"
          >
            Book a Call →
          </Button>
        </div>
      </div>

      <div className="border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-600">© 2026 BrainBrite LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy.html" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service.html" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
          <p className="text-xs text-slate-600">📍 11821 Altura St, Commerce City, CO 80603</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
