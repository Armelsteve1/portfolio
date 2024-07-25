import React from 'react';
import { motion, Variants } from 'framer-motion';
import './TechnologyCard.css';

interface TechnologyCardProps {
  name: string;
  imageUrl: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, imageUrl }) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" />
      <motion.div className="card" variants={cardVariants}>
        <img src={imageUrl} alt={`${name} logo`} />
      </motion.div>
    </motion.div>
  );
};

export default TechnologyCard;
