/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BlogReachView from 'views/BlogReachView';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { getArticle } from '../lib/drupal/fetcher';

const BlogReachViewPage = data => {
  return <WithLayout data={data} component={BlogReachView} layout={Main} />;
};

export default BlogReachViewPage;

export async function getServerSideProps(context) {
  var values = { page: 0 };
  const data = await getArticle(JSON.stringify(values, null, 2));
  // console.log('props', 'pravemm');
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
