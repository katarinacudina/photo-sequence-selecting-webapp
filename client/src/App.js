import React, { useState } from "react";
import "./App.css";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
  faSpinner,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

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
import LogInForm from "./components/Forms/Login";
import SignInForm from "./components/Forms/Signin";
import Layout from "./components/Layout/Layout";

import ReviewNewImages from "./components/Layout/ReviewNewImages";
import ReviewExistingImages from "./components/Layout/ReviewExistingImages";

import AllImages from "./components/Administrator/AllImages";
import ReviewImages from "./components/Administrator/ReviewImages";
import ManageAccounts from "./components/Administrator/ManageAccounts";

library.add(faTimes, faChevronLeft, faChevronRight, faSpinner, faPlus, faMinus);

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/auth/login" />}
            />
            <Route exact path="/auth/signup" component={SignInForm} />
            <Route exact path="/auth/login" component={LogInForm} />
            <Route
              exact
              path="/user/review-new-images"
              component={ReviewNewImages}
            />
            <Route
              exact
              path="/user/review-existing-images"
              component={ReviewExistingImages}
            />
            <Route
              exact
              path="/administrator/all-images"
              component={AllImages}
            />
            <Route
              exact
              path="/administrator/review-images"
              component={ReviewImages}
            />
            <Route
              exact
              path="/administrator/manage-accounts"
              component={ManageAccounts}
            />
            <ProtectedRoute exact path="/home" component={Layout} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
