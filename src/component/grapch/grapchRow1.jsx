import React from "react";

const FighterGrapch = ({ }) => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7">
                    <div className="stat-one">
                        <h2>Total Fighters vs Finishes through the Years</h2>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="stat-one">
                        <h2>Distribution of fights by location</h2>
                        <label className="dropdown">
                            <div className="dd-button dd_btn-color">
                                Select Year
                  </div>
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
                </div>
            </div>
        </div>
    );
}

export default FighterGrapch;
