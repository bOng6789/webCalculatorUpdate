// src/components/Header/Header.tsx
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const location = useLocation();
  const HEADER_OFFSET = 72;

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const onSamePageScroll =
    (id: "top" | "categories" | "features" | "contact") =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (location.pathname === "/") {
        e.preventDefault(); // không đổi route, chỉ cuộn
        scrollToId(id);
      }
    };

  return (
    <header className={styles.header}>
      <nav className={styles.container} aria-label="Primary navigation">
        {/* Logo -> về "/" và cuộn lên đầu */}
        <Link
          to="/"
          state={{ scrollTo: "top" }}
          className={styles.logo}
          onClick={onSamePageScroll("top")}
        >
          <i className="fas fa-calculator" aria-hidden="true"></i>
          <img src="/calculator.png" alt="ConvertPro" className={styles.logoImg} width={28} height={28} />
          <span className={styles.brand}>ConvertPro</span>
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link to="/" state={{ scrollTo: "top" }} onClick={onSamePageScroll("top")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" state={{ scrollTo: "categories" }} onClick={onSamePageScroll("categories")}>
              Calculators
            </Link>
          </li>
          <li>
            <Link to="/" state={{ scrollTo: "features" }} onClick={onSamePageScroll("features")}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/" state={{ scrollTo: "contact" }} onClick={onSamePageScroll("contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
