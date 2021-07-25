import React, { Component, useEffect, useState } from 'react';
import './App.css';
import "antd/dist/antd.css";

import { Layout, message, Button } from "antd";

import MainLayout from "./components/layout/layout.component";
import Login from "./scenes/login";

import PrivateRoute from "./components/private-route/private-route";
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const { Footer } = Layout;
class App extends Component {

  render() {
    const { isLogged } = this.props;

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => localStorage.getItem("isLogged") === "true" ? (<Redirect to="/dashboard" />) : (<Login props={this.props} />)} />
            <Route exact path="/login" render={() => localStorage.getItem("isLogged") === "true" ? (<Redirect to="/dashboard" />) : (<Login props={this.props}  />)} />
            <PrivateRoute exact path="/dashboard" Component={MainLayout} isLogged={isLogged} />
            <PrivateRoute exact path="/createemployee" Component={MainLayout} isLogged={isLogged} />
          </Switch>
        </Router>
        <Footer style={{ textAlign: "center", padding: "9px 0px 2px 0px" }}>
          <h6>&copy; onpassive project</h6>
        </Footer>
      </div>
    );
  }
}

// below methods are for Store state props and to dispatch the actions just to show the implementation i wrote this in all pages

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
