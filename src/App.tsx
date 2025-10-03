// src/App.tsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import useRouteProgress from "./hooks/useRouteProgress";
import useScrollAndFocus from "./hooks/useScrollAndFocus";

import Homepage from "./components/Pages/Homepage";
import AboutPage from "./components/Pages/AboutPage";
import CategoriesPageTemplate from "./components/Pages/CategoriesPageTemplate";
// import ConverterTemplate from "./components/Pages/ConverterTemplate";

import "./styles/global.css";

function AnimatedRoutes() {
  const location = useLocation();
  const mainRef = useScrollAndFocus({ offset: 72 }); // chiều cao header

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <main ref={mainRef} tabIndex={-1} aria-live="polite">
            <Homepage />
          </main>
        }
      />
      <Route
        path="/about"
        element={
          <main ref={mainRef} tabIndex={-1} aria-live="polite">
            <AboutPage />
          </main>
        }
      />
      <Route
        path="/:id"
        element={
          <main ref={mainRef} tabIndex={-1} aria-live="polite">
            <CategoriesPageTemplate />
          </main>
        }
      />
    </Routes>
  );
}

function AppShell() {
  useRouteProgress(); // thanh tiến trình khi đổi route (nprogress)
  return <AnimatedRoutes />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
