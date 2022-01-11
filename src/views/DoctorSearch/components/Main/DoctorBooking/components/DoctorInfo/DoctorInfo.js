import React from 'react';
import styles from './doctor-info.module.css';
import { makeStyles } from '@material-ui/core/styles';
import AppointIcon from '../../../../Images/video.png';
import DoctorStethoscope from '../../../../Images/doctor-stethoscope.jpg';
import EventIcon from '@material-ui/icons/Event';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Link from '@material-ui/core/Link';
import Rating from '@material-ui/lab/Rating';
import MapIcon from '@material-ui/icons/Map';
import {
  Box,
  Typography,
  CardMedia,
  CardHeader,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  
}));
const DoctorInformation = props => {
  const [value, setValue] = React.useState(0);
  const [star, setStar] = React.useState(3);
  const classes = useStyles();
  const { data, className, ...rest } = props;

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={styles.docotor_info}>
        <div className={styles.appoint_for}>
          <img
            className="appoint_info_icon"
            src={AppointIcon}
            alt="Appointment Type"
          />
          <Typography variant="h5">Appointment Type</Typography>
        </div>
        <div className={styles.appoint_doctor_for}>
          <div className={styles.date_time_book}>
            <div className={styles.appoint_date}>
              <EventIcon />
              <b>On</b> 05 / Jan /2022
            </div>
            <div className={styles.appoint_time}>
              <AccessTimeIcon />
              <b>At </b> 04 : 00 PM
            </div>
          </div>
          <div className={styles.changes_date}>
            <Link href="/">Change Date {'&'} Time</Link>
          </div>
        </div>
        <div className={styles.doctor_details}>
          <Box className={styles.doctor_card_header}>
            <Box component="div" className={styles.doctor_card_avatar}>
              <CardMedia
                className={styles.doctor_avatar}
                image="https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg"
                title="Som Nath Gupta"
              />
            </Box>
            <Box className={styles.doctor_card_detail}>
              <CardHeader
                className={styles.doctor_name}
                title="Som Nath Gupta"
              />
              <p className={styles.doctor_specialization}>
                {' '}
                <img src={DoctorStethoscope} alt="" />
                General Physicians{' '}
              </p>
              <p className={styles.doctor_expriance}>
                23 years experience overall
              </p>
              <p className={styles.doctor_para}>
                A nephrologist treats diseases and infections of the kidneys and
                urinary system.
              </p>
            </Box>
          </Box>
        </div>
        <div className={styles.doctor_details_address}>
          <Box className={styles.doctor_card_header}>
            <div className={styles.box}>
              <div className={styles.section_1}>
                <p className={styles.p_1}>Chisel Dental</p>
              </div>

              <div className={styles.hr}></div>
              <div className={styles.pdfs}>
                <div className={styles.pdf_one}>
                  <p>
                    18, 1st Main, Koramangala 1st Block, Jakkasandra Extension,
                    Bangalore
                  </p>
                </div>

                <div className={styles.pdf_proggress}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Rating
                      name="simple-controlled"
                      value={star}
                      max={5}
                      onChange={(event, newValue) => {
                        setStar(newValue);
                      }}
                    />
                    <p>(3) Ratings</p>
                  </Box>
                  <Box className={styles.direction}>
                   <Link target="_blank" rel="noopener"href="https://goo.gl/maps/KVmyD5xrsu7pT5rc6">
                   <MapIcon />
                    <p> Get Direction</p>
                   </Link>
                  </Box>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

DoctorInformation.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default DoctorInformation;
