import React from "react";
import WeightHistoryInfo from "./historyInfo"
const FighterHistory = ({ randDate, weightHistory, date, changedate }) => {
    return (
        <ul className="responsive-table">
            <li className="table-header">
                <div className="col col-4">Select Date</div>
                <div className="col col-4">
                    <label className="dropdown">
                        <div className="dd-button">
                            {date}
                        </div>
                        <input type="checkbox" className="dd-input" id="test" />
                        <ul className="dd-menu">
                            {randDate.map((dateinfo, index) => (
                                <li key={index} onClick={() => changedate(dateinfo)}>{dateinfo}</li>
                            ))}
                        </ul>

                    </label>
                </div>
                <div className="col col-2">Record</div>
            </li>
            <WeightHistoryInfo historyInfo={weightHistory} />
        </ul>
    );
}

export default FighterHistory;
