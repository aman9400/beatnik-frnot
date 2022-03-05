import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './consultationType.module.css';
import { useRouter } from 'next/router';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Grid,
  Button,
} from '@material-ui/core';

import DoneAllIcon from '@material-ui/icons/DoneAll';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import clsx from 'clsx';
import Video from './../../../DoctorSearch/components/Images/video.png';
import Audio from './../../../DoctorSearch/components/Images/phone-call.png';
import Chat from './../../../DoctorSearch/components/Images/chat.png';
import WalkIn from './../../../DoctorSearch/components/Images/home.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ConsultationType() {
  const [value, setValue] = React.useState(0);
  const [searchdoctors, setSearchDoctors] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Consultation Type Redirect To Search Doctor
  const searchDoctor = () => {
    router.push({
      pathname: '/doctor-search/',
      query: { name: searchdoctors },
    });
  };
  const router = useRouter();

  return (
    <div className={styles.root}>
      <Box item xs={12} direction="column">
        <div className={styles.type_of_consultation}>
          <Typography gutterBottom variant="h2">
            Consultation Type
          </Typography>
        </div>
      </Box>
      <AppBar className={styles.tab_panel_holder} position="static">
        <Tabs
          className={clsx(styles.tab_inner_panel, 'type_consultation')}
          value={value}
          onChange={handleChange}
        >
          <Tab
            className={styles.tab_single_panel}
            icon={<img src={WalkIn} alt="#"/>}
            label="In-Clinic Consultation"
            {...a11yProps(0)}
          />
          <Tab

            className={styles.tab_single_panel}
            icon={<img src={Video} alt="#"/>}
            label="Video Consultation"
            {...a11yProps(1)}
          />
          <Tab

            className={styles.tab_single_panel}
            icon={<img src={Audio} alt="#"/>}
            label="Audio Consultation"
            {...a11yProps(2)}
          />
          <Tab
            className={styles.tab_single_panel}
            icon={<img src={Chat} alt="#"/>}
            label="Chat Consultation"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel className={styles.tab_contents} value={value} index={0} >
        <Grid container className={styles.tab_container} spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.left_container}>
              <img
                className={styles.left_side_down}
                src="https://www.gigadocs.com/blog/wp-content/uploads/2020/05/close-up-business-man-sit-home-having-online-consultation-with-doctor-tablet-reduce-social-distance-healthcare-concept_43157-1034.jpg"
                alt="#"
              />

              <img
                className={styles.left_side_up}
                src="https://www.gigadocs.com/blog/wp-content/uploads/2020/05/close-up-business-man-sit-home-having-online-consultation-with-doctor-tablet-reduce-social-distance-healthcare-concept_43157-1034.jpg"
                alt="#"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.second_container}>
              <div className={styles.second_inner}>
                <h3>In Clinic Consultation</h3>
                <p>
                Why go to the clinic for just taking appointment. Just log onto online Aarogya app and book appointment of doctor of your choice.
                </p>
                <div className={styles.listing_features}>
                  <ul>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      Book appointment from the comfort of your home without the need to travel.
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      Medical Reports can be shared directly to the doctor before the consultation starts
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      Book appointment of Doctor of your choice
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      Dont have to wait in the long queue
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      Book appointment for your family members
                    </li>
                  </ul>
                </div>
                <div className={styles.image_card}>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                </div>
                <div className={styles.consult_btn}>
                  <Button className={styles.consult_btn} onClick={searchDoctor}>
                    Consult Now{' '}
                    <span className={styles.consult_arrow}>
                      <KeyboardArrowRightIcon />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel className={styles.tab_contents} value={value} index={1}>
        <Grid container className={styles.tab_container} spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.second_container}>
              <div className={styles.second_inner}>
                <h3>Video Consultation</h3>
                <p>
                Every time you go to visit your doctor, you have to travel to get there. With an online consultation, you don’t need to wait for the bus or wait in the traffic. You simply log onto online aarogya and begin your consultation.
                </p>
                <p>Only online aarogya offers appointment's from doctor of your choice for Video Consultation.</p>
                <div className={styles.listing_features}>
                  <ul>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      No need to travel to clinic for regular health queries. 
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      Save money and time while recieving high quality health care.
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      100 % safe and Confidential.
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                        <b>HD Video Quality</b>
                    </li>
                  
                  </ul>
                </div>
                <div className={styles.image_card}>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                </div>
                <div className={styles.consult_btn}>
                  <Button className={styles.consult_btn} onClick={searchDoctor}>
                    Consult Now{' '}
                    <span className={styles.consult_arrow}>
                      <KeyboardArrowRightIcon />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.left_container}>
              <img
                className={styles.left_side_down}
                src="https://www.gigadocs.com/blog/wp-content/uploads/2020/05/close-up-business-man-sit-home-having-online-consultation-with-doctor-tablet-reduce-social-distance-healthcare-concept_43157-1034.jpg"
                alt="#"
              />

              <img
                className={styles.left_side_up}
                src="https://www.gigadocs.com/blog/wp-content/uploads/2020/05/close-up-business-man-sit-home-having-online-consultation-with-doctor-tablet-reduce-social-distance-healthcare-concept_43157-1034.jpg"
                alt="#"
              />
            </div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel className={styles.tab_contents} value={value} index={2} id="audio">
        <Grid container className={styles.tab_container} spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.left_container}>
              <img
                className={styles.left_side_down}
                src="https://www.gigadocs.com/blog/wp-content/uploads/2020/05/close-up-business-man-sit-home-having-online-consultation-with-doctor-tablet-reduce-social-distance-healthcare-concept_43157-1034.jpg"
                alt="#"
              />

              <img
                className={styles.left_side_up}
                src="https://www.gigadocs.com/blog/wp-content/uploads/2020/05/close-up-business-man-sit-home-having-online-consultation-with-doctor-tablet-reduce-social-distance-healthcare-concept_43157-1034.jpg"
                alt="#"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.second_container}>
              <div className={styles.second_inner}>
                <h3>Audio Consultation</h3>
                <p>
                Have a medical query? Experience clinic like consultation through an Audio call with the doctor of your choice.
                </p>
                <p>Only online aarogya offers appointment's from doctor of your choice for Audio Consultation.</p>
                <div className={styles.listing_features}>
                  <ul>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      No need to travel to clinic for regular health queries. 
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      Save money and time while recieving high quality health care.
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      100 % safe and Confidential.
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      <b>HD Audio Quality</b>
                    </li>
                  
                  </ul>
                </div>
                <div className={styles.image_card}>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                </div>
                <div className={styles.consult_btn}>
                  <Button className={styles.consult_btn} onClick={searchDoctor}>
                    Consult Now{' '}
                    <span className={styles.consult_arrow}>
                      <KeyboardArrowRightIcon />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel className={styles.tab_contents} value={value} index={3}>
        <Grid container className={styles.tab_container} spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.second_container}>
              <div className={styles.second_inner}>
                <h3>Chat Consultation</h3>
                <p>
                Start an instant consultation with doctor of your choice. Message your doctor from anywhere through Online Aarogya platform and get a digital prescription
                </p>
                <p>Only online aarogya offers appointment's from doctor of your choice for Chat Consultation.</p>
                <div className={styles.listing_features}>
                  <ul>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      No need to travel to clinic for regular health queries. 
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      Save money and time while recieving high quality health care.
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      100 % safe and Confidential.
                    </li>
                    <li>
                      <p>
                        <DoneAllIcon />
                      </p>
                      The chat consultation is live till 36 Hours.
                    </li>
                  
                  </ul>
                </div>
                <div className={styles.image_card}>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                  <div className={styles.images_inner}>
                    <img
                      alt="#"
                      src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-slider-image-2.png"
                    />
                  </div>
                </div>
                <div className={styles.consult_btn}>
                  <Button className={styles.consult_btn} onClick={searchDoctor}>
                    Consult Now{' '}
                    <span className={styles.consult_arrow}>
                      <KeyboardArrowRightIcon />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.left_container}>
              <img
                className={styles.left_side_down}
                src="https://www.gigadocs.com/blog/wp-content/uploads/2020/05/close-up-business-man-sit-home-having-online-consultation-with-doctor-tablet-reduce-social-distance-healthcare-concept_43157-1034.jpg"
                alt="#"
              />

              <img
                className={styles.left_side_up}
                src="https://www.gigadocs.com/blog/wp-content/uploads/2020/05/close-up-business-man-sit-home-having-online-consultation-with-doctor-tablet-reduce-social-distance-healthcare-concept_43157-1034.jpg"
                alt="#"
              />
            </div>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
