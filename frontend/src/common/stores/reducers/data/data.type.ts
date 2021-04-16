export type DataState = {
  keys: string[];
  sample: Object | null;
  data: Array<any>;
  loading: boolean;
  error: string | false;
};

type MetaState = "loading" | "error";
export type LoadDataState = Omit<DataState, MetaState>;
export type ErrorDataState = Pick<DataState, MetaState>;
