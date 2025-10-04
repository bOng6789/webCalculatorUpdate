// src/components/AllTools/AllTools.tsx

import styles from './AllTools.module.css';

const categories = [
  { title:'Length', items:['Meters to Feet','Feet to Meters','Inches to CM','Miles to KM'] },
  { title:'Weight', items:['Kilograms to Pounds','Pounds to KG','Grams to Ounces'] },
  { title:'Temperature', items:['Celsius to Fahrenheit','Fahrenheit to Celsius','Kelvin conversions'] },
  { title:'Speed', items:['MPH to KM/H','KM/H to MPH','Knots conversions'] }
];

export default function AllTools(){
  return (
    <section className={styles["allTools"]}>
      <div className={styles["container"]}>
        <h2 className={styles["sectionTitle"]}>All Tools Directory</h2>
        <div className={styles["grid"]}>
          {categories.map((c, i)=>(
            <div key={i} className={styles["group"]}>
              <h4>{c.title}</h4>
              <ul className={styles["list"]}>
                {c.items.map((it, j)=> <li key={j}><a href="#">{it}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
