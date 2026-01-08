import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-line" aria-hidden="true" />

        <nav className="footer-content" aria-label="Footer navigation">
          <ul className="footer-links">
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#other">Other</a>
            </li>
            <li>
              <a className="footer-cta" href="#contact">Contact us</a>
            </li>
          </ul>
        </nav>

        <p className="footer-copy">
          Copyright © 2024 i2c inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;