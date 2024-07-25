import { motion } from 'framer-motion';
// import './styles.css';

const draw = {
  hidden: { opacity: 0 },
  visible: (i: any) => {
    const delay = 1 + i * 0.5;
    return {
      opacity: 1,
      transition: {
        opacity: { delay, duration: 1.5 },
      },
    };
  },
};

export default function AboutAnimation() {
  return (
    <motion.svg
      width="600"
      height="200"
      viewBox="0 0 600 200"
      initial="hidden"
      animate="visible"
    >
      <motion.text
        x="100"
        y="100"
        fontSize="24"
        fill="#ff0055"
        variants={draw}
        custom={1}
      >
        Master II
      </motion.text>
      <motion.text
        x="300"
        y="100"
        fontSize="24"
        fill="#00cc88"
        variants={draw}
        custom={2}
      >
        + de 4 ans de dev
      </motion.text>
    </motion.svg>
  );
}
