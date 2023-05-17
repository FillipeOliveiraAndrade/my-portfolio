import React from 'react';

function Social() {
  const instagram = 'https://www.instagram.com/fillipeandrad/';
  const linkedin = 'https://www.linkedin.com/in/fillipe-oliveira-b9b030240/';
  const github = 'https://github.com/FillipeOliveiraAndrade';

  return (
    <div className="div home__social">
      <a href={ instagram } className="home__social-icon" target={"_blank"} rel="noreferrer">
        <i className="uil uil-instagram"></i>
      </a>

      <a href={ linkedin } className="home__social-icon" target={"_blank"} rel="noreferrer">
        <i className="uil uil-linkedin"></i>
      </a>

      <a href={ github } className="home__social-icon" target={"_blank"} rel="noreferrer">
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;