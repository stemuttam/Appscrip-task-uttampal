import ProductCard from './ProductCard';
import styles from '../styles/ProductGrid.module.css';

export default function ProductGrid({ products, isLoading }) {
  if (isLoading) {
    return (
      <div className={styles.productContainer}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          Loading products...
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.productContainer}>
        <div className={styles.emptyState}>
          <h2>No products found</h2>
          <p>Try adjusting your filters to see more products.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
