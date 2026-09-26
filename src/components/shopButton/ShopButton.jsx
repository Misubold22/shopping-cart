import { NavLink } from "react-router";
import styles from "./shopButton.module.css";

function ShopButton() {
  return (
    <NavLink to="/shop" className={styles.Button}>
      Browse Shop
    </NavLink>
  );
}

export default ShopButton;
