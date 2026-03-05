import { createContext, useContext, useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

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
      <DialogContent className="sm:max-w-md bg-alpine-dark border-white/10 text-text-on-dark">
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
          <div>
            <Label htmlFor="business" className="text-text-on-dark/70 text-xs">Business Type</Label>
            <Select>
              <SelectTrigger className="bg-white/5 border-white/10 text-text-on-dark mt-1">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home-services">Home Services</SelectItem>
                <SelectItem value="beauty">Beauty & Med Spa</SelectItem>
                <SelectItem value="ecommerce">E-Commerce</SelectItem>
                <SelectItem value="real-estate">Real Estate</SelectItem>
                <SelectItem value="insurance">Insurance</SelectItem>
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