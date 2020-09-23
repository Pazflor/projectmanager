import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import Employees from "./pages/Employees";
import Projects from './pages/Projects'
import Test from './pages/Test'

function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/employees' component={Employees} />
          <Route path='/projects' component={Projects} />
          <Route path='/test' component={Test} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
