import React from 'react';
import Nav from './Nav';
import Home from './home/Home';
import Register from './register/Register';
import * as Env from "./environments";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Parse from 'parse';
	
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/register" exact component={Register}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
