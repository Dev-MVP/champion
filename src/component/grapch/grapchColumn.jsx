import React, { useEffect, useState } from "react";
import { Chart } from "react-charts";

const FighterColumn = ({ round_win_rate_per_year }) => {
    const [submissionTypePerYearData, setSubmissionTypePerYear] = useState([]);

    const series = React.useMemo(
        () => ({
            type: "bar",
        }),
        []
    );
    const axes = React.useMemo(
        () => [
            { primary: true, type: "ordinal", position: "bottom" },
            { position: "left", type: "linear", stacked: false },
        ],
        []
    );
    useEffect(() => {
        let a = {};
        round_win_rate_per_year.forEach((yearObj) => {
            const year = yearObj["year"];
            yearObj["data"].forEach((rec) => {
                a = {
                    ...a,
                    [rec.round]: {
                        label: rec.round,
                        data: [
                            ...(a[rec.round] ? a[rec.round].data : []),
                            {
                                primary: isNaN(year) ? 0 : parseInt(year),
                                secondary: parseInt(rec.round),
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
                            <Chart data={submissionTypePerYearData} series={series} axes={axes} dark />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FighterColumn;
