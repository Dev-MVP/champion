import React, { useEffect, useState } from "react";
import { Chart } from "react-charts";

const FighterGrapch2 = ({ submissionTypePerYear }) => {
    const [submissionTypePerYearData, setSubmissionTypePerYear] = useState([]);

    const axes = React.useMemo(
        () => [
            { primary: true, type: "linear", color: "#F29D38", position: "bottom" },
            { primary: false, type: "linear", position: "left" },
        ],
        []
    );

    useEffect(() => {
        let a = {};
        submissionTypePerYear.forEach((yearObj) => {
            const year = Object.keys(yearObj)[0];
            yearObj[year].forEach((rec) => {
                a = {
                    ...a,
                    [rec.sub_type]: {
                        label: rec.sub_type,
                        data: [
                            ...(a[rec.sub_type] ? a[rec.sub_type].data : []),
                            {
                                primary: isNaN(year) ? 0 : parseInt(year),
                                secondary: parseInt(rec.count),
                            },
                        ],
                    },
                };
            });
        });

        setSubmissionTypePerYear(Object.values(a));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="stat-one pad__two-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Finishes statistics by year</h2>
                        </div>

                        <div
                            style={{
                                width: "100%",
                                height: "calc(100% - 90px)",
                                overflow: "hidden",
                            }}
                        >
                            <Chart data={submissionTypePerYearData} axes={axes} dark />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FighterGrapch2;
