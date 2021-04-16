import { createSlice } from "@reduxjs/toolkit";
import { dataInit } from "./data.init";

export const DATA_REDUCER = "DATA_REDUCER";
const dataSlice = createSlice({
  name: DATA_REDUCER,
  initialState: dataInit,
  reducers: {
    init() {
      return dataInit;
    },
  },
});

export const dataReducer = dataSlice.reducer;
export const dataActions = dataSlice.actions;
