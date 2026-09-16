import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <video
        autoPlay
        muted
        loop
        className="hero-video"
        src="https://videos.pexels.com/video-files/3571896/3571896-hd_1920_1080_30fps.mp4"
      />
      
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-eyebrow" variants={itemVariants}>
          STEEL • ENGINEERING • FABRICATION
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Engineered For<br />Strength.
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          Precision steel solutions built for construction, infrastructure, and industry.
        </motion.p>

        <motion.div className="hero-cta" variants={itemVariants}>
          <Link to="/products" className="btn btn-primary">
            Explore Products
          </Link>
          <Link to="/request-quote" className="btn btn-secondary">
            Request A Quote <ArrowRight size={18} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
