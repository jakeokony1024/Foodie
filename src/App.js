import React from "react";
import './components/Css/index.scss';
import WelcomePage from "./containers/WelcomePage";
import {Routes, Route} from "react-router-dom";
import FeedPage from "./containers/FeedPage";
import TopBannerNotification from "./components/TopBannerNotification";





const App = () => {
 return (
     <div className='main-wrapper'>
         <TopBannerNotification forceHide={false}/>
         <Routes>
             {/*authentication*/}
             <Route path="/" element={<WelcomePage />} />
             <Route path="/feed" element={<FeedPage />} />
             <Route path="login" element={<WelcomePage />} />
             <Route path="signup" element={<WelcomePage />} />
             <Route path="forgot-password" element={<WelcomePage />} />
         </Routes>
     </div>
 )
}

export default App;