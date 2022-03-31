import FooterMinimal from "./FooterMinimal";
import FooterFull from "./FooterFull";
import React from "react";


const Footer = (props) => {
    if (props.type === 'minimal'){
        return (
            <FooterMinimal/>
        )
    }
    else if (props.type === 'full'){
        return (
            <FooterFull/>
        )
    }
    else{
        return null;
    }
}


export default Footer;