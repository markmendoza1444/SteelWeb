import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function ServiceCard({ service }) {
  const IconComponent = Icons[service.icon];

  return (
    <motion.div
      className="service-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="service-icon">
        {IconComponent ? <IconComponent size={32} /> : null}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </motion.div>
  );
}
