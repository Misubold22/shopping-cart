// Shop.jsx
import removeUnwantedProducts from "../utils/removeUnwantedProducts";
import useGetProducts from "../hooks/useGetProducts";
//import getRequestWithNativeFetch from "../api/getRequestWithNativeFetch";
import Spinner from "../Spinner";
//import { useLocation } from "react-router";
import { useOutletContext } from "react-router";

const ProductsGrid = ({ handleClick }) => {
  const { products, error, loading } = useGetProducts();

  if (loading)
    return (
      <div className="loading">
        <Spinner />
        <p className="text">Loading...</p>
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  //console.log(products);
  return removeUnwantedProducts(products).map((product) => (
    <article className="product-card" key={product.id}>
      <div className="product-card-illustration">
        <img
          src={product.images[0]}
          id={product.id}
          onClick={handleClick}
          alt=""
        />

        <p className="product-title">{product.title}</p>
      </div>
    </article>
  ));
};

function Shop() {
  const [setCount, setIsHidden] = useOutletContext();
  const handleClick = (e) => {
    console.log(e.target.id);
    setCount((count) => count + 1);
    setIsHidden(true);
  };

  return (
    <>
      <section className="products-grid" aria-label="Products list">
        {" "}
        <ProductsGrid handleClick={handleClick} />
      </section>
    </>
  );
}

export default Shop;
