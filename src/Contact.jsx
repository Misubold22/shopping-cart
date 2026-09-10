// Posts.jsx
import { Outlet } from "react-router";
import Footer from "./components/footer/Footer.jsx";
import { useState } from "react";

function Contact() {
  const [counts, setCounts] = useState(5);
  return (
    <div>
      <h2>Blog</h2>
      <Outlet context={[counts]} />
    </div>
  );
}

export default Contact;
