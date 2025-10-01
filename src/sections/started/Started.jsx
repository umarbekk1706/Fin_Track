import styles from "./started.module.css";
import { Link } from "react-scroll";
function Started() {
  return (
   <section id="get-started" className={styles.getStarted}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Take Control of Your Finances?</h2>
        <p className={styles.subtitle}>
          Join thousands of people who use <strong>FinTrack</strong> to manage their money smarter. 
          Start today and achieve your financial goals with ease.
        </p>
        <div className={styles.actions}>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className={styles.btnPrimary}
          >
            Get Started Now
          </Link>
          <Link 
            to="products" 
            smooth={true} 
            duration={500} 
            className={styles.btnOutline}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Started;