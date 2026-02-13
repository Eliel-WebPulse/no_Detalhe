import { Suspense, lazy, useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { queryClient } from "@/lib/query-client";
import WhatsAppButton from "./components/WhatsAppButton";
import SlowConnectionBanner from "./components/SlowConnectionBanner";

// Lazy loading para componentes
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Componente de loading
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => {
  const [showSlowConnectionBanner, setShowSlowConnectionBanner] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showSlowConnectionBanner && (
          <SlowConnectionBanner onDismiss={() => setShowSlowConnectionBanner(false)} />
        )}
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
