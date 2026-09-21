import styles from "./home.module.css";
import introPic from "../../assets/shoppingBag.jpg";
import introPic2 from "../../assets/fruitsAndVegetables.jpg";
import fieldPic from "../../assets/field.jpg";
import { NavLink } from "react-router";
import { Suspense } from "react";
import Spinner from "../spinner/Spinner.jsx";
import { motion } from "motion/react";

//import pageVariants from "../pageVariants/pageVariants.js";
//import { motion } from "framer-motion";
const ease = [0.16, 1, 0.3, 1];

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
    >
      <Suspense fallback={<Spinner />}>
        <section className={styles.intro}>
          <div className={styles.infoContainer}>
            <h1 className={styles.introHeader}>organic market</h1>
            <p className={styles.tagline}>Good food, simply.</p>
            <p className={styles.introDescription}>
              Fresh, thoughtfully sourced food for everyday living. Simple
              products. Honest ingredients. Less waste.
            </p>

            <NavLink to="shop">
              {" "}
              <button className={styles.Button}>Browse Shop</button>
            </NavLink>
          </div>
          <section className={styles.pictureContainer}>
            <div className={styles.introImageContainer}>
              <img
                src={introPic}
                alt="Fresh produce in a reusable shopping bag"
                className={styles.introImage}
              />{" "}
            </div>
            <div className={styles.textContainer}>
              <div className={styles.imgDescription}>
                <h4 className={styles.imgHeadline}>Fresh & simple</h4>
                <p className={styles.imgParagraph}>
                  Everyday essentials, thoughtfully selected for your kitchen.
                </p>
              </div>
              <div className={styles.secondaryImageContainer}>
                <img
                  src={introPic2}
                  alt="Fresh fruits and vegetables"
                  className={styles.secondaryImage}
                />
              </div>

              <div className={styles.imgDescription}>
                <h4 className={styles.imgHeadline}>Thoughtfully sourced</h4>
                <p className={styles.imgParagraph}>
                  From produce to pantry, chosen with care.
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className={styles.fieldSection}>
          <div className={styles.fieldDescription}>
            <h3>WHAT WE BELIEVE</h3>
            <h4 className={styles.fieldHeadline}>
              {" "}
              Good food starts with good ingredients.
            </h4>
            <p className={styles.fieldParagraph}>
              We keep things simple: fresh produce, quality essentials, and
              thoughtfully sourced food for everyday living.
            </p>
            <p className={styles.fieldParagraph}>
              From crisp apples and cucumbers to rice, honey, milk, eggs, and
              everything in between — OLIA is about everyday food, thoughtfully
              chosen.
            </p>
            <h4 className={styles.fieldHeadline}>
              {" "}
              Simple choices. Good food.
            </h4>
          </div>
          <img
            src={fieldPic}
            alt="Fresh fruits and vegetables"
            className={styles.fieldImg}
          />
        </section>
      </Suspense>
    </motion.div>
  );
}

export default Home;
