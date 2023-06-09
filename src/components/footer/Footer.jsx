import React from 'react';
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Fillipe</h1>


        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#home" className="footer__link">Home</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="" className="footer__social-link" target={"_blank"}>
            <i className="uil uil-instagram"></i>
          </a>

          <a href="" className="footer__social-link" target={"_blank"}>
            <i className="uil uil-dribbble"></i>
          </a>

          <a href="" className="footer__social-link" target={"_blank"}>
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Crypticalcoder. All right reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;