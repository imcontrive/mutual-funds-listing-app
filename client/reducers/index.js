import { combineReducers } from "redux";
import currentUser from "./currentUser";
import funds from "./funds";

const rootReducer = combineReducers({
  currentUser,
  funds
});

export default rootReducer;
