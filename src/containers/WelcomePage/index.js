
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Footer from "../Footer";
import Navigation from "../Navigation";
import ImageBackground from "../../components/ImageBackground";
import AuthenticationInput from "../Authentication/AuthenticationInput";
import {useNavigate} from "react-router-dom";


const foodieImage = require('../../Assets/foodie_background.jpeg');


export default function WelcomePage(){

    return (
        <div className='page-wrapper screen-height'>
            <Navigation transparent={true}/>
            <ImageBackground imageSource={foodieImage}>
                <div className='welcome-page-wrapper'>
                    <div className='welcome-page-center'>
                        <div className='content welcome-motd'>
                            <h2>Everyone is a Chef, share your tastes.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, diam eu tincidunt fermentum, eros lorem molestie diam, venenatis sollicitudin elit tellus non
                                lectus. Proin in vehicula velit, eget eleifend sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt maximus tristique. Suspendisse</p>
                            <a href='/feed'>Discovery Stories</a>
                        </div>
                        <div className='content welcome-auth'>
                            <AuthenticationInput loginInitial={false} />
                        </div>
                    </div>
                </div>
                <Footer type='minimal' />
            </ImageBackground>
        </div>

    );
}