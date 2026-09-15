import { useOutletContext } from "react-router";
import { useLoaderData } from "react-router";
import ProductCard from "../productCard/ProductCard.jsx";
import removeUnwantedProducts from "../../utils/removeUnwantedProducts";
import styles from "./productGrid.module.css";
import * as motion from "motion/react-client";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const ProductGrid = () => {
  const { handleClick } = useOutletContext();
  const fetchJson = useLoaderData();
  const products = fetchJson.products;
  console.log(products);
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.productsGrid}
      aria-label="Products list"
      key="grid"
      exit="exit"
    >
      {removeUnwantedProducts(products).map((product) => (
        <ProductCard
          key={product.id}
          handleClick={handleClick}
          product={product}
        />
      ))}
    </motion.section>
  );
};
export default ProductGrid;
