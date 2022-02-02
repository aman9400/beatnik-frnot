/**
 * Author: Praveen Singh
 */
import React from 'react';
import OurLeadership from 'views/OurLeadershipTeam';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const OurLeadershipTeam = () => {
  return <WithLayout component={OurLeadership} layout={Main} />;
};

export default OurLeadershipTeam;
