export type DataState = {
  keys: string[];
  sample: Object | null;
  data: Array<any>;
  loading: {
    search: boolean;
    data: boolean;
    url: boolean;
  };
  error: string | false;
  url: "" | string;
  search: "" | string;
};

type MetaState = "loading" | "error";
export type FetchingUrlState = DataState["url"];
export type FetchingSearchState = DataState["search"];
export type LoadDataState = Omit<DataState, MetaState | "url">;
export type LoadSearchState = Pick<DataState, "data">;
export type ErrorDataState = Pick<DataState, MetaState>;
