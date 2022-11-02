import { createStore, combineReducers } from "redux";
import chairListOnSelectedReducer from "./Reducer/chairListOnSelectedReducer";
import chairReducer from "./Reducer/chairReducer";

const reducer = combineReducers({
  chair: chairReducer,
  chairListOnSelectedReducer: chairListOnSelectedReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
