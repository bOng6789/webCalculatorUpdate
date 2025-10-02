// src/components/Header/Header.tsx

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <nav className={styles["container"]}>
        <div className={styles["logo"]}>
          <i className="fas fa-calculator"></i>
          ConvertPro
        </div>
        <ul className={styles["navLinks"]}>
          <li><a href="/">Home</a></li>
          <li><a href="#categories">Calculators</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
