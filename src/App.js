import React from 'react';
import './App.css';
import {Contador} from './Contador.js'
import { CalculadoraIMC } from './CalculadoraIMC';
import { ColorChanger } from './ColorChanger';
import { MyNavBar } from './NavBar';


function App() {
  return (
    <div id="myApp" className="App">
      <MyNavBar />
      <Contador />
      <CalculadoraIMC />
      <ColorChanger />
    </div>
  );
}

export default App;
