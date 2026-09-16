import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import QuoteCTA from '../components/QuoteCTA';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="page-hero"><h1>Product not found</h1></div>;
  }

  return (
    <main>
      <section className="product-detail">
        <div className="product-detail-container">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <div className="section-eyebrow">{product.category}</div>
            <h1>{product.name}</h1>
            <p className="intro">{product.description}</p>
            
            <div className="detail-section">
              <h3>Applications</h3>
              <ul>
                {product.applications.map(app => <li key={app}>{app}</li>)}
              </ul>
            </div>

            <div className="detail-section">
              <h3>Specifications</h3>
              <ul>
                {product.specifications.grades && (
                  <li><strong>Grades:</strong> {product.specifications.grades.join(', ')}</li>
                )}
                {product.specifications.shapes && (
                  <li><strong>Shapes:</strong> {product.specifications.shapes.join(', ')}</li>
                )}
                {product.specifications.standards && (
                  <li><strong>Standards:</strong> {product.specifications.standards.join(', ')}</li>
                )}
              </ul>
            </div>

            <button className="btn btn-primary">Request Quote</button>
          </div>
        </div>
      </section>
      <QuoteCTA />
    </main>
  );
}
