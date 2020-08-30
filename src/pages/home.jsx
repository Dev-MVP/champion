import React from "react";
import { Link } from "react-router-dom"
import { PLAYERS } from "./../config/constant"
const Home = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="brand-logo">
                    <Link to="/"><img src="/img/logo.jpeg" alt="fighter" /></Link>
                </div>
            </div>
            <div className="header__img">
                <div className="container">
                    <h2 className="main__heading">Select the champion<br />weight class</h2>

                </div>

                <div className="players">
                    {PLAYERS.map((info) => (
                        <div className="player" key={info["id"]}>
                            <span className={info["textclass"]}>{info["first_name"]}<br />{info["last_name"]}</span>
                            <Link to={`/fighter-details/${info["first_name"] + " " + info["last_name"]}`}><img className={info["imageclass"]} src={info["imagepath"]} alt="" /></Link>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
