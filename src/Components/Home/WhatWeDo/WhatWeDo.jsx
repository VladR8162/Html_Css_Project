import React from "react";
import './WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <section className="what_we_do">
      <div className="whatwedo_img">
        <img src="/img/img_what_we_do.png" alt="WhatWeDo Img" />
      </div>
      <div className="whatwedo_main_content">
        <h3 className="whatwedo_content_subtitle">WHAT WE DO</h3>
        <h2 className="whatwedo_content_headline">We Develop Digital Products</h2>
        <p className="whatwedo_content_text">We appreciate every client and ready to help with all the issues that they have.<br />Let’s figure out what we can do.</p>
        <div className="additional_content">
          <div className="add_content_box">
            <h2 className="whatwedo_additional_headline">Branding</h2>
            <p className="whatwedo_additional_text">This is a repetition in plastic<br />forms, lines and colors of</p>
          </div>
          <div className="add_content_box">
            <h2 className="whatwedo_additional_headline">Strategy</h2>
            <p className="whatwedo_additional_text">This is a repetition in plastic<br />forms, lines and colors of</p>
          </div>
          <div className="add_content_box">
            <h2 className="whatwedo_additional_headline">ECommerce</h2>
            <p className="whatwedo_additional_text">This is a repetition in plastic<br />forms, lines and colors of</p>
          </div>
          <div className="add_content_box">
            <h2 className="whatwedo_additional_headline">Support</h2>
            <p className="whatwedo_additional_text">This is a repetition in plastic<br />forms, lines and colors of</p>
          </div>
          <div className="progress_bar">
            <span className="span_border" data-percent="63%"></span>
            <span className="span_border" data-percent="87%"></span>
            <span className="span_border" data-percent="85%"></span>
            <span className="span_border" data-percent="99%"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;