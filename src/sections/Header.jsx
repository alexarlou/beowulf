import { Link, useLocation } from 'react-router-dom';
import Socials from './Socials';
import './Header.scss';


function Header({setMobileMenuOpened}) {

  const location = useLocation();

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };




  return (
    <header id="mainHeader">

      <div className="container">
        <div className="nav-logo">
          <Link to="/">
            <img src="/beowulf-logo.png" alt="Logo" />
          </Link>
        </div>
          {/* <ul className="nav-menu">
            <li><a href="#about-us" onClick={handleNavLinkClick}>About Us</a></li>
            <li><a href="#features" onClick={handleNavLinkClick}>Features</a></li>
            <li><a href="#download" onClick={handleNavLinkClick}>Download</a></li>
            <li><a href="#screenshots" onClick={handleNavLinkClick}>Screenshots</a></li>
          </ul> */}
          {/* <Socials/> */}
          <button className="hamburgerBtn" onClick={()=>setMobileMenuOpened(true)}><img src="/hamburger.svg" alt="" /></button>
      </div>
    
    </header>
    );
}

export default Header
