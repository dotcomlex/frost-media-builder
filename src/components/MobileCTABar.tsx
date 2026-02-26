import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileCTABar = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-3 flex gap-3 z-40 shadow-2xl md:hidden">
    <Button
      variant="outline"
      className="flex-1 rounded-xl font-semibold"
      asChild
    >
      <a href="tel:7202887101" className="flex items-center justify-center gap-2">
        <Phone className="h-4 w-4" />
        Call
      </a>
    </Button>
    <Button className="flex-1 bg-secondary hover:bg-amber-gold text-secondary-foreground rounded-xl font-semibold">
      Let's Talk
    </Button>
  </div>
);

export default MobileCTABar;
