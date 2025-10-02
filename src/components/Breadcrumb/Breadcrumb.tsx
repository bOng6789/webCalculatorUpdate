// src/components/Breadcrumb/Breadcrumb.tsx

import styles from './Breadcrumb.module.css';

export default function Breadcrumb() {
  return (
    <nav className={styles["breadcrumb"]}>
      <div className={styles["container"]}>
        <ol className={styles["breadcrumbList"]}>
          <li><a href="/">Home</a></li>
          <li>Conversion Calculators</li>
        </ol>
      </div>
    </nav>
  )
}
