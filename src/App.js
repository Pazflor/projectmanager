import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Employees from "./components/Employees";
import Projects from './components/Projects'

function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/employees' component={Employees} />
          <Route path='/projects' component={Projects} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
