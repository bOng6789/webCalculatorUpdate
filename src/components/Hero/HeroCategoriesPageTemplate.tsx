import styles from './HeroCategoriesPageTemplate.module.css';

export default function HeroCategoriesPageTemplate() {
  return (
    <section className={styles["pageHero"]}>
      <div className={styles["container"]}>
        <h1>Conversion Calculators</h1>
        <p>Professional unit conversion tools for accurate measurements across all measurement systems. Convert between metric, imperial, and specialized units instantly.</p>
      </div>
    </section>
  );
}
