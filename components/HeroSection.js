// components/HeroSection.js
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.heroSubtitle}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
            Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
      </div>
    </section>
  );
}