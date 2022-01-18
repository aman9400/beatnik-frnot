/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import MemberDetails from 'views/AfterLogin/MemberDetails';
import DocsLayout from 'layouts/DocsLayout';
import WithLayout from 'WithLayout';

const Component = () => {
  return (
    <NoSsr>
      <MemberDetails />
    </NoSsr>
  );
};

const Medifiles = () => {
  return <WithLayout className="somnath" component={Component} layout={DocsLayout} />;
};

export default Medifiles;
