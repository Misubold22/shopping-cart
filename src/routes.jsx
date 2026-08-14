// routes.jsx
import App from "./App";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import Posts from "./Posts";
import PostLists from "./PostLists";
import Post from "./Post";
import Profile from "./Profile";
//import randomProfile from "./randomProfile";
//import DefaultProfile from "./DefaultProfile";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "posts",
        element: <Posts />,
        children: [
          { index: true, element: <PostLists /> },
          { path: ":slug", element: <Post /> },
        ],
      },
      { path: "*", element: <NoMatch /> },

      {
        path: "profile/:name",
        element: <Profile />,
      },
    ],
  },
];

export default routes;
