import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiStatusCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiStatusCallsInProgress,
});

export default rootReducer;
