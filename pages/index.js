// pages/index.js
import { useState, useMemo } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Toolbar from '../components/Toolbar';
import FilterSidebar from '../components/FilterSidebar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return { props: { products } };
}

export default function Home({ products }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');
  const [filters, setFilters] = useState({
    categories: [],
    occasions: [],
    work: [],
    fabric: [],
    segment: [],
  });

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }));
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        filtered.sort((a, b) => b.rating.count - a.rating.count);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      default:
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    return filtered;
  }, [products, filters, sortBy]);

  return (
    <div>
      <Head>
        <title>Discover Our Products - Mettā Muse</title>
        <meta
          name="description"
          content="Explore premium fashion products curated for quality and style."
        />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <Toolbar
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
          sortBy={sortBy}
          setSortBy={setSortBy}
          itemCount={filteredAndSortedProducts.length}
        />
        <div style={{ display: 'flex' }}>
          <FilterSidebar
            showSidebar={showSidebar}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          <ProductGrid products={filteredAndSortedProducts} isLoading={false} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
