import React, { useEffect, useState } from "react";
import { Chart } from "react-charts";

const FighterGrapch = ({ countPerYear, locationPerYear }) => {
    const [countPerYearData, setCountPerYearData] = useState([]);
    const [locationPerYearData, setLocationPerYearData] = useState([]);
    const axes = React.useMemo(
        () => [
            { primary: true, type: "linear", color: "#F29D38", position: "bottom", show: [true, false] },
            { primary: false, type: "linear", position: "left" },
        ],
        []
    );

    useEffect(() => {
        const d = countPerYear.map((count) => {
            return {
                primary: parseInt(count.year),
                secondary: count.count,
            };
        });

        setCountPerYearData(d);
        console.log({ label: "Year", data: d });
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7">
                    <div className="stat-one">
                        <h2>Total Fighters vs Finishes through the Years</h2>
                        <div
                            style={{
                                width: "100%",
                                height: "calc(100% - 50px)",
                                overflow: "hidden",
                            }}
                        >
                            <Chart data={[{ label: "Year", data: countPerYearData }]} axes={axes} dark />
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="stat-one">
                        <div className="d-flex justify-content-between">
                            <h2>Distribution of fights by location</h2>
                            <label className="dropdown">
                                <div className="dd-button dd_btn-color">Select Year</div>
                                <input type="checkbox" className="dd-input" id="test" />
                                <ul className="dd-menu diff__color-opt">
                                    <li>2014</li>
                                    <li>2015</li>
                                    <li>2016</li>
                                    <li>2017</li>
                                    <li>2018</li>
                                    <li>2019</li>
                                    <li>2020</li>
                                </ul>
                            </label>
                        </div>

                        <div
                            style={{
                                width: "100%",
                                height: "calc(100% - 50px)",
                                overflow: "hidden",
                            }}
                        >
                            <Chart data={{ label: "Year", data: [] }} axes={axes} dark />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FighterGrapch;
