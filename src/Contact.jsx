// Posts.jsx
import { Outlet } from "react-router";
import Footer from "./components/footer/Footer.jsx";

function Contact() {
  return (
    <div>
      <h2>Blog</h2>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Contact;
