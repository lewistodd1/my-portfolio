import { motion } from "framer-motion";
import "../styles/contact.css";

export default function Contact() {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Contact</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Your message" required></textarea>

        <motion.button 
          type="submit"
          className="contact-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}

