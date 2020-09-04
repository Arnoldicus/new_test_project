import React from 'react';
import { useGetBrandsTerms } from '../../api/testApi';
import SelectBrandsTerms from '../SelectBrandsTerms';

const BrandsTerms = ({ setBrandTerm, initialValue, ...props }) => {
  const { brandTermsInfo, ...queryResult } = useGetBrandsTerms();
  return (
    <SelectBrandsTerms
      values={brandTermsInfo.length > 0 ? brandTermsInfo : [initialValue]}
      isLoading={queryResult.isLoading}
      setItemSlug={setBrandTerm}
      initialValue={initialValue}
      {...props}
    />
  );
};

export default BrandsTerms;
