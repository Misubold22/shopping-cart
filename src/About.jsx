// About.jsx

import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip. E about</p>
    </motion.div>
  );
}

export default About;
