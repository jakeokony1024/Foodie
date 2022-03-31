import {FaSearch} from "react-icons/fa";
import React from "react";
import AutoSearch from "../../components/AutoSearch";
import {Link, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const Navigation = (props) => {
    const logoIcon = 'http://cdn.onlinewebfonts.com/svg/img_304691.png';
    const logoText = 'Foodie';




    const history = useSelector((state => state.history))
    const wrapperClassName = 'navigation' + (props.transparent ? ' transparent':'') + (props.absolute ? ' absolute-positioning':'')

    return (
        <div className={wrapperClassName}>
            <div className='navigation-inner'>
                <Link to='/'>
                    <div className='logo-wrapper'>
                        <img className='logo-icon' src={logoIcon} alt=""/>
                        <h1 className='logo-text'>{logoText}</h1>
                    </div>
                </Link>
                <div className='nav-search-form'>
                    <AutoSearch />
                </div>
                <div className='nav-account'>
                    <a className='nav-btn'>Login</a>
                    <a className='nav-btn inverted'>Sign Up</a>
                    <a className='nav-btn'>?</a>
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
