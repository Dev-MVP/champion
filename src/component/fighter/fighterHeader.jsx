import React, { useEffect, useState, useRef } from "react";
import Api from "./../../services/generalApi"
const FighterHeader = () => {
    const [isclick, setClick] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data] = useState(
        [
            "Bantamweight",
            "Featherweight",
            "Flyweight",
            "Heavyweight",
            "Light Heavyweight",
            "Lightweight",
            "Middleweight",
            "Pound-for-Pound",
            "Welterweight",
            "Women's Bantamweight",
            "Women's Strawweight",
            "Women's Flyweight",
            "Women's Featherweight"
        ]
    );
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
    useEffect(() => {
        Api.getData("rank/weight", []).then((response) => {
            console.log("weightclass", response);
            setLoading(false);
        });
    }, []);
    return (
        <div className="container">
            <div className="mt-3 mb-5 text__set-auto d-flex align-items-center">
                <h2 className="text-center">light heavy weight</h2>
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
                        Weight Class</a>
                    <div className={`dropdown-menu weight-class ${isclick ? "d-block" : "d-none"}`} aria-labelledby="navbarDropdown">
                        {data.map((weightname, index) => (
                            <a key={index} className="dropdown-item btn" >{weightname}</a>
                        ))}
                    </div>
                </li>
            </div>
        </div>
    );
}

export default FighterHeader;
