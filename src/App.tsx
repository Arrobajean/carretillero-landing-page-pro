import { lazy, Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CookieModal from "./components/layout/CookieModal";
import ScrollToTop from "./components/layout/ScrollToTop";

// Every page except the home is loaded on demand to keep the first load small.
const CourseDetail = lazy(() => import("./pages/CourseDetail"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Legal Pages
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/legal/Terms"));
const Cookies = lazy(() => import("./pages/legal/Cookies"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense
          fallback={<LinearProgress sx={{ position: "fixed", top: 0, left: 0, right: 0 }} />}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cursos" element={<CoursesPage />} />
            <Route path="/cursos/:slug" element={<CourseDetail />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos-condiciones" element={<Terms />} />
            <Route path="/politica-cookies" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* ✅ MOVIDO DENTRO DEL ROUTER */}
        <CookieModal />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
