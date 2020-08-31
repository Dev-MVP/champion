import React from "react";

const FighterGrapch2 = ({ }) => {

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="stat-one pad__two-12">
                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Finishes statistics by year</h2>
                            <label class="dropdown">
                                <div class="dd-button dd_btn-color">
                                    Select Year
                                </div>
                                <input type="checkbox" class="dd-input" id="test" />
                                <ul class="dd-menu diff__color-opt">
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
        </div>

    );
}

export default FighterGrapch2;
