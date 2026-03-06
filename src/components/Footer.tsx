import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logoFrost from "@/assets/logo-frost.png";

const Footer = () => (
  <footer className="bg-background border-t border-border py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <Link to="/">
            <img src={logoFrost} alt="Frost Media" className="h-7 w-auto" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
            AI-powered marketing systems for growth-focused businesses in Colorado.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map((s) => (
              <a key={s.label} href="#" className="w-10 h-10 rounded-lg bg-card hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label={s.label}>
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/services/ai-automation" className="hover:text-foreground transition-colors">AI Automation</Link></li>
            <li><Link to="/services/meta-ads" className="hover:text-foreground transition-colors">Meta Advertising</Link></li>
            <li><Link to="/services/web-design" className="hover:text-foreground transition-colors">Web Design</Link></li>
            <li><Link to="/services/ecommerce" className="hover:text-foreground transition-colors">E-Commerce</Link></li>
            <li><Link to="/services/lead-generation" className="hover:text-foreground transition-colors">Lead Generation</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/process" className="hover:text-foreground transition-colors">Our Process</Link></li>
            <li><Link to="/results" className="hover:text-foreground transition-colors">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Denver Office</h4>
          <div className="space-y-2.5 text-sm text-muted-foreground">
            <p>Commerce City, Colorado 80022</p>
            <a href="tel:+17202887101" className="block hover:text-foreground transition-colors">(720) 288-7101</a>
            <a href="mailto:hello@frostmedia.co" className="block hover:text-foreground transition-colors">hello@frostmedia.co</a>
            <p className="text-xs text-muted-foreground/60 pt-1">Mon-Fri: 9am - 6pm MST</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 Frost Media. Made in Denver, Colorado.</p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
