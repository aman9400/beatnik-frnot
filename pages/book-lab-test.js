/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import React from 'react';
 import BookLabTest from 'views/BookLabTest';
 import Main from 'layouts/Main';
 import WithLayout from 'WithLayout';
 
 const BookLabTestIndexView = () => {
   return <WithLayout component={BookLabTest} layout={Main} />;
 };
 
 export default BookLabTestIndexView;
 