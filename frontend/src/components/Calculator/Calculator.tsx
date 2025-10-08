// src/components/Calculator/Calculator.tsx

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Calculator.module.css";

// export default function Calculator() {
//   const [meters, setMeters] = useState<number>(1);
//   const [feet, setFeet] = useState<number>(meters * 3.28084);

//   const convertMetersToFeet = () => {
//     const result = meters * 3.28084;
//     setFeet(result);
//   };

//   return (
//     <section className={styles["calculatorSection"]}>
//       <div className={styles["container"]}>
//         <div className={`${styles["calculatorWidget"]} animate`}>
//           <div className={styles["converterForm"]}>
//             {/* Input meters */}
//             <div className={styles["formGroup"]}>
//               <label htmlFor="metersInput">Meters (m)</label>
//               <input
//                 type="number"
//                 id="metersInput"
//                 placeholder="Enter meters"
//                 step="any"
//                 value={meters}
//                 onChange={(e) => setMeters(parseFloat(e.target.value) || 0)}
//               />
//               <div className={styles["unitLabel"]}>meters</div>
//             </div>

//             {/* Convert button */}
//             <button
//               className={styles["convertBtn"]}
//               onClick={convertMetersToFeet}
//               title="Convert"
//             >
//               ⇄
//             </button>

//             {/* Output feet */}
//             <div className={styles["formGroup"]}>
//               <label htmlFor="feetOutput">Feet (ft)</label>
//               <input
//                 type="number"
//                 id="feetOutput"
//                 placeholder="Result in feet"
//                 value={feet}
//                 readOnly
//               />
//               <div className={styles["unitLabel"]}>feet</div>
//             </div>
//           </div>

//           {/* Result display */}
//           <div id="resultDisplay" className={styles["resultDisplay"]}>
//             {meters} meter{meters !== 1 ? "s" : ""} = {feet.toFixed(5)} feet
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Calculator() {
  //////////////////////////////////////////////////
  const {id, subId} = useParams();
  //////////////////////////////////////////////////
  const { slug } = useParams(); // ví dụ: slug = "kg-to-pounds"
  const [fromValue, setFromValue] = useState<number | string>(1);
  const [toValue, setToValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState(""); //useState("Meters (m)");
  const [toUnit, setToUnit] = useState(""); //useState("Feet (ft)");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //////////////////////////////////////////////////
  console.log("id = ", id)
  console.log("subId = ", subId)
  //////////////////////////////////////////////////

   // ✳️ Tách slug thành đơn vị nguồn và đích
  useEffect(() => {
    if (slug) {
      const [from, , to] = slug.split("-");
      setFromUnit(formatUnit(from));
      setToUnit(formatUnit(to));
    }
  }, [slug]);

   // ✳️ Hàm format để hiển thị đẹp hơn
  const formatUnit = (unit: string) => {
    switch (unit.toLowerCase()) {
      case "kg":
        return "Kilograms (kg)";
      case "pounds":
        return "Pounds (lbs)";
      case "meters":
        return "Meters (m)";
      case "feet":
        return "Feet (ft)";
      case "celsius":
        return "Celsius (°C)";
      case "fahrenheit":
        return "Fahrenheit (°F)";
      default:
        return unit;
    }
  };
  //////////////////////////////////////////////////

  const convert = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:4000/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fromValue,
          fromUnit,
          toUnit,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.result === undefined) {
        throw new Error("Invalid response from server");
      }

      setToValue(data.result.toString());
    } catch (err: any) {
      console.error("Error:", err);
      setError("Không thể kết nối server hoặc lỗi dữ liệu.");
    } finally {
      setLoading(false);
    }
  };

  //////////////////////////////////////////////////
  console.log("fromUnit = ", fromUnit)
  console.log("toUnit = ", toUnit)
  //////////////////////////////////////////////////

  return (
    <section className={styles["calculatorSection"]}>
      <div className={styles["container"]}>
        <div className={`${styles["calculatorWidget"]} animate`}>
          <div className={styles["converterForm"]}>
            {/* Input group */}
            <div className={styles["formGroup"]}>
              <label>From: ({fromUnit})</label>
              <input
                type="number"
                step="any"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
              />
              <select
                className={styles["unitLabel"]}
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
              >
                <option>Meters (m)</option>
                <option>Kilograms (kg)</option>
                <option>Celsius (°C)</option>
                <option>Miles per hour (mph)</option>
              </select>
            </div>

            {/* Convert button */}
            <button
              className={styles["convertBtn"]}
              onClick={convert}
              title="Convert"
              disabled={loading}
            >
              {loading ? "..." : "⇄"}
            </button>

            {/* Output group */}
            <div className={styles["formGroup"]}>
              <label>To: ({toUnit})</label>
              <input type="text" value={toValue} readOnly />
              <select
                className={styles["unitLabel"]}
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
              >
                <option>Feet (ft)</option>
                <option>Pounds (lbs)</option>
                <option>Fahrenheit (°F)</option>
                <option>Kilometers per hour (km/h)</option>
              </select>
            </div>
          </div>

          {/* Result display */}
          <div id="resultDisplay" className={styles["resultDisplay"]}>
            {error ? (
              <span style={{ color: "red" }}>{error}</span>
            ) : toValue ? (
              <>
                {fromValue} {fromUnit} = {toValue} {toUnit}
              </>
            ) : (
              "Nhập giá trị và bấm ⇄ để chuyển đổi"
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
