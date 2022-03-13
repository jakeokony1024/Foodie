import React, {useState} from "react";
import './components/Css/index.scss';
import WelcomePage from "./containers/WelcomePage";
import {Routes, Route, Link} from "react-router-dom";
import Navigation from "./containers/Navigation";
import FeedPage from "./containers/FeedPage";

//Icons
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
    const [userLoggedIn, setUserLoggedIn] = useState(false);


 return (
     <div className='main-wrapper'>
         <TopNotification forceHide={false}/>
         <div className='page-wrapper'>
             <Navigation transparent={!userLoggedIn}/>
             <Routes>
                 {/*authentication*/}
                 <Route path="/" element={<WelcomePage />} />
                 <Route path="/feed" element={<FeedPage />} />
                 <Route path="login" element={<WelcomePage />} />
                 <Route path="signup" element={<WelcomePage />} />
                 <Route path="forgot-password" element={<WelcomePage />} />
             </Routes>
         </div>
     </div>
 )
}

export default App;