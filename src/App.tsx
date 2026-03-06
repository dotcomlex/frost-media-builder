import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactFormProvider } from "@/components/ContactFormDialog";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Services from "./pages/Services";
import AIAutomation from "./pages/AIAutomation";
import MetaAds from "./pages/MetaAds";
import IndustryHVAC from "./pages/IndustryHVAC";
import CaseStudies from "./pages/CaseStudies";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ContactFormProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/meta-ads" element={<MetaAds />} />
            <Route path="/industries/hvac" element={<IndustryHVAC />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContactFormProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
