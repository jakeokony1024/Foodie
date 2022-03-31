

import React from "react";


const LoadingOverlay = (props) => {
    if(!props.active) return null;

    return (
        <div className='loading-overlay-wrapper'>
            <div className="loading-overlay-loader"></div>
        </div>
    );
}

export default LoadingOverlay;
