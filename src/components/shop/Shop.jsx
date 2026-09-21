// Shop.jsx
import { Outlet, useOutletContext } from "react-router";
import createOrderedProduct from "../../utils/createOrderedProduct";
import increaseProductQuantity from "../../data/increaseProductQuantity";
import { AnimatePresence } from "framer-motion";

function Shop() {
  const { setProductCount, boughtProducts, setBoughtProducts } =
    useOutletContext();
  const addBoughtProduct = (orderedProduct) => {
    setBoughtProducts((prevProducts) => [...prevProducts, orderedProduct]);
  };
  const handleBuy = (product, quantity) => {
    const productAlreadyBought = boughtProducts.some(
      (p) => p.id === product.id,
    );

    if (productAlreadyBought) {
      const increasedProductQuantity = increaseProductQuantity(
        boughtProducts,
        product,
        quantity,
      );
      setBoughtProducts(increasedProductQuantity);
      return;
    }
    addBoughtProduct(createOrderedProduct(product, quantity));
    setProductCount((count) => count + 1);
  };

  console.log(boughtProducts);

  return (
    <div className="shop">
      <AnimatePresence mode="wait">
        <Outlet context={{ handleBuy }} />
      </AnimatePresence>
    </div>
  );
}

export default Shop;
