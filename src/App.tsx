
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import CustomOrders from "./pages/CustomOrders";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Root route redirects to language-specific routes */}
            <Route path="/" element={<Navigate to="/en" replace />} />
            
            {/* English routes */}
            <Route path="/en" element={<Index />} />
            <Route path="/en/custom-orders" element={<CustomOrders />} />
            <Route path="/en/shop" element={<Shop />} />
            <Route path="/en/product/:productId" element={<ProductDetail />} />
            
            {/* Arabic routes */}
            <Route path="/ar" element={<Index />} />
            <Route path="/ar/custom-orders" element={<CustomOrders />} />
            <Route path="/ar/shop" element={<Shop />} />
            <Route path="/ar/product/:productId" element={<ProductDetail />} />
            
            {/* Legacy non-prefixed routes (redirect to language based on user preference) */}
            <Route path="/custom-orders" element={<CustomOrders />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            
            {/* Catch-all for 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
