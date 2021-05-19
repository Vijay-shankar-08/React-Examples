import React, { Component } from 'react'

import Timer from './components/Timer';
import State from './components/State';
import Derived from './components/Derived';
import Test1 from "./components/Test1"
import Test2 from './components/Test2';
class App extends Component {
  render() {
    return (
      <div className='App'>
        
        <Timer name="Timer" />
        <State />
        <Derived />
        <Test1 />
        <Test2 />
      </div>
    )
  }
}

export default App;
