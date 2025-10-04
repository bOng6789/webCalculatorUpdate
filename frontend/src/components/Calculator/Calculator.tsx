// src/components/Calculator/Calculator.tsx

import { useState } from "react";
import styles from "./Calculator.module.css";

export default function Calculator() {
  const [meters, setMeters] = useState<number>(1);
  const [feet, setFeet] = useState<number>(meters * 3.28084);

  const convertMetersToFeet = () => {
    const result = meters * 3.28084;
    setFeet(result);
  };

  return (
    <section className={styles["calculatorSection"]}>
      <div className={styles["container"]}>
        <div className={`${styles["calculatorWidget"]} animate`}>
          <div className={styles["converterForm"]}>
            {/* Input meters */}
            <div className={styles["formGroup"]}>
              <label htmlFor="metersInput">Meters (m)</label>
              <input
                type="number"
                id="metersInput"
                placeholder="Enter meters"
                step="any"
                value={meters}
                onChange={(e) => setMeters(parseFloat(e.target.value) || 0)}
              />
              <div className={styles["unitLabel"]}>meters</div>
            </div>

            {/* Convert button */}
            <button
              className={styles["convertBtn"]}
              onClick={convertMetersToFeet}
              title="Convert"
            >
              ⇄
            </button>

            {/* Output feet */}
            <div className={styles["formGroup"]}>
              <label htmlFor="feetOutput">Feet (ft)</label>
              <input
                type="number"
                id="feetOutput"
                placeholder="Result in feet"
                value={feet}
                readOnly
              />
              <div className={styles["unitLabel"]}>feet</div>
            </div>
          </div>

          {/* Result display */}
          <div id="resultDisplay" className={styles["resultDisplay"]}>
            {meters} meter{meters !== 1 ? "s" : ""} = {feet.toFixed(5)} feet
          </div>
        </div>
      </div>
    </section>
  );
}
