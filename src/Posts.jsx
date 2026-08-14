// Posts.jsx
import { Outlet } from "react-router";

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}

export default Posts;
