// NoMatch.jsx
import { motion } from "framer-motion";
import styles from "./noMatch.module.css";
import ShopButton from "../shopButton/ShopButton.jsx";

function NoMatch() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      key="nomatch"
    >
      <div className={styles.notFound}>
        <h2 className={styles.notFoundHeader}>404: Page Not Found</h2>
        <p>
          Looks like this page isn't on our shelves. Let's get you back to the
          shop.
        </p>
        <ShopButton />
      </div>
    </motion.div>
  );
}

export default NoMatch;
