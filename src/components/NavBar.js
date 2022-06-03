import React, { useState } from "react";
import Person from "../images/person.svg";
import Logo from "../images/logo.svg";
import Hamburger from '../images/hamburger.png';
import './NavBar.css';

export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <div className="NavBar">
        <span 
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        >    
        <img src={Hamburger} alt=''/>
        </span>
        <div className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul className="List">
        <img src={Logo} alt="logo" className="Logo"/>
        <li><a href="/mustang">Home</a></li>
        <li><a href="/mustang">Sobre</a></li>
        <li><a href="/mustang">Tabela</a></li>
        <li><a href="/mustang">Fale Conosco</a></li>
        <li><a href="/mustang">Entrar</a></li>
        <img src={Person} alt='' />
        </ul>
        </div>
        </div>
      );
}