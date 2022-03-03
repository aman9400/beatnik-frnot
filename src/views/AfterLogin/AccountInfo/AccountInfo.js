import React, { Suspense } from 'react';
import { Section } from 'components/organisms';
import { Loading, General } from './components';
import Breadcrumb from '../Reusable/Breadcrumb';

const AccountInfo = () => {
  return (
    <div className="medifile_profie">
      <div className="medifiles_pannel">
        <div className="medifile_dashboard">
          <h3 className="medifile_head">Hi! Welcome to Medifiles</h3>
          <Breadcrumb url="Account Info" />
        </div>
      </div>

      <Section className="medifile_profile_data">
        <Suspense fallback={<Loading />}>
          <General />
        </Suspense>
      </Section>
    </div>
  );
};

export default AccountInfo;
