import React, { useEffect, useRef } from "react";
const DropDown = ({ setClick, isclick, children }) => {

    const myRef = useRef();
    const handleClickOutside = (e) => {
        if (!myRef.current.contains(e.target)) {
            setClick(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true);
        document.removeEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside, true);
    });
    return (
        <React.Fragment>
            <li className="nav-item dropdown" ref={myRef} onClick={() => setClick(!isclick)}>
                {children}
            </li>
        </React.Fragment>
    )
}

export default DropDown;
