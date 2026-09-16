import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=500&fit=crop"
            alt="Manufacturing facility"
          />
        </div>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-eyebrow">About Us</div>
          <h2>Built on Precision. Driven by Quality.</h2>
          <p>
            For over three decades, SteelCore Industries has been delivering premium
            steel solutions to industries worldwide. Our commitment to engineering excellence,
            quality assurance, and customer satisfaction drives everything we do.
          </p>
          <p>
            We combine advanced manufacturing capabilities with deep industry expertise
            to provide not just products, but complete solutions that power infrastructure
            and innovation across the globe.
          </p>
          <div className="about-highlights">
            <div className="highlight">
              <h4>Manufacturing Excellence</h4>
              <p>State-of-the-art facilities with cutting-edge technology</p>
            </div>
            <div className="highlight">
              <h4>Quality Assurance</h4>
              <p>Rigorous testing and inspection at every stage</p>
            </div>
            <div className="highlight">
              <h4>Global Reach</h4>
              <p>Operations and partnerships across 25+ countries</p>
            </div>
          </div>
          <button className="btn btn-primary">Learn More</button>
        </motion.div>
      </div>
    </section>
  );
}
