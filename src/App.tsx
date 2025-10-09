// src/App.tsx

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import useRouteProgress from "./hooks/useRouteProgress";
import useScrollAndFocus from "./hooks/useScrollAndFocus";

import Homepage from "./components/Pages/Homepage";
import AboutPage from "./components/Pages/AboutPage";
import CategoriesPageTemplate from "./components/Pages/CategoriesPageTemplate";
import ConverterTemplate from "./components/Pages/ConverterTemplate";

import "./styles/global.css";
// import React from "react";

// (tùy chọn) 404 đơn giản
function NotFound() {
  return (
    <main style={{ padding: "48px 0", textAlign: "center" }}>
      <h1 tabIndex={-1}>404 — Not Found</h1>
      <p>Trang bạn tìm không tồn tại.</p>
    </main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const mainRef = useScrollAndFocus({ offset: 72 }); // đặt đúng chiều cao header

  return (
    // Lưu ý: React Router v6 đã tự “rank” route — route cụ thể hơn sẽ được ưu tiên.
    <Routes location={location} key={location.pathname}>
      {/* Trang chủ */}
      <Route
        path="/"
        element={
          <main ref={mainRef} tabIndex={-1} aria-live="polite">
            <Homepage />
          </main>
        }
      />

      {/* About */}
      <Route
        path="/about"
        element={
          <main ref={mainRef} tabIndex={-1} aria-live="polite">
            <AboutPage />
          </main>
        }
      />

      {/* Converter chi tiết: /categorySlug/toolSlug */}
      <Route
        path="/:id/:subId"
        element={
          <main ref={mainRef} tabIndex={-1} aria-live="polite">
            <ConverterTemplate />
          </main>
        }
      />

      {/* Category trang tổng: /categorySlug */}
      <Route
        path="/:id"
        element={
          <main ref={mainRef} tabIndex={-1} aria-live="polite">
            <CategoriesPageTemplate />
          </main>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function AppShell() {
  useRouteProgress(); // nprogress khi đổi route
  return <AnimatedRoutes />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
