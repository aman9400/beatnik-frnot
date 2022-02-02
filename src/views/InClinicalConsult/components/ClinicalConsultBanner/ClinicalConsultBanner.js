import React from 'react';
import PropTypes from 'prop-types';
import styles from './ClinicalConsultBanner.module.css';
import { HeroShaped } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { Typography, Button } from '@material-ui/core';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
const ClinicalConsultBanner = props => {
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
                <span className={styles.clinic_title}>
                  <Typography
                    variant="inherit"
                    component="h4"
                    className={styles.inner_heading}
                  >
                    <em>Take</em>
                    In-Clinic Consultation
                  </Typography>
                </span>
              }
              ctaGroup={[
                <>
                  <Typography className={styles.consult_name} variant="6">
                    Private consultation
                  </Typography>
                  <br />
                  <br />
                  <Button className={styles.consult_now}>
                    Book An Appointment
                  </Button>
                  <Typography className={styles.facility}>
                    <CardGiftcardIcon /> Verified Doctors <CardGiftcardIcon />
                    Digital Prescription
                  </Typography>
                </>,
              ]}
              align="left"
              disableGutter
              data-aos="fade-up"
              titleVariant="h3"
            />
          }
        />
      </div>
    </div>
  );
};
ClinicalConsultBanner.prototypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};
export default ClinicalConsultBanner;
