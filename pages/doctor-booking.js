
 import React from 'react';
 import WithLayout from 'WithLayout';
 import DoctorBooking from 'views/DoctorSearch/components/Main/DoctorBooking';
 import Main from 'layouts/Main';
 const DoctorBookingIndexView = () => {
   return <WithLayout component={DoctorBooking} layout={Main}/>
   ;
 };
 
 export default DoctorBookingIndexView;