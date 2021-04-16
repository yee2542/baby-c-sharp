import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataInit } from "./data.init";
import {
  ErrorDataState,
  FetchingSearchState,
  FetchingUrlState,
  LoadDataState,
  LoadSearchState,
} from "./data.type";

export const DATA_REDUCER = "DATA_REDUCER";
const dataSlice = createSlice({
  name: DATA_REDUCER,
  initialState: dataInit,
  reducers: {
    init() {
      return dataInit;
    },
    fetchURL(state, { payload: url }: PayloadAction<FetchingUrlState>) {
      state.loading.data = true;
      state.loading.url = true;
      state.url = url;
    },
    loadData(state, { payload }: PayloadAction<LoadDataState>) {
      state.error = false;
      state.loading.data = false;
      state.loading.url = false;
      state.data = payload.data;
      state.keys = payload.keys;
      state.sample = payload.sample;
    },
    search(state, { payload: search }: PayloadAction<FetchingSearchState>) {
      state.loading.search = true;
      state.loading.data = true;
      state.search = search;
    },
    loadSearch(state, { payload }: PayloadAction<LoadSearchState>) {
      state.loading.search = false;
      state.loading.data = false;
      state.data = payload.data;
    },
    dataError(state, { payload }: PayloadAction<ErrorDataState>) {
      state.loading.data = false;
      state.error = payload.error;
    },
    getError(state, { payload }: PayloadAction<ErrorDataState>) {
      state.loading.url = false;
      state.error = payload.error;
    },
    searchError(state, { payload }: PayloadAction<ErrorDataState>) {
      state.loading.search = false;
      state.error = payload.error;
    },
  },
});

export const dataReducer = dataSlice.reducer;
export const dataActions = dataSlice.actions;
