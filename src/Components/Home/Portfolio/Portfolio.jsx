import React from "react";
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio_text">
        <h2 className="portfolio_text_1_bg">CASES</h2>
        <h2 className="portfolio_text_2_bg">CASES</h2>
      </div>
      <div className="portfolio_main_comtent">
        <h3 className="portfolio_content_subtitle">PORTFOLIO</h3>
        <h2 className="portfolio_content_headline">Check Our Latest Cases</h2>
        <button className="portfolio_button">VIEW ALL</button>
      </div>
      <div className="portfolio_img">
        <img className="portfolio_img_1" src="/img/img_1_portfolio.png" alt="Portfolio Img 1"/>
        <img className="portfolio_img_2" src="/img/img_2_portfolio.png" alt="Portfolio Img 1"/>
        <img className="portfolio_img_3" src="/img/img_3_portfolio.png" alt="Portfolio Img 1"/>
      </div>
    </section>
  );
};

export default Portfolio;