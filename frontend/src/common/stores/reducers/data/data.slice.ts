import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataInit } from "./data.init";
import { FetchDataState, LoadDataState } from "./data.type";

export const DATA_REDUCER = "DATA_REDUCER";
const dataSlice = createSlice({
  name: DATA_REDUCER,
  initialState: dataInit,
  reducers: {
    init() {
      return dataInit;
    },
    load(state, { payload }: PayloadAction<LoadDataState>) {
      state.error = false;
      state.loading = false;
      state.data = payload.data;
      state.keys = payload.keys;
      state.sample = payload.sample;
    },
    fetching(state) {
      state.loading = true;
    },
    error(state, { payload }: PayloadAction<FetchDataState>) {
      state.loading = false;
      state.error = payload.error;
    },
  },
});

export const dataReducer = dataSlice.reducer;
export const dataActions = dataSlice.actions;
