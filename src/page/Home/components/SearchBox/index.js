import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const SearchBox = () => (
  <div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Input placeholder="input search text" style={{ width: 200 }} />
  </div>
);

export default SearchBox;
