import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Faculdade from "./pages/Faculdade";
import Ministerios from "./pages/Ministerios";
import Programacao from "./pages/Programacao";
import Igrejas from "./pages/Igrejas";
import Galeria from "./pages/Galeria";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/faculdade" element={<Faculdade />} />
            <Route path="/ministerios" element={<Ministerios />} />
            <Route path="/programacao" element={<Programacao />} />
            <Route path="/igrejas" element={<Igrejas />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;