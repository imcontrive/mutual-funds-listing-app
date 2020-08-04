import axios from "axios";

const rootUrl = "http://localhost:3000/api/v1";

export const getCurrentUser = () => {
  return dispatch => {
    axios
      .get(`${rootUrl}/users/me`, {
        headers: {
          Authorization: `token ${localStorage.getItem("authToken")}`
        }
      })
      .then(res => {
        dispatch({
          type: "USER_LOGIN_SUCCESS",
          data: res.data
        });
      })
      .catch(err => {
        dispatch({ type: "USER_LOGIN_FAILED" });
      });
  };
};

export const noToken = () => {
  return dispatch => {
    dispatch({
      type: "NO_TOKEN"
    });
  };
};

export const fetchLoginData = body => {
  return dispatch => {
    fetch(`${rootUrl}/users/login`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.status === 200
          ? res.json().then(data => {
              localStorage.setItem("authToken", data.token);
              dispatch({
                type: "USER_LOGIN_SUCCESS",
                data: data
              });
              // this.props.history.push("/");
            })
          : console.log(res, "server error");
      })
      .catch(error => console.error("Error:", error));
  };
};
