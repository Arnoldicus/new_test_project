import createDataSource from './createDataSource';
import { useQuery } from 'react-query';

const dataSource = createDataSource('https://beta.autobooking.com');

const getTerms = () => dataSource.get('search/terms').json();
const getBrandsTerms = () => dataSource.get('search/brands_terms').json();
const getStyles = () => dataSource.get('search/styles').json();
const getParseLink = (params) => () => dataSource.get('search/parse_link', { searchParams: params }).json();

export const useGetTerms = (queryConfig = {}) => {
  const queryResult = useQuery(['terms'], getTerms, queryConfig);

  return {
    termsInfo: queryResult.data?.data || [],
    ...queryResult,
  };
};

export const useGetBrandsTerms = (queryConfig = {}) => {
  const queryResult = useQuery(['brand-terms'], getBrandsTerms, queryConfig);

  return {
    brandTermsInfo: queryResult.data?.data || [],
    ...queryResult,
  };
};

export const useGetStyles = (queryConfig = {}) => {
  const queryResult = useQuery(['styles'], getStyles, queryConfig);

  return {
    stylesInfo: queryResult.data?.data || [],
    ...queryResult,
  };
};

export const useGetParseLink = (params, queryConfig = {}) => {
  const getParseLinksWithParams = getParseLink(params);
  const queryResult = useQuery(['parse-link'], getParseLinksWithParams, queryConfig);

  return {
    parseLinkInfo: queryResult.data || {},
    ...queryResult,
  };
};
