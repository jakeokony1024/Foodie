import React from "react";

const ImageBackground = (props) => {

    if (!props.imageSource) return null;

    return (
        <div className='image-background-wrapper'>
            <div className='image-background-content'>
                {props.children}
            </div>
            <div className='image-background-image-wrapper'>
                <img className='image-background-image' src={props.imageSource} />
            </div>
        </div>
    );
}

export default ImageBackground;