import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import FestivalDetails from "./pages/FestivalDetails";
import NextFestival from "./pages/NextFestival";
import FestivalStats from "./pages/FestivalStats";
import PersonalCabinet from "./pages/PersonalCabinet";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/festival-details" element={
              <ProtectedRoute>
                <FestivalDetails />
              </ProtectedRoute>
            } />
            <Route path="/next-festival" element={
              <ProtectedRoute>
                <NextFestival />
              </ProtectedRoute>
            } />
            <Route path="/festival-stats" element={
              <ProtectedRoute>
                <FestivalStats />
              </ProtectedRoute>
            } />
            <Route path="/cabinet" element={
              <ProtectedRoute>
                <PersonalCabinet />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
