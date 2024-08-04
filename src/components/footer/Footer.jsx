import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='waves'>
          <div className='wave' id='wave1'></div>
          <div className='wave' id='wave2'></div>
          <div className='wave' id='wave3'></div>
          <div className='wave' id='wave4'></div>
        </div>
        <ul className='social-icon'>
          <li className='social-icon__item'>
            <a className='social-icon__link' href='#'>
              <i className='fab fa-instagram'></i>
            </a>
          </li>
          <li className='social-icon__item'>
            <a className='social-icon__link' href='#'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li className='social-icon__item'>
            <a className='social-icon__link' href='#'>
              <i className='fab fa-linkedin-in'></i>
            </a>
          </li>
          <li className='social-icon__item'>
            <a className='social-icon__link' href='#'>
              <i className='fab fa-github'></i>
            </a>
          </li>
        </ul>
        <ul className='menu'>
          <li className='menu__item'>
            <a className='menu__link' href='#'>
              خانه
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='#'>
              دوره ها
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href='#'>
              درباره ما
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
