import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";
import NotFound from "./components/errors/NotFound";
import InternalServerError from "./components/errors/InternalServerError";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/404" component={NotFound} />
          <Route path="/500" component={InternalServerError} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
