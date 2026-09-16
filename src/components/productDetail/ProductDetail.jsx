import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import styles from "./productDetail.module.css";
import findProductById from "../../utils/findProductById";
import pageVariants from "../pageVariants/pageVariants.js";
//import { useState } from "react";
import { motion } from "framer-motion";
import { Rating } from "react-simple-star-rating";

function ProductRating({ rating }) {
  return (
    <Rating
      initialValue={rating}
      readonly
      size={20}
      allowFraction
      SVGclassName="inline-block"
    />
  );
}

const CardDetail = () => {
  let { itemIds } = useParams();
  const itemId = Number(itemIds);
  const fetchJson = useLoaderData();
  const products = fetchJson.products;
  const product = findProductById(products, itemId);
  console.log(product);

  return (
    <>
      {" "}
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        key={product.id}
      >
        <article className={styles.card}>
          <div className={styles.cardBody}>
            <div className={styles.leftHalf}>
              <div className={styles.cardImageWrap}>
                <img alt="" src={product.images[0]} />
              </div>
            </div>

            <div className={styles.rightHalf}>
              <h1 className={styles.cardTitle}>{product.title}</h1>
              <div className={styles.cardDescriptionWrap}>
                <p className={styles.cardDescription}>{product.description}</p>
              </div>
              <p className={styles.cardPrice}>${product.price}</p>
              <span className={styles.cardStock}>
                <i className="fa fa-pen" />
                {product.availabilityStatus}
              </span>
              <div className={styles.ratingSummary}>
                <ul className={styles.rating}>
                  <li>
                    <ProductRating
                      rating={product.rating}
                      readonly
                      size={18}
                      allowFraction
                    />
                  </li>
                </ul>
                <span className={styles.reviewCount}>
                  {product.reviews.length} reviews
                </span>
              </div>
              <div className={styles.quantity}>
                <button type="button" className={styles.decrease}>
                  -
                </button>
                <input
                  className={styles.quantityInput}
                  defaultValue="1"
                  type="text"
                  readOnly
                />
                <button type="button" className={styles.increase}>
                  +
                </button>
              </div>

              <button className={styles.CartBtn}>
                <span className={styles.btnIconContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill="white"
                    className="cart"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </span>
                <p className={styles.btnText}>Add to Cart</p>
              </button>
            </div>
          </div>
          <div className={styles.card__footer}></div>{" "}
        </article>
      </motion.div>
    </>
  );
};

export default CardDetail;
