import { Input } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../../common/stores";

const { Search } = Input;

export const LinkBar: React.FC<{
  loading: boolean;
  onSearch: (s: string) => void;
}> = (props) => {
  const loading = useSelector((s: Store) => s.dataReducer.loading.url);

  const onSearch: (value: string) => void = (value) => {
    props.onSearch(value);
  };

  return (
    <Search
      placeholder="https://"
      allowClear
      enterButton="Get"
      size="large"
      onSearch={onSearch}
      loading={loading}
    />
  );
};
