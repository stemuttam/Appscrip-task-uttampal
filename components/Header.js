// components/Header.js
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.leftSpacer}></div>
          <div className={styles.logo}>
            <h1>LOGO</h1>
          </div>
          <div className={styles.headerIcons}>
            <span className={styles.icon} title="Search" role="button" tabIndex={0}>🔍</span>
            <span className={styles.icon} title="Wishlist" role="button" tabIndex={0}>♡</span>
            <span className={styles.icon} title="Shopping Cart" role="button" tabIndex={0}>🛒</span>
            <span className={styles.icon} title="User Account" role="button" tabIndex={0}>👤</span>
            <span className={styles.icon} title="Language: English">ENG</span>
          </div>
        </div>
        <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
          <ul className={styles.navMenu}>
            <li><a href="#shop">SHOP</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#stories">STORIES</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}