import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="container_footer" style={{}}>
      <div className="content_footer">
        <div className="top_footer_container">
          <img className="logo_main" src="/img/svg/logo_footer.svg" alt="Footer Logo" />
          <nav className="nav_elements" style={{ listStyleType: 'none' }}>
            <li>HOME</li>-
            <li>ABOUT US </li>-
            <li>SERVICES </li>-
            <li>PORTFOLIO </li>-
            <li>BLOG </li>-
            <li>CONTACT US</li>
          </nav>
        </div>
        <hr style={{borderColor: '#FFFFFF80'}}/>
        <div className="bottom_footer_container">
          <div className="social_footer">
            <ul style={{ listStyleType: 'none' }}>
              <li>Fb</li>-
              <li> Tw</li>-
              <li> In</li>
            </ul>
            <p>© All rights reserved. Digens 2020</p>
          </div>
          <div className="adress_footer">
            <h3>Address:</h3>
            <p>27 Division St, New York,<br />NY 10002, USA</p>
          </div>
          <div className="hiupus_footer">
            <h3>Hit Us Up:</h3>
            <p>+1 344 789 07 68<br />info@sitename.com</p>
          </div>
          <div className="useful_link_footer">
            <h3>Useful Links:</h3>
            <p>Help and Support<br />Careers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;