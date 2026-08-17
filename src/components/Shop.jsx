// Shop.jsx
import removeUnwantedProducts from "../utils/removeUnwantedProducts";
import useGetProducts from "../hooks/useGetProducts";

const ProductsGrid = () => {
  const { products, error, loading } = useGetProducts();

  if (loading) return <h2 className="loading-msg">Loading...</h2>;
  if (error) return <div>Error: {error}</div>;

  return removeUnwantedProducts(products).map((product) => (
    <article className="product-card" key={product.id}>
      <div className="product-card-illustration">
        <img
          src={product.images[0]}
          id={product.id}
          onClick={(e) => console.log(e.target.id)}
          alt=""
        />
        <p className="product-title">{product.title}</p>
      </div>
    </article>
  ));
};

function Shop() {
  return (
    <>
      <section className="products-grid" aria-label="Products list">
        {" "}
        <ProductsGrid />
      </section>
    </>
  );
}

export default Shop;
