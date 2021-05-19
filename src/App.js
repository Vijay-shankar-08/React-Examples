import React, { Component } from 'react'
import LifecycleA from "./components/LifecycleA";
import Timer from './components/Timer';
import State from './components/State';
import Derived from './components/Derived';
import Test1 from "./components/Test1"
class App extends Component {
  render() {
    return (
      <div className='App'>
        <LifecycleA />
        <Timer name={234} />
        <State />
        <Derived />
        <Test1 />
      </div>
    )
  }
}

export default App;
