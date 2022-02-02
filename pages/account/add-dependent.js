/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import React from 'react';
 import NoSsr from '@material-ui/core/NoSsr';
 // import Documentation from 'views/Documentation';
 import AddDependent from 'views/AfterLogin/AddDependent';
 import DocsLayout from 'layouts/DocsLayout';
 import WithLayout from 'WithLayout';
 
 const Component = () => {
   return (
     <NoSsr>
      <AddDependent/>
     </NoSsr>
    
   );
 };
 
 const AddDependents = () => {
   return (
     <WithLayout
       component={Component}
       layout={DocsLayout}
     />
   )
 };
 
 export default AddDependents;