// src/components/FAQ/FAQ.tsx

import { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How many feet are in 1 meter?",
    answer:
      "1 meter is equal to 3.28084 feet. This is the exact conversion factor defined by international standards. So 1 m = 3.28084 ft precisely.",
  },
  {
    question: "What is the formula to convert meters to feet?",
    answer:
      "The formula is: feet = meters × 3.28084. Simply multiply the number of meters by 3.28084 to get the equivalent length in feet.",
  },
  {
    question: "Is the conversion factor exact or approximate?",
    answer:
      "The conversion factor 3.28084 feet per meter is exact, based on the international definition that 1 foot = 0.3048 meters exactly. This relationship was established by international agreement in 1959.",
  },
  {
    question: "How do I convert meters to feet and inches?",
    answer:
      "First convert meters to feet using the standard conversion. Then, take the whole number as feet, and multiply the decimal portion by 12 to get inches. For example: 2.5m = 8.202 ft = 8 feet and 2.4 inches.",
  },
  {
    question: "Which countries use meters vs feet?",
    answer:
      "Most countries worldwide use meters as part of the metric system. The United States primarily uses feet for everyday measurements, while the UK uses a mix of both systems. Myanmar and Liberia also use imperial measurements alongside metric.",
  },
  {
    question: "How accurate is this meters to feet converter?",
    answer:
      "Our converter uses the exact international conversion factor and provides results accurate to 15 decimal places. This level of precision is suitable for all practical applications including scientific, engineering, and construction uses.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles["faqSection"]}>
      <div className={styles.container}>
        <div className={styles["sectionHeader"]}>
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about meters to feet conversion</p>
        </div>

        <div className={styles["faqList"]}>
          {faqData.map((item, i) => (
            <div key={i} className={`${styles["faqItem"]} animate`}>
              <button
                className={styles["faqQuestion"]}
                onClick={() => toggleFaq(i)}
              >
                {item.question}
                <span
                  className={`${styles["faqIcon"]} ${
                    openIndex === i ? styles.active : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`${styles["faqAnswer"]} ${
                  openIndex === i ? styles.active : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
