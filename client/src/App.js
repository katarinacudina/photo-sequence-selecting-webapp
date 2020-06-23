import React from "react";
import "./App.css";
import LoginForm from "./components/Forms/Login";
import SubmitForm from "./components/Forms/Signin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Headers/Header";
import Footer from "./components/Headers/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={SubmitForm} />
            <Route exact path="/auth/login" component={LoginForm} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
