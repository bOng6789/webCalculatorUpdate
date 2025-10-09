import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Opts = { offset?: number };

export default function useScrollAndFocus({ offset = 0 }: Opts = {}) {
  const location = useLocation();
  const navigate = useNavigate();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const targetId = state?.scrollTo;

    let tries = 0;
    const tryScroll = () => {
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
          // Xóa state để F5 không cuộn lại
          navigate(location.pathname, { replace: true });
          return;
        }
      } else {
        // Không có state => cuộn top khi đổi route
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }
      // chờ nội dung mount rồi thử lại vài lần
      if (tries++ < 15) setTimeout(tryScroll, 50);
    };

    requestAnimationFrame(() => {
      tryScroll();
      ref.current?.focus?.(); // accessibility: focus vào main
    });
  }, [location, offset, navigate]);

  return ref;
}
