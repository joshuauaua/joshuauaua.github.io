import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Left Section - Contact */}
        <div className="footer-section">
          <h3 className="footer-title">CONTACT INFO</h3>
          <ul className="footer-list">
            <li>joshjoelng@gmail.com</li>
            <li>+46 (0)7 0748 3975</li>
            <li>Stockholm, Sweden</li>
          </ul>
        </div>

        {/* Right Section - Links */}
        <div className="footer-section">
          <h3 className="footer-title">LET'S CONNECT</h3>
          <div className="footer-links-grid">
            <ul className="footer-list">
              <li><a href="https://github.com/joshuauaua" target="blank">GitHub</a></li>
              <li><a href="https://discord.com/users/%20769115419692105759">Discord</a></li>
              <li><a href="https://www.linkedin.com/in/joshuauaua/">LinkedIn</a></li>
            </ul>
            <ul className="footer-list">
              <li><a href="https://sonicassembly.substack.com/">Substack</a></li>
              <li><a href="https://www.instagram.com/joshuauaua/">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

  
    </footer>
  );
}