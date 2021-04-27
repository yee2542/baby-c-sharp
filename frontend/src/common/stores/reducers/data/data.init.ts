import { DataState } from "./data.type";

export const dataInit: DataState = {
  keys: [],
  sample: {},
  data: [],
  loading: {
    search: false,
    data: false,
    url: false,
  },
  error: false,
  url: "",
  search: "",
};
