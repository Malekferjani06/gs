import { combineReducers } from "redux";
import taskReducer from "./toDoReducers";

const rootReducer=combineReducers(
    {   taskReducer  }
)
 
export default rootReducer;