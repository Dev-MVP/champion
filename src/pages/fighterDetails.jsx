import React from "react";
import { Link } from "react-router-dom"
import FighterHeader from "../component/fighter/fighterHeader"
import FighterHistory from "../component/fighter/fighterHistory"
const FighterDetails = () => {
    return (
        <div className="root">
            <div className="header__img-two">
                <div className="container-fluid">
                    <div className="brand-logo">
                        <Link to="/"><img src="/img/logo.jpeg" alt="logo" /></Link>
                    </div>
                </div>
            </div>
            <FighterHeader />
            <div className="container-fluid">
                <div className="row">
                    {/* Fighter Image */}
                    <div className="col-md-3 d-flex align-items-end">
                        <img className="jones_jon" src="/img/002.png" alt="info" />
                    </div>
                    <div className="col-md-6">
                        <FighterHistory />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FighterDetails;
