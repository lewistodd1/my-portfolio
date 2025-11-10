import { motion } from "framer-motion";
import "../styles/about.css";

export default function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            I’m Lewis, a developer who builds web apps, games and oddly-specific
            tools that solve real problems. I like clean UIs, smart automation,
            and making things feel smoother than they have any right to be.
          </p>

          <p>
            When I'm not coding, my day job is in data analysis and business intelligence.
            My coding journey has been entirely self-taught, fueled by curiosity and a passion for
            problem-solving and designing cool applications. 
            I love learning new technologies and applying them to create
            efficient, user-friendly solutions.
          </p>
        </motion.div>

        <motion.div
          className="about-box"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Quick Stats</h3>
          <ul>
            <li>📍 Based in Scotland</li>
            <li>💻 Full-stack developer</li>
            <li>🎮 Game dev hobbyist</li>
            <li>📊 Into analytics & automation</li>
            <li>🔥 Loves feature creep (in a good way)</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
