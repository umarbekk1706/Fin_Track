import styles from "./header.module.css";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import logo from "../../../public/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

 
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} role="navigation" aria-label="Main Navigation">
        <div className={styles.navContainer}>
          
          <Link to="home" smooth={true} duration={500} onClick={() => scrollToSection("home")} aria-label="Go to Home section">
            <img src={logo} alt="FinTrack company logo" className={styles.logo} />
          </Link>

          <ul
            className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}
          >
            <li><Link to="home" smooth={true} duration={500} onClick={() => scrollToSection("home")} aria-label="Go to Home section">Home</Link></li>
            <li><Link to="benefits" smooth={true} duration={500} onClick={() => scrollToSection("benefits")} aria-label="Go to Benefits section">Benefits</Link></li>
            <li><Link to="products" smooth={true} duration={500} onClick={() => scrollToSection("products")} aria-label="Go to Products section">Products</Link></li>
            <li><Link to="get-started" smooth={true} duration={500} onClick={() => scrollToSection("get-started")} aria-label="Go to Get Started section">Get Started</Link></li>
            <li><Link to="faq" smooth={true} duration={500} onClick={() => scrollToSection("faq")} aria-label="Go to FAQ section">FAQ</Link></li>
          </ul>


          <div className={styles.btns}>
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </button>

            <div className={styles.navActions}>
              <button
                className={styles.themeToggle}
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
