import React from 'react';
import { useGetTerms } from '../../api/testApi';
import SelectTerms from '../SelectTerms';

const Terms = ({ setTerm, initialValue, ...props }) => {
  const { termsInfo, ...queryResult } = useGetTerms();
  return (
    <SelectTerms
      values={termsInfo.length > 0 ? termsInfo : [initialValue]}
      isLoading={queryResult.isLoading}
      setItemSlug={setTerm}
      initialValue={initialValue}
      {...props}
    />
  );
};

export default Terms;
