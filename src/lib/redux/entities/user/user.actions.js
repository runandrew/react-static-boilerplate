import Api from "../../../utils/Api";

export const userAuthActions = {
  USER_AUTH_REQUEST: "USER_AUTH_REQUEST",
  USER_AUTH_SUCCESS: "USER_AUTH_SUCCESS",
  USER_AUTH_REJECT: "USER_AUTH_REJECT"
};

// Actions

const userAuthRequest = () => {
  return {
    type: userAuthActions.USER_AUTH_REQUEST
  };
};

const userAuthSuccess = user => {
  return {
    type: userAuthActions.USER_AUTH_SUCCESS,
    user: user
  };
};

const userAuthReject = error => {
  return {
    type: userAuthActions.USER_AUTH_REJECT,
    error: error
  };
};

// Request
export const authUser = () => {
  return dispatch => {
    dispatch(userAuthRequest());

    Api.get({
      url: `https://jsonplaceholder.typicode.com/users/${Math.floor(
        Math.random() * 10
      )}`
    })
      .then(user => {
        dispatch(userAuthSuccess(user));
      })
      .catch(err => {
        dispatch(userAuthReject(err));
      });
  };
};
