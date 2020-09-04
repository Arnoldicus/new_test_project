import React from 'react';
import { InputLabel } from '@material-ui/core';
import SelectCategory from '../SelectCategory';

const SelectBrandsTerms = ({ labelStyle, ...props }) => {
  return (
    <SelectCategory
      {...props}
      label={
        <InputLabel id="BrandsTerms" className={labelStyle}>
          BrandsTerms
        </InputLabel>
      }
    />
  );
};

export default SelectBrandsTerms;
