import React from "react";
import banner from '../Assets/foodie_background.jpeg';

const Banner = () => {
 return (
  <div className="banner-wrapper">
   <div className="ui fluid image">
   <img src={banner} alt="prop" className="banner-image"></img>
   <div className="hero-text">
    <h1 className="header">Foodie</h1>
   </div>
   <div className="login-box">
    <button className="login">Login / Sign Up</button>
   </div>
   </div>
  </div>
 )
}

export default Banner;