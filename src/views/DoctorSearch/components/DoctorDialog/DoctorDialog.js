import React from 'react';
import PropTypes from 'prop-types';
import styles from './DoctorDialog.module.css';
import { Box } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import DoctorUser from './../Images/doctor-user.png';
import DoctorBox from './../Images/doctor-box.png';
import DoctorLocation from './../Images/doctor-location.png';
import DoctorConsult from './../Images/doctor-consult.png';
import CheckMArk from './../Images/draw-check-mark.png';
const DoctorDialogBox = props => {
  const { data, className, ...rest } = props;
  return (
    <>
      <div className={styles.doctor_over_view_data}>
        <div className={styles.time_line_item}>
          <div className={styles.time_line_date_wrap}>
            <div className={styles.doc_hexagon}>
              <img src={DoctorUser} alt="Doctor Name" />
            </div>
          </div>
          <div className={styles.time_line_content}>
            <Box component="div" className={styles.doctor_card_header}>
              <Box component="div" className={styles.doctor_card_avatar}>
                <CardMedia
                  className={styles.doctor_avatar}
                  image="https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg"
                  title="Som Nath Gupta"
                />
              </Box>
              <Box
                container
                component="div"
                className={styles.doctor_card_detail}
              >
                <CardHeader
                  className={styles.doctor_name}
                  title="Som Nath Gupta"
                />
                <p className={styles.doctor_specialization}>Dentist</p>
                <p className={styles.doctor_expriance}>
                  23 years experience overall
                </p>
                <p className={styles.doctor_para}>
                  A nephrologist treats diseases and infections of the kidneys
                  and urinary system.
                </p>
              </Box>
            </Box>
          </div>
        </div>
        <div className={styles.time_line_item}>
          <div className={styles.time_line_date_wrap}>
            <div className={styles.doc_hexagon}>
              <img src={DoctorConsult} alt="Doctor Consultation" />
            </div>
          </div>
          <div className={styles.time_line_content}>
            <Box component="div" className={styles.doctor_card_header}>
              <Box
                container
                component="div"
                className={styles.doctor_card_detail}
              >
                <CardHeader
                  className={styles.doctor_name}
                  title="Consultation Services"
                />
                <p className={styles.doctor_specialization}>
                  <img src={CheckMArk} alt="#" />
                  Video Consultation
                </p>
                <p className={styles.doctor_specialization}>
                  <img src={CheckMArk} alt="#" />
                  Audio Consultation
                </p>
                <p className={styles.doctor_specialization}>
                  <img src={CheckMArk} alt="#" />
                  Chat Consultation
                </p>
                <p className={styles.doctor_specialization}>
                  <img src={CheckMArk} alt="#" />
                  Walk in Consultation
                </p>
              </Box>
            </Box>
          </div>
        </div>
        <div className={styles.time_line_item}>
          <div className={styles.time_line_date_wrap}>
            <div className={styles.doc_hexagon}>
              <img src={DoctorBox} alt="Doctor Specialization" />
            </div>
          </div>
          <div className={styles.time_line_content}>
            <Box component="div" className={styles.doctor_card_header}>
              <Box
                container
                component="div"
                className={styles.doctor_card_detail}
              >
                <CardHeader
                  className={styles.doctor_name}
                  title="Specialization"
                />
                <p className={styles.doctor_specialization}>
                  <img src={CheckMArk} alt="#" />
                  Dermatology
                </p>
                <p className={styles.doctor_specialization}>
                  <img src={CheckMArk} alt="#" />
                  Anesthesiology
                </p>
                <p className={styles.doctor_specialization}>
                  <img src={CheckMArk} alt="#" />
                  Ophthalmology
                </p>
              </Box>
            </Box>
          </div>
        </div>
        <div className={styles.time_line_item}>
          <div className={styles.time_line_date_wrap}>
            <div className={styles.doc_hexagon}>
              <img src={DoctorLocation} alt="Doctor Location" />
            </div>
          </div>
          <div className={styles.time_line_content}>
            <Box component="div" className={styles.doctor_card_header}>
              <Box
                container
                component="div"
                className={styles.doctor_card_detail}
              >
                <CardHeader className={styles.doctor_name} title="Clinics" />
                <p className={styles.doctor_specialization}>
                  <img src={CheckMArk} alt="#" /> New Clinics
                </p>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

DoctorDialogBox.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default DoctorDialogBox;
