/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import React from 'react';
 import MedicineOrder from 'views/MedicineOrder';
 import Main from 'layouts/Main';
 import WithLayout from 'WithLayout';
 
 const MedicineOrderIndexView = () => {
   return <WithLayout component={MedicineOrder} layout={Main} />;
 };
 
 export default MedicineOrderIndexView;
 