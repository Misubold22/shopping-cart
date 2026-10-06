// AboutUs.jsx
import styles from "./aboutUs.module.css";
import aboutUsBanner from "../../assets/aboutUs.jpg";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className={styles.aboutUs}
    >
      <section className={styles.aboutUsSection}>
        <div className={styles.aboutImgWrapper}>
          <img
            src={aboutUsBanner}
            alt="About us banner"
            className={styles.aboutUsImage}
          />{" "}
          <h2 id="about-heading" className={styles.aboutHeading}>
            About Us
          </h2>
        </div>
        <div className={styles.contentWrapper}>
          <h3 className={styles.mottoHeader}> About OLIA</h3>
          <p className="lead-statement">
            We believe good food should be simple, thoughtful, and accessible.
          </p>

          <article className={styles.missionBlock}>
            <h3 className={styles.missionHeader}>Our mission</h3>
            <p>
              At OLIA, we strive to be more than just a place to buy groceries.
              We want to make everyday shopping a little more thoughtful — for
              our customers, our producers, and the planet. We believe in
              choosing products with care, supporting responsible and
              sustainable practices, and keeping things simple. From fresh
              produce to everyday pantry essentials, every product has a place
              in our market because we believe it belongs in yours. We also
              believe that small choices can make a difference. Eating well,
              reducing waste, choosing thoughtfully sourced products, and
              supporting responsible producers are all simple ways to build
              better habits.
            </p>
          </article>

          <section className="values-section">
            <h3 id="values-heading" className={styles.valuesHeading}>
              Our Values
            </h3>

            <ul className="values-list">
              <li className="value-item">
                <article>
                  <h4 className={styles.valueItemHeader}>
                    Thoughtfully sourced
                  </h4>
                  <p>
                    We choose products with care, focusing on quality, simple
                    ingredients, and responsible sourcing.
                  </p>
                </article>
              </li>

              <li className="value-item">
                <article>
                  <h4 className={styles.valueItemHeader}>Good food, simply</h4>
                  <p>
                    Everyday food shouldn't be complicated. We make it easier to
                    find honest, nourishing essentials.
                  </p>
                </article>
              </li>

              <li className="value-item">
                <article>
                  <h4 className={styles.valueItemHeader}>Less waste</h4>
                  <p>
                    Better choices include thinking about what we use, what we
                    buy, and what we leave behind.
                  </p>
                </article>
              </li>
            </ul>
          </section>

          <p className="tagline">
            Good food. Thoughtfully chosen. Simply OLIA.
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default AboutUs;
