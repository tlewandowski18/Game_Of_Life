import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import Header from "./Components/Header/Header"
import Game from "./Components/Game/Game"
import About from "./Components/About/About"

function App(props) {


  return (
    <div className="App">
      <Header></Header>
      <Route exact path='/' component={Game} />
      <Route path='/about' component={About} />
      
    </div> 
  )
}


export default App;
