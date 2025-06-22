// components/Toolbar.js
import styles from '../styles/Toolbar.module.css';

export default function Toolbar({ showSidebar, toggleSidebar, sortBy, setSortBy, itemCount }) {
  return (
    <div className={styles.toolbar}>
      <div className={styles.container}>
        <div className={styles.toolbarLeft}>
          <span className={styles.itemCount}>{itemCount} ITEMS</span>
          <button
            className={styles.filterToggle}
            onClick={toggleSidebar}
            aria-controls="filterSidebar"
            aria-expanded={showSidebar}
          >
            {showSidebar ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
        </div>
        <div className={styles.toolbarRight}>
          <select
            className={styles.sortDropdown}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort products"
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price-high">PRICE: HIGH TO LOW</option>
            <option value="price-low">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>
    </div>
  );
}