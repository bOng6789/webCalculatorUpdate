// src/components/Subcategories/Subcategories.tsx

import styles from './Subcategories.module.css';

const subs = [
  { icon:'📏', title:'Length & Distance', desc:'Convert between meters, feet, inches, kilometers, miles, yards, and all length measurements. Includes both metric and imperial systems.', count:'25+ Tools', link:'/conversion/length/' },
  { icon:'⚖️', title:'Weight & Mass', desc:'Convert kilograms, pounds, grams, ounces, stones, tons and all weight measurements. Professional mass conversion tools.', count:'20+ Tools', link:'/conversion/weight-mass/' },
  { icon:'🌡️', title:'Temperature', desc:'Convert Celsius, Fahrenheit, Kelvin, Rankine and all temperature scales. Precise temperature conversion formulas.', count:'12+ Tools', link:'/conversion/temperature/' },
  { icon:'🚀', title:'Speed & Velocity', desc:'Convert MPH, KM/H, knots, meters per second and all speed measurements. Aviation and automotive calculations.', count:'15+ Tools', link:'/conversion/speed-velocity/' },
  { icon:'⚡', title:'Energy & Power', desc:'Convert watts, horsepower, BTU, joules, calories and energy measurements. Engineering power calculations.', count:'18+ Tools', link:'/conversion/energy-power/' },
  { icon:'🌪️', title:'Pressure', desc:'Convert PSI, bar, pascal, atmosphere and pressure measurements. Tire pressure and engineering applications.', count:'14+ Tools', link:'/conversion/pressure/' }
];

export default function Subcategories(){
  return (
    <section className={styles["subcategories"]}>
      <div className={styles["container"]}>
        <h2 className={styles["sectionTitle"]}>Conversion Calculator Categories</h2>
        <div className={styles["grid"]}>
          {subs.map((s,i)=>(
            <div key={i} className={styles["card"]} onClick={()=> window.location.href = s.link}>
              <div className={styles["icon"]}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className={styles["count"]}>{s.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
