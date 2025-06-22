import { useState } from 'react';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <article className={styles.productCard}>
      <div className={styles.productImageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
          loading="lazy"
        />
        <span className={styles.productBadge}>NEW PRODUCT</span>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.title}</h3>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        <p className={styles.signinNote}>Sign in or Create an account to see pricing</p>
        <div className={styles.productActions}>
          <button
            className={styles.wishlistBtn}
            onClick={() => setIsWishlisted(!isWishlisted)}
            aria-label={`${isWishlisted ? 'Remove' : 'Add'} ${product.title} ${isWishlisted ? 'from' : 'to'} wishlist`}
            style={{ color: '#e74c3c' }}
          >
            {isWishlisted ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </article>
  );
}
