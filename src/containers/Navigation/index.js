import {FaSearch} from "react-icons/fa";
import React from "react";
import AutoSearch from "../../components/AutoSearch";

const Navigation = (props) => {
    return (
        <div className={['navigation ', props.transparent ? 'transparent':'']}>
            <div className='navigation-inner'>
                <h1 className='header'>Foodie</h1>

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
