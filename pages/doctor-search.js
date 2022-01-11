/**
 * page for search doctor
 * Author: Praveen Singh
 */
import React from 'react';
import DoctorSearch from 'views/DoctorSearch';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const SearchDoc = () => {
  return <WithLayout component={DoctorSearch} layout={Main} />;
};

export default SearchDoc;
