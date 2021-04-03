import { Input, Select } from "antd";
import React, { useState } from "react";
import { SAMPLE_TAGS } from "../../common/constants/mock.data";

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
      <Select defaultValue={SAMPLE_TAGS[0]} style={{ width: "30%" }}>
        {SAMPLE_TAGS.map((el) => (
          <Option value={el}>{el}</Option>
        ))}
      </Select>
      <Search
        style={{ width: "70%" }}
        placeholder=""
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
