/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import React from 'react';
 import FindDoctor from 'views/FindDoctor';
 import Main from 'layouts/Main';
 import WithLayout from 'WithLayout';
 
 const FindDoctorIndexView = () => {
   return <WithLayout component={FindDoctor} layout={Main} />;
 };
 
 export default FindDoctorIndexView;
 