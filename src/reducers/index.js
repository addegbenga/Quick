import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { profileReducer } from "./profileReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  user: userReducer,
});

export default rootReducer;
