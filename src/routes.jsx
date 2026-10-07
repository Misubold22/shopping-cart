// routes.jsx
import App from "./App";
import Home from "./components/home/Home.jsx";
import AboutUs from "./components/aboutUs/AboutUs.jsx";
import Cart from "./components/cart/Cart.jsx";
import NoMatch from "./components/noMatch/NoMatch.jsx";
import ContactUs from "./components/contactUs/ContactUs.jsx";
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

      { path: "about", element: <AboutUs /> },
      { path: "cart", element: <Cart /> },
      {
        path: "contact",
        element: <ContactUs />,
      },
      { path: "*", element: <NoMatch /> },
    ],
  },
];

export default routes;
