import React, { useState } from 'react';
import './header.css'

function Header() {
  /*=============== Change Background Header ===============*/
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');

    if(this.scrollY >= 80) {
      return header.classList.add('scroll-header');
    } else {
      return header.classList.remove('scroll-header');
    }
  });

  /*=============== Toogle Menu ===============*/
  const [toogle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Fillipe</a>

        <div className={toogle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a 
                href="#home"
                className={ activeNav === '#home' ? "nav__link active-link" : "nav__link" }
                onClick={() => setActiveNav('#home')}
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className={ activeNav === '#about' ? "nav__link active-link" : "nav__link" }
                onClick={() => setActiveNav('#about')}
              >
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#skills"
                className={ activeNav === '#skills' ? "nav__link active-link" : "nav__link" }
                onClick={() => setActiveNav('#skills')}
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#services"
                className={ activeNav === '#services' ? "nav__link active-link" : "nav__link" }
                onClick={() => setActiveNav('#services')}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#portfolio"
                className={ activeNav === '#portfolio' ? "nav__link active-link" : "nav__link" }
                onClick={() => setActiveNav('#portfolio')}
              >
                <i className="uil uil-scenery nav__icon"></i>
                Portfólio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={ activeNav === '#contact' ? "nav__link active-link" : "nav__link" }
                onClick={() => setActiveNav('#contact')}
              >
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!toogle)}
          ></i>
        </div>

        <div className="nav__toogle" onClick={() => showMenu(!toogle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;