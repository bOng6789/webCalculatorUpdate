// src/hooks/useRouteProgress.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, trickleSpeed: 120 });

export default function useRouteProgress() {
  const location = useLocation();
  useEffect(() => {
    NProgress.start();
    const t = setTimeout(() => NProgress.done(), 400); // tránh nháy
    return () => clearTimeout(t);
  }, [location]);
}
