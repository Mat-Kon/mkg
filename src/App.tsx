import { lazy, Suspense, type ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";

const AboutPage = lazy(() =>
  import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage })),
);
const ServicesPage = lazy(() =>
  import("@/pages/ServicesPage").then((m) => ({ default: m.ServicesPage })),
);
const WorksPage = lazy(() =>
  import("@/pages/WorksPage").then((m) => ({ default: m.WorksPage })),
);
const WorkDetailPage = lazy(() =>
  import("@/pages/WorkDetailPage").then((m) => ({
    default: m.WorkDetailPage,
  })),
);
const BlogPage = lazy(() =>
  import("@/pages/BlogPage").then((m) => ({ default: m.BlogPage })),
);
const BlogPostPage = lazy(() =>
  import("@/pages/BlogPostPage").then((m) => ({ default: m.BlogPostPage })),
);
const CalculatorPage = lazy(() =>
  import("@/pages/CalculatorPage").then((m) => ({
    default: m.CalculatorPage,
  })),
);
const ContactsPage = lazy(() =>
  import("@/pages/ContactsPage").then((m) => ({ default: m.ContactsPage })),
);
const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);

const Fallback = () => (
  <div
    style={{
      minHeight: "60vh",
      display: "grid",
      placeItems: "center",
      fontSize: "1rem",
      opacity: 0.6,
    }}
    role="status"
    aria-live="polite"
  >
    Загрузка…
  </div>
);

const Lazy = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<Fallback />}>{children}</Suspense>
);

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="about"
          element={
            <Lazy>
              <AboutPage />
            </Lazy>
          }
        />
        <Route
          path="services"
          element={
            <Lazy>
              <ServicesPage />
            </Lazy>
          }
        />
        <Route
          path="works"
          element={
            <Lazy>
              <WorksPage />
            </Lazy>
          }
        />
        <Route
          path="works/:slug"
          element={
            <Lazy>
              <WorkDetailPage />
            </Lazy>
          }
        />
        <Route
          path="blog"
          element={
            <Lazy>
              <BlogPage />
            </Lazy>
          }
        />
        <Route
          path="blog/:slug"
          element={
            <Lazy>
              <BlogPostPage />
            </Lazy>
          }
        />
        <Route
          path="calculator"
          element={
            <Lazy>
              <CalculatorPage />
            </Lazy>
          }
        />
        <Route
          path="contacts"
          element={
            <Lazy>
              <ContactsPage />
            </Lazy>
          }
        />
        <Route
          path="*"
          element={
            <Lazy>
              <NotFoundPage />
            </Lazy>
          }
        />
      </Route>
    </Routes>
  );
};
