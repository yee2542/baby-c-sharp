import { Input, Select } from "antd";
import React from "react";

const { Option } = Select;
const { Search } = Input;

const SearchBar: React.FC<{
  loading: boolean;
  onSearch: (s: string) => void;
  items: string[];
}> = (props) => {
  const onSearch: (value: string) => void = (value) => {
    props.onSearch(value);
  };

  return (
    <Input.Group>
      <Select defaultValue={props.items[0]} style={{ width: "30%" }}>
        {props.items.map((el) => (
          <Option value={el}>{el}</Option>
        ))}
      </Select>
      <Search
        style={{ width: "70%" }}
        placeholder=""
        allowClear
        enterButton="Search"
        onSearch={onSearch}
        loading={props.loading}
      />
    </Input.Group>
  );
};

export default SearchBar;
