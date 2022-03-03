import React from "react";
// import Header from './Header';
import Banner from "./Banner";
import AboutSection from "./AboutSection";
import './Css/index.scss';

const App = () => {
 return (
  <div className="ui container">
   <Banner/>
   <AboutSection/>
  </div>
 )
}

export default App;