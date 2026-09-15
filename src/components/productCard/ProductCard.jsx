import { NavLink } from "react-router";
import { Suspense } from "react";
import Spinner from "../spinner/Spinner.jsx";
import styles from "./productCard.module.css";
import { IoMdCart } from "react-icons/io";
import * as motion from "motion/react-client";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const ProductCard = ({ product, handleClick }) => (
  <NavLink to={`product/${product.id}`}>
    <Suspense fallback={<Spinner />}>
      <motion.section
        variants={cardVariants}
        className={styles.productsGrid}
        aria-label="Products list"
        key="grids"
      >
        <article className={styles.card}>
          <div className={styles.cardImageWrap}>
            <img alt="" src={product.images[0]} />
          </div>
          <h2 className={styles.cardTitle}>{product.title}</h2>
          <div className={styles.cardFooter}>
            <div className={styles.cardFooterDetails}>
              <div className={styles.cardPrice}>${product.price}</div>
              <button
                className={styles.cardAddBtn}
                type="button"
                onClick={handleClick}
                aria-label="Add product to cart"
              >
                <IoMdCart />
              </button>
            </div>
          </div>
        </article>
      </motion.section>
    </Suspense>
  </NavLink>
);

export default ProductCard;
