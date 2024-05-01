import React from "react";
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog_gradient"></div>
      <div className="blog_text">
        <h2 className="blog_text_1_bg">NEWS</h2>
        <h2 className="blog_text_2_bg">OUR BLOG</h2>
      </div>
      <div className="blog_content_container">
        <div className="blog_main_comtent">
          <h3 className="blog_content_subtitle">BLOG</h3>
          <h2 className="blog_content_headline">The Latest News In Digens</h2>
          <button className="blog_button">READ BLOG</button>
        </div>
        <div className="blog_img">
          <div className="blog_left_content">
            <img className="blog_img_1" src="/img/img_1_blog.png" alt="Blog Img 1"/>
            <p className="name_date">Laura Poliquine - Nov 17, 2020 -</p>
            <h2 className="img_headline">The Top Places For Inspiration To Have A Rest<br/>And Create Something New</h2>
          </div>
          <div className="blog_right_content">
            <img className="blog_img_w" src="/img/img_2_blog.png" alt="Blog Img 2"/>
            <p className="name_date">Laura Poliquine - Oct 17, 2020 -</p>
            <h2 className="img_headline">How Yo Create Beautiful Gifts For People You<br/>Love This New Year</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;