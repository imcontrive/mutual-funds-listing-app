import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchLoginData } from "../actions/index";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMsg: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const body = { email, password };
    this.props.dispatch(fetchLoginData(body));
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="login-wrapper">
        <div className="login-card">
          <h2 className="text-center">Sign In</h2>
          <form className="login-form">
            <p>
              <label htmlFor="age">Email</label>
              <input
                type="text"
                className="form-input"
                name="email"
                placeholder="Enter your email address"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-input"
                name="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </p>
            <input
              type="submit"
              className="btn btn-primary"
              value="Login"
              onClick={this.handleLogin}
            />
            <p className="link_to_create">
              Not registered? <NavLink to="/signup">Create an account</NavLink>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.user
  };
};

export default connect(mapStateToProps)(Login);
