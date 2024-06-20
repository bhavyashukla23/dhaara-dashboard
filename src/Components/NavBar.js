import React from 'react';
import { VscBellDot } from 'react-icons/vsc';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { IoInfinite } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';
import Person from '../assets/person.jpg';
import '../Css/NavBar.css';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="logo">
                <IoInfinite className="logo-icon" />
                <span className="logo-text">kritsnam</span>
            </div>
            <div className="nav-icons">
                <VscBellDot className="bell-icon" />
                <TfiHeadphoneAlt className="call-icon" />
                <div className="person-container">
                    <img src={Person} alt="Person" className="person" />
                    <FaCheckCircle className="online-indicator" />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
