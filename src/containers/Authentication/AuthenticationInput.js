import React, {useEffect} from "react";
import {useState} from "react";
import LoadingOverlay from "../../components/LoadingOverlay";





const LegalDisclaimer = (props) => {
    const {buttonName} = props;
    return (
        <p>
            By clicking '{buttonName}' you agree to our
            <a href="terms-and-conditions">Terms & Conditions</a>
            and
            <a href="privacy-policy">Privacy Policy</a>
        </p>
    );
}

const FormFieldWarning = (props) => {
    const {text, backgroundColor, textColor} = props;
    return (
        <a className='form-field-warning' style={{backgroundColor: backgroundColor, color: textColor}}>{text}</a>
    );
}

const FormField = (props) => {
    const warningTimeResetSeconds = 1;


    const {type, placeholder, value, onChange, error} = props;

    const [warning, setWarning] = useState('');
    const [warningBkg, setWarningBkg] = useState('#f64343');


    //Reset Warning After Time
    useEffect(() => {
        if(error){
            setWarning(error);
            setTimeout(() => {
                setWarning('');
            }, warningTimeResetSeconds * 1000);
        }
    }, [error]);


    return (
        <div className='form-field-wrapper'>

            <FormFieldWarning text={warning} backgroundColor={warningBkg} textColor='white'/>

            <input type={type} placeholder={placeholder} value={value} onChange={(e)=>{onChange(e.target.value);}}/>
        </div>
);
}

const AuthenticationInput = (props) => {
    const [loginMode, setLoginMode] = useState(props.loginInitial);
    const [isLoading, setIsLoading] = useState(false);


    // Login Inputs
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Login - One-Time code
    const [loginOneTime, setLoginOneTime] = useState('');

    //Signup Inputs
    const [signupFirst, setSignupFirst] = useState('');
    const [signupLast, setSignupLast] = useState('');
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
                <FormField type="text" placeholder='EMAIL ADDRESS' value={loginUsername} onChange={(text)=>{setLoginUsername(text);}}/>
                <FormField type="password" placeholder='PASSWORD' value={loginPassword} onChange={(text)=>{setLoginPassword(text);}}/>

                <span className='or-divider'>
                    <h3>OR</h3>
                </span>
                <div className='one-time'>
                    <span>USE A ONE-TIME CODE</span>
                    <FormField type="number" placeholder='PHONE NUMBER' value={loginOneTime} onChange={(text)=>{setLoginOneTime(text);}}/>
                </div>

                <LegalDisclaimer buttonName='Login'/>
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
                <FormField type="text" placeholder='FIRST NAME' value={signupFirst} onChange={(text)=>{setSignupFirst(text);}}/>
                <FormField type="text" placeholder='LAST NAME' value={signupLast} onChange={(text)=>{setSignupLast(text);}}/>
                <FormField type="text" placeholder='EMAIL ADDRESS' value={signupEmail} onChange={(text)=>{setSignupEmail(text);}}/>
                <FormField type="password" placeholder='PASSWORD' value={signupPassword} onChange={(text)=>{setSignupPassword(text);}}/>

                <LegalDisclaimer buttonName='Sign Up'/>

                <div className='buttons'>
                    <a className='btn' onClick={()=>{setLoginMode(true)}}>Login</a>
                    <a className='btn selected' onClick={signupButtonHandler}>Sign Up</a>
                </div>
            </div>
        );}
}

export default AuthenticationInput;