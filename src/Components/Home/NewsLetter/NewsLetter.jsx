import React from "react";
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter_gradient"></div>
      <div className="newsletter_left_container">
        <h2 className="newsletter_tilte">Always Be In Touch</h2>
        <p className="newsletter_text">Subscribe if you want always to be known about all the news and available propositions.</p>
      </div>
      <div className="newsletter_right_container">
        <input type="email" placeholder="Enter your email" className="email_input"/>
        <button className="newsletter_button">Subscribe</button>
        <label className="checkbox_label">
          <input type="checkbox" className="newsletter_checkbox"/>
          <p className="newsletter_checkbox_text">I accept all <a href="#">Terms and Conditions</a></p>
        </label>
      </div>
    </section>
    
  );
};

export default NewsLetter;