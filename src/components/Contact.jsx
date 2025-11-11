import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "../styles/contact.css";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_nu0sckh",
      "template_411dqyi",
      formRef.current,
      "nLO_8EvQqiCvkoeaR"
    )
    .then(() => {
      alert("Your message has been sent successfully!");
      formRef.current.reset();
    })
    .catch((err) => {
      console.error(err);
      alert("Something broke. Blame EmailJS, not me.");
    });
  };

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Contact</h2>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input name="user_name" type="text" placeholder="Your name" required />
        <input name="user_email" type="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" required></textarea>

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


