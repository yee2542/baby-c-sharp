import { Input } from "antd";
import React from "react";

const { Search } = Input;

export const LinkBar: React.FC<{
  loading: boolean;
  onSearch: (s: string) => void;
}> = (props) => {
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
      loading={props.loading}
    />
  );
};
