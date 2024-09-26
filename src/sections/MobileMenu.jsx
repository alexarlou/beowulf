import { slide as Menu } from 'react-burger-menu';
import Socials from '../sections/Socials';
import { Link } from 'react-router-dom';
import './MobileMenu.css'

function MobileMenu({ mobileMenuOpened, setMobileMenuOpened }) {

  const handleStateChange = (state) => {
    setMobileMenuOpened(state.isOpen);
  };


  const handleNavLinkClick = (event) => {
    event.preventDefault();

    setMobileMenuOpened(false);
    const targetId = event.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <Menu pageWrapId={"site"} isOpen={mobileMenuOpened} onStateChange={handleStateChange} width={260} customBurgerIcon={false}>

      <div className="sideMenuLogo">
        <Link to="/">
          <img src="/beowulf-logo-small.png" alt="Logo" />
        </Link>
      </div>


      <div className="sideMenuNav">
        <a href="#introduction" onClick={handleNavLinkClick}>Introduction</a>
        <a href="#about" onClick={handleNavLinkClick}>About Us</a>
        <a href="#dashboards" onClick={handleNavLinkClick}>Dashboards</a>
        <a href="#features" onClick={handleNavLinkClick}>Features</a>
        <a href="#screenshots" onClick={handleNavLinkClick}>Screenshots</a>
        <a href="#contact" onClick={handleNavLinkClick}>Contact</a>
      </div>

    </Menu>
  );
}

export default MobileMenu
