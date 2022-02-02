/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import React from 'react';
 import NoSsr from '@material-ui/core/NoSsr';
 import DoctorBooking from 'views/DoctorSearch/components/Main/DoctorBooking';
 import Main from 'layouts/Main';
 import WithLayout from 'WithLayout';
 
 const Component = () => {
   return (
     <NoSsr>
      <DoctorBooking/>
     </NoSsr>
   );
 };
 
 const BookDoctor = () => {
   return (
     <WithLayout
       component={Component}
       layout={Main}
     />
   )
 };
 
 export default BookDoctor;