import React from "react";
import "./App.css";
import LoginForm from "./components/Forms/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
