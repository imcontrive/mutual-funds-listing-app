import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

export class Nav extends Component {
  handleLogout = () => {};
  render() {
    const { currentUser } = this.props;
    console.log(currentUser, "currentUser");
    return (
      <div className="is_nav_wrapper">
        <ul className="nav_items">
          <NavLink className="navlink" to="/">
            MFunds
          </NavLink>
          {this.props.currentUser ? (
            <button onClick={() => this.props.dispatch({ type: "LOG_OUT" })}>
              Log Out
            </button>
          ) : (
            <NavLink className="navlink" to="/login">
              Login / SignUp
            </NavLink>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.user
  };
};

export default connect(mapStateToProps)(Nav);
