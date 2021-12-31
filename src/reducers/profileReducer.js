import { ADD_LINK, GET_LINK, GET_LINK_BY_USER_ID, GET_LINK_ERROR, LOADING } from "../actions/types";

const initialState = {
  profile: null,
  loading: true,
  apiloading: false,
  error: {},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINK:
      return {
        ...state,
        profile: [...state.profile, action.payload],
        loading: false,
        apiloading: false,
      };
    case GET_LINK:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        apiloading: false,
      };
      case GET_LINK_BY_USER_ID:
        return {
          ...state,
          profile: action.payload,
          loading: false,
          apiloading: false,
        };
    case "DELETE_PROFILE":
      return {
        ...state,

        loading: false,
        profile: state.profile.filter(
          (item) => item._id !== action.payload._id
        ),

        apiloading: false,
      };
    case LOADING:
      return {
        ...state,
        apiloading: true,
      };
    case GET_LINK_ERROR:
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
