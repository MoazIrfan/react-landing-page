import logo from '../../assets/logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav" aria-label="Primary navigation">
          <a href="/" className="header-logo">
            <img src={logo} alt="I2C company logo" />
          </a>

          <ul className="header-links">
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#register">Registration</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#contact" className="header-cta">Contact us</a>
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
  );
}
export default Header;