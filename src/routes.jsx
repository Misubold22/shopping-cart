// routes.jsx
import App from "./App";
import Home from "./components/home/Home.jsx";
import About from "./About";
import NoMatch from "./NoMatch";
import Contact from "./Contact";
import PostLists from "./PostLists";
import Post from "./Post";
import Shop from "./components/shop/Shop.jsx";
import Spinner from "./components/spinner/Spinner.jsx";
import CardDetail from "./components/detail/CardDetail.jsx";
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
            path: "product/:itemIds",
            loader: fetchJsonWithCache,
            element: <CardDetail />,
          },
        ],
      },

      { path: "about", element: <About /> },
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
