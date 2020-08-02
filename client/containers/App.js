import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "../scss/index.scss";
import { getCurrentUser, noToken } from "../actions";

import HomePage from "../components/HomePage";
import Nav from "../components/Nav";
import Login from "../components/Login";
import Signup from "../components/Signup";

class App extends Component {
  state = {
    token: ""
  };

  componentDidMount() {
    var token = localStorage.getItem("authToken") || "";
    if (token) {
      this.setState({ token: token });
      console.log(token, "token");
      this.props.dispatch(getCurrentUser());
    } else {
      this.props.dispatch(noToken());
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {/* <Login /> */}
        {/* <Signup /> */}
        <Route exact path="/" component={HomePage} />
        <Nav />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.user
  };
};

export default connect(mapStateToProps)(App);
