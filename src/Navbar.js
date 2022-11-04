import React from "react";
import './Navbar.css';
import logo from './logo.png';

export default function Navbar(){
    return (
        <div className="Nav-bar">
            <img src={logo} className="Pent-logo" alt="logo" />
            <a href="" className="Nav-link">Home</a>
            <a href="" className="Nav-link">About Us</a>
            <a href="" className="Nav-link">News</a>
            <a href="" className="Nav-link">Devotions</a>
            <a href="" className="Nav-link">Contact</a>
        </div>
    );
};  