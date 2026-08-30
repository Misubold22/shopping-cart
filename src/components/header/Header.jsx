import { useState } from "react";
import styles from "./header.module.css";
import { NavLink, Outlet } from "react-router";
//import basketIcon from "../../assets/icons8-basket.png";
//import basketIcon from "../../assets/shopping-bag.png";
import { IoMdCart } from "react-icons/io";
import { IconContext } from "react-icons";

const ShowCartCount = ({ count }) => {
  // () => setIsHidden(false);
  return <div className={styles.orderCount}>{count}</div>;
};

const Header = ({ count, setCount }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <header className={styles.header}>
      <nav
        className={
          clicked
            ? `${styles.nav} ${styles.responsive}`
            : `${styles.nav} ${styles.desktop__nav}`
        }
      >
        <ul>
          {!clicked && (
            <li className={styles.logoItem}>
              <NavLink
                to="/"
                viewTransition
                className={`${styles.list} ${styles.logoLink}`}
              >
                OLIA
              </NavLink>
            </li>
          )}

          <div className={styles.right}>
            <li className={styles.navItem}>
              <NavLink to="/shop" viewTransition className={styles.list}>
                Shop
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink to="/about" viewTransition className={styles.list}>
                About Us
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink to="/posts" viewTransition className={styles.list}>
                Contact
              </NavLink>
            </li>

            <IconContext.Provider value={{ color: "#669c2a", size: "1.5rem" }}>
              <div className={styles.image}>
                <IoMdCart />
                <ShowCartCount count={count} />
              </div>
            </IconContext.Provider>
          </div>

          <a className={styles.icon} onClick={() => setClicked(!clicked)}>
            <i className="fa fa-bars"></i>
          </a>
        </ul>
      </nav>
      <Outlet context={[setCount]} />
    </header>
  );
};
export default Header;
