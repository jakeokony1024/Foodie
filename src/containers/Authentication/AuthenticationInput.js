import {useState} from "react";
import LoadingOverlay from "../../components/LoadingOverlay";

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


    const loginButtonHandler = (e) => {
        setIsLoading(true);
    }

    const signupButtonHandler = (e) => {
        setIsLoading(true);
    }

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
                    <a className='btn selected' onClick={loginButtonHandler}>Login</a>
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
                    <a className='btn selected' onClick={signupButtonHandler}>Sign Up</a>
                </div>
            </div>
        );}
}

export default AuthenticationInput;