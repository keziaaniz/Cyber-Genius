import React from "react";
import Card from "./Card";
import './Hero.css';
import Car1 from '../images/car1.png';
import Car2 from '../images/car2.png';
import Car3 from '../images/car3.png';
import ArrowL from '../images/leftArrow.svg';
import ArrowR from '../images/arrow.svg';

export default function Hero() {
    return (
        <div className="Hero">
        <div className="Hero-container">
        <img src={ArrowL} alt='arrow left' className="arrow"/>
        <div className="Hero-Card">
        <div className="Hero-Item">
        <img src={Car1} alt='car' className="car"/>
        <Card/>
        </div>  
        <div className="Hero-Item">
        <img src={Car3} alt='car' className="car"/>
        <Card/>
        </div>  
        <div className="Hero-Item">
        <img src={Car2} alt='car' className="car"/>
        <Card/>
        </div>
        </div>
        <img src={ArrowR} alt='arrow right'  className="arrow"/>
        </div>
        </div>
      );
}