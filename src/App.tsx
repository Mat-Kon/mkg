import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { WorksPage } from "@/pages/WorksPage";
import { WorkDetailPage } from "@/pages/WorkDetailPage";
import { CalculatorPage } from "@/pages/CalculatorPage";
import { ContactsPage } from "@/pages/ContactsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="works/:slug" element={<WorkDetailPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
