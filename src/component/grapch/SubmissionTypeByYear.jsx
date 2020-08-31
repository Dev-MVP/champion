import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const FighterColumn = ({ submissionTypePerYear }) => {
    const [submissionTypePerYearData, setSubmissionTypePerYear] = useState([]);
    const [year, setYear] = useState(Object.keys(submissionTypePerYear[0])[0]);

    useEffect(() => {
        const yearData = submissionTypePerYear.find((yearData) => Object.keys(yearData)[0] === year);
        const data = yearData[year].map((item) => [item.sub_type, parseInt(item.count)]);
        console.log([["Submisstion Type", "Count"], ...data]);

        setSubmissionTypePerYear([["Submisstion Type", "Count"], ...data]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="stat-one pad__two-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Submission Type Breakdown In UFC - Year On Year</h2>
                        </div>
                        <div className="row h-100">
                            <div className="col-md-6 col-12">
                                <Chart
                                    width={"100%"}
                                    height={"100%"}
                                    loader={<div>Loading Chart</div>}
                                    data={submissionTypePerYearData}
                                    chartType="PieChart"
                                    options={{
                                        backgroundColor: "transparent",
                                        is3D: true,
                                        legend: "none",
                                        pieSliceText: "label",
                                        colors: [
                                            "#B2B810",
                                            "#B644F8",
                                            "#FBC904",
                                            "#00E9FB",
                                            "#F95307",
                                            "#A76532",
                                            "#D55C25",
                                            "#FF6D2A",
                                            "#FFC054",
                                            "#58880E",
                                        ],
                                    }}
                                />
                            </div>
                            <div className="col-md-6 col-12">
                                <Chart
                                    width={"100%"}
                                    height={"100%"}
                                    loader={<div>Loading Chart</div>}
                                    data={submissionTypePerYearData}
                                    chartType="LineChart"
                                    options={{
                                        legend: "none",
                                        backgroundColor: "transparent",
                                        legendTextStyle: { color: "#FFF" },
                                        titleTextStyle: { color: "#FFF" },
                                        colors: [
                                            "#B2B810",
                                            "#B644F8",
                                            "#FBC904",
                                            "#00E9FB",
                                            "#F95307",
                                            "#A76532",
                                            "#D55C25",
                                            "#FF6D2A",
                                            "#FFC054",
                                            "#58880E",
                                        ],
                                        hAxis: {
                                            title: "Submission Type",
                                            textStyle: { color: "#FFF" },
                                            titleTextStyle: { color: "#FFF" },
                                        },
                                        vAxis: {
                                            title: "Count",
                                            textStyle: { color: "#FFF" },
                                            titleTextStyle: { color: "#FFF" },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FighterColumn;
