// Cart.jsx
import { motion } from "framer-motion";
import styles from "./cart.module.css";
import { useOutletContext } from "react-router";
import { useState } from "react";
import { IconContext } from "react-icons";
import { RiDeleteBinLine } from "react-icons/ri";
import ShopButton from "../shopButton/ShopButton.jsx";

import { AnimatePresence } from "framer-motion";

function CartItem({ product, decrementCounter, incrementCounter }) {
  return (
    <article key={product.id} className={styles.CartItem}>
      <div className={styles.productImageContainer}>
        {" "}
        <img className={styles.productImage} alt="" src={product.image} />
      </div>

      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <div className={styles.productPrice}>${product.price}</div>
      </div>

      <div className={styles.productActions}>
        <IconContext.Provider value={{ color: "red", size: "1.3rem" }}>
          <button className={styles.removeButton}>
            <RiDeleteBinLine />
          </button>
        </IconContext.Provider>
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
      </div>
    </article>
  );
}

function OrderSummary() {
  return (
    <article className={styles.orderSummary}>
      <h2 className={styles.orderSummaryTitle}>Order Summary</h2>
      <div className={styles.row}>
        <span className={styles.label}>Subtotal</span>
        <span className={styles.value}>$168.57</span>
      </div>

      <div className={styles.rowDiscount}>
        <span className={styles.label}>Discount (-4%)</span>
        <span className={styles.valueNegative}>-$6.41</span>
      </div>

      <div className={styles.rowDelivery}>
        <span className={styles.label}>Delivery Fee</span>
        <span className={styles.value}>$15.00</span>
      </div>

      <div className={styles.rowTotal}>
        <span className={styles.labelTotal}>Total</span>
        <span className={styles.valueTotal}>$177.15</span>
      </div>
    </article>
  );
}

function EmptyCart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      key="emptycart"
    >
      <div className={styles.emptyCart}>
        <h2 className={styles.emptyCartTitle}>
          They Are No Items In Your Basket
        </h2>
        <ShopButton />
      </div>
    </motion.div>
  );
}

function Cart() {
  const { boughtProducts, setBoughtProduct } = useOutletContext();
  const product = boughtProducts;
  console.log(product);
  console.log(boughtProducts.length);
  const [quantity, setQuantity] = useState(1);

  const incrementCounter = () => {
    setQuantity(quantity + 1);
  };

  const decrementCounter = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  const isCartEmpty = boughtProducts.length === 0;

  return (
    <>
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <motion.div
          className="cart"
          key="cart"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.page}>
            <div className={styles.cartHeader}>
              <h1 className={styles.cartTitle}>Your Basket</h1>
            </div>
          </div>
          <div className={styles.cartLayout}>
            <div className={styles.productsContainer}>
              {" "}
              {boughtProducts.map((product) => (
                <CartItem
                  product={product}
                  incrementCounter={incrementCounter}
                  decrementCounter={decrementCounter}
                  key={product.id}
                />
              ))}
            </div>

            <OrderSummary />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Cart;
