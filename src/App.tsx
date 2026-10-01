import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { LangSync } from "@/i18n/LangSync";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { WorksPage } from "@/pages/WorksPage";
import { WorkDetailPage } from "@/pages/WorkDetailPage";
import { BlogPage } from "@/pages/BlogPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { CalculatorPage } from "@/pages/CalculatorPage";
import { ContactsPage } from "@/pages/ContactsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const App = () => {
  return (
    <Routes>
      {/* Редирект с корня на язык по умолчанию */}
      <Route path="/" element={<Navigate to="/ru" replace />} />

      {/* Роутинг с языковым префиксом */}
      <Route
        path=":lang"
        element={
          <>
            <LangSync />
            <Layout />
          </>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="works/:slug" element={<WorkDetailPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Любой другой путь (без lang) — тоже редирект на /ru */}
      <Route path="*" element={<Navigate to="/ru" replace />} />
    </Routes>
  );
};
