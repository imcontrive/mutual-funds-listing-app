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
    // console.log(this.props);
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
