import {
  ADD_LINK,
  GET_LINK,
  GET_LINK_ERROR,
} from "../actions/types";

const initialState = {
  profile: [],
  loading: true,
  error: {},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINK:
      return {
        ...state,
        profile: [...state.profile, action.payload],
        loading: false,
      };
    case GET_LINK:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case GET_LINK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
