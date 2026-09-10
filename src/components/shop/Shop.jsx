// Shop.jsx
import { Outlet, useOutletContext } from "react-router";

function Shop() {
  const [setCount] = useOutletContext();

  const handleClick = (e) => {
    // console.log(e.target);
    setCount((count) => count + 1);
    e.preventDefault();
  };

  return (
    <>
      <section className="products-grid" aria-label="Products list">
        {" "}
        <Outlet context={{ handleClick }} />
      </section>
    </>
  );
}

export default Shop;
