import { motion } from "framer-motion";
import "../styles/tech.css";

const tech = [
  { name: "JavaScript", emoji: "🟨" },
  { name: "React", emoji: "⚛️" },
  { name: "Node.js", emoji: "🟩" },
  { name: "Power BI", emoji: "📊" },
  { name: "PHP", emoji: "🟦" }
];

export default function Tech() {
  return (
    <div className="tech">
      <h2>Tech Stack</h2>

      <div className="tech-grid">
        {tech.map((t, i) => (
          <motion.div
            key={i}
            className="tech-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="tech-emoji">{t.emoji}</span>
            <p>{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
