import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class UserProfile extends Component {
  // editHandler = () => {
  //   this.props.history.push(`/edit:${this.props.currentUser._id}`);
  // };
  render() {
    const { currentUser } = this.props;
    return (
      <div className="is_pro_wrapper">
        <ul className="is_user_content">
          <span className="user_info avatar_w">
            <p className="avatar">
              {currentUser ? currentUser.name.split("").slice(0, 1) : "Noname"}
            </p>
          </span>
          <span className="user_details">
            <p className="padding_left margin">
              <li>Name</li>
              <li>{currentUser ? currentUser.name : ""}</li>
            </p>
            <p className="padding_left margin">
              <li>Email</li>
              <li>{currentUser ? currentUser.email : ""}</li>
            </p>
            <p className="padding_left margin">
              <li>Age</li>
              <li>{currentUser ? currentUser.age : ""}</li>
            </p>
            <p className="padding_left margin">
              <li>Gender</li>
              <li>{currentUser ? currentUser.gender : ""}</li>
            </p>
            {currentUser ? (
              <NavLink
                className="btn padding_left margin btn-primary"
                // to={`/edit/${currentUser._id}`}
                to={{
                  pathname: `/edit/${currentUser._id}`,
                  state: { userId: currentUser._id }
                }}
              >
                Edit Profile
              </NavLink>
            ) : (
              ""
            )}
          </span>
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

export default connect(mapStateToProps)(UserProfile);
