import React, { useEffect, useState } from 'react';
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
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import VideoCall from '../../../../Images/video.png';
import AudioCall from '../../../../Images/phone-call.png';
import WalkIN from '../../../../Images/home.png';
import ChatSer from '../../../../Images/chat.png';
import moment from 'moment';

const useStyles = makeStyles(theme => ({}));
const DoctorInformation = props => {
  const [value, setValue] = React.useState(0);
  const [star, setStar] = React.useState(3);
  const classes = useStyles();
  const [language, setLanguage] = React.useState();
  const [appointmentDate, setAppointmentDate] = React.useState();
  const [appointmentType, setAppointmentType] = React.useState();
  const [doctorId, setDoctorId] = React.useState([]);
  const [gettime, setTime] = React.useState();
  const [getdate, setGetDate] = React.useState();

  const { data, className, ...rest } = props;

  // To get URL parameter

  React.useEffect(() => {

    const params = new URLSearchParams(location.search);

    const docId = params.get('doctor_id');

    setDoctorId(docId);
    setAppointmentType(params.get('appointmentType'));
    setAppointmentDate(params.get('appointmentDate'));

    //const sss =  moment(appointmentDate).format('MMM DD, YYYY')


    const sss = moment(appointmentDate).format('MMM DD, YYYY')

    setTime(params.get('startTime'));


    const startTime = params.get('startTime');


  }, []);

  // const params = new URLSearchParams(location.search);
  // const getData = params.get('doctor_id');
  // const appointmentID =  params.get('appointmentType');
  // const appointmentDate =  params.get('appointmentDate');

  // const sss =  moment(appointmentDate).format('MMM DD, YYYY')

  //  const startTime =  params.get('startTime');


  // const getData = '214';
  // const appointmentID =  'Video';


  // useEffect(() => {

  //   setLanguage(getData);
  // }, []);

  // To get data from API to load single Doctor
  const [doctordetails, setDoctorDetails] = useState([]);

  // const loadDoctorDetails = async() => {
  //   await fetch(`https://oaarogyabetaportal.mirakidigital.in/api/patient/home/doctor-details/${doctorId}`)
  //     .then(response => response.json())
  //     .then(result => setDoctorDetails(result.doctor))
  //     .catch(error => console.log('errssssssssor', error));
  // };

  useEffect(() => {
    fetch(`https://oaarogyabetaportal.mirakidigital.in/api/patient/home/doctor-details/${doctorId}`)
      .then(response => response.json())
      .then(result => setDoctorDetails(result.doctor))
      .catch(error => console.log('error', error));
  }, [doctorId]);

  // To Load Doctor form API

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={styles.docotor_info}>
        <div className={styles.appoint_for}>
          {/* <img
            className="appoint_info_icon"
            src={AppointIcon}
            alt="Appointment Type"
          /> */}

          {appointmentType == '1' ? <img src={VideoCall} alt="#" /> : ''}
          {appointmentType == '2' ? <img src={AudioCall} alt="#" /> : ''}
          {appointmentType == '4' ? <img src={WalkIN} alt="#" /> : ''}
          {appointmentType == '3' ? <img src={ChatSer} alt="#" /> : ''}

          <Typography variant="h5">Appointment Type </Typography>
        </div>
        <div className={styles.appoint_doctor_for}>
          <div className={styles.date_time_book}>
            <div className={styles.appoint_date}>
              <EventIcon />

              <b>On</b> {appointmentDate}
            </div>
            <div className={styles.appoint_time}>
              <AccessTimeIcon />
              <b>At </b> {gettime}
            </div>
          </div>
          <div className={styles.changes_date}>
            {/* <Link href="/">Change Date {'&'} Time</Link> */}
          </div>
        </div>
        <div className={styles.doctor_details}>
          <Box className={styles.doctor_card_header}>
            <Box component="div" className={styles.doctor_card_avatar}>
              <CardMedia
                className={styles.doctor_avatar}
                image={doctordetails.avatar_url}

              />
            </Box>
            <Box className={styles.doctor_card_detail}>
              <CardHeader className={styles.doctor_name} />
              <h3>
                {doctordetails ? doctordetails.title : ''}{' '}
                {doctordetails ? doctordetails.first_name : ''}{' '}
                {doctordetails ? doctordetails.middle_name : ''} {' '}
                {doctordetails ? doctordetails.last_name : ''}{' '}

              </h3>
              <p className={styles.doctor_specialization}>
                {' '}
                <img src={DoctorStethoscope} alt="" />

                {/* {Object.keys(doctordetails.appointments).map((el) =><p>{el.patient_id}</p>)} */}


              </p>
              <p className={styles.doctor_expriance}>
                {doctordetails ? doctordetails.yrs_of_practice : ''} years experience
              </p>
              {/* <p className={styles.doctor_para}>
                A nephrologist treats diseases and infections of the kidneys and
                urinary system.
              </p> */}
            </Box>
          </Box>
        </div>
      <div className={styles.doctor_details_address}>
          {/*   <Box className={styles.doctor_card_header}>
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
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://goo.gl/maps/KVmyD5xrsu7pT5rc6"
                    >
                      <MapIcon />
                      <p> Get Direction</p>
                    </Link>
                  </Box>
                </div>
              </div>
            </div>
          </Box>*/}
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