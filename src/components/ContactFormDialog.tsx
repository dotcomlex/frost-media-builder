import { createContext, useContext, useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface ContactFormContextType {
  openForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextType>({ openForm: () => {} });

export const useContactForm = () => useContext(ContactFormContext);

export const ContactFormProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <ContactFormContext.Provider value={{ openForm: () => setOpen(true) }}>
      {children}
      <ContactFormDialog open={open} onOpenChange={setOpen} />
    </ContactFormContext.Provider>
  );
};

const ContactFormDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-alpine-dark border-white/10 text-text-on-dark max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-text-on-dark">Let's Talk Growth</DialogTitle>
          <p className="text-text-on-dark/50 text-sm">Tell us about your business and we'll reach out within 24 hours.</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
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

          {/* SMS Consent Checkboxes */}
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
            <Link to="/privacy-policy" className="underline hover:text-text-on-dark/70" onClick={() => onOpenChange(false)}>
              Privacy Policy
            </Link>
            {" "}and{" "}
            <Link to="/terms-of-service" className="underline hover:text-text-on-dark/70" onClick={() => onOpenChange(false)}>
              Terms of Service
            </Link>.
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
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
