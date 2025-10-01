import styles from "./hero.module.css";
import { Link } from "react-scroll";
import phone from "../../assets/img/fintrack_phone.png";

function Hero() {
  return (
    <section 
      id="home" 
      className={styles.hero}
      aria-labelledby="hero-heading"
    >
      <div className={styles.hero_box}>
        <div className={styles.heroText}>
          <h1 id="hero-heading" className={styles.heroTitle}>
            Take Control of Your Financial Future
          </h1>
          <p className={styles.heroSubtitle}>
            FinTrack helps you manage your money, track expenses, and achieve your financial goals with ease.
          </p>
          <div className={styles.heroActions}>
            <Link 
              to="get-started" 
              smooth={true} 
              duration={500} 
              className={styles.btnPrimary}
              aria-label="Get started with FinTrack"
            >
              Get Started
            </Link>
            <Link 
              to="products" 
              smooth={true} 
              duration={500} 
              className={styles.btnOutline}
              aria-label="Learn more about FinTrack products"
            >
              Learn More
            </Link>
          </div>
        </div>
        <img 
          src={phone} 
          alt="FinTrack mobile app interface preview" 
          className={styles.heroImage} 
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Hero;
