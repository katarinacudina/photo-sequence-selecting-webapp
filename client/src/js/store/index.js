import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { loadState, saveState } from "../localStorage";
import throttle from "lodash.throttle";

const store = createStore(
  rootReducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
