import styles from "./faq.module.css";
import React, { useState } from "react";
import faqData from "../../data/faq.json";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Frequently Asked <span className={styles.highlight}>Questions</span>
        </h2>
        <div className={styles.faqContainer}>
          {faqData.map((item, idx) => (
            <div className={styles.faqItem} key={item.id}>
              <button
                className={styles.faqQuestion}
                aria-expanded={openIndex === idx}
                onClick={() => toggle(idx)}
              >
                <span>{item.question}</span>
                <i
                  className={`fas fa-chevron-${
                    openIndex === idx ? "up" : "down"
                  }`}
                ></i>
              </button>

              <div
                className={`${styles.faqAnswer} ${
                  openIndex === idx ? styles.open : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq;