import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import QuoteCTA from '../components/QuoteCTA';
import { products } from '../data/products';

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="section-eyebrow">Our Catalog</div>
          <h1>Premium Steel Products</h1>
          <p>Industry-leading materials for every application</p>
        </div>
      </section>

      <section className="products-full">
        <div className="products-container">
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </main>
  );
}
