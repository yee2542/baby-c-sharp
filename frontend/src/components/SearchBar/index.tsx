import { Input, Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;
const { Search } = Input;

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSearch: (value: string) => void = (value) => {
    setSearch(value);
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Input.Group>
      <Select defaultValue="Zhejiang" style={{ width: "30%" }}>
        <Option value="Zhejiang">Zhejiang</Option>
        <Option value="Jiangsu">Jiangsu</Option>
      </Select>
      <Search
        style={{ width: "70%" }}
        placeholder="https://"
        allowClear
        enterButton="Search"
        value={search}
        onSearch={onSearch}
        loading={loading}
      />
    </Input.Group>
  );
};

export default SearchBar;
