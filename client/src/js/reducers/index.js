import { SET_EMAIL, SET_ROLE } from "../constants/action-types";

const initialState = {
  email: "",
  role: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return action.payload;
    case SET_ROLE:
      return action.payload;
    default:
      return state;
  }
}

export default rootReducer;
