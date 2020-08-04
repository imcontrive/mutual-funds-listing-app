import React, { Component } from "react";
import { connect } from "react-redux";

class EditProfile extends Component {
  state = {
    name: "",
    email: "",
    gender: "",
    age: ""
    // msg: ""
  };

  componentDidMount() {
    fetch(
      `http://localhost:3000/api/v1/users/${this.props.location.state.userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${localStorage.authToken}`
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          name: data.user.name,
          email: data.user.email,
          age: data.user.age,
          gender: data.user.gender
        });
      });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  updateHandler = e => {
    e.preventDefault();
    const { name, email, gender, age } = this.state;
    const body = { name, email, gender, age };

    fetch(
      `http://localhost:3000/api/v1/users/edit/${this.props.location.state.userId}`,
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.authToken}`
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        // this.setState({ msg: data.message });
        this.props.dispatch({ type: "USER_LOGIN_SUCCESS", data: data });
        this.props.history.push("/");
        // console.log(data, "state,", this.state);
      })
      .catch(error => console.error("Error:", error));
  };

  render() {
    return (
      <div>
        <div className="signup-card">
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
          <p className="dropmenu">
            <p>
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                className="form-input"
                name="gender"
                placeholder="Select your gender"
                value={this.state.gender}
                onChange={this.handleChange}
              />
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
          </p>
          <input
            type="submit"
            className="btn btn-primary"
            value="Update Profile"
            onClick={this.updateHandler}
          />
          {/* {this.state.msg ? (
            <p style={{ color: "#1a3878", textAlign: "center" }}>
              {" "}
              {this.state.msg}{" "}
            </p>
          ) : (
            ""
          )} */}
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

export default connect(mapStateToProps)(EditProfile);
