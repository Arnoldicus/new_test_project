import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

const SelectCategory = ({ values, setItemSlug, label, initialValue, isLoading }) => {
  const [selectedItem, setSelectedItem] = React.useState(initialValue?.slug || '');

  const handleChange = (event) => {
    // eslint-disable-next-line no-unused-expressions
    setItemSlug?.(event.target.value);
    setSelectedItem(event.target.value);
  };
  return (
    <>
      {label}
      <Select id="terms-select" value={selectedItem} onChange={handleChange} style={{ width: 400, margin: 20 }}>
        {isLoading && <span>Loading...</span>}
        {values.map((item) => (
          <MenuItem key={item.id} value={item.slug}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectCategory;
