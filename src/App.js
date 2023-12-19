import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/watch">
            <Watch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
