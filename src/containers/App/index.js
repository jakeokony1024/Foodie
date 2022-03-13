import TopBannerNotification from "../../components/TopBannerNotification";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "../WelcomePage";
import FeedPage from "../FeedPage";
import React from "react";
import '../../components/Css/index.scss';

export default function App() {
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