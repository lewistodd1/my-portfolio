import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  // Overrides for nicer display names
  const displayNames = {
    "todo-app-v2": "Todo App",
  };

  const prettify = (name) =>
    name
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    fetch("https://api.github.com/users/lewistodd1/repos")
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter(r => !r.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted.slice(0, 4)); // top 6 projects
      });
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {repos.map((repo, i) => (
          <motion.div
            className="project-card"
            key={repo.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
          >
            <h3>{displayNames[repo.name] || prettify(repo.name)}</h3>
            <p>{repo.description || "No description provided."}</p>
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


