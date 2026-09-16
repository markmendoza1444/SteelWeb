import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function Industries({ industries }) {
  return (
    <section className="industries">
      <div className="industries-container">
        <div className="section-header">
          <div className="section-eyebrow">Industries</div>
          <h2>Industries We Serve</h2>
          <p>Delivering specialized steel solutions across diverse sectors</p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, idx) => {
            const IconComponent = Icons[industry.icon];
            return (
              <motion.div
                key={idx}
                className="industry-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={industry.image} alt={industry.name} />
                <div className="industry-overlay">
                  <div className="industry-icon">
                    {IconComponent ? <IconComponent size={32} /> : null}
                  </div>
                  <h3>{industry.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
