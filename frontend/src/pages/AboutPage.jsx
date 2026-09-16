import { useEffect } from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Process from '../components/Process';
import Certifications from '../components/Certifications';
import { companyInfo, timeline, manufacturingProcess, statistics } from '../data/company';
import { certifications } from '../data/certifications';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="section-eyebrow">Our Story</div>
          <h1>Building Steel Solutions Since {companyInfo.founded}</h1>
          <p>{companyInfo.description}</p>
        </div>
      </section>

      <About />

      <section className="timeline-section">
        <div className="timeline-container">
          <div className="section-header">
            <div className="section-eyebrow">Company History</div>
            <h2>Our Journey</h2>
          </div>

          <div className="company-timeline">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className="timeline-entry"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-event">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process manufacturingProcess={manufacturingProcess} />
      <Certifications certifications={certifications} />
    </main>
  );
}
