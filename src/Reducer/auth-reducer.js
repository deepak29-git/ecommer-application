export const authReducer = (state,action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return;
  }
};
