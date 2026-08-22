import { useState, useEffect } from "react";
import getRequestWithNativeFetch from "../api/getRequestWithNativeFetch";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const postsData = await getRequestWithNativeFetch(
          "https://dummyjson.com/products/category/groceries",
        );
        setProducts(postsData.products);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts(null);
      } finally {
        //setLoading(false);
        setTimeout(() => setLoading(false), 300);
      }
    };

    fetchDataForPosts();
  }, []);

  return { products, error, loading };
};

export default useGetProducts;
