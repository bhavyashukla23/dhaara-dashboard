import React from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi2';
import { MdOutlineArrowUpward, MdOutlineArrowDownward } from 'react-icons/md';
import '../Css/Stats.css';

const Stats = () => {
    return (
        <div className="parent">
            <h3>Water Consumption Summary</h3>
            <div className="child">
                <div className="block">
                    <div className='row-1'>
                        <p className="report-title">Daily Report</p>
                        <span className="success">Success <HiOutlineExclamationCircle className="success-icon" /></span>
                    </div>
                    <hr />
                    <p className="report-duration">Monday, 18 Dec 2023 | 8:00 AM - Tuesday, 19 Dec 2023 | 8:00 AM</p>
                    <div className='row-3'>
                        <div className='col-1'>
                            <h1 className="report-amount">39.5 KL</h1>
                            <p className="change-red">
                                <MdOutlineArrowUpward className="arrow-icon-red"/>
                                <span className='data-red'>9%  </span> 
                                34 KL more From Last Day
                            </p>
                        </div>
                        <div className='col-2'>
                            <span>
                                <p>Pump Working Hours</p>
                                <p className='text'>1 Hour 54 Mins</p>
                            </span>
                        </div>
                        <div className='col-3'>
                            <span>
                                <p>Average Flow Rate</p>
                                <p className='text'>1.3 M<sup>3</sup>/sec</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className='row-1'>
                        <p className="report-title">Monthly Report</p>
                    </div>
                    <hr />
                    <p className="report-duration">December 2023 | 18 December - 19 Dec 2023 | 8:00 AM</p>
                    <div className='row-3'>
                        <div className='col-1'>
                            <h1 className="report-amount">944.32 KL</h1>
                            <p className="change-green">
                                <MdOutlineArrowDownward className="arrow-icon-green"/>
                                <span className='data-green'>8%  </span>
                                345 KL less From Last Day
                            </p>
                        </div>
                        <div className='col-2'>
                            <span>
                                <p>Pump Working Hours</p>
                                <p className='text'>1 Hour 54 Mins</p>
                            </span>
                            <span>
                                <p>Max Extraction</p>
                                <p className='text'>1200 KL</p>
                            </span>
                        </div>
                        <div className='col-3'>
                            <span>
                                <p>Average Flow Rate</p>
                                <p className='text'>1.3 M<sup>3</sup>/sec</p>
                            </span>
                            <span>
                                <p>Average Extraction</p>
                                <p className='text'>800 KL</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
