import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./reducers/data/data.slice";

const reducer = combineReducers({
  dataReducer,
});
export const store = configureStore({
  reducer,
});
export type Store = ReturnType<typeof reducer>;
