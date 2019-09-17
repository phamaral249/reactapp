import React from 'react';
import './App.css';
import {Contador} from './Contador.js'
import { CalculadoraIMC } from './CalculadoraIMC';
import { ColorChanger } from './ColorChanger';
import { DropdownWithInput } from './MenuPanel';


function App() {
  return (
    <div id="myApp" className="App">
      
      <DropdownWithInput />
      <Contador />
      <CalculadoraIMC />
      <ColorChanger />
    </div>
  );
}

export default App;
