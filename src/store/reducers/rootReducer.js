import { combineReducers } from "redux";
import { personReducer } from "./person/personReducer";
import { dummyReducer } from "./person/dummyReducer";

export const rootReducer = combineReducers({
    persons: personReducer,
    dummy: dummyReducer
});