import React from "react";
// import Header from './Header';
import Banner from "./components/Banner";
import AboutSection from "./components/AboutSection";
import './components/Css/index.scss';
import WelcomePage from "./containers/WelcomePage";
import {Routes, Route, Link} from "react-router-dom";
import {FaTimes} from 'react-icons/fa';



const TopNotification = (props) => {

    if(props.forceHide){
        return null;
    }

    return (
        <div className='top-notification'>
            <div className='inner-wrap'>
                Due to high demand in recipe goodness. We're looking for developers to join our team.
                <a href="">View Careers</a>
            </div>
            <div className='close'>
                <FaTimes className='icon'/>
            </div>
        </div>
    );
}


const App = () => {
 return (
     <div className='main-wrapper'>
         <TopNotification forceHide={true}/>
         <Routes>
             {/*authentication*/}
             <Route path="/" element={<WelcomePage />} />
             <Route path="login" element={<WelcomePage />} />
             <Route path="signup" element={<WelcomePage />} />
             <Route path="forgot-password" element={<WelcomePage />} />
         </Routes>
     </div>
 )
}

export default App;