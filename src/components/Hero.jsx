import { motion } from 'framer-motion';
import "../styles/hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>Hi, I’m Lewis</h1>
        <p>I build web apps, games, and ideas for modern business solutions.</p>

        <motion.button
          className="cta-btn"
          onClick={() => {
            document.querySelector("#projects").scrollIntoView({
              behavior: "smooth"
            });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See My Work
        </motion.button>

      </motion.div>

      <motion.div
        className="blob"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -15, 0] 
        }}
        transition={{ 
          opacity: { duration: 1 },
          scale: { duration: 1 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  );
}


