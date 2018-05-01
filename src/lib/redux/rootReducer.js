import { combineReducers } from "redux";

import userReducer from "./entities/user/user.reducer";

const rootReducer = combineReducers({
  userRoot: userReducer
});

export default rootReducer;
