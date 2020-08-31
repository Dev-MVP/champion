import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import FighterHeader from "../component/fighter/fighterHeader"
import FighterHistory from "../component/fighter/fighterHistory"
import GrapchOne from "../component/grapch/grapchRow1"
import GrapchTwo from "../component/grapch/grapchRow2"
const FighterDetails = () => {
    const [grapchInfo, setGrapchInfo] = useState([]);
    const [weightData, setWeightData] = useState([]);
    const [randDate, setRankeDate] = useState([]);
    const [weightHistory, setWeightHistory] = useState([]);
    const [weightclass, setWeightClass] = useState('');
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(true);

    const changeweight = (name) => {
        setWeightClass(name)
    }

    const changedate = (date) => {
        setDate(date);
    }
    const getWeight = () => {
        axios("/ufc/v1/rank/weight").then((res) => {
            setWeightData(res["data"]);
            setWeightClass(res["data"][0])
        });
    }
    const weightdate = () => {
        axios("/ufc/v1/rank/date?weight_class=" + weightclass).then((res) => {
            setRankeDate(res["data"]);
            setDate(res["data"][0]);
        })
    }
    const getlist = () => {
        axios("/ufc/v1/rank/list?weight_class=" + weightclass + "&date=" + date).then((res) => {
            setWeightHistory(res["data"]);
            setLoading(false);
        })
    }
    useEffect(() => {
        getWeight();
    }, [])
    useEffect(() => {
        if (weightclass !== '' && date !== '') {
            getlist();
        } else if (weightclass !== '') {
            weightdate();
        }
    }, [date, weightclass]);
    useEffect(() => {
        axios("/ufc/v1/rank/championship").then((res) => {
            setGrapchInfo(res["data"]);
        })
    }, [])
    if (loading) {
        return <React.Fragment></React.Fragment>;
    }
    return (
        <div className="root">
            <div className="header__img-two">
                <div className="container-fluid">
                    <div className="brand-logo">
                        <Link to="/"><img src="/img/logo.jpeg" alt="logo" /></Link>
                    </div>
                </div>
                <FighterHeader changeweight={changeweight} weightname={weightclass} wightinfo={weightData} />
                <div className="container-fluid">
                    <div className="row">
                        {/* Fighter Image */}
                        <div className="col-md-3 d-flex align-items-start">
                            <img className="jones_jon" src="/img/002.png" alt="info" />
                        </div>
                        <div className="col-md-6">
                            <FighterHistory date={date} changedate={changedate} randDate={randDate} weightHistory={weightHistory} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Grapch */}
            <div class="img__two-main">
                <GrapchOne count_per_year={grapchInfo["count_per_year"]} location_per_year={grapchInfo["location_per_year"]} />
                <GrapchTwo submission_type_per_year={grapchInfo["submission_type_per_year"]} />
            </div>
        </div>
    );
}

export default FighterDetails;
