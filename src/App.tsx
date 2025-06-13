
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";

import NotreHistoire from "./pages/NotreHistoire";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/notre-histoire" element={<NotreHistoire />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
