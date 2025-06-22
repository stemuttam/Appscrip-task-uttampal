import styles from '../styles/FilterSidebar.module.css';

const categoryMapping = {
  "men's clothing": "Men",
  "women's clothing": "Women",
  "jewelery": "Baby & Kids",
  "electronics": "Electronics",
};

export default function FilterSidebar({ showSidebar, filters, onFilterChange }) {
  return (
    <aside
      className={`${styles.filterSidebar} ${!showSidebar ? styles.hidden : ''}`}
      id="filterSidebar"
      aria-label="Product filters"
    >
      <div className={styles.filterSection}>
        <h3>IDEAL FOR</h3>
        <div className={styles.checkboxGroup}>
          {Object.entries(categoryMapping).map(([apiCategory, displayName]) => (
            <label key={apiCategory} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value={apiCategory}
                checked={filters.categories.includes(apiCategory)}
                onChange={() => onFilterChange('categories', apiCategory)}
              />
              <span>{displayName}</span>
            </label>
          ))}
        </div>
      </div>

      {renderCheckboxGroup('OCCASION', ['Casual', 'Formal', 'Party'], 'occasions', filters, onFilterChange)}
      {renderCheckboxGroup('WORK', ['Office', 'Work From Home'], 'work', filters, onFilterChange)}
      {renderCheckboxGroup('FABRIC', ['Cotton', 'Silk', 'Wool'], 'fabric', filters, onFilterChange)}
      {renderCheckboxGroup('SEGMENT', ['Luxury', 'Premium', 'Budget'], 'segment', filters, onFilterChange)}
    </aside>
  );
}

function renderCheckboxGroup(title, items, filterKey, filters, onFilterChange) {
  return (
    <div className={styles.filterSection}>
      <h3>{title}</h3>
      <div className={styles.checkboxGroup}>
        {items.map((item) => {
          const value = item.toLowerCase().replace(/\s+/g, '-');
          return (
            <label key={item} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                value={value}
                checked={filters[filterKey].includes(value)}
                onChange={() => onFilterChange(filterKey, value)}
              />
              <span>{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
