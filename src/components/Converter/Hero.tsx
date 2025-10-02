// src/components/Converter/Hero.tsx

import styles from "./Hero.module.css";
import Converter from "./Converter";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <h1 className={styles["animate"]}>Professional Unit Converter</h1>
      <p className={styles["heroSubtitle"]}>
        The <span className={styles["highlight"]}>most comprehensive</span> collection of conversion calculators
      </p>
      <p className={styles["heroDescription"]}>
        Convert between units instantly with our advanced calculators. From automotive to construction, health to mathematics - all your conversion needs in one place.
      </p>
      
      <Converter />
    </section>
  );
}
