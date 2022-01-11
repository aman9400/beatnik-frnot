import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './bookingSlot.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import MapIcon from '@material-ui/icons/Map';
import {
  Typography,
  Box,
  Card,
  Grid,
  CardContent,
  Tab,
  Tabs,
  AppBar,
  Dialog,
  Button,
  DialogActions,
} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DoctorRatingForm from '../DoctorRating/DoctorRating';
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

export default function BookingSlots() {
  const [value, setValue] = React.useState(0);
  const [star, setStar] = React.useState(3);
  const classes = useStyles();
  const [hidden, setHidden] = useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            {...a11yProps(1)}
          />
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
            {...a11yProps(2)}
          />
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
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} className={classes.tab_main_holder}>
        <div className={styles.wrapper}>
          <Grid container spacing={2}>
            <Grid hidden={hidden} item xs={6}>
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
                      18, 1st Main, Koramangala 1st Block, Jakkasandra
                      Extension, Bangalore
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
                          <Button onClick={handleClose} color="primary">
                            Cancel
                          </Button>
                          <Button onClick={handleClose} color="primary">
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
            </Grid>
            <Grid hidden={hidden} item xs={6}>
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
                      18, 1st Main, Koramangala 1st Block, Jakkasandra
                      Extension, Bangalore
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
                          <Button onClick={handleClose} color="primary">
                            Cancel
                          </Button>
                          <Button onClick={handleClose} color="primary">
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
            </Grid>
            <Grid hidden={hidden} item xs={6}>
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
                      18, 1st Main, Koramangala 1st Block, Jakkasandra
                      Extension, Bangalore
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
                          <Button onClick={handleClose} color="primary">
                            Cancel
                          </Button>
                          <Button onClick={handleClose} color="primary">
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
            </Grid>
            <Grid hidden={hidden} item xs={6}>
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
                      18, 1st Main, Koramangala 1st Block, Jakkasandra
                      Extension, Bangalore
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
                          <Button onClick={handleClose} color="primary">
                            Cancel
                          </Button>
                          <Button onClick={handleClose} color="primary">
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
            </Grid>
            <Grid hidden={hidden} item xs={6}>
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
                      18, 1st Main, Koramangala 1st Block, Jakkasandra
                      Extension, Bangalore
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
                          <Button onClick={handleClose} color="primary">
                            Cancel
                          </Button>
                          <Button onClick={handleClose} color="primary">
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
            </Grid>
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
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          ) : null}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tab_main_holder}>
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
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tab_main_holder}>
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
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
