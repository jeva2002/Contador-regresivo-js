import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';
import pinterest from '../assets/icon-pinterest.svg';

const footerComponent = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <img src=${facebook} alt="logo facebook"/>
    <img src=${pinterest} alt="logo pinterest"/>
    <img src=${instagram} alt="logo instagram"/>
  `;

  return footer;
};

export default footerComponent;
