import React from "react";
const FighterHistoryInfo = ({ historyInfo }) => {
    return (
        <React.Fragment>
            {
                historyInfo.map((info, index) => (
                    <li className="table-row" key={index}>
                        <div
                            className="col col-8 d-flex align-items-center cust__span"
                            data-label="Job Id"
                        >
                            <b>{info["name"]} <span></span></b>
                        </div>
                        <div className="col col-2" data-label="Customer Name">
                            {info["record"]["lose"]}-{info["record"]["draw"]}-{info["record"]["win"]}

                        </div>
                    </li>
                ))
            }
        </React.Fragment>
    );
}

export default FighterHistoryInfo;
