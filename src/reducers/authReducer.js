import {
  LOGIN_USER,
  REGISTER_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  GET_AUTH_USER,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
