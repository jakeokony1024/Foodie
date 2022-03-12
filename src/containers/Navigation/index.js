import {FaSearch} from "react-icons/fa";
import React from "react";

const Navigation = (props) => {
    return (
        <div className='navigation transparent'>
            <div className='navigation-inner'>
                <h1 className='header'>Foodie</h1>

                <form action="POST" className='nav-search-form'>
                    <input type="text" className='search-input' placeholder='Search Recipes, Ingredients, Creators, and More!'/>
                    <div className='search-submit'>
                        <FaSearch className='nav-search-icon'/>
                    </div>
                </form>

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
