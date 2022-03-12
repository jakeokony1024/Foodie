import React, {useRef, useEffect} from "react";

const useOutsideAlerter = (ref, setClickedOutside) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setClickedOutside(true);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const OutsideAlerter = (props) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.setClickedOutside);
    return (
        <div ref={wrapperRef} style={{flex:1,display:'flex'}}>
            {props.children}
        </div>
    );
}

export default OutsideAlerter;