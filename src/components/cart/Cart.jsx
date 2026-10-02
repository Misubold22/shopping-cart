// Cart.jsx
import { motion } from "framer-motion";
import styles from "./cart.module.css";
import { useOutletContext } from "react-router";
import updateProductQuantity from "../../data/updateProductQuantity";
import calculateOrderSummary from "../../utils/calculateOrderSummary";
import { IconContext } from "react-icons";
import { RiDeleteBinLine } from "react-icons/ri";
import ShopButton from "../shopButton/ShopButton.jsx";

function CartItem({ handleProductDelete, product, setBoughtProducts }) {
  const handleQuantityIncrease = (id) => {
    updateProductQuantity(id, setBoughtProducts, product.quantity + 1);
  };

  const handleQuantityDecrease = (id) => {
    if (product.quantity > 1) {
      updateProductQuantity(id, setBoughtProducts, product.quantity - 1);
    }
  };

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
          <button
            className={styles.removeButton}
            onClick={() => handleProductDelete(product.id, product)}
          >
            <RiDeleteBinLine />
          </button>
        </IconContext.Provider>

        <div className={styles.quantity}>
          <button
            type="button"
            className={styles.decrease}
            onClick={() => handleQuantityDecrease(product.id)}
          >
            -
          </button>
          <input
            className={styles.quantityInput}
            type="text"
            readOnly
            value={product.quantity}
          />

          <button
            type="button"
            className={styles.increase}
            onClick={() => handleQuantityIncrease(product.id)}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

function OrderSummary({ boughtProducts }) {
  const { subTotal, discountAmount, taxAmount, shipping, finalPrice } =
    calculateOrderSummary(boughtProducts);

  return (
    <article className={styles.orderSummary}>
      <h2 className={styles.orderSummaryTitle}>Order Summary</h2>
      <div className={styles.row}>
        <span className={styles.label}>Subtotal</span>
        <span className={styles.value}>${subTotal.toFixed(2)}</span>
      </div>

      <div className={styles.rowDiscount}>
        <span className={styles.label}>Discount (-5%)</span>
        <span className={styles.valueNegative}>
          - ${discountAmount.toFixed(2)}{" "}
        </span>
      </div>

      <div className={styles.rowTax}>
        <span className={styles.label}>Tax</span>
        <span className={styles.value}>${taxAmount.toFixed(2)}</span>
      </div>

      <div className={styles.rowDelivery}>
        <span className={styles.label}>Delivery Fee</span>
        <span className={styles.value}>${shipping}</span>
      </div>

      <div className={styles.rowTotal}>
        <span className={styles.labelTotal}>Total</span>
        <span className={styles.valueTotal}> ${finalPrice.toFixed(2)}</span>
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
  const { setProductCount, boughtProducts, setBoughtProducts } =
    useOutletContext();
  const product = boughtProducts;
  console.log(product);

  const handleProductDelete = (id) => {
    const updatedCartList = boughtProducts.filter(
      (product) => product.id !== id,
    );
    setBoughtProducts(updatedCartList);
    setProductCount((count) => count - 1);
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
                  key={product.id}
                  handleProductDelete={handleProductDelete}
                  setBoughtProducts={setBoughtProducts}
                  boughtProducts={boughtProducts}
                />
              ))}{" "}
            </div>

            <OrderSummary boughtProducts={boughtProducts} />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Cart;
