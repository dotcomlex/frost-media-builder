import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-alpine-dark">
      <Navigation />

      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-black text-text-on-dark mb-4">
            Contact Frost Media LLC
          </h1>
          <p className="text-text-on-dark/60 text-lg mb-14 max-w-xl">
            Ready to grow? Reach out and we'll get back to you within 24 hours.
          </p>

          <div className="grid md:grid-cols-5 gap-14">
            {/* Left — Contact info */}
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-text-on-dark">Address</h3>
                  <p className="text-text-on-dark/60 text-sm mt-1 leading-relaxed">
                    11990 Grant St<br />Northglenn, CO 80233
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-text-on-dark">Email</h3>
                  <a href="mailto:hello@frostmedia.io" className="text-text-on-dark/60 text-sm hover:text-secondary transition-colors">
                    hello@frostmedia.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-text-on-dark">Phone</h3>
                  <a href="tel:+17202887101" className="text-text-on-dark/60 text-sm hover:text-secondary transition-colors">
                    (720) 288-7101
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4 bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
                <div>
                  <Label htmlFor="name" className="text-text-on-dark/70 text-xs">Name</Label>
                  <Input
                    id="name"
                    required
                    maxLength={100}
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-text-on-dark placeholder:text-text-on-dark/30 mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-text-on-dark/70 text-xs">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    placeholder="you@company.com"
                    className="bg-white/5 border-white/10 text-text-on-dark placeholder:text-text-on-dark/30 mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-text-on-dark/70 text-xs">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    maxLength={20}
                    placeholder="(555) 000-0000"
                    className="bg-white/5 border-white/10 text-text-on-dark placeholder:text-text-on-dark/30 mt-1"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Checkbox id="sms-marketing" className="mt-0.5 border-white/20 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary" />
                    <label htmlFor="sms-marketing" className="text-text-on-dark/60 text-xs leading-relaxed cursor-pointer">
                      I consent to receive marketing text messages about special offers, discounts, and service updates from Frost Media LLC at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
                    </label>
                  </div>
                  <div className="flex items-start gap-2">
                    <Checkbox id="sms-non-marketing" className="mt-0.5 border-white/20 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary" />
                    <label htmlFor="sms-non-marketing" className="text-text-on-dark/60 text-xs leading-relaxed cursor-pointer">
                      I consent to receive non-marketing text messages from Frost Media LLC about appointment confirmations, reminders, and service updates. Message frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
                    </label>
                  </div>
                </div>

                <p className="text-text-on-dark/40 text-xs leading-relaxed">
                  By submitting this form you agree to our{" "}
                  <Link to="/privacy-policy" className="underline hover:text-text-on-dark/70">Privacy Policy</Link>
                  {" "}and{" "}
                  <Link to="/terms-of-service" className="underline hover:text-text-on-dark/70">Terms of Service</Link>.
                </p>

                <div>
                  <Label htmlFor="business" className="text-text-on-dark/70 text-xs">Business Type</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 text-text-on-dark mt-1">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home-services">Home Services</SelectItem>
                      <SelectItem value="beauty">Beauty & Med Spa</SelectItem>
                      <SelectItem value="ecommerce">E-Commerce / Shopify</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="insurance">Insurance</SelectItem>
                      <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-text-on-dark/70 text-xs">How can we help?</Label>
                  <Textarea
                    id="message"
                    maxLength={1000}
                    placeholder="Tell us about your goals..."
                    className="bg-white/5 border-white/10 text-text-on-dark placeholder:text-text-on-dark/30 mt-1 min-h-[80px]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl font-semibold py-5"
                >
                  {loading ? "Sending..." : "Send Message →"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
