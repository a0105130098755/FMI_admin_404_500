import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/auth/AdminLogin";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/errors/NotFound";
import InternalServerError from "./components/errors/InternalServerError";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/500" component={InternalServerError} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
