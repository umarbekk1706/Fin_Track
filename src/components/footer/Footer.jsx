import { Link } from "react-scroll";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import logo from "../../../public/logo.png";

const Footer = () => {
    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >

        <div className={styles.brand}>
         
                     <img src={logo} alt="FinTrack company logo" className={styles.logo} />
                  
          <p className={styles.description}>
            Smart financial tracking made simple. Budget, save, and reach your
            goals with FinTrack.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer Navigation">
          <ul className={styles.links}>
            <li><Link to="home" smooth={true} duration={500} onClick={() => scrollToSection("home")} aria-label="Go to Home section">Home</Link></li>
            <li><Link to="benefits" smooth={true} duration={500} onClick={() => scrollToSection("benefits")} aria-label="Go to Benefits section">Benefits</Link></li>
            <li><Link to="products" smooth={true} duration={500} onClick={() => scrollToSection("products")} aria-label="Go to Products section">Products</Link></li>
            <li><Link to="get-started" smooth={true} duration={500} onClick={() => scrollToSection("get-started")} aria-label="Go to Get Started section">Get Started</Link></li>
            <li><Link to="faq" smooth={true} duration={500} onClick={() => scrollToSection("faq")} aria-label="Go to FAQ section">FAQ</Link></li>
          </ul>
        </nav>
      </motion.div>

      <motion.div
        className={styles.bottom}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>© {new Date().getFullYear()} FinTrack. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
