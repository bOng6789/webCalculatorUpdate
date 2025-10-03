// src/components/PopularTools/PopularTools.tsx

import { useParams, Link } from "react-router-dom";
import styles from "./PopularTools.module.css";

// import data + types
// read data from src/data/categories.ts to display popular tools
import { convert } from "../../data/categories";
import type { Tool } from "../../data/categories";

export default function PopularTools() {
  const { id } = useParams<{ id?: string }>();
  const category = id ? convert[id] ?? null : null;

  console.log("id from URL:", id);
  console.log("category found:", category);

  // fallback: all popular tools aggregated
  const allPopularTools: Tool[] = Object.values(convert).reduce<Tool[]>(
    (acc, c) => acc.concat(c.popularTools ?? []),
    []
  );

  return (
    <section className={styles["popularTools"]}>
      <div className={styles["container"]}>
        {category ? (
          <>
            <h2 className={styles["sectionTitle"]}>Most Popular Conversion Tools</h2>

            {category.popularTools && category.popularTools.length > 0 && (
              <>
                <div className={styles["toolsGrid"]}>
                  {category.popularTools.map((t, i) => (
                    <Link key={i} to={t.link} className={styles["toolCard"]}>
                      <div className={styles["toolIcon"]}>{t.icon}</div>
                      <h4>{t.title}</h4>
                      <p>{t.desc}</p>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <h2 className={styles.sectionTitle}>
              Most Popular Conversion Tools
            </h2>
            <div className={styles.toolsGrid}>
              {allPopularTools.map((t, i) => (
                <Link key={i} to={t.link} className={styles.toolCard}>
                  <div className={styles.toolIcon}>{t.icon}</div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
