import React, { Suspense, lazy, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Box,
  TextField,
  Grid,
  Divider,
  Button,
  MenuItem,
} from '@material-ui/core';
// Picker
import { Formik, Field, Form } from 'formik';
import MaterialTable, { MTableBodyRow } from 'material-table';
import { forwardRef } from 'react';
import * as Yup from 'yup';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios';
import { getSupportTicket } from '../../../../../components/helper/PatientApi';
import { checkToken } from '../../../../../components/helper/LoginCheck';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import CreateTicket from './CreateTicket';
import validate from 'validate.js';
import { RadioGroup } from 'formik-material-ui';
import { raiseSupportTicket } from '../../../../../components/helper/PatientApi';

function MemberDetails() {
  const tableIcons = {
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    // Delete: forwardRef((props, ref) => <VisibilityIcon onClick={clickMe} style={{color:"#2d91a7"}} {...props} ref={ref} />),
    // View: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => (
      <ShareIcon style={{ color: 'green' }} {...props} ref={ref} />
    )),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const api = axios.create({
    baseURL: `http://localhost:8000/api`,
  });

  const useStyles = makeStyles(theme => ({

    root: {
      '& > *': {
        margin: theme.spacing(0),
        overflow: 'hidden',
        // width:"960px",
      },
    },
    icon: {
      fontSize: '13px',
    },
    headerWidth: {
      width: '170px',
    },
    dailogTextField: {
      marginTop: '5px',
      width: '550px',
    },
    dilogBoxTypo: {
      fontWeight: 600,
      fontSize: '15px',
    },
    searchBoxBgCol: {
      backgroundColor: 'rgb(222 222 222 / 38%)',
    },
    searchBox: {
      backgroundColor: 'white',
      border: 'none',
      padding: '14px',
      width: '550px',
      marginLeft: '60px',
      marginTop: '50px',
      boxShadow: '1px 2px 11px 2px rgb(0 0 0 / 20%)',
      height: '40px',
    },
    searchBoxBtn: {
      marginTop: '50px',
      backgroundColor: '#ff2200',
      boxShadow: '1px 2px 11px 2px rgb(0 0 0 / 20%)',
      height: '40px',
      color: 'white',
    },
    serachBoxText: {
      marginLeft: '250px',
      position: 'absolute',
    },
  }));

  //const classes = useStyless();

  const [datass, setDatass] = useState([]);

  const supportTickets = async () => {
    var showTicketData = await getSupportTicket();
    console.log('Data:', showTicketData.support_categories);
    setDatass(showTicketData.support_categories);
  };

  useEffect(() => {
    const loginToken = checkToken();
    if (loginToken) {
      supportTickets();
    } else {
      Router.push('/signin', undefined, { shallow: true });
    }
  }, []);

  const classes = useStyles();

  const DialogContent = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Code for model box Select box

  const [age, setAge] = React.useState('');

  const handleChanges = event => {
    setAge(event.target.value);
  };

  // Code for show category data in dropdown

  const [datas, setDatas] = useState([]);
  const [updateRecord, setUpdateRecord] = [];

  const supportTicket = async () => {
    var showTicketData = await getSupportTicket();
    console.log('Data:', showTicketData.tickets);
    setDatas(showTicketData.tickets);
  };

  useEffect(() => {
    const loginToken = checkToken();
    if (loginToken) {
      supportTicket();
    } else {
      Router.push('/signin', undefined, { shallow: true });
    }
  }, []);

  // Code for Submit the Model Form Data

  return (
    <div className="member-detail">
      <div>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.root}>
              <Paper elevation={0}>
                <Grid container>
                  <Box alignItems="end">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleClickOpen}
                      style={{ border: '0px solid rgba(236, 56, 50, 0.5)' }}
                    >
                      <b>Create New Ticket</b>
                    </Button>
                  </Box>
                  <Grid item md={12} xs={12}>
                    <Box
                      mb={2}
                      p={3}
                      className={classes.searchBoxBgCol}
                      display="flex"
                    >
                      <Typography
                        variant="h5"
                        className={classes.serachBoxText}
                      >
                        <b>How do we help you ?</b>
                      </Typography>
                      <InputBase
                        size="small"
                        className={classes.searchBox}
                        // onChange={setVal}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search google maps' }}
                      />
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.searchBoxBtn}
                      >
                        Search Query
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <MaterialTable
                      icons={tableIcons}
                      options={{
                        showTitle: false,
                      }}
                      columns={[
                        { title: 'Ticket ID', field: 'ticket_no' },
                        { title: 'Subject', field: 'issue_title' },
                        { title: 'Created Date', field: 'created_at' },
                        { title: 'Remark', field: 'issue' },
                        { title: 'Status', field: 'ticket_status' },
                      ]}
                      data={datas}
                    />

                    <Dialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <DialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                      >
                        <Typography color="primary">
                          <b> Create New Ticket </b>
                        </Typography>
                      </DialogTitle>

                      <DialogContent dividers>
                        <div style={{ width: '60px' }}>
                          {' '}
                          <Box
                            bgcolor="primary.main"
                            mt={-2}
                            style={{ height: '4px' }}
                          ></Box>
                        </div>
                        <Formik
                          initialValues={{
                            title: '',
                            category: '',
                            bookingID: '',
                            subject: '',
                            message: '',
                          }}
                          validationSchema={Yup.object().shape({
                            category: Yup.string()
                              .max(255)
                              .required('Category is required'),
                            bookingID: Yup.string()
                              .max(255)
                              .required('Booking ID is required'),
                            subject: Yup.string()
                              .max(255)
                              .required('Subject is required'),
                            message: Yup.string()
                              .max(255)
                              .required('Message is required'),
                          })}
                          onSubmit={async (
                            values,
                            { setSubmitting, isSubmitting },
                          ) => {
                            setTimeout(() => {
                              setSubmitting(false);
                              console.log(JSON.stringify(values, null, 2));
                            }, 2000);
                            const res = await raiseSupportTicket(
                              values,
                              null,
                              2,
                            );

                            if (res.success) {
                              alert('Ticket has been raised');
                              setOpen(false);
                            } else {
                              alert('Form cant be filled');
                            }
                            // console.log(res);
                          }}
                        >
                          {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            setFieldValue,
                            isValid,
                            touched,
                            values,
                            resetForm,
                          }) => (
                            <form onSubmit={handleSubmit} id="my-form">
                              {/* our custom form */}
                              <Grid
                                container
                                className="mobileContainer"
                                spacing={3}
                                style={{ paddingTop: 10 }}
                              >
                                <Grid item md={12} xs={12}>
                                  <Typography className={classes.dilogBoxTypo}>
                                    Category
                                  </Typography>
                                  <TextField
                                    id="Category"
                                    //error={Boolean(touched.state && errors.state)}
                                    fullWidth
                                    // helperText={touched.state && errors.state}
                                    label="Category *"
                                    name="category"
                                    size="small"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.category}
                                    variant="outlined"
                                    select
                                  >
                                    {datass.map((records, index) => (
                                      <MenuItem key={index} value="4460">
                                        {records.name}
                                      </MenuItem>
                                    ))}
                                  </TextField>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                  <Typography className={classes.dilogBoxTypo}>
                                    Booking ID
                                  </Typography>
                                  <TextField
                                    fullWidth
                                    className={classes.dailogTextField}
                                    id="select"
                                    size="small"
                                    error={Boolean(
                                      touched.bookingID && errors.bookingID,
                                    )}
                                    fullWidth
                                    helperText={
                                      touched.bookingID && errors.bookingID
                                    }
                                    label="Booking ID *"
                                    name="bookingID"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.bookingID}
                                    variant="outlined"
                                  />
                                </Grid>
                                <Grid item md={12} xs={12}>
                                  <Typography className={classes.dilogBoxTypo}>
                                    Subject
                                  </Typography>
                                  <TextField
                                    fullWidth
                                    className={classes.dailogTextField}
                                    id="select"
                                    size="small"
                                    error={Boolean(
                                      touched.subject && errors.subject,
                                    )}
                                    fullWidth
                                    helperText={
                                      touched.subject && errors.subject
                                    }
                                    label="Subject *"
                                    name="subject"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.subject}
                                    variant="outlined"
                                  />
                                </Grid>
                                <Grid item md={12} xs={12}>
                                  <Typography className={classes.dilogBoxTypo}>
                                    Message
                                  </Typography>
                                  <TextField
                                    fullWidth
                                    className={classes.dailogTextField}
                                    id="message"
                                    size="small"
                                    error={Boolean(
                                      touched.message && errors.message,
                                    )}
                                    fullWidth
                                    helperText={
                                      touched.message && errors.message
                                    }
                                    label="Message *"
                                    name="message"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.message}
                                    variant="outlined"
                                    multiline
                                    rows={2}
                                  />
                                </Grid>
                              </Grid>
                              {/* Custom form end */}
                            </form>
                          )}
                        </Formik>
                      </DialogContent>

                      <DialogActions style={{ backgroundColor: '#ececec' }}>
                        <Grid container>
                          <Grid item md={8} xs={12}>
                            <Box p={1}>
                              {' '}
                              <Typography>
                                Once You Submit our support tream will reach you
                                through call
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item md={4} xs={12}>
                            <Box p={1} style={{ marginLeft: '20px' }}>
                              <Button onClick={handleClose} color="primary">
                                Cancel
                              </Button>
                              <Button
                                type="submit"
                                form="my-form"
                                variant="contained"
                                color="primary"
                              >
                                Submit
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </DialogActions>
                    </Dialog>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default MemberDetails;
