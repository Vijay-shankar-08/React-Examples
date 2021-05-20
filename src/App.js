import React, { Component } from 'react'

import Timer from './components/Timer';
import State from './components/State';
import Derived from './components/Derived';
import Test1 from "./components/Test1"
import Test2 from './components/Test2';
import Parent from './components/Parent'
import Condition from './components/Condition';
import BtnPresent from './components/BtnPresent'
import Frag from './components/Frag'
import List from './components/List'

class App extends Component {
  render() {
    return (
      < >
        
        <Timer name="Timer" />  
        <State />
        <Derived />
        <Test1 /> 
        <Test2 />   
        <Parent />    
        <BtnPresent /> 
        <Condition /> 
        <Frag />
        <List />
      </ >
      
    )
  }
}

export default App;
