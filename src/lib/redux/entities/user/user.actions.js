export const userAuthActions = {
  USER_AUTH_REQUEST: "USER_AUTH_REQUEST",
  USER_AUTH_SUCCESS: "USER_AUTH_SUCCESS",
  USER_AUTH_REJECT: "USER_AUTH_REJECT"
};

// Actions

const userAuthRequest = () => {
  return {
    type: spacesActions.USER_AUTH_REQUEST
  };
};

const userAuthSuccess = user => {
  return {
    type: spacesActions.USER_AUTH_SUCCESS,
    user: user
  };
};

const userAuthReject = error => {
  return {
    type: spacesActions.USER_AUTH_REJECT,
    error: error
  };
};

// Request
