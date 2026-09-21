// Cart.jsx

import { motion } from "framer-motion";
import styles from "./cart.module.css";
import { useOutletContext } from "react-router";
import { useState } from "react";

function CartCard({ product, decrementCounter, incrementCounter }) {
  return (
    <article key={product.id} className={styles.card}>
      {" "}
      <h2 className={styles.cardTitle}>{product.title}</h2>
      <div className={styles.cardFooter}>
        <div className={styles.cardFooterDetails}>
          <div className={styles.cardPrice}>${product.price}</div>
        </div>
      </div>
      <div className={styles.quantity}>
        <button
          type="button"
          className={styles.decrease}
          onClick={decrementCounter}
        >
          -
        </button>
        <input
          className={styles.quantityInput}
          defaultValue={product.quantity}
          type="text"
          readOnly
          //value={product.quantity}
        />
        <button
          type="button"
          className={styles.increase}
          onClick={incrementCounter}
        >
          +
        </button>
      </div>
    </article>
  );
}

function Cart() {
  const { boughtProducts, setBoughtProduct } = useOutletContext();
  const product = boughtProducts;
  console.log(product);

  const [quantity, setQuantity] = useState(1);

  const incrementCounter = () => {
    setQuantity(quantity + 1);
  };

  const decrementCounter = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      key="cart"
    >
      {" "}
      {boughtProducts.map((product) => (
        <CartCard
          product={product}
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
          key={product.id}
        />
      ))}
    </motion.div>
  );
}

export default Cart;
