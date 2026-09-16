import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function QuoteCTA() {
  return (
    <motion.section
      className="quote-cta"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="quote-container">
        <h2>Ready for Your Next Project?</h2>
        <p>Get a personalized quote from our expert team</p>
        <Link to="/request-quote" className="btn btn-primary">
          Request a Quote
        </Link>
      </div>
    </motion.section>
  );
}
