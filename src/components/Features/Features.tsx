// src/components/Features/Features.tsx

import styles from "./Features.module.css";

const features = [
  { icon: "⚡", title: "Lightning Fast", desc: "Instant results with no page reloads or waiting times" },
  { icon: "🎯", title: "Precision Accuracy", desc: "High-precision calculations up to 15 decimal places" },
  { icon: "📱", title: "All Devices", desc: "Responsive design works perfectly on desktop, tablet, and mobile" },
  { icon: "🆓", title: "Completely Free", desc: "100% free to use with no ads or hidden charges" },
  { icon: "🔒", title: "Privacy First", desc: "No data collection, no tracking, your privacy is protected" },
  { icon: "🌍", title: "Global Standards", desc: "Supports international units and measurement standards" },
];

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <h2>Why Choose ConvertPro?</h2>
        <p className={styles["features-subtitle"]}>
          Industry-leading conversion tools trusted by professionals worldwide
        </p>
        <div className={styles["features-grid"]}>
          {features.map((f, i) => (
            <div className={styles["feature-item"]} key={i}>
              <div className={styles["feature-icon"]}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
