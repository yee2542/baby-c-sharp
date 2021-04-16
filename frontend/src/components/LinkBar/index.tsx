import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

export const LinkBar: React.FC = () => {
  const [search, setSearch] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSearch: (value: string) => void = (value) => {
    setSearch(value);
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
  return (
    <Search
      placeholder="https://"
      allowClear
      enterButton="Get"
      size="large"
      value={search}
      onSearch={onSearch}
      loading={loading}
    />
  );
};
