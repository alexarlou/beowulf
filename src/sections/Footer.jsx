import { Link } from 'react-router-dom';
import Socials from './Socials';
import './Footer.scss';

function Footer() {

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="footerOuter">

      <footer id="mainFooter" >
        
        <div className="container">

          <div className="nav-logo">
            <Link to="/">
              <img src="/beowulf-logo.png" alt="Logo" />
            </Link>
          </div>
          <ul className="nav-menu">
            <li><a href="#introduction" onClick={handleNavLinkClick}>Introduction</a></li>
            <li><a href="#about" onClick={handleNavLinkClick}>About Us</a></li>
            <li><a href="#dashboards" onClick={handleNavLinkClick}>Dashboards</a></li>
            <li><a href="#features" onClick={handleNavLinkClick}>Features</a></li>
            <li><a href="#screenshots" onClick={handleNavLinkClick}>Screenshots</a></li>
            <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
          </ul>

          {/* <Socials color="white"/> */}

        </div>
      </footer>
    </div>

    );
}

export default Footer
