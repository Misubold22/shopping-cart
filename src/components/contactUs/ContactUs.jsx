// AboutUs.jsx
import styles from "./contactUs.module.css";
import contactUsBanner from "../../assets/contactUs.webp";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className={styles.contactUs}
    >
      <main className={styles.contactMain}>
        <div className={styles.contactImgWrapper}>
          <img
            src={contactUsBanner}
            width={2048}
            height={684}
            alt="About us banner"
            className={styles.contactImage}
          />{" "}
          <h1 id="contact-heading" className={styles.contactHeader}>
            Contact Us
          </h1>
        </div>
        <div className={styles.contentWrapper}>
          <h1 className={styles.secondContactHeader}>Contact OLIA</h1>
          <p>
            If you would like to place an order with us or have a question about
            an existing order, please email us at hello@oliamarket.com.
          </p>
          <p>
            If you can’t find the answer to your question on our website, or
            simply have something you’d like to share with us, we’d be happy to
            hear from you.
          </p>

          <section>
            <h2 className={styles.customerSectionHeader}>Customer Support</h2>
            <p>
              For questions about orders, products, deliveries, or anything
              else, please email us at hello@oliamarket.com.
            </p>
            <p>
              Our team is available Monday to Friday, from 9am - 5pm. We aim to
              respond to all enquiries within 1-2 working days.
            </p>
          </section>

          <section>
            <h2 className={styles.pressSectionHeader}>
              Press & Collaborations
            </h2>
            <p>
              For press, marketing, partnership, or collaboration enquiries,
              please email us at hello@oliamarket.com.
            </p>
          </section>

          <section>
            <h2 className={styles.careersSectionHeader}>Careers at OLIA</h2>
            <p>
              Interested in joining the OLIA team? Send us an email at
              hello@oliamarket.com and tell us a little about yourself and what
              you’d like to do at OLIA.
            </p>
          </section>

          <section>
            <h2 className={styles.supplierSectionHeader}>New Suppliers</h2>
            <p>
              If you are a supplier, grower, producer, or would like to work
              with us, please contact us at suppliers@oliamarket.com.
            </p>
          </section>

          <section>
            <h2 className={styles.dataSectionHeader}>Data & Privacy</h2>
            <p>
              For questions about your personal data, privacy, or how we handle
              your information, please email us at privacy@oliamarket.com.
            </p>
          </section>
        </div>
      </main>
    </motion.div>
  );
}

export default ContactUs;
