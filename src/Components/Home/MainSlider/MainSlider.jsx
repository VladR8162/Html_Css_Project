import React from "react";
import './MainSlider.css';

const MainSlider = () => {
  return (
    <section className="main_slider">
      <div className="righ_gradient"></div>
      <div className="main_img">
        <img src="/img/img_main.png" alt="Main Img" />
      </div>
      <div className="text_bg_container">
        <h2 className="text_1_bg">DIGITAL</h2>
        <h2 className="text_2_bg">PRODUCTS</h2>
      </div>
      <div className="text_main_container">
        <h3 className="text_1_main">DIGITAL</h3>
        <h3 className="text_2_main">PRODUCTS</h3>
      </div>
      <div className="main_content">
        <h3 className="main_content_subtitle">MORE THAN OBVIOUS</h3>
        <h2 className="main_content_headline">Digital products for your brand</h2>
        <p className="main_content_text">Our team is waiting for a new challenge, so we’re ready to make a cool brand.</p>
        <button className="main_container_button">Get More</button>
      </div>
    </section>
  );
};

export default MainSlider;