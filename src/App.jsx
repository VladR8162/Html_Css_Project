import './App.css';
import React from "react";
import MainSlider from './Components/Home/MainSlider/MainSlider';
import Services from './Components/Home/Services/Services';
import Portfolio from './Components/Home/Portfolio/Portfolio';
import NewsLetter from './Components/Home/NewsLetter/NewsLetter';
import WhatWeDo from './Components/Home/WhatWeDo/WhatWeDo';
import Blog from './Components/Home/Blog/Blog';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LeftSocialBar from './Components/Home/LeftSocialBar/LeftSocialBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <LeftSocialBar/>
      <MainSlider/>
      <Services/>
      <Portfolio/>
      <NewsLetter/>
      <WhatWeDo/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
