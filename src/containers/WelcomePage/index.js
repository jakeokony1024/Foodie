
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Footer from "../Footer";
import Navigation from "../Navigation";
import ImageBackground from "../../components/ImageBackground";


const foodieImage = require('../../Assets/foodie_background.jpeg');


const LoadingOverlay = (props) => {
    if(!props.active) return null;

    return (
        <div className='loading-overlay-wrapper'>
            <div className="loading-overlay-loader"></div>
        </div>
    );
}



const AuthenticationInput = (props) => {
    const [loginMode, setLoginMode] = useState(props.loginInitial);
    const [isLoading, setIsLoading] = useState(false);


    // Login Inputs
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    //Signup Inputs
    const [signupUsername, setSignupUsername] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');


    if (loginMode){
        return(
            <div  className='authentication-input-wrapper'>
                <LoadingOverlay active={isLoading} />
                <h2>Login to Account</h2>
                <input type="text" placeholder='EMAIL ADDRESS' value={loginUsername} onChange={(e)=>{setLoginUsername(e.target.value);}}/>
                <input type="password" placeholder='PASSWORD' value={loginPassword} onChange={(e)=>{setLoginPassword(e.target.value);}}/>

                <p>
                    By clicking 'Login' you agree to our
                    <a href="">Terms & Conditions</a>
                    and
                    <a href="">Privacy Policy</a>
                </p>

                <div className='buttons'>
                    <a className='btn' onClick={()=>{setLoginMode(false)}}>Sign Up</a>
                    <a className='btn selected'>Login</a>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className='authentication-input-wrapper'>
                <LoadingOverlay active={isLoading} />
                <h2>Create an Account</h2>
                <input type="text" placeholder='USERNAME' value={signupUsername} onChange={(e)=>{setSignupUsername(e.target.value);}}/>
                <input type="text" placeholder='EMAIL ADDRESS' value={signupEmail} onChange={(e)=>{setSignupEmail(e.target.value);}}/>
                <input type="password" placeholder='PASSWORD' value={signupPassword} onChange={(e)=>{setSignupPassword(e.target.value);}}/>

                <p>
                    By clicking 'Sign Up' you agree to our
                    <a href="">Terms & Conditions</a>
                    and
                    <a href="">Privacy Policy</a>
                </p>

                <div className='buttons'>
                    <a className='btn' onClick={()=>{setLoginMode(true)}}>Login</a>
                    <a className='btn selected'>Sign Up</a>
                </div>
            </div>
        );}
}


export default function WelcomePage(){

    return (
      <div className='page-wrapper'>
          <ImageBackground imageSource={foodieImage}>
              <Navigation transparent={true}/>
              <div className='welcome-page-wrapper'>
                  <div className='welcome-page-center'>
                      <div className='content welcome-motd'>
                          <h2>Everyone is a Chef, share your tastes.</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas, diam eu tincidunt fermentum, eros lorem molestie diam, venenatis sollicitudin elit tellus non
                              lectus. Proin in vehicula velit, eget eleifend sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt maximus tristique. Suspendisse</p>
                          <a href="">Discovery Stories</a>
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