import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import styles from "./cardDetail.module.css";

function filteredProduct(products, itemId) {
  if (!Array.isArray(products)) {
    return null;
  }

  if (itemId === undefined || itemId === null) {
    return null;
  }

  const foundProduct = products.find((product) => product?.id === itemId);

  return foundProduct ?? null;
}

const CardDetail = () => {
  let { itemIds } = useParams();
  const itemId = Number(itemIds);
  const fetchJson = useLoaderData();
  const products = fetchJson.products;
  const product = filteredProduct(products, itemId);

  return (
    <>
      {" "}
      <div key={product.id}>
        <article className={styles.detailCard}>
          <div></div>
          <h2>{product.title}</h2>
          <div>
            <div>
              <div>${product.price}</div>
              <div>${product.description}</div>
              <button type="button" aria-label="Add product to cart"></button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default CardDetail;
