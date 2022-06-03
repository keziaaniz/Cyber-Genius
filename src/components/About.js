import React from "react";
import './About.css';
import {Button} from './styles';


export default function About() {
    return (
        <div className="About">
        <div className="About-container">
          <div className="About-text">
            <h2>Mustang</h2>
            <p> O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. 
              O carro foi apresentado ao público em 17 de 
              abril de 1964 durante a New York World's Fair. O Mustang,
             apesar de ter sofrido grandes alterações ao longo 
             dos anos é a mais antiga linha de automóveis da Ford.</p>
             <Button >Ver carros</Button>
          </div>
        </div>
        </div>
      );
}