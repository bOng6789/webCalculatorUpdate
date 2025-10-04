// src/components/CTA/CTA.tsx

import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles["cta"]}>
      <h2>Start Converting Today</h2>
      <p>Join millions of professionals who rely on ConvertPro for accurate conversions</p>
      <a href="#categories" className={styles["ctaBtn"]}>Explore All Tools</a>
      <a href="#contact" className={`${styles["ctaBtn"]} ${styles["secondary"]}`}>Get Support</a>
    </section>
  );
}
