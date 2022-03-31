import TopBannerNotification from "../../components/TopBannerNotification";
import {Route, Router, Switch} from 'react-router-dom';
import WelcomePage from "../WelcomePage";
import FeedPage from "../FeedPage";
import React from "react";
import '../../components/Css/index.scss';
import ProfilePage from "../ProfilePage";

export default function App() {


    return (
        <div className='main-wrapper'>
            <TopBannerNotification forceHide={false}/>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>

                <Route path="/feed">
                    <FeedPage />
                </Route>

                <Route path="/profile">
                    <ProfilePage />
                </Route>
            </Switch>
        </div>
    )
}