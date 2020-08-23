import React from "react";
import "./App.css";
import LoginForm from "./components/Forms/Login";
import SubmitForm from "./components/Forms/Signin";
import NotFound from "./components/Routes/NotFound.js";
import ProtectedRoute from "./components/Routes/ProtectedRoute";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // eslint-disable-next-line
  Link,
  Redirect,
} from "react-router-dom";

import Header from "./components/Headers/Header";
import Footer from "./components/Headers/Footer";
import Layout from "./components/Layout/Layout";
import ImageViewer from "./components/ImagePreview/ImageSlider";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ImageViewer />
        {/* <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/auth/login" />}
            />
            <Route exact path="/auth/signup" component={SubmitForm} />
            <Route exact path="/auth/login" component={LoginForm} />
            <ProtectedRoute exact path="/home" component={Layout} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div> */}

        <Footer />
      </Router>
    </div>
  );
}

export default App;
