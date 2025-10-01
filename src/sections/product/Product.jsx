import styles from "./product.module.css";
import products from "../../data/products.json";

function Product() {
  return (
     <section id="products" className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Products</h2>
        <p className={styles.sectionSubtitle}>
          Explore FinTrack’s tools designed to make money management simple and effective.
        </p>
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.icon}>
                <i className={product.icon} aria-hidden="true"></i>
              </div>
              <h3 className={styles.cardTitle}>{product.title}</h3>
              <p className={styles.cardDescription}>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product;