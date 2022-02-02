/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import HelpCenterArticle from 'views/HelpCenterArticle';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { useRouter } from 'next/router';
import { getHelpCenter } from './../../../lib/drupal/fetcher';

const HelpCenterArticlePage = ({ data }) => {
  const router = useRouter();
  const { tid, url } = router.query;

  return (
    <WithLayout
      data={data}
      url={url}
      component={HelpCenterArticle}
      layout={Main}
    />
  );
};

export default HelpCenterArticlePage;

export async function getServerSideProps({ params: { tid } }) {
  var values = { tid: tid };
  const data = await getHelpCenter(values);

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
