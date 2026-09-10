import { NavLink } from "react-router";
import { Suspense } from "react";
import Spinner from "../../Spinner";
import styles from "./productCard.module.css";
import { IoMdCart } from "react-icons/io";

const ProductCard = ({ product, handleClick }) => (
  <NavLink to={`product/${product.id}`} viewTransition>
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  </NavLink>
);

export default ProductCard;
