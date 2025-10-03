// src/components/Header/Header.tsx
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./Header.module.css";

export default function Header() {
  const HEADER_OFFSET = 72; // chỉnh đúng chiều cao header của bạn

  const withOffset = (el: HTMLElement) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container} aria-label="Primary navigation">
        {/* Logo bấm về top của trang Home */}
        <HashLink smooth to="/#top" className={styles.logo} scroll={withOffset}>
          <i className="fas fa-calculator" aria-hidden="true"></i>
          <img
            src="/calculator.png"
            alt="ConvertPro"
            className={styles.logoImg}
            width={28}
            height={28}
          />
          <span className={styles.brand}>ConvertPro</span>
        </HashLink>

        <ul className={styles.navLinks}>
          <li>
            <HashLink smooth to="/#top" scroll={withOffset}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#categories" scroll={withOffset}>
              Calculators
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#features" scroll={withOffset}>
              Features
            </HashLink>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <HashLink smooth to="/#contact" scroll={withOffset}>
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
