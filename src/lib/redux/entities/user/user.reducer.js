import { userAuthActions } from "./user.actions.js";

const initialState = {
  isFetching: false,
  hasFetched: false,
  user: null,
  error: null
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case userAuthActions.USER_AUTH_REQUEST: {
      const nextState = Object.assign({}, prevState, {
        isFetching: true
      });

      return nextState;
    }

    case userAuthActions.USER_AUTH_SUCCESS: {
      const nextState = Object.assign({}, prevState, {
        user: action.user,
        isFetching: false,
        hasFetched: true,
        error: null
      });

      return nextState;
    }

    case userAuthActions.USER_AUTH_REJECT: {
      const nextState = Object.assign({}, prevState, {
        error: action.error,
        isFetching: false
      });

      return nextState;
    }

    default:
      return Object.assign({}, prevState);
  }
};
