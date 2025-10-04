// src/components/RelatedConverters/RelatedConverters.tsx

// import { Link } from "react-router-dom";
import styles from "./RelatedConverters.module.css";

const converters = [
  {
    icon: "📏",
    title: "Feet to Meters",
    desc: "Convert feet to meters",
    link: "/conversion/feet-to-meters/",
  },
  {
    icon: "📐",
    title: "Meters to Inches",
    desc: "Convert meters to inches",
    link: "/conversion/meters-to-inches/",
  },
  {
    icon: "📏",
    title: "Centimeters to Feet",
    desc: "Convert cm to feet",
    link: "/conversion/centimeters-to-feet/",
  },
  {
    icon: "📐",
    title: "Meters to Yards",
    desc: "Convert meters to yards",
    link: "/conversion/meters-to-yards/",
  },
  {
    icon: "🛣️",
    title: "Kilometers to Miles",
    desc: "Convert km to miles",
    link: "/conversion/kilometers-to-miles/",
  },
  {
    icon: "📏",
    title: "Inches to Centimeters",
    desc: "Convert inches to cm",
    link: "/conversion/inches-to-centimeters/",
  },
];

export default function RelatedConverters() {
  return (
    <section className={styles["relatedConverters"]}>
      <div className={styles["container"]}>
        <div className={styles["sectionHeader"]}>
          <h2>Related Length Converters</h2>
          <p>Other useful length conversion tools</p>
        </div>

        <div className={styles["relatedGrid"]}>
            {/* không dùng được Link bởi vì chưa có Router cao hơn trong cây React */}
          {/* {converters.map((item, i) => (
            <Link to={item.link} className={`${styles["relatedItem"]} animate`} key={i}>
              <div className={styles["relatedIcon"]}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </Link>
          ))} */}

          {/* dùng tạm href trong khi chờ có link bọc ngoài */}
          {converters.map((item, i) => (
            <a key={i} href={item.link} className={`${styles["relatedItem"]} animate`}>
              <div className={styles["relatedIcon"]}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
