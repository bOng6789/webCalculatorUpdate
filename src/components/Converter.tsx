import { useState } from "react";

type ConversionFn = (val: number) => number;

const conversions: Record<string, ConversionFn> = {
  "Meters (m)_Feet (ft)": (val) => val * 3.28084,
  "Feet (ft)_Meters (m)": (val) => val / 3.28084,
  "Kilograms (kg)_Pounds (lbs)": (val) => val * 2.20462,
  "Pounds (lbs)_Kilograms (kg)": (val) => val / 2.20462,
  "Celsius (°C)_Fahrenheit (°F)": (val) => (val * 9) / 5 + 32,
  "Fahrenheit (°F)_Celsius (°C)": (val) => ((val - 32) * 5) / 9,
  "Miles per hour (mph)_Kilometers per hour (km/h)": (val) => val * 1.60934,
  "Kilometers per hour (km/h)_Miles per hour (mph)": (val) => val / 1.60934,
};

export default function Converter() {
  const [fromValue, setFromValue] = useState<number | string>("");
  const [toValue, setToValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState("Meters (m)");
  const [toUnit, setToUnit] = useState("Feet (ft)");

  const convert = () => {
    const value = parseFloat(fromValue as string);
    if (isNaN(value)) {
      setToValue("");
      return;
    }
    const key = `${fromUnit}_${toUnit}`;
    if (conversions[key]) {
      setToValue(conversions[key](value).toFixed(6));
    } else if (fromUnit === toUnit) {
      setToValue(value.toString());
    } else {
      setToValue("Conversion not available");
    }
  };

  return (
    <div className="quick-convert">
      <h3>Quick Conversion Tool</h3>
      <div className="convert-form">
        <div className="form-group">
          <label>From:</label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
          />
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            <option>Meters (m)</option>
            <option>Kilograms (kg)</option>
            <option>Celsius (°C)</option>
            <option>Miles per hour (mph)</option>
          </select>
        </div>
        <button className="convert-btn" onClick={convert} title="Convert">
          ⇄
        </button>
        <div className="form-group">
          <label>To:</label>
          <input type="text" value={toValue} readOnly />
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            <option>Feet (ft)</option>
            <option>Pounds (lbs)</option>
            <option>Fahrenheit (°F)</option>
            <option>Kilometers per hour (km/h)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
