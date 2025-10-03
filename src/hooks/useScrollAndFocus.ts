// src/hooks/file useScrollAndFocus.ts
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

type Opts = { offset?: number };

export default function useScrollAndFocus(opts: Opts = {}) {
  const { offset = 0 } = opts;
  const location = useLocation();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Nếu có hash -> cuộn tới element tương ứng, ngược lại cuộn top
    const id = location.hash?.replace("#", "");
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    // Đặt focus vào main để SR/keyboard biết nội dung mới
    // dùng rAF để chờ DOM ổn định sau khi route/motion mount
    requestAnimationFrame(() => {
      ref.current?.focus?.();
    });
  }, [location, offset]);

  return ref;
}
