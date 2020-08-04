import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "../scss/index.scss";
import { getCurrentUser, noToken } from "../actions";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ListingPage from "../components/ListingPage";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import EditProfile from "../components/EditProfile";
import Chart from "../components/Chart";

class App extends Component {
  state = {
    token: ""
  };

  componentDidMount() {
    var token = localStorage.getItem("authToken") || "";
    if (token) {
      this.setState({ token: token });
      this.props.dispatch(getCurrentUser());
    } else {
      this.props.dispatch(noToken());
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.currentUser ? (
          <>
            <Route exact path="/" component={ListingPage} />
          </>
        ) : (
          <>
            <Route exact path="/" component={HomePage} />
          </>
        )}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/user" component={UserProfile} />
        <Route path="/edit" component={EditProfile} />
        <Route path="/funds" component={Chart} />
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
