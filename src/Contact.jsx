// Posts.jsx
import { Outlet } from "react-router";

function Contact() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}

export default Contact;
