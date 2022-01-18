import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import  { useRouter } from 'next/router';
import PriceTag from '../Images/pricetag.png';
import styles from './DoctorConsultSlider.module.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  Card,
  Grid,
  CardContent,
  Tab,
  Tabs,
  AppBar,
  Button,
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  svg: {
    fill: 'red',
  },
  datatab: {
    position: 'relative ',
    boxShadow: 'none',
    padding: '5px',
    border: '1px solid #f1dbd8c2',
    background: '#fff ',
    margin: '0 5px',
    borderRadius: '5px',
    width: ' 120px !important',
    minWidth: '120px',
    '&.Mui-selected': {
      border: '2px solid red',
      boxShadow:
        '0 1px 4px hsl(0deg 0% 0% / 9%), 0 3px 8px hsl(0deg 0% 0% / 9%)',
      backgroundColor: '#fff',
    },
    '&.Mui-selected p': {
      color: 'red',
    },
    '&.Mui-selected p b': {
      color: 'red',
    },
  },
  tab_scroll_header: {
    position: 'relative',
    '& .MuiTabs-indicator ': {
      backgroundColor: 'transparent',
    },
  },
  tab_main_holder: {
    padding: '0px',
    '& .MuiBox-root ': {
      padding: '0px',
    },
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ConsultSlider() {
  const [value, setValue] = React.useState(0);
  const [doctordetails, setDoctorDetails] = useState([]);
  const classes = useStyles();
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Call API for Doctor Slot 
  const loadDoctorDetails = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      "location": [20.2604132, 44.43947],
      "term":'cold,fever,test'
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://oaarogyabetaportal.mirakidigital.in/api/patient/home/search',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => setDoctorDetails(result.doctors))

      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    loadDoctorDetails();
  }, []);

  return (
    <div>
      <AppBar position="static" className={styles.tab_scroll_bar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs"
          className={classes.tab_scroll_header}
        >
          <Tab
            className={(styles.doctor_inner, `${classes.datatab}`)}
            label={
              <Card className={styles.content_part}>
                <CardContent className={styles.content}>
                  <Typography
                    style={{ fontSize: '16px' }}
                    className={styles.available_data_style}
                  >
                    Today
                  </Typography>
                </CardContent>
                <Box className={styles.available_available_slot}>
                  <Typography>
                    <center>
                      <b>5 Slots Available</b>
                    </center>
                  </Typography>
                </Box>
              </Card>
            }
            {...a11yProps(0)}
          ></Tab>
    
         
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} className={classes.tab_main_holder}>
        <Grid
          container
          spacing={2}
          className={styles.consultation_content_part}
        >aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          {doctordetails.map((names)=>
          
            {names.schedules.map((namesss) =>
         
          <Grid item xs={6} sm={6} md={6} lg={3} xl={6}>
            <p>{namesss.amount}</p>
            <div className={styles.check_box}>
              <div className={styles.quiz_card_area}>
                <input
                  className={styles.quiz_checkbox}
                  type="radio"
                  id="1"
                  name="slot"
                  value="1"
                />
                <div className={styles.single_quiz_card}>
                  <div className={styles.quiz_card_content}>
                    <div className={styles.quiz_card_title}>
                      <div className={styles.shift_indecation}>
                        <h3>Shifts</h3>
                      </div>
                      <div className={styles.shift_indecation}>
                        <span>
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                    <div className={styles.quiz_card_icon}>
                      <div className={styles.quiz_icon}>
                        <b>From</b>
                        <br />
                        <div className={styles.time_selector}>
                          <span>8:30 PM</span>
                        </div>
                      </div>
                      <div className={styles.quiz_icon}>
                        <b>To</b>
                        <br />
                        <div className={styles.time_selector}>
                          <span>8:30 PM</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.pricetag} >
                      <img src={PriceTag}  className={styles.price_label}alt=""/>
                      <div className={styles.price_label_fee}>
                        <p>Fee: <span>₹</span> 150</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          )}
         )}
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push('/search/book-slot')}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </TabPanel>

    </div>
  );
}

// export default ConsultSlider;
