import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Certifications({ certifications }) {
  return (
    <section className="certifications">
      <div className="certifications-container">
        <div className="section-header">
          <div className="section-eyebrow">Certifications</div>
          <h2>Quality You Can Trust</h2>
          <p>International standards and compliance certifications</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="cert-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cert-code">{cert.code}</div>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
