import React from 'react';
import { useUpdateEffect } from 'react-use';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate, useParams, generatePath } from 'react-router-dom';
import Terms from './components/Terms';
import BrandsTerms from './components/BrandTerms';
import Styles from './components/Styles';
import { useGetParseLink } from './api/testApi';

const useStyles = makeStyles(() => ({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectWrapper: {
    marginTop: 200,
    padding: 20,
    border: '2px solid lightblue',
  },
  labelStyle: {
    textAlign: 'center',
    color: 'purple',
  },
}));

const routePrefix = {
  terms: 's-',
  brandTerms: 'b-',
  styles: 'st-',
};

const getServiceSlug = (parameters) => {
  for (const parameter of parameters) {
    if (parameter.startsWith(routePrefix.terms)) {
      return parameter.replace(/(s-)/i, '');
    }
  }
};
const getBrandSlug = (parameters) => {
  for (const parameter of parameters) {
    if (parameter.startsWith(routePrefix.brandTerms)) {
      return parameter.replace(/(b-)/i, '');
    }
  }
};
const getStyleSlug = (parameters) => {
  for (const parameter of parameters) {
    if (parameter.startsWith(routePrefix.styles)) {
      return parameter.replace(/(st-)/i, '');
    }
  }
};

const Dashboard = () => {
  const classes = useStyles();
  const params = useParams();
  const slugs = React.useMemo(() => {
    const values = Object.values(params);
    return { service_slug: getServiceSlug(values), brand_slug: getBrandSlug(values), style_slug: getStyleSlug(values) };
  }, [params]);
  const {
    parseLinkInfo: { service, brand, style: parsedStyle },
    ...queryResult
  } = useGetParseLink(slugs);
  const [selectedTermSlug, setSelectedTermSlug] = React.useState(slugs?.service_slug);
  const [selectedBrandsTermsSlug, setSelectedBrandsTermSlug] = React.useState(slugs?.brand_slug);
  const [selectedStylesSlug, setSelectedStylesSlug] = React.useState(slugs?.style_slug);
  const navigate = useNavigate();

  useUpdateEffect(() => {
    navigate(
      generatePath('/:search_1/:search_2/:search_3', {
        search_1: selectedTermSlug ? `${routePrefix.terms}${selectedTermSlug}` : '',
        search_2: selectedBrandsTermsSlug ? `${routePrefix.brandTerms}${selectedBrandsTermsSlug}` : '',
        search_3: selectedStylesSlug ? `${routePrefix.styles}${selectedStylesSlug}` : '',
      }),
    );
  }, [selectedTermSlug, selectedBrandsTermsSlug, selectedStylesSlug]);

  return (
    <div className={classes.appContainer}>
      {queryResult.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={classes.selectWrapper}>
          <Terms setTerm={setSelectedTermSlug} initialValue={service} labelStyle={classes.labelStyle} />
          <BrandsTerms setBrandTerm={setSelectedBrandsTermSlug} initialValue={brand} labelStyle={classes.labelStyle} />
          <Styles setStyle={setSelectedStylesSlug} initialValue={parsedStyle} labelStyle={classes.labelStyle} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
