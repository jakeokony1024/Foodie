import {FaSearch} from "react-icons/fa";
import React from "react";
import AutoSearch from "../../components/AutoSearch";
import {useNavigate} from "react-router-dom";

const Navigation = (props) => {

    const navigate = useNavigate();
    const wrapperClassName = 'navigation ' + (props.transparent ? 'transparent':'')

    return (
        <div className={wrapperClassName}>
            <div className='navigation-inner'>
                <h1 className='header' onClick={()=>{navigate('/')}}>Foodie</h1>

                <div className='nav-search-form'>
                    <AutoSearch />
                </div>
                <div className='nav-account'>
                    <a href="">Login</a>
                    <a href="">Sign Up</a>
                </div>

                <div className='mobile-menu-button'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </div>
    );
}


export default Navigation;
