
const categories = [
  {
    icon: "🚗",
    title: "Automotive Calculators",
    desc: "Comprehensive automotive conversion tools including fuel consumption, engine performance, torque, horsepower, gear ratios, tire calculations, and vehicle specifications.",
    tags: ["MPG Calculator", "HP to Torque", "Gear Ratio", "Tire Size"],
  },
  {
    icon: "🏗️",
    title: "Construction Calculators",
    desc: "Essential construction and engineering calculators for area, volume, materials estimation, concrete mixing, steel calculations, lumber sizing, and project planning.",
    tags: ["Concrete Mix", "Area Calculator", "Material Cost", "Roof Pitch"],
  },
  {
    icon: "🔁",
    title: "Conversion Calculators",
    desc: "Universal unit conversion tools covering length, weight, temperature, time, speed, energy, pressure, and all standard measurement units with high precision.",
    tags: ["Length Units", "Weight Convert", "Temperature", "Currency"],
  },
  {
    icon: "❤️",
    title: "Health Calculators",
    desc: "Medical and fitness calculation tools including BMI, BMR, calorie needs, heart rate zones, body fat percentage, and nutritional requirements.",
    tags: ["BMI Calculator", "Calorie Burn", "Heart Rate", "Body Fat %"],
  },
  {
    icon: "📐",
    title: "Math Calculators",
    desc: "Advanced mathematical calculators for geometry, algebra, trigonometry, statistics, calculus, probability, and complex mathematical operations.",
    tags: ["Geometry", "Statistics", "Algebra", "Trigonometry"],
  },
];

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <h2>Calculator Categories</h2>
        <p className="categories-subtitle">
          Professional-grade conversion tools organized by industry and application
        </p>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <div className="category-card animate" key={i}>
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <div className="popular-tools">
                <div className="tools-list">
                  {cat.tags.map((t, j) => (
                    <span className="tool-tag" key={j}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
