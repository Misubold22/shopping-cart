import { useState } from "react";
import styles from "./header.module.css";
import { NavLink, Outlet } from "react-router";
//import basketIcon from "../../assets/icons8-basket.png";
//import basketIcon from "../../assets/shopping-bag.png";
import { IoMdCart } from "react-icons/io";
import { IconContext } from "react-icons";

const ShowCartCount = ({ productCount }) => {
  // () => setIsHidden(false);
  return <div className={styles.orderCount}>{productCount}</div>;
};

const Header = ({ productCount, setProductCount }) => {
  const [clicked, setClicked] = useState(false);
  const [boughtProducts, setBoughtProducts] = useState([]);

  const handleClick = () => {
    console.log("sal din header");
  };

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
              <NavLink to="/" className={`${styles.list} ${styles.logoLink}`}>
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
              <NavLink to="/about" className={styles.list}>
                About Us
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink to="/profile" className={styles.list}>
                Profile
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink to="/posts" className={styles.list}>
                Contact
              </NavLink>
            </li>
            <NavLink to="/cart">
              <IconContext.Provider
                value={{ color: "#669c2a", size: "1.5rem" }}
              >
                <button className={styles.cartBtn} onClick={handleClick}>
                  <IoMdCart />
                  <ShowCartCount productCount={productCount} />
                </button>
              </IconContext.Provider>
            </NavLink>
          </div>

          <a className={styles.icon} onClick={() => setClicked(!clicked)}>
            <i className="fa fa-bars"></i>
          </a>
        </ul>
      </nav>
      <Outlet
        context={{
          setProductCount,
          boughtProducts,
          setBoughtProducts,
        }}
      />
    </header>
  );
};
export default Header;
