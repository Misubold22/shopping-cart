import { NavLink } from "react-router";
import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        <section className={styles.newsletter}>
          <div>
            <h2>Stay connected</h2>
            <p className={styles.newsletterDescription}>
              Fresh food, seasonal picks, and news from OLIA.{" "}
            </p>
          </div>
          <form className={styles.subscribeForm}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />{" "}
            <button type="submit" className={styles.subscribeBtn}>
              Subscribe
            </button>{" "}
          </form>
        </section>
        <hr />

        <div className={styles.footerNav}>
          <nav aria-label="Footer navigation">
            <ul className={styles.primaryLinks}>
              <li>
                <NavLink to="/" viewTransition className={styles.navItem}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/shop" viewTransition className={styles.navItem}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" viewTransition className={styles.navItem}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  viewTransition
                  className={styles.navItem}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <nav aria-label="Legal and help">
            <ul className={styles.secondaryLinks}>
              <li>
                <NavLink to="/" viewTransition className={styles.navItem}>
                  Privacy Policy
                </NavLink>
              </li>

              <li>
                <NavLink to="/shop" viewTransition className={styles.navItem}>
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" viewTransition className={styles.navItem}>
                  ToS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  viewTransition
                  className={styles.navItem}
                >
                  Shipping
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.bottom}>
          © 2026 OLIA Market. Good food, simply.
        </div>
      </footer>{" "}
    </>
  );
}

export default Footer;
