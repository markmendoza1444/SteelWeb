import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <motion.article
      className="product-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-content">
        <div className="product-badge">{product.category}</div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link to={`/products/${product.id}`} className="product-link">
          View Details <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
