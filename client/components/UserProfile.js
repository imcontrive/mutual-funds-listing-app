import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class UserProfile extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <>
        <div className="card-container">
          <div className="upper-container">
            <div className="image-contanier">
              <span className="avatar">
                {currentUser
                  ? currentUser.name.split("").slice(0, 1)
                  : "Noname"}
              </span>
            </div>
          </div>
          <div className="lower-container">
            {currentUser ? (
              <div className="user-info">
                <span>
                  <h4>Name</h4>
                  <h4>Email</h4>
                  <h4>Gender</h4>
                  <h4>Age</h4>
                </span>
                <span>
                  <h5>{currentUser.name}</h5>
                  <h5>{currentUser.email}</h5>
                  <h5>{currentUser.gender}</h5>
                  <h5>{currentUser.age}</h5>
                </span>
              </div>
            ) : (
              ""
            )}
            <div>
              <NavLink
                to={{
                  pathname: `/edit/${currentUser._id}`,
                  state: { userId: currentUser._id }
                }}
                className="btn"
              >
                Edit Profile
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.user
  };
};

export default connect(mapStateToProps)(UserProfile);
