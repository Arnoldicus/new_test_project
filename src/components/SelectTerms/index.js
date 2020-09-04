import React from 'react';
import { InputLabel } from '@material-ui/core';
import SelectCategory from '../SelectCategory';

const SelectTerms = ({ labelStyle, ...props }) => {
  return (
    <SelectCategory
      label={
        <InputLabel id="Terms" className={labelStyle}>
          Terms
        </InputLabel>
      }
      {...props}
    />
  );
};

export default SelectTerms;
