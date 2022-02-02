/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import HelpCenter from 'views/HelpCenter';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { getFaqsCategory } from './../lib/drupal/fetcher';

const HelpCenterPage = ({ data }) => {
  console.log('props', data);
  return <WithLayout data={data} component={HelpCenter} layout={Main} />;
};

export default HelpCenterPage;

export async function getServerSideProps(context) {
  var values = '';
  const data = await getFaqsCategory(JSON.stringify(values, null, 2));

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
