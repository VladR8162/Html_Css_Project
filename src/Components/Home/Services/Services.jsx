import React from "react";
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <div className="left_gradient"></div>
      <div className="services_content">
        <h3 className="services_content_subtitle">OUR SERVICES</h3>
        <h2 className="services_content_headline">We Develop Digital Products</h2>
        <p className="services_content_text">You can discover all our services by clicking the link below.</p>
        <button className="services_container_button">View All</button>
      </div>
      <div className="services_card">
        <div className="card_1">
          <div className="card_1_container">
            <img className="img_1_services_card" src="/img/svg/icon_block_1.svg" alt="Icon Block 1" />
            <h3 className="card_1_content_subtitle">Web Development</h3>
            <p className="card_1_content_text">Our developers are carefully considering how your product should work while mainta...</p>
          </div>
        </div>
        <div className="card_2">
          <div className="card_2_container">
            <img className="img_2_services_card" src="/img/svg/icon_block_2.svg" alt="Icon Block 2" />
            <h3 className="card_2_content_subtitle">SEO Optimization</h3>
            <p className="card_2_content_text">Promotion of your product is an important step in making money and constant popula...</p>
          </div>
        </div>
        <div className="card_3">
          <div className="card_3_container">
            <img className="img_3_services_card" src="/img/svg/icon_block_3.svg" alt="Icon Block 3" />
            <h3 className="card_3_content_subtitle">Ui/UX Design</h3>
            <p className="card_3_content_text">Everything starts with the beautiful. And professional design is of great importa...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;