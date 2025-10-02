// src/components/PopularTools/PopularTools.tsx

import styles from './PopularTools.module.css';

const tools = [
  { icon:'📏', title:'Meters to Feet Converter', desc:'Convert meters to feet with precision. Most used length conversion tool worldwide.', link:'/conversion/length/meters-to-feet/'},
  { icon:'⚖️', title:'Kilograms to Pounds', desc:'Convert kilograms to pounds instantly. Essential weight conversion for international use.', link:'/conversion/weight-mass/kg-to-pounds/'},
  { icon:'🌡️', title:'Celsius to Fahrenheit', desc:'Convert Celsius to Fahrenheit accurately. Temperature conversion for weather and cooking.', link:'/conversion/temperature/celsius-to-fahrenheit/'},
  { icon:'🚗', title:'MPH to KM/H Converter', desc:'Convert miles per hour to kilometers per hour. Essential for travel and vehicle specs.', link:'/conversion/speed-velocity/mph-to-kmh/'}
];

export default function PopularTools(){
  return (
    <section className={styles["popularTools"]}>
      <div className={styles["container"]}>
        <h2 className={styles["sectionTitle"]}>Most Popular Conversion Tools</h2>
        <div className={styles["toolsGrid"]}>
          {tools.map((t,i)=>(
            <div key={i} className={styles["toolCard"]} onClick={()=> window.location.href = t.link}>
              <div className={styles["toolIcon"]}>{t.icon}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
