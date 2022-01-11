/**
 * Author: Praveen Singh
 */
import React from 'react';
import About from 'views/About';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const AboutPage = () => {
  return <WithLayout component={About} layout={Main} />;
};

export default AboutPage;
