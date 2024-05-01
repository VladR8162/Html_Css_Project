import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="container_header">
      <div className="header">
        <div className="left_header">
          <img className="burger_menu" src="/img/svg/burger_menu.svg" alt="Burger Menu" />
          <img className="logo_main" src="/img/svg/logo_main.svg" alt="Header Logo" />
        </div>
        <div className="right_header">
          <a className="phone_link" href="tel:+15471258965">
            <p className="header_phone">+1 547 125 89 65</p>
          </a>
          <button className="header_button">Get A Quote</button>
        </div>
      </div>
    </header>
  );
};

export default Header;