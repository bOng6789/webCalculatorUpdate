// src/components/FormulaSection/FormulaSection.tsx
import styles from "./FormulaSection.module.css";

export default function FormulaSection() {
  return (
    <section className={styles["formulaSection"]}>
      <div className={styles["container"]}>
        <div className={styles["sectionHeader"]}>
          <h2>How to Convert Meters to Feet</h2>
          <p>Learn the conversion formula and calculation method</p>
        </div>

        <div className={`${styles["formulaContent"]} animate`}>
          {/* Formula Box */}
          <div className={styles["formulaBox"]}>
            <div className={styles["formula"]}>feet = meters × 3.28084</div>
            <div className={styles["formulaExplanation"]}>
              Multiply the length value in meters by 3.28084 to get the equivalent in feet
            </div>
          </div>

          <h3>Conversion Factor</h3>
          <p>The conversion factor between meters and feet is based on the international foot definition:</p>
          <ul className={styles["formulaList"]}>
            <li>1 meter = 3.28084 feet (exactly)</li>
            <li>1 foot = 0.3048 meters (exactly)</li>
            <li>This relationship is defined by international standards</li>
          </ul>

          {/* Example Box */}
          <div className={styles["exampleBox"]}>
            <h4>Example Calculations</h4>
            <p><strong>Example 1:</strong> Convert 5 meters to feet</p>
            <p>5 m × 3.28084 = 16.4042 feet</p>

            <p><strong>Example 2:</strong> Convert 2.5 meters to feet</p>
            <p>2.5 m × 3.28084 = 8.2021 feet</p>

            <p><strong>Example 3:</strong> Convert 10 meters to feet</p>
            <p>10 m × 3.28084 = 32.8084 feet</p>
          </div>

          <h3>When to Use Meters vs Feet</h3>
          <p>
            <strong>Meters</strong> are part of the metric system and are widely used internationally
            for scientific, engineering, and everyday measurements.{" "}
            <strong>Feet</strong> are part of the imperial system, primarily used in the United States
            for construction, real estate, and personal measurements.
          </p>
        </div>
      </div>
    </section>
  );
}
