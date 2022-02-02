/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import React from 'react';
 import InClinicalConsult from 'views/InClinicalConsult';
 import Main from 'layouts/Main';
 import WithLayout from 'WithLayout';
 
 const InClinicalConsultIndexView = () => {
   return <WithLayout component={InClinicalConsult} layout={Main} />;
 };
 
 export default InClinicalConsultIndexView;
 