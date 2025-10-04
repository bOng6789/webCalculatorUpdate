// src/components/Catgories/Categories.tsx

import { Link } from "react-router-dom";

import styles from "./Categories.module.css";

const categories = [
  {
    icon: "🚗",
    title: "Automotive Calculators",
    desc: "Comprehensive automotive conversion tools including fuel consumption, engine performance, torque, horsepower, gear ratios, tire calculations, and vehicle specifications.",
    tags: ["MPG Calculator", "HP to Torque", "Gear Ratio", "Tire Size"],
    link: "/automotive",
  },
  // {
  //   icon: "🏗️",
  //   title: "Construction Calculators",
  //   desc: "Essential construction and engineering calculators for area, volume, materials estimation, concrete mixing, steel calculations, lumber sizing, and project planning.",
  //   tags: ["Concrete Mix", "Area Calculator", "Material Cost", "Roof Pitch"],
  //   link: "/construction",
  // },
  {
    icon: "🔁",
    title: "Conversion Calculators",
    desc: "Universal unit conversion tools covering length, weight, temperature, time, speed, energy, pressure, and all standard measurement units with high precision.",
    tags: ["Length Units", "Weight Convert", "Temperature", "Currency"],
    link: "/conversion",
  },
  // {
  //   icon: "❤️",
  //   title: "Health Calculators",
  //   desc: "Medical and fitness calculation tools including BMI, BMR, calorie needs, heart rate zones, body fat percentage, and nutritional requirements.",
  //   tags: ["BMI Calculator", "Calorie Burn", "Heart Rate", "Body Fat %"],
  //   link: "/health",
  // },
  // {
  //   icon: "📐",
  //   title: "Math Calculators",
  //   desc: "Advanced mathematical calculators for geometry, algebra, trigonometry, statistics, calculus, probability, and complex mathematical operations.",
  //   tags: ["Geometry", "Statistics", "Algebra", "Trigonometry"],
  //   link: "/math",
  // },
];

export default function Categories() {
  return (
    <section className={styles["categories"]} id="categories">
      <div className={styles["container"]}>
        <h2>Calculator Categories</h2>
        <p className={styles["categoriesSubtitle"]}>
          Professional-grade conversion tools organized by industry and application
        </p>
        <div className={styles["categoryGrid"]}>
          {categories.map((cat) => {
            console.log("cat:", cat);   // log mỗi lần render
            return (
              <Link to={cat.link} className={styles.categoryCard} key={cat.link}>
                <div className={styles.categoryIcon}>{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <div className={styles.popularTools}>
                  <div className={styles.toolsList}>
                    {cat.tags.map((t) => (
                      <span className={styles.toolTag} key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
