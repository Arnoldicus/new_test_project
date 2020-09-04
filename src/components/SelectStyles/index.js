import React from 'react';
import { InputLabel } from '@material-ui/core';
import SelectCategory from '../SelectCategory';

const SelectStyles = ({ labelStyle, ...props }) => {
  return (
    <SelectCategory
      label={
        <InputLabel id="Styles" className={labelStyle}>
          Styles
        </InputLabel>
      }
      {...props}
    />
  );
};

export default SelectStyles;
