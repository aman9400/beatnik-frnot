import React from 'react';
import PropTypes from 'prop-types';
import styles from './Package.module.css';
import { HeroShaped } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { Typography } from '@material-ui/core';
import { Packages } from 'views/LandingPages/components';

const PackageBanner = props => {
  const { className, ...rest } = props;
  return (
    <div className={styles.banner_container}>
      <div className={styles.video_consult_banner}>
        <HeroShaped
          className={styles.video_consult_inner}
          leftSide={
            <SectionHeader
              className={styles.video_consult_inner}
              title={
                <div className={styles.video_title}>
                  <span> Pro</span>
                  <br />
                  <Typography
                    variant="inherit"
                    component="h4"
                    className={styles.inner_heading}
                  >
                    Take Online Doctor Consultation
                  </Typography>
                </div>
              }
              align="left"
              disableGutter
              data-aos="fade-up"
              titleVariant="h3"
              style={{padding:'0px !important'}}
            />
          }
        />
        <Packages className={styles.package_pack} />
      </div>
    </div>
  );
};
PackageBanner.prototypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};
export default PackageBanner;
