// src/components/Breadcrumb/Breadcrumb.tsx
import { useParams } from "react-router-dom";
import styles from './Breadcrumb.module.css';
import { convert } from "../../data/categories";
export default function Breadcrumb() {
    const { id } = useParams<{ id?: string }>();
  const category = id ? convert[id] ?? null : null;

  console.log("id from URL:", id);
  console.log("category found:", category);

  return (
    <div className={styles["breadcrumb"]}>
      <div className={styles["container"]}>
        <ol className={styles["breadcrumbList"]}>
          <i className="fas fa-calculator"></i>
            <li><a href="/">Home</a></li>
             <li aria-current="page">
              {category?.title ?? "Unknown category"}
            </li>
        </ol>
      </div>
    </div>
  )
}
