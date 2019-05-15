import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import ComponentOne from './components/componentone'
import Login from './components/Login'
import SupportCase from './components/SupportCase'
import Submit from './components/Submit'
import FinalSubmit from './components/FinalSubmit';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} exact/>
          <Route path="/Login/:username" component={SupportCase} />
          {/* <Route path="/SubTech1/:subTech1" component={SupportCase} /> */}
          {/* <Route path="/Submit/:ticketNum" component={Submit} /> */}
                    {/* <Route path="/Submit/:ticketNum" component={Submit} /> */}

          {/* <Route path="/FinalSubmit/:finalTicket" component={FinalSubmit} /> */}
          {/* <Route path="/FinalSubmit/:finalTicket:severityVal:productMain:descVal:techVal" component={FinalSubmit} /> */}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
