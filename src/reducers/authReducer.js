import {
  LOAD_USER,
  LOGIN_USER,
  LOGIN_ERROR,
  REGISTER_ERROR,
  LOAD_USER_ERROR,
  REGISTER_USER,
  LOADING,
  LOGOUT_USER,
  // FORGOT_PASSWORD,
  // RESET_PASSWORD,
  // GET_AUTH_USER,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  loading: true,
  apiloading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        apiloading: false,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        apiloading: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        apiloading: false,
      };

    case LOADING:
      return {
        ...state,
        apiloading: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        apiloading: false,
      };

    case LOGIN_ERROR:
      return {
        error: action.payload,
        apiloading: false,
        loading: false,
      };
    case REGISTER_ERROR:
      return {
        error: action.payload,
        apiloading: false,
        loading: false,
      };
    case LOAD_USER_ERROR:
      return {
        error: action.payload,
        apiloading: false,
        loading: false,
      };
    default:
      return state;
  }
};
