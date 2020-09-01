import { SET_EMAIL, SET_ROLE, SET_USER } from "../constants/action-types";

const initialState = {
  email: "",
  role: "",
  user: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return action.payload;
    case SET_ROLE:
      return action.payload;
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}

export default rootReducer;
