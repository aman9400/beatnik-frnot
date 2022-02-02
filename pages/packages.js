/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import React from 'react';
 import PackageLandingPage from 'views/PackageLandingPage';
 import Main from 'layouts/Main';
 import WithLayout from 'WithLayout';
 
 const IndexPage = () => {
   return <WithLayout component={PackageLandingPage} layout={Main} />;
 };
 
 export default IndexPage;