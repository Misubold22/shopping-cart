import { useOutletContext } from "react-router";
import { useLoaderData } from "react-router";
import { NavLink } from "react-router";
import { Suspense } from "react";
import Spinner from "../../Spinner";
import ProductCard from "../productCard/ProductCard.jsx";

const ProductGrid = () => {
  //  const { handleClick, products, error, loading } = useOutletContext();
  const { handleClick } = useOutletContext();
  const fetchJson = useLoaderData();
  const products = fetchJson.products;
  //console.log(products);
  return products.map((product) => (
    <div key={product.id}>
      <ProductCard handleClick={handleClick} product={product} />{" "}
    </div>
  ));
};

export default ProductGrid;
