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
};

type MetaState = "loading" | "error";
export type FetchingUrlState = DataState["url"];
export type LoadDataState = Omit<DataState, MetaState | "url">;
export type ErrorDataState = Pick<DataState, MetaState>;
