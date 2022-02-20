import { GET_USER, GET_USER_ERROR, LOADING } from "../actions/types";

const initialState = {
  user: null,
  loading: true,
  apiloading: false,
  error: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload[0],
        loading: false,
        apiloading: false,
      };

    case LOADING:
      return {
        ...state,
        apiloading: false,
      };

    case GET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        apiloading: false,
      };
    default:
      return state;
  }
};
