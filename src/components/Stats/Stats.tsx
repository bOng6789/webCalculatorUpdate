// src/components/Stats/Stats.tsx

import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles["stats"]}>
      <div className={styles["container"]}>
        <h2 className={styles["title"]}>Trusted by Professionals Worldwide</h2>
        <div className={styles["statsGrid"]}>
          <div className={styles["statItem"]}>
            <h3 className={styles["statNumber"]}>500+</h3>
            <p className={styles["statDesc"]}>Conversion Tools</p>
          </div>
          <div className={styles["statItem"]}>
            <h3 className={styles["statNumber"]}>2M+</h3>
            <p className={styles["statDesc"]}>Monthly Users</p>
          </div>
          <div className={styles["statItem"]}>
            <h3 className={styles["statNumber"]}>95+</h3>
            <p className={styles["statDesc"]}>Unit Types Supported</p>
          </div>
          <div className={styles["statItem"]}>
            <h3 className={styles["statNumber"]}>99.99%</h3>
            <p className={styles["statDesc"]}>Accuracy Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}


