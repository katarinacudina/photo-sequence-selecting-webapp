import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { loadState, saveState } from "../localStorage";
import throttle from "lodash.throttle";

const store = createStore(rootReducer, loadState());
store.subscribe(
  throttle(() => {
    saveState();
  }, 1000)
);

export default store;
