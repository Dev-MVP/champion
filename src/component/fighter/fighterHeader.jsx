import React, { useEffect, useState, useRef } from "react";

const FighterHeader = ({ wightinfo, weightname, changeweight }) => {
    const [isclick, setClick] = useState(false);
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
        <div className="container">
            <div className="mt-3 mb-5 text__set-auto d-flex align-items-center">
                <h2 className="text-center">{weightname}</h2>
                <li ref={myRef} onClick={() => setClick(!isclick)} className="nav-item dropdown pose__dropdown btn">
                    <a
                        className="nav-link dropdown-toggle "
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        {weightname}</a>
                    <div className={`dropdown-menu weight-class ${isclick ? "d-block" : "d-none"}`} aria-labelledby="navbarDropdown">
                        {wightinfo.map((weight, index) => (
                            <button onClick={() => changeweight(weight)} key={index} className="dropdown-item btn" >{weight}</button>
                        ))}
                    </div>
                </li>
            </div>
        </div>
    );
}

export default FighterHeader;
