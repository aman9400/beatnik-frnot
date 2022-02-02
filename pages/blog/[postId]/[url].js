/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */

import { useRouter } from 'next/router';
import BlogArticle from 'views/BlogArticle';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { getArticleDetails } from './../../../lib/drupal/fetcher';
import { useState } from 'react';

const BlogArticlePage = ({ data }) => {
  //   const [getPostId, setPostId] = useState(23);
  const router = useRouter();
  const { postId, url } = router.query;
  //   console.log(postId);
  return <WithLayout data={data.data} component={BlogArticle} layout={Main} />;
};

export default BlogArticlePage;

export async function getServerSideProps({ params: { postId } }) {
  var values = { nid: postId };
  const data = await getArticleDetails(values);

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
