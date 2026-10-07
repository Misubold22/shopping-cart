import styles from "./home.module.css";
import introPic from "../../assets/shoppingBag.jpg";
import introPic2 from "../../assets/fruitsAndVegetables.jpg";
import fieldPic from "../../assets/field.webp";
import { Suspense } from "react";
import Spinner from "../spinner/Spinner.jsx";
import ShopButton from "../shopButton/ShopButton.jsx";
import { motion } from "motion/react";
import pageVariants from "../pageVariants/pageVariants.js";

const ease = [0.16, 1, 0.3, 1];

function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7, ease }}
    >
      <Suspense fallback={<Spinner />}>
        <section className={styles.intro}>
          <h1 className={styles.introHeader}>organic market</h1>
          <p className={styles.tagline}>Good food, simply.</p>
          <p className={styles.introDescription}>
            Fresh, thoughtfully sourced food for everyday living. Simple
            products. Honest ingredients. Less waste.
          </p>
          <ShopButton />

          <section className={styles.pictureContainer}>
            <div className={styles.introImageContainer}>
              <img
                src={introPic}
                alt="Fresh produce in a reusable shopping bag"
                width={640}
                height={960}
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
                  width={640}
                  height={426}
                  className={styles.secondaryImage}
                />
              </div>

              <div className={styles.imgDescription}>
                <h4 className={styles.imgHeadline}>Thoughtfully sourced</h4>
                <p className={styles.imgParagraph}>
                  From produce to pantry, chosen with care.
                </p>
              </div>
            </div>{" "}
          </section>
        </section>
        <section className={styles.fieldSection}>
          <div className={styles.fieldDescription}>
            <h3 className={styles.mottoHeader}>WHAT WE BELIEVE</h3>
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
            width={1920}
            height={1335}
            loading="lazy"
            alt="Fresh fruits and vegetables"
            className={styles.fieldImg}
          />
        </section>
      </Suspense>
    </motion.div>
  );
}

export default Home;
