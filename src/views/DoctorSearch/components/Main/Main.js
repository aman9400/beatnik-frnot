import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.css';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Box, Button } from '@material-ui/core';
import SearchDoctor from 'components/organisms/SearchDoctor';
import {
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tab,
  Tabs,
  CardContent,
  AppBar,
  Typography,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DoctorFilter from '../Filters/Filters';
import DoctorDialogBox from '../DoctorDialog/DoctorDialog';
import VideoCall from '../Images/video.png';
import AudioCall from '../Images/phone-call.png';
import WalkIN from '../Images/home.png';
import ChatSer from '../Images/chat.png';
import DoctorStethoscope from '../Images/doctor-stethoscope.jpg';
import DoctorConsultSlider from '../DoctorConsultSlider';
import BookingSlots from '../BooKingSlot/BookingSlot';
import { useLocation } from 'react-router-dom';
import DoctorRatingForm from '../DoctorRating/DoctorRating';
import Rating from '@material-ui/lab/Rating';
import MapIcon from '@material-ui/icons/Map';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const useStyles = makeStyles(theme => ({
  root: {
    background: 'hsl(0deg 0% 95%)',
    '& .description-cta__button-group': {
      flexWrap: 'nowrap',
    },
  },
  title: {
    fontWeight: 'bold',
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {},
  },
  dividerBottom: {
    position: 'relative',
    left: '82px',
    width: '89%',
    top: '-17px',
  },
  textWhite: {
    color: 'white',
  },
  cardHighlighted: {
    background: theme.palette.primary.dark,
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  webinarAvatar: {
    width: 200,
    height: 200,
    border: `${theme.spacing(1)}px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(2),
  },
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
  filterBox: {
    border: `${theme.spacing(1)}px solid ${theme.palette.background.paper}`,
    boxShadow: `0 0px 4px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
    padding: '15px 15px',
  },

  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
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
const Main = props => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const descriptionElementRef = React.useRef(null);
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(false);
  const [isActive, setActive] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [language, setLanguage] = useState('');

  const [doctordetails, setDoctorDetails] = useState([]);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [star, setStar] = React.useState(3);
  const [hidden, setHidden] = useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const toggleTab = index => {
    setToggleState(index);
    setIsOpened(wasOpened => !wasOpened);
    setActive(!isActive);
  };
  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  }, []);

  // To get URL parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const getData = params.get('name');
    setLanguage(getData);
  }, []);

  // To Load Doctor form API
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
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={styles.SearchDoctor_search}>
        <SearchDoctor />
      </div>

      <Grid container style={{ justifyContent: 'space-around' }}>
        <DoctorFilter />
        <Grid item xs={12} sm={6} md={4} lg={8} xl={8}>
          {doctordetails.map(recordData => (
            <Card className={styles.doctor_card_root}>
              <Box component="div" className={styles.doctor_card_header}>
                <Box component="div" className={styles.doctor_card_avatar}>
                  <CardMedia
                    className={styles.doctor_avatar}
                    image={recordData.avatar_url}
                  />
                </Box>
                <Box
                  container
                  component="div"
                  className={styles.doctor_card_detail}
                >
                  <CardHeader
                    className={styles.doctor_name}
                    action={
                      <IconButton aria-label="settings">
                        <ErrorOutlineIcon onClick={handleClickOpen('paper')} />
                      </IconButton>
                    }
                  />
                  <h3>
                    {recordData.title} {recordData.first_name}{' '}
                    {recordData.last_name}
                  </h3>
                  <p className={styles.doctor_specialization}>
                    {' '}
                    <img src={DoctorStethoscope} alt="" />
                    {recordData.speciality}{' '}
                  </p>
                  <p className={styles.doctor_expriance}>
                    {recordData.yrs_of_practice} Years of experience
                  </p>
                  <p className={styles.doctor_para}>
                    Nephrology. A nephrologist treats diseases and infections of
                    the kidneys and urinary system.
                  </p>
                  <Box component="div" className={styles.doctor_card_btn}>
                    <div className={styles.bloc_tabs}>
                      {recordData.services.map(service => (
                        <div
                          className={
                            toggleState === 1 ? 'tabs active-tabs' : 'tabs'
                          }
                          onClick={() => toggleTab(1)}
                        >
                          <div className={styles.button_holder}>
                            <Button variant="contained">
                              {service.appointment_type_id == '2' ? (
                                <img src={AudioCall} alt="#" />
                              ) : (
                                ''
                              )}
                              {service.appointment_type_id == '1' ? (
                                <img src={VideoCall} alt="#" />
                              ) : (
                                ''
                              )}
                              {service.appointment_type_id == '3' ? (
                                <img src={ChatSer} alt="#" />
                              ) : (
                                ''
                              )}
                              {service.appointment_type_id == '4' ? (
                                <img src={WalkIN} alt="#" />
                              ) : (
                                ''
                              )}
                            </Button>
                            <div className={styles.colsult_tag}>
                              <b>{service.appointment_type}</b>
                              <p>
                                <span>&#x20B9;</span> {service.min_price} -{' '}
                                <span>&#x20B9;</span> {service.max_price}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Box>
                </Box>
              </Box>

              {isOpened && (
                <div className={styles.boxContent_collapsed}>
                  <div className="content-tabs">
                    <div
                      className={
                        toggleState === 1
                          ? 'content  active-content'
                          : 'content'
                      }
                    >
                      <div className={styles.conultation_heading}>
                        <h4>Select Clinic </h4>
                      </div>
                      <AppBar
                        position="static"
                        className={styles.tab_scroll_bar}
                      >
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          variant="scrollable"
                          scrollButtons="auto"
                          aria-label="scrollable auto tabs"
                          className={classes.tab_scroll_header}
                        >
                          <Tab
                            className={
                              (styles.doctor_inner, `${classes.datatab}`)
                            }
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
                                <Box
                                  className={styles.available_available_slot}
                                >
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
                          <Tab
                            className={
                              (styles.doctor_inner, `${classes.datatab}`)
                            }
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
                                <Box
                                  className={styles.available_available_slot}
                                >
                                  <Typography>
                                    <center>
                                      <b>5 Slots Available</b>
                                    </center>
                                  </Typography>
                                </Box>
                              </Card>
                            }
                            {...a11yProps(1)}
                          />
                    
                        </Tabs>
                      </AppBar>

                      <TabPanel
                        value={value}
                        index={0}
                        className={classes.tab_main_holder}
                      >
                        <div className={styles.wrapper}>
                          <Grid container spacing={2}>
                          <Grid
                          container
                          spacing={2}
                          className={styles.consultation_content_part}
                        >
                          <Grid item xs={3}>
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
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.check_box}>
                              <div className={styles.quiz_card_area}>
                                <input
                                  className={styles.quiz_checkbox}
                                  type="radio"
                                  id="2"
                                  name="slot"
                                  value="2"
                                />
                                <div className={styles.single_quiz_card}>
                                  <div className={styles.quiz_card_content}>
                                    <div className={styles.quiz_card_title}>
                                      <div className={styles.shift_indecation}>
                                        <h3>Shifts</h3>
                                      </div>
                                      <div className={styles.shift_indecation}>
                                        <span>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.check_box}>
                              <div className={styles.quiz_card_area}>
                                <input
                                  className={styles.quiz_checkbox}
                                  type="radio"
                                  id="3"
                                  name="slot"
                                  value="3"
                                />
                                <div className={styles.single_quiz_card}>
                                  <div className={styles.quiz_card_content}>
                                    <div className={styles.quiz_card_title}>
                                      <div className={styles.shift_indecation}>
                                        <h3>Shifts</h3>
                                      </div>
                                      <div className={styles.shift_indecation}>
                                        <span>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.check_box}>
                              <div className={styles.quiz_card_area}>
                                <input
                                  className={styles.quiz_checkbox}
                                  type="radio"
                                  id="3"
                                  name="slot"
                                  value="3"
                                />
                                <div className={styles.single_quiz_card}>
                                  <div className={styles.quiz_card_content}>
                                    <div className={styles.quiz_card_title}>
                                      <div className={styles.shift_indecation}>
                                        <h3>Shifts</h3>
                                      </div>
                                      <div className={styles.shift_indecation}>
                                        <span>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.check_box}>
                              <div className={styles.quiz_card_area}>
                                <input
                                  className={styles.quiz_checkbox}
                                  type="radio"
                                  id="5"
                                  name="slot"
                                  value="5"
                                />
                                <div className={styles.single_quiz_card}>
                                  <div className={styles.quiz_card_content}>
                                    <div className={styles.quiz_card_title}>
                                      <div className={styles.shift_indecation}>
                                        <h3>Shifts</h3>
                                      </div>
                                      <div className={styles.shift_indecation}>
                                        <span>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                            {/* <Grid hidden={hidden} item xs={6}>
                              <div className={styles.box} onClick={onClick}>
                                <div className={styles.section_1}>
                                  <p className={styles.p_1}>Chisel Dental</p>
                                  <div
                                    className={styles.close}
                                    onClick={() => setHidden(!hidden)}
                                  >
                                    <HighlightOffIcon />
                                  </div>
                                </div>

                                <div className={styles.hr}></div>
                                <div className={styles.pdfs}>
                                  <div className={styles.pdf_one}>
                                    <p>
                                      18, 1st Main, Koramangala 1st Block,
                                      Jakkasandra Extension, Bangalore
                                    </p>
                                  </div>
                                  <div className={styles.pdf_two}>
                                    <b>Price -&nbsp; </b>
                                    <p>
                                      <b>₹</b> 300 to <b>₹</b> 300
                                    </p>
                                  </div>
                                  <div className={styles.pdf_proggress}>
                                    <Box sx={{ textAlign: 'center' }}>
                                      <Rating
                                        onClick={handleClickOpen}
                                        name="simple-controlled"
                                        value={star}
                                        max={5}
                                        onChange={(event, newValue) => {
                                          setStar(newValue);
                                        }}
                                      />
                                      <p>(3) Ratings</p>
                                      <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="form-dialog-title"
                                      >
                                        <DoctorRatingForm />
                                        <DialogActions>
                                          <Button
                                            onClick={handleClose}
                                            color="primary"
                                          >
                                            Cancel
                                          </Button>
                                          <Button
                                            onClick={handleClose}
                                            color="primary"
                                          >
                                            Subscribe
                                          </Button>
                                        </DialogActions>
                                      </Dialog>
                                    </Box>
                                    <Box className={styles.direction}>
                                      <MapIcon />
                                      <p> Get Direction</p>
                                    </Box>
                                  </div>
                                </div>
                              </div>
                            </Grid> */}
                        
                          </Grid>
                          {showResults ? (
                            <Grid
                              container
                              spacing={2}
                              className={styles.consultation_content_part}
                            >
                              <Grid item xs={3}>
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
                                          <div
                                            className={styles.shift_indecation}
                                          >
                                            <h3>Shifts</h3>
                                          </div>
                                          <div
                                            className={styles.shift_indecation}
                                          >
                                            <span>
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                          </div>
                                        </div>
                                        <div className={styles.quiz_card_icon}>
                                          <div className={styles.quiz_icon}>
                                            <b>From</b>
                                            <br />
                                            <div
                                              className={styles.time_selector}
                                            >
                                              <span>8:30 PM</span>
                                            </div>
                                          </div>
                                          <div className={styles.quiz_icon}>
                                            <b>To</b>
                                            <br />
                                            <div
                                              className={styles.time_selector}
                                            >
                                              <span>8:30 PM</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                              <Grid item xs={3}>
                                <div className={styles.check_box}>
                                  <div className={styles.quiz_card_area}>
                                    <input
                                      className={styles.quiz_checkbox}
                                      type="radio"
                                      id="2"
                                      name="slot"
                                      value="2"
                                    />
                                    <div className={styles.single_quiz_card}>
                                      <div className={styles.quiz_card_content}>
                                        <div className={styles.quiz_card_title}>
                                          <div
                                            className={styles.shift_indecation}
                                          >
                                            <h3>Shifts</h3>
                                          </div>
                                          <div
                                            className={styles.shift_indecation}
                                          >
                                            <span>
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                          </div>
                                        </div>
                                        <div className={styles.quiz_card_icon}>
                                          <div className={styles.quiz_icon}>
                                            <b>From</b>
                                            <br />
                                            <div
                                              className={styles.time_selector}
                                            >
                                              <span>8:30 PM</span>
                                            </div>
                                          </div>
                                          <div className={styles.quiz_icon}>
                                            <b>To</b>
                                            <br />
                                            <div
                                              className={styles.time_selector}
                                            >
                                              <span>8:30 PM</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                              <Grid item xs={3}>
                                <div className={styles.check_box}>
                                  <div className={styles.quiz_card_area}>
                                    <input
                                      className={styles.quiz_checkbox}
                                      type="radio"
                                      id="3"
                                      name="slot"
                                      value="3"
                                    />
                                    <div className={styles.single_quiz_card}>
                                      <div className={styles.quiz_card_content}>
                                        <div className={styles.quiz_card_title}>
                                          <div
                                            className={styles.shift_indecation}
                                          >
                                            <h3>Shifts</h3>
                                          </div>
                                          <div
                                            className={styles.shift_indecation}
                                          >
                                            <span>
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                          </div>
                                        </div>
                                        <div className={styles.quiz_card_icon}>
                                          <div className={styles.quiz_icon}>
                                            <b>From</b>
                                            <br />
                                            <div
                                              className={styles.time_selector}
                                            >
                                              <span>8:30 PM</span>
                                            </div>
                                          </div>
                                          <div className={styles.quiz_icon}>
                                            <b>To</b>
                                            <br />
                                            <div
                                              className={styles.time_selector}
                                            >
                                              <span>8:30 PM</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                              <Grid item xs={3}>
                                <div className={styles.check_box}>
                                  <div className={styles.quiz_card_area}>
                                    <input
                                      className={styles.quiz_checkbox}
                                      type="radio"
                                      id="3"
                                      name="slot"
                                      value="3"
                                    />
                                    <div className={styles.single_quiz_card}>
                                      <div className={styles.quiz_card_content}>
                                        <div className={styles.quiz_card_title}>
                                          <div
                                            className={styles.shift_indecation}
                                          >
                                            <h3>Shifts</h3>
                                          </div>
                                          <div
                                            className={styles.shift_indecation}
                                          >
                                            <span>
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                          </div>
                                        </div>
                                        <div className={styles.quiz_card_icon}>
                                          <div className={styles.quiz_icon}>
                                            <b>From</b>
                                            <br />
                                            <div
                                              className={styles.time_selector}
                                            >
                                              <span>8:30 PM</span>
                                            </div>
                                          </div>
                                          <div className={styles.quiz_icon}>
                                            <b>To</b>
                                            <br />
                                            <div
                                              className={styles.time_selector}
                                            >
                                              <span>8:30 PM</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                              <Grid item xs={3}>
                                <div className={styles.check_box}>
                                  <div className={styles.quiz_card_area}>
                                    <input
                                      className={styles.quiz_checkbox}
                                      type="radio"
                                      id="5"
                                      name="slot"
                                      value="5"
                                    />
                                    <div className={styles.single_quiz_card}>
                                      <div className={styles.quiz_card_content}>
                                        <div className={styles.quiz_card_title}>
                                          <div
                                            className={styles.shift_indecation}
                                          >
                                            <h3>Shifts</h3>
                                          </div>
                                          <div
                                            className={styles.shift_indecation}
                                          >
                                            <span>
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                          </div>
                                        </div>
                                        <div className={styles.quiz_card_icon}>
                                          <div className={styles.quiz_icon}>
                                            <b>From</b>
                                            <br />
                                            <div
                                              className={styles.time_selector}
                                            >
                                              <span>8:30 PM</span>
                                            </div>
                                          </div>
                                          <div className={styles.quiz_icon}>
                                            <b>To</b>
                                            <br />
                                            <div
                                              className={styles.time_selector}
                                            >
                                              <span>8:30 PM</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                            </Grid>
                          ) : null}
                        </div>
                      </TabPanel>
                      <TabPanel
                        value={value}
                        index={1}
                        className={classes.tab_main_holder}
                      >
                        <Grid
                          container
                          spacing={2}
                          className={styles.consultation_content_part}
                        >
                          <Grid item xs={3}>
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
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.check_box}>
                              <div className={styles.quiz_card_area}>
                                <input
                                  className={styles.quiz_checkbox}
                                  type="radio"
                                  id="2"
                                  name="slot"
                                  value="2"
                                />
                                <div className={styles.single_quiz_card}>
                                  <div className={styles.quiz_card_content}>
                                    <div className={styles.quiz_card_title}>
                                      <div className={styles.shift_indecation}>
                                        <h3>Shifts</h3>
                                      </div>
                                      <div className={styles.shift_indecation}>
                                        <span>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.check_box}>
                              <div className={styles.quiz_card_area}>
                                <input
                                  className={styles.quiz_checkbox}
                                  type="radio"
                                  id="3"
                                  name="slot"
                                  value="3"
                                />
                                <div className={styles.single_quiz_card}>
                                  <div className={styles.quiz_card_content}>
                                    <div className={styles.quiz_card_title}>
                                      <div className={styles.shift_indecation}>
                                        <h3>Shifts</h3>
                                      </div>
                                      <div className={styles.shift_indecation}>
                                        <span>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.check_box}>
                              <div className={styles.quiz_card_area}>
                                <input
                                  className={styles.quiz_checkbox}
                                  type="radio"
                                  id="3"
                                  name="slot"
                                  value="3"
                                />
                                <div className={styles.single_quiz_card}>
                                  <div className={styles.quiz_card_content}>
                                    <div className={styles.quiz_card_title}>
                                      <div className={styles.shift_indecation}>
                                        <h3>Shifts</h3>
                                      </div>
                                      <div className={styles.shift_indecation}>
                                        <span>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.check_box}>
                              <div className={styles.quiz_card_area}>
                                <input
                                  className={styles.quiz_checkbox}
                                  type="radio"
                                  id="5"
                                  name="slot"
                                  value="5"
                                />
                                <div className={styles.single_quiz_card}>
                                  <div className={styles.quiz_card_content}>
                                    <div className={styles.quiz_card_title}>
                                      <div className={styles.shift_indecation}>
                                        <h3>Shifts</h3>
                                      </div>
                                      <div className={styles.shift_indecation}>
                                        <span>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </TabPanel>
                      <TabPanel
                        value={value}
                        index={2}
                        className={classes.tab_main_holder}
                      >
                        <Grid
                          container
                          spacing={2}
                          className={styles.consultation_content_part}
                        >
                          <Grid item xs={3}>
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
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.check_box}>
                              <div className={styles.quiz_card_area}>
                                <input
                                  className={styles.quiz_checkbox}
                                  type="radio"
                                  id="2"
                                  name="slot"
                                  value="2"
                                />
                                <div className={styles.single_quiz_card}>
                                  <div className={styles.quiz_card_content}>
                                    <div className={styles.quiz_card_title}>
                                      <div className={styles.shift_indecation}>
                                        <h3>Shifts</h3>
                                      </div>
                                      <div className={styles.shift_indecation}>
                                        <span>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.check_box}>
                              <div className={styles.quiz_card_area}>
                                <input
                                  className={styles.quiz_checkbox}
                                  type="radio"
                                  id="3"
                                  name="slot"
                                  value="3"
                                />
                                <div className={styles.single_quiz_card}>
                                  <div className={styles.quiz_card_content}>
                                    <div className={styles.quiz_card_title}>
                                      <div className={styles.shift_indecation}>
                                        <h3>Shifts</h3>
                                      </div>
                                      <div className={styles.shift_indecation}>
                                        <span>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.check_box}>
                              <div className={styles.quiz_card_area}>
                                <input
                                  className={styles.quiz_checkbox}
                                  type="radio"
                                  id="3"
                                  name="slot"
                                  value="3"
                                />
                                <div className={styles.single_quiz_card}>
                                  <div className={styles.quiz_card_content}>
                                    <div className={styles.quiz_card_title}>
                                      <div className={styles.shift_indecation}>
                                        <h3>Shifts</h3>
                                      </div>
                                      <div className={styles.shift_indecation}>
                                        <span>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.check_box}>
                              <div className={styles.quiz_card_area}>
                                <input
                                  className={styles.quiz_checkbox}
                                  type="radio"
                                  id="5"
                                  name="slot"
                                  value="5"
                                />
                                <div className={styles.single_quiz_card}>
                                  <div className={styles.quiz_card_content}>
                                    <div className={styles.quiz_card_title}>
                                      <div className={styles.shift_indecation}>
                                        <h3>Shifts</h3>
                                      </div>
                                      <div className={styles.shift_indecation}>
                                        <span>
                                          <i
                                            className="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </TabPanel>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        enableDaysBefore={2}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle className={styles.doctor_dialog_title}>
          Doctor Over View
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <DoctorDialogBox />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Share</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Main;
