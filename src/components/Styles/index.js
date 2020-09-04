import React from 'react';
import { useGetStyles } from '../../api/testApi';
import SelectStyles from '../SelectStyles';

const Styles = ({ setStyle, initialValue, ...props }) => {
  const { stylesInfo, ...queryResult } = useGetStyles();
  return (
    <SelectStyles
      values={stylesInfo.length > 0 ? stylesInfo : [initialValue]}
      isLoading={queryResult.isLoading}
      setItemSlug={setStyle}
      initialValue={initialValue}
      {...props}
    />
  );
};

export default Styles;
