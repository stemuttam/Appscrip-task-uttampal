// types/product.js
export const SortOptions = [
  'recommended',
  'newest',
  'popular',
  'price-high',
  'price-low'
];

export const FilterKeys = [
  'categories',
  'occasions',
  'work',
  'fabric',
  'segment'
];

export function isValidProduct(product) {
  return (
    product &&
    typeof product.id === 'number' &&
    typeof product.title === 'string' &&
    typeof product.price === 'number' &&
    typeof product.category === 'string' &&
    typeof product.image === 'string' &&
    product.rating &&
    typeof product.rating.rate === 'number' &&
    typeof product.rating.count === 'number'
  );
}