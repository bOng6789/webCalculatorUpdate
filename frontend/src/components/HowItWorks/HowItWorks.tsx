// src/components/HowItWorks/HowItWorks.tsx

import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles["howItWorks"]}>
      <div className={styles["container"]}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>How It Works</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "2rem" }}>
          Get accurate conversions in three simple steps
        </p>
        <div className={styles["stepsGrid"]}>
          <div className={styles["stepItem"]}>
            <div className={styles["stepNumber"]}>1</div>
            <h3>Select Category</h3>
            <p>Choose from our 5 specialized calculator categories based on your needs</p>
          </div>
          <div className={styles["stepItem"]}>
            <div className={styles["stepNumber"]}>2</div>
            <h3>Input Values</h3>
            <p>Enter your values and select the units you want to convert from and to</p>
          </div>
          <div className={styles["stepItem"]}>
            <div className={styles["stepNumber"]}>3</div>
            <h3>Get Results</h3>
            <p>Receive instant, accurate results with up to 15 decimal places precision</p>
          </div>
        </div>
      </div>
    </section>
  );
}
