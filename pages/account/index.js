/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import React from 'react';
 import NoSsr from '@material-ui/core/NoSsr';
 // import Documentation from 'views/Documentation';
 import UserProfile from 'views/AfterLogin/UserProfile';
 import DocsLayout from 'layouts/DocsLayout';
 import WithLayout from 'WithLayout';
 
 const Component = () => {
   return (
     <NoSsr>
      <UserProfile/>
     </NoSsr>
    
   );
 };
 
 const UserProfiless = () => {
   return (
     <WithLayout
     className="som"
       component={Component}
       layout={DocsLayout}
     />
   )
 };
 
 export default UserProfiless;