import React, {useState} from "react";
import {FaTimes} from "react-icons/fa";

const TopBannerNotification = (props) => {
    const [visible, setVisible] = useState(!props.forceHide);


    if(!visible){
        return null;
    }

    return (
        <div className='top-notification'>
            <div className='inner-wrap'>
                This is a banner message at the top of the screen. Don't you see?
                <a href="">Click my Link</a>
            </div>
            <div className='close' onClick={()=>{setVisible(false)}}>
                <FaTimes className='icon'/>
            </div>
        </div>
    );
}

export default TopBannerNotification;
