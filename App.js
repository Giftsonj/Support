import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import ComponentOne from './components/componentone'
import Login from './components/Login'
import SupportCase from './components/SupportCase'
import Submit from './components/Submit'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Login/:username" component={SupportCase} />
          {/* <Route path="/SubTech1/:subTech1" component={SupportCase} /> */}
          <Route path="/Submit" component={Submit} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
