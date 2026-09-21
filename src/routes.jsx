// routes.jsx
import App from "./App";
import Home from "./components/home/Home.jsx";
import About from "./About";
import Cart from "./components/cart/Cart.jsx";
import NoMatch from "./NoMatch";
import Contact from "./Contact";
import PostLists from "./PostLists";
import Post from "./Post";
import Shop from "./components/shop/Shop.jsx";
import Spinner from "./components/spinner/Spinner.jsx";
import ProductDetail from "./components/productDetail/ProductDetail.jsx";
import ProductGrid from "./components/productGrid/ProductGrid.jsx";
import fetchJsonWithCache from "./api/fetchJsonWithCache";

const routes = [
  {
    path: "/",
    element: <App />,
    hydrateFallbackElement: <Spinner />,
    errorElement: <NoMatch />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "/shop",
        element: <Shop />,

        children: [
          {
            index: true,
            loader: fetchJsonWithCache,
            element: <ProductGrid />,
          },
          {
            path: "product/:productId",
            loader: fetchJsonWithCache,
            element: <ProductDetail />,
          },
        ],
      },

      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      {
        path: "posts",
        element: <Contact />,
        children: [
          { index: true, element: <PostLists /> },
          { path: ":slug", element: <Post /> },
        ],
      },
      { path: "*", element: <NoMatch /> },
    ],
  },
];

export default routes;
