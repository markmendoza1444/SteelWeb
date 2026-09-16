import { motion } from 'framer-motion';

export default function Process({ manufacturingProcess }) {
  return (
    <section className="process">
      <div className="process-container">
        <div className="section-header">
          <div className="section-eyebrow">Our Process</div>
          <h2>From Raw Steel to Finished Product</h2>
        </div>

        <div className="timeline-container">
          <div className="timeline">
            {manufacturingProcess.map((item, idx) => (
              <motion.div
                key={idx}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="timeline-number">{item.step}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
