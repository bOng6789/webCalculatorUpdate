// src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/Pages/Homepage";
import AboutPage from "./components/Pages/AboutPage";
import CategoriesPageTemplate from "./components/Pages/CategoriesPageTemplate";

import "./styles/global.css";

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/automotive" element={<CategoriesPageTemplate />} />
    </Routes>
  );
}

export default function App() {
  return (
    <>
    <BrowserRouter>
      <main>
        <AnimatedRoutes />
        {/* <CategoriesPageTemplate /> */}
      </main>
    </BrowserRouter>
    </>
  );
}
