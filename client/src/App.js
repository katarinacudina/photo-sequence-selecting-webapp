import React from "react";
import "./App.css";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import LogInForm from "./components/Forms/Login";
import SignInForm from "./components/Forms/Signin";
import AllImages from "./components/Administrator/AllImages";
import ReviewImages from "./components/Administrator/ReviewImages";
import ManageAccount from "./components/Administrator/ManageAccounts";

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

library.add(faTimes, faChevronLeft, faChevronRight);

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <ImageViewer /> */}
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
              component={ManageAccount}
            />
            <ProtectedRoute exact path="/home" component={Layout} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
