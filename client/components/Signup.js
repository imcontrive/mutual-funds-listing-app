import React, { Component } from "react";

export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    gender: "",
    age: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  signupHandler = e => {
    e.preventDefault();

    const { name, email, gender, age, password } = this.state;
    const body = { name, email, gender, age, password };
    fetch("http://localhost:3000/api/v1/users/signup", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.props.history.push("/Login");
      })
      .catch(error => console.error("Error:", error));
  };

  render() {
    return (
      <div>
        <div className="signup-card">
          <h2 className="text-center">Sign Up</h2>
          <form>
            <p>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-input"
                name="name"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <label htmlFor="email">Email</label>
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
              <label htmlFor="gender">Gender</label>
              <div className="select">
                <select name="gender" id="slct" onChange={this.handleChange}>
                  <option selected disabled>
                    Choose an option
                  </option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Transgender">Transgender</option>
                </select>
              </div>
            </p>
            <p>
              <label htmlFor="age">Age</label>
              <input
                type="Number"
                className="form-input"
                name="age"
                placeholder="Enter your age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </p>
            {/* </p> */}
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
              value="Register"
              onClick={this.signupHandler}
            />
          </form>
        </div>
      </div>
    );
  }
}
