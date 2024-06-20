import React from "react";
import Stats from '../Components/Stats';
import { GrPowerReset } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Select from 'react-select';
import '../Css/DashBoard.css';

const DashBoard = () => {
    return (
        <div className="parent-div">
            <div className="row-1">
                <h1 className="heading-main">Welcome To Dhaara Live Dashboard! </h1>
                <div className="buttons">
                    <button className="download">Download User Manual</button>
                    <GrPowerReset className="icon" />
                    <BsThreeDots className="icon" />
                </div>
            </div>

            <div className="row-2">
                <div className="tier-1">
                    <div className="box-1">
                        <p className="heading">Select Meter</p>
                        <Select className='filter' placeholder='Select All' />
                    </div>

                    <div className="member-status">
                        <p className="heading">Meter Status</p>
                        <div className="activity-status">
                            <div className="status-row">
                                <div className="status-icon green"><GoDotFill />12 Active </div>
                            </div>
                            <div className="status-row">
                                <div className="status-icon red"><GoDotFill />2 Inactive </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="tier-2">
                    <div className="meter-details">
                        <p className="heading">Meter Details</p>
                        <p className="desc">Basement Borewell 1, Basement Borewell 3, Basement Borewell 4, Basement Borewell, Basement Borewell</p>
                    </div>

                    <div className="pdf-download">
                        <FaFilePdf className="pdf-icon" />
                        <p className="pdf-heading">Download All Calibration Certificate</p>
                    </div>
                </div>
            </div>

            <Stats />

        </div>
    );
};

export default DashBoard;

