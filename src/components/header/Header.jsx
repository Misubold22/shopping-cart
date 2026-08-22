import { useState } from "react";
import styles from "./header.module.css";
import { NavLink, Outlet } from "react-router";
//import basketIcon from "../../assets/icons8-basket.png";
//import basketIcon from "../../assets/shopping-bag.png";
import { IoMdCart } from "react-icons/io";
import { IconContext } from "react-icons";

const ShowCartCount = ({ count, setIsHidden }) => {
  () => setIsHidden(false);
  return <div className={styles.orderCount}>{count}</div>;
};

const Header = ({ isHidden, setIsHidden, count, setCount }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <header>
      <nav
        className={
          clicked
            ? `${styles.nav} ${styles.responsive}`
            : `${styles.nav} ${styles.desktop__nav}`
        }
      >
        <ul>
          {!clicked && (
            <NavLink
              to="/"
              viewTransition
              className={`${styles.list}${styles.logo}`}
            >
              <li className={styles.logo}>OLIA</li>
            </NavLink>
          )}
          <div className={styles.right}>
            <NavLink to="/shop" viewTransition className={styles.list}>
              <li>Shop</li>
            </NavLink>
            <NavLink to="/about" viewTransition className={styles.list}>
              <li>About Us</li>
            </NavLink>
            <NavLink to="/posts" viewTransition className={styles.list}>
              <li>Contact</li>
            </NavLink>
            <IconContext.Provider value={{ color: "#2a479c", size: "1.5rem" }}>
              <div className={styles.image}>
                <IoMdCart />
                {isHidden && (
                  <ShowCartCount
                    isHidden={false}
                    setIsHidden={setIsHidden}
                    count={count}
                  />
                )}
              </div>
            </IconContext.Provider>
          </div>
          <a className={styles.icon} onClick={() => setClicked(!clicked)}>
            <i className="fa fa-bars"></i>
          </a>
        </ul>
      </nav>
      <Outlet context={[setCount, setIsHidden]} />
    </header>
  );
};
export default Header;
