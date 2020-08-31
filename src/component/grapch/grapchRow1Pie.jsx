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
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="stat-one">
                        <h2>Submission Type Breakdown in UFC -Year one Year</h2>
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
            </div>
        </div>
    );
};

export default FighterGrapch;
