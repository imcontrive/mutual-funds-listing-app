import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export class Login extends Component {
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

    fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.status === 200
          ? res.json().then(data => {
              console.log(data);
              localStorage.setItem("authToken", data.token);
              this.props.dispatch({
                type: "USER_LOGIN_SUCCESS",
                data: data
              });
              this.props.history.push("/");
            })
          : console.log(res, "server error");
      })
      .catch(error => console.error("Error:", error));
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
