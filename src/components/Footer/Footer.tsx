// src/components/Footer/Footer.tsx

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footerLinks"]}>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Use</a>
        <a href="#api">API Documentation</a>
        <a href="#support">Support</a>
        <a href="#about">About Us</a>
      </div>
      <p>
        &copy; 2025 ConvertPro. All rights reserved. Professional unit conversion tools for everyone.
      </p>
    </footer>
  );
}
