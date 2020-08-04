import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "../../public/stylesheets/header.css";

class Header extends Component {
  render() {
    const { currentUser } = this.props;
    // console.log(currentUser);

    return (
      <div className="is-header-wrapper header">
        <NavLink to="/" className="logo">
          MutualFunds
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {currentUser ? (
            <>
              <li className="user-section">
                <NavLink to={`/user/${currentUser._id}`}>My Account</NavLink>
              </li>

              <li
                onClick={() => {
                  window.localStorage.clear();
                  this.props.dispatch({ type: "LOG_OUT" });
                }}
              >
                <NavLink to="/"> Log Out</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">SignUp</NavLink>
              </li>
            </>
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

export default connect(mapStateToProps)(Header);
