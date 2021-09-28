const initialState = {
  loading: true,
};

export const authReducer = (state = initialState, action) => {
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
