import styles from "./benefits.module.css";

function Benefits() {
  return (
    <section className={styles.benefits} id="benefits" aria-labelledby="benefits-heading">
      <div className={styles.container}>
        <h2 id="benefits-heading" className={styles.sectionTitle}>
          Why Choose <span className={styles.highlight}>FinTrack</span>?
        </h2>

        <div className={styles.benefitsGrid} role="list">
          <article className={styles.benefitCard} role="listitem">
            <div className={styles.benefitIcon} aria-hidden="true">
              <i className="fa-solid fa-lock"></i>
            </div>
            <h3 className={styles.benefitTitle}>Bank-Level Security</h3>
            <p className={styles.benefitDescription}>
              Your financial data is encrypted with the same advanced security systems used by leading banks.
            </p>
          </article>

          <article className={styles.benefitCard} role="listitem">
            <div className={styles.benefitIcon} aria-hidden="true">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className={styles.benefitTitle}>Instant Sync</h3>
            <p className={styles.benefitDescription}>
              Connect your accounts and watch transactions update in real time without delays.
            </p>
          </article>

          <article className={styles.benefitCard} role="listitem">
            <div className={styles.benefitIcon} aria-hidden="true">
              <i className="fas fa-chart-pie"></i>
            </div>
            <h3 className={styles.benefitTitle}>Smart Insights</h3>
            <p className={styles.benefitDescription}>
              Get AI-driven recommendations to optimize spending and grow your savings.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
