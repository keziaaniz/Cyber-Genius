import React from "react";
import './Card.css';
import {CardItem, ButtonCard} from './styles';
import Calendar from '../images/calendar.svg';
import Vel from '../images/velocimetro.svg';
import Flash from '../images/flash.svg';
import People from '../images/people.svg';


export default function Card() {
    return (
        <div className="Card">
        <CardItem>
            <div className="Card-Item">
            <h3> Honda Aversia </h3>
            <ul className="List-container">
                <li>
                    <ul className="List-Item">
                    <li><img src={Calendar} alt=''/></li>
                    <li><p>2015</p></li>
                    </ul>
                </li>
                <li>
                    <ul className="List-Item">
                    <li><img src={Vel} alt=''/></li>
                    <li><p>180 km/h</p></li>
                    </ul>
                </li>
                <li>
                    <ul className="List-Item">
                    <li><img src={Flash} alt=''/></li>
                    <li><p>9/10</p></li>
                    </ul>
                </li>
                <li>
                    <ul className="List-Item">
                    <li><img src={People} alt=''/></li>
                    <li><p>8/10</p></li>
                    </ul>
                </li>
            </ul>
            <ButtonCard> Ver carro</ButtonCard>
            </div>
          </CardItem>
        </div>
      );
}