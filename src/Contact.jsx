// Posts.jsx
import { Outlet } from "react-router";

import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [counts, setCounts] = useState(5);
  return (
    <motion.div animate={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
      <h2>Blog</h2>
      <Outlet context={[counts]} />
    </motion.div>
  );
}

export default Contact;
