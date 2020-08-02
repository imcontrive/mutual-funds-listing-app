import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="is_nav_wrapper">
        <ul className="nav_items">
          <NavLink className="navlink" to="/">
            MFunds
          </NavLink>
          <NavLink className="navlink" to="/login">
            Login / SignUp
          </NavLink>
        </ul>
      </div>
    );
  }
}
