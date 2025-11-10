import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Lewis Todd. All rights reserved.</p>
    </footer>
  );
}
