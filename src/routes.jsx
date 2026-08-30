// routes.jsx
import App from "./App";
import Home from "./components/home/Home.jsx";
import About from "./About";
import NoMatch from "./NoMatch";
import Contact from "./Contact";
import PostLists from "./PostLists";
import Post from "./Post";
import Shop from "./components/shop/Shop.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      { index: true, element: <Home /> },

      { path: "shop", element: <Shop /> },
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
