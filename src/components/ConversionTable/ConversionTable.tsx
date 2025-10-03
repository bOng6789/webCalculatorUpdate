// src/components/ConversionTable/ConversionTable.tsx

import styles from "./ConversionTable.module.css";

interface ConversionRow {
  meters: number;
  feet: number;
  feetInches: string;
}

const tableData: ConversionRow[] = [
  { meters: 0.1, feet: 0.328, feetInches: `0' 3.9"` },
  { meters: 0.5, feet: 1.64, feetInches: `1' 7.7"` },
  { meters: 1, feet: 3.281, feetInches: `3' 3.4"` },
  { meters: 1.5, feet: 4.921, feetInches: `4' 11.1"` },
  { meters: 2, feet: 6.562, feetInches: `6' 6.7"` },
  { meters: 2.5, feet: 8.202, feetInches: `8' 2.4"` },
  { meters: 3, feet: 9.843, feetInches: `9' 10.1"` },
  { meters: 5, feet: 16.404, feetInches: `16' 4.9"` },
  { meters: 10, feet: 32.808, feetInches: `32' 9.7"` },
  { meters: 20, feet: 65.617, feetInches: `65' 7.4"` },
  { meters: 50, feet: 164.042, feetInches: `164' 0.5"` },
  { meters: 100, feet: 328.084, feetInches: `328' 1.0"` },
];

export default function ConversionTable() {
  return (
    <section className={styles["conversionTable"]}>
      <div className={styles["container"]}>
        <div className={styles["sectionHeader"]}>
          <h2>Meters to Feet Conversion Table</h2>
          <p>Common meters to feet conversions for quick reference</p>
        </div>

        <div className={`${styles["tableResponsive"]} animate`}>
          <table className={styles["conversionTableWidget"]}>
            <thead>
              <tr>
                <th>Meters (m)</th>
                <th>Feet (ft)</th>
                <th>Feet + Inches</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i}>
                  <td>{row.meters}</td>
                  <td>{row.feet}</td>
                  <td>{row.feetInches}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
