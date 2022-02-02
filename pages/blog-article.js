/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BlogArticle from 'views/BlogArticle';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { getArticleDetails } from './../lib/drupal/fetcher';

const BlogArticlePage = ({ data }) => {
  console.log(data.data);
  return <WithLayout data={data.data} component={BlogArticle} layout={Main} />;
};

export default BlogArticlePage;

export async function getServerSideProps(context) {
  var values = { nid: 35 };
  const data = await getArticleDetails(values);

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
