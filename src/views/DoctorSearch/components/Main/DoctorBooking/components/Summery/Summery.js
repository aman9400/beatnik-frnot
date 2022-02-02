import React,{useEffect,useState} from 'react';
import styles from './summery.module.css';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import DoctorStethoscope from '../../../../Images/doctor-stethoscope.jpg';
import {
  FormControl,
  Typography,
  Radio,
  Box,
  TextField,
  CardMedia,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  CardHeader,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({}));

const PatientSummery = props => {
  const [value, setValue] = React.useState('female');
  const [language, setLanguage] = React.useState();
  const handleChange = event => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  const { data, className, ...rest } = props;
 
    // To get URL parameter
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const getData = params.get('doctor_id');
      setLanguage(getData);
    }, []);


    // code to show data of doctor 

     
    // To Load Doctor form API

    const [doctordetails, setDoctorDetails] = useState([]);
    
  const loadDoctorDetails = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      location: [20.2604132, 44.43947],
      term: language,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      `https://oaarogyabetaportal.mirakidigital.in/api/patient/home/doctor-details/${language}`,
    )
      .then(response => response.json())
      .then(result => setDoctorDetails(result.doctor))

      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    loadDoctorDetails();
  }, []);




  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={styles.patient_info}>
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
                General Physiciansdsfsd{' '} {language}dfsdfsd
              </p>
            </Box>
          </Box>
        </div>
        <div className={styles.booking_summery}>
          <Typography variant="4">Booking Summary</Typography>
          <FormControl className={styles.patient_info_data}>
            <FormLabel className={styles.patient_info_inn}>
              Booked For
            </FormLabel>
            <p className={styles.patient_info_inn_p}>You</p>
          </FormControl>
          <FormControl className={styles.patient_info_data}>
            <FormLabel className={styles.patient_info_inn}>
              Appointment On
            </FormLabel>
            <p className={styles.patient_info_inn_p}>06 Jan 2022, 8:30 AM</p>
          </FormControl>
          <FormControl className={styles.patient_info_data}>
            <FormLabel className={styles.patient_info_inn}>
              Appointment Type{' '}
            </FormLabel>
            <p className={styles.patient_info_inn_p}>Video</p>
          </FormControl>
        </div>
        <div className={styles.booking_summery}>
          <Typography variant="4">Coupon</Typography>
          <FormControl className={styles.patient_info_data}>
            <FormLabel className={styles.patient_info_inn}>
              <TextField
                id="outlined-size-small"
                placeholder="Enter Coupon Code"
                size="small"
                className={styles.coupon_code}
              />
            </FormLabel>
            <Button className={styles.apply_btn}> Apply </Button>
          </FormControl>
        </div>
        <div className={styles.booking_summery}>
          <Typography variant="4">Amount Payable</Typography>
          <FormControl className={styles.patient_info_data}>
            <FormLabel className={styles.patient_info_inn}>
              Consultation Fee
            </FormLabel>
            <p className={styles.patient_info_inn_p}> ₹ 150 /-</p>
          </FormControl>
          <FormControl className={styles.patient_info_data}>
            <FormLabel className={styles.patient_info_inn}>
              Convenience Fee{' '}
            </FormLabel>
            <p className={styles.patient_info_inn_p}> ₹ 150 /-</p>
          </FormControl>
          <FormControl className={styles.patient_info_data}>
            <FormLabel className={styles.patient_info_inn}>Tax</FormLabel>
            <p className={styles.patient_info_inn_p}>
              ₹ 24.3 /- <br />
              <span>View Breakup</span>
            </p>
          </FormControl>
          <FormControl className={styles.patient_info_data_total}>
            <FormLabel className={styles.patient_info_inn}>
              Total Amount
            </FormLabel>
            <p className={styles.patient_info_inn_p}>
              <b>₹ 212.3 /-</b>{' '}
            </p>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

PatientSummery.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default PatientSummery;
