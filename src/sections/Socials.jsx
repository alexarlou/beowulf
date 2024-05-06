function Socials({color}) {

  return (
    <div className="social-links">
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src={color === 'white' ? '/facebookwhite.svg' : '/facebookblack.svg' } alt="Facebook" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src={color === 'white' ? '/instagramwhite.svg' : '/instagramblack.svg' } alt="Twitter" />
    </a>
    </div>
  );
}

export default Socials
