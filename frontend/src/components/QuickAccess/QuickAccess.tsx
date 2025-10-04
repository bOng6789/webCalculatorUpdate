// src/components/QuickAccess/QuickAccess.tsx

import styles from './QuickAccess.module.css';

const links = [
  {href:'/conversion/length/feet-to-meters/', text:'Feet to Meters'},
  {href:'/conversion/length/inches-to-cm/', text:'Inches to CM'},
  {href:'/conversion/weight-mass/pounds-to-kg/', text:'Pounds to KG'},
  {href:'/conversion/temperature/fahrenheit-to-celsius/', text:'°F to °C'},
  {href:'/conversion/speed-velocity/kmh-to-mph/', text:'KM/H to MPH'},
  {href:'/conversion/length/miles-to-km/', text:'Miles to KM'},
  {href:'/conversion/weight-mass/grams-to-ounces/', text:'Grams to Ounces'},
  {href:'/conversion/length/yards-to-meters/', text:'Yards to Meters'},
];

export default function QuickAccess(){
  return (
    <section className={styles["quickAccess"]}>
      <div className={styles["container"]}>
        <h2 className={styles["sectionTitle"]}>Quick Access Popular Conversions</h2>
        <div className={styles["links"]}>
          {links.map((l,i)=>(
            <a key={i} className={styles["link"]} href={l.href}>{l.text}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
