// Home.jsx

import { useState, useEffect } from "react";

function sortProducts(products) {
  const unnwantedProductsIDs = [18, 22, 28, 34, 36, 39, 41];
  return products.filter(
    (product) => !unnwantedProductsIDs.includes(product.id),
  );
}

export function ProductsGrid() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/groceries",
        );
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts]);

  if (loading) return <h2 className="loading-msg">Loading...</h2>;
  if (error) return <div>Error: {error}</div>;
  // console.log(products);

  return sortProducts(products).map((product) => (
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
}

function Home() {
  return (
    <>
      <div style={{ padding: 20 }}>
        <h2>Home View</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      </div>

      <section className="products-grid" aria-label="Products list">
        <ProductsGrid />
      </section>
    </>
  );
}

export default Home;
