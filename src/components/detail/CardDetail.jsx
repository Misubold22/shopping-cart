import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import styles from "./cardDetail.module.css";
import findProductById from "../../utils/findProductById";
import pageVariants from "../pageVariants/pageVariants.js";
import { useState } from "react";
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
        <main>
          <div className={styles.card}>
            <div className={styles.card__body}>
              <div className={styles.leftHalf}>
                <div className={styles.left}>
                  <div className={styles.image}>
                    <img alt="" src={product.images[0]} />
                  </div>
                </div>
              </div>

              <div className={styles.rightHalf}>
                <div className={styles.featured_text}>
                  <h1 className={styles.h1}>{product.title}</h1>
                </div>
                <div className={styles.description}>
                  <p className={styles.p}>{product.description}</p>
                </div>
                <p className={styles.price}>${product.price}</p>
                <span className={styles.stock}>
                  <i className="fa fa-pen" />
                  {product.availabilityStatus}
                </span>
                <div className={styles.reviews}>
                  <ul className={styles.stars}>
                    <ProductRating
                      rating={product.rating}
                      readonly
                      size={18}
                      allowFraction
                    />
                  </ul>

                  <span>{product.reviews.length} reviews</span>
                </div>
                <div className={styles.number}>
                  <span className={styles.minus}>-</span>
                  <input
                    className={styles.input}
                    defaultValue="1"
                    type="text"
                  />
                  <span className={styles.plus}>+</span>
                </div>

                <button className={styles.CartBtn}>
                  <span className={styles.IconContainer}>
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
                  <p className={styles.text}>Add to Cart</p>
                </button>
              </div>
            </div>
            <div className={styles.card__footer}></div>{" "}
          </div>
        </main>
      </motion.div>
    </>
  );
};

export default CardDetail;
