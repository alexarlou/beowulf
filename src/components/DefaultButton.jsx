import { Link } from "react-router-dom";

function DefaultButton({link, name, align, color}) {

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    console.log(targetElement);
    if (targetElement) {
      console.log(targetElement);
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    
    <div className={`defaultBtnCont ${color === 'light' ? ' btn-light '  :  ' btn-dark '}`} style={{display:'flex', justifyContent: align === 'center' ? 'center' : ''}}>
        <a href={link} onClick={handleNavLinkClick} className="btn btn-default btn-gradient m-t-50">{name}</a>
    </div>
  );
}

export default DefaultButton
