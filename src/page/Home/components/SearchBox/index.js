import React from 'react';
import { Input } from 'antd';

const { Search } = Input;
const SearchBox = () => (
  <Search
    placeholder="input search text"
    onSearch={value => console.log(value)}
    style={{ width: 200 }}
  />
);

export default SearchBox;
