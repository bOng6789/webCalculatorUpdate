import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const conversions = {
  "Meters (m)_Feet (ft)": (val) => val * 3.28084,
  "Feet (ft)_Meters (m)": (val) => val / 3.28084,
  "Kilograms (kg)_Pounds (lbs)": (val) => val * 2.20462,
  "Pounds (lbs)_Kilograms (kg)": (val) => val / 2.20462,
  "Celsius (°C)_Fahrenheit (°F)": (val) => (val * 9) / 5 + 32,
  "Fahrenheit (°F)_Celsius (°C)": (val) => ((val - 32) * 5) / 9,
  "Miles per hour (mph)_Kilometers per hour (km/h)": (val) => val * 1.60934,
  "Kilometers per hour (km/h)_Miles per hour (mph)": (val) => val / 1.60934,
};

app.post("/convert", (req, res) => {
  const { fromValue, fromUnit, toUnit } = req.body;
  const value = parseFloat(fromValue);
  if (isNaN(value)) {
    return res.json({ result: "" });
  }
  const key = `${fromUnit}_${toUnit}`;
  if (conversions[key]) {
    return res.json({ result: conversions[key](value).toFixed(6) });
  } else if (fromUnit === toUnit) {
    return res.json({ result: value.toString() });
  } else {
    return res.json({ result: "Conversion not available" });
  }
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
