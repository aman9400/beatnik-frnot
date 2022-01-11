/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import LandingPages from 'views/LandingPages';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const IndexPage = () => {
  // console.log('props', 'pravemm1');
  return <WithLayout component={LandingPages} layout={Main} />;
};

export default IndexPage;
