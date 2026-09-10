import { useOutletContext } from "react-router";
import { useLoaderData } from "react-router";
import ProductCard from "../productCard/ProductCard.jsx";
import removeUnwantedProducts from "../../utils/removeUnwantedProducts";

const ProductGrid = () => {
  const { handleClick } = useOutletContext();
  const fetchJson = useLoaderData();
  const products = fetchJson.products;

  return removeUnwantedProducts(products).map((product) => (
    //return products.map((product) => (
    <div key={product.id}>
      <ProductCard handleClick={handleClick} product={product} />{" "}
    </div>
  ));
};

export default ProductGrid;
