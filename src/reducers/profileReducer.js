const initialState = {
  profile: {},
  socialLinks: [],
  otherLinks: [],
  loading: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
