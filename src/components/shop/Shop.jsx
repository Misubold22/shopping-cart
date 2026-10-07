// Shop.jsx
import { Outlet, useOutletContext } from "react-router";
import createOrderedProduct from "../../utils/createOrderedProduct";
import updateProductQuantity from "../../data/updateProductQuantity";
import { AnimatePresence } from "framer-motion";

function Shop() {
  const { setProductCount, boughtProducts, setBoughtProducts } =
    useOutletContext();
  const addBoughtProduct = (orderedProduct) => {
    setBoughtProducts((prevProducts) => [...prevProducts, orderedProduct]);
  };
  const handleBuy = (product, quantity, id) => {
    const productAlreadyBought = boughtProducts.some(
      (p) => p.id === product.id,
    );

    if (productAlreadyBought) {
      updateProductQuantity(id, setBoughtProducts, quantity, true);
      return;
    }
    addBoughtProduct(createOrderedProduct(product, quantity));
    setProductCount((count) => count + 1);
  };

  return (
    <div className="shop">
      <AnimatePresence mode="wait">
        <Outlet context={{ handleBuy }} />
      </AnimatePresence>
    </div>
  );
}

export default Shop;
