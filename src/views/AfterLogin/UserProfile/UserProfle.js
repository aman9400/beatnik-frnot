import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  Grid,
  Button,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { getPatientProfile } from '../../../components/helper/PatientApi';
import Breadcrumb from '../Reusable/MediBreadcrumb';
import MetaTitle from '../../../components/helper/MetaTitle';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// Picker
import Link from 'next/link';
import { getFamilyDependentByUid } from '../../../components/helper/PatientApi';
import { checkToken } from '../../../components/helper/LoginCheck';
import MedicalHistory from '../UserProfile/components/GetMedicalHistory/MedicalHistory';
import { useRouter } from 'next/router';
import NoRecordFound from 'components/organisms/NoRecordFound';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      overflow: 'hidden',
      width: '960px',
    },
  },
  cardCss: {
    maxWidth: 275,
    padding: 20,
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  switchTitle: {
    fontWeight: 700,
  },
  titleCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  square: {
    borderRadius: '5px',
  },
  progress: {
    color: 'red',
    width: '80px',
    height: '80px',
  },
  percentage: {
    width: '100px',
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
    top: '91px',
    left: '-8px',
    color: 'red',
    fontSize: 'large',
    fontWeight: 'bold',
  },
}));

function UserProfile(props) {
  // Code for load API Data into a table

  const [data, setData] = React.useState([]);

  const getFamilyDependent = async () => {
    var doctorData = await getFamilyDependentByUid();
    console.log('Name:', doctorData);
    setData(doctorData.dependents);
  };
  const router = useRouter();
  useEffect(() => {
    const loginToken = checkToken();
    if (loginToken) {
      getFamilyDependent();
    } else {
      router.push('/signin', undefined, { shallow: true });
    }
    // fetchData();
  }, [0]);

  // To get Logged User Details

  const [user, setUser] = React.useState('');

  const getPatientLoginss = async () => {
    var doctorDatas = await checkToken();
    console.log('User Detail:', doctorDatas);
    setUser(doctorDatas.user);
  };

  React.useEffect(() => {
    //console.log('ssssssssssssssss',user)
    // getPatientLoginss();
  }, []);

  // code for Patient Profile List

  const [patientDetails, setPatientDetails] = useState([]);

  const getPatientProfileDetails = async () => {
    var doctorDatas = await getPatientProfile();
    console.log('User Details', doctorDatas.patient_info.name);
    setPatientDetails(doctorDatas.patient_info);
  };

  React.useEffect(() => {
    //console.log('ssssssssssssssss',user)
    getPatientProfileDetails();
    console.log('ssssssssssssssss');
  }, []);
  // Code for Progress bar

  const [completed, setCompleted] = React.useState('');
  const classess = useStyles();

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (completed < 100) {
        setCompleted(completed + 90);
      }
    }, 1000);
  }, []);

  // Code for Open Model Box for Viewing Medical History

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //

  // // Set Cookies
  // var profile_completion_progress = Cookies.get('profile_completion_progress');
  // var newStr = Cookies.get('profile_completion_progress');
  // var  profile_completion_progress = newStr.replace(/%/g,'');
  // =====================================

  return (
    <div className="medifile_profie">
      <MetaTitle
        title={`Medifile User Profile  | Online Aarogya`}
        metaKeyWord=""
        metaDescription=""
      />

      <div className="medifiles_pannel">
        <div className="medifile_dashboard">
          <h3 className="medifile_head">Hi! Welcome to Medifiles </h3>
          <Breadcrumb url="User Profile" />
        </div>
      </div>
      <Grid container style={{ justifyContent: 'space-between' }}>
        <Grid spacing={3} item xs={4}>
          <div className="profile_details">
            <Box p={3}>
              <div elevation={0}>
                <Avatar
                  className="profile_avatar"
                  variant="rounded"
                  src={patientDetails.avatar_url}
                  alt="User Profile "
                ></Avatar>
              </div>
              <Typography align="center" variant="h6"></Typography>
              <TableRow>
                <TableCell colSpan={2}>
                  <b>Name : </b>
                </TableCell>
                <TableCell>{patientDetails.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>
                  <b>Email ID : </b>
                </TableCell>
                <TableCell>{patientDetails.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>
                  <b>Mobile No. : </b>
                </TableCell>
                <TableCell>{patientDetails.mobile}</TableCell>
              </TableRow>

              <Box className="profile_view_history">
                <Button size="small" onClick={handleClickOpen} color="primary">
                  View Medical History
                </Button>
              </Box>

              <Box className="profile_edit_user">
                <Link href="account/account-info">
                  <Button size="small" variant="contained" color="primary">
                    Edit Profile
                  </Button>
                </Link>
              </Box>
            </Box>
          </div>
        </Grid>

        <Grid spacing={3} item xs={8}>
          <Box className="profile_progress" p={0}>
            <Box alignContent="flex-end" mb={2}>
              <Grid container>
                <Grid item xs={12} lg={2}>
                  <CircularProgressbar
                    value={patientDetails.profile_completion}
                    text={`${patientDetails.profile_completion}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: 'red',
                      textSize: '18px',
                      pathTransitionDuration: 0.5,
                      pathColor: `rgb(255 34 0), ${patientDetails.profile_completion /
                        100})`,
                      textColor: 'red',
                      trailColor: 'rgb(255 34 0 / 20%)',
                      backgroundColor: 'rgb(255 34 0 / 20%)',
                    })}
                  />
                </Grid>
                <Grid xs={12} lg={10}>
                  <Box ml={3}>
                    <Typography
                      align="left"
                      variant="h6"
                      className="profile_progress_head"
                    >
                      <b>Profile Progress</b>
                    </Typography>
                  </Box>
                  <p
                    color="secondary"
                    align="left"
                    style={{ marginLeft: '24px' }}
                  >
                    {patientDetails.profile_completion}% Completed
                  </p>
                </Grid>
              </Grid>
            </Box>

            <Box mb={2}>
              <Typography variant="h6">
                <b>Dependent Details</b>
              </Typography>
            </Box>
            <TableContainer>
              <Table
                className="user_medical_history_table"
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell component="th">Image</TableCell>
                    <TableCell component="th">First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Dob</TableCell>
                    <TableCell>Address</TableCell>
                  </TableRow>
                </TableHead>

                {data == '' ? (
                  <NoRecordFound />
                ) : (
                  
                  <TableBody>
                    {data.map(row => (
                      <TableRow key={row.id}>
                        <TableCell>
                          <Avatar
                            variant="square"
                            className={classess.square}
                          ></Avatar>
                        </TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell>{row.gender}</TableCell>
                        <TableCell>{row.dob}</TableCell>
                        <TableCell>{row.address}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>

      {/* Model Box to view Medical History */}

      <Dialog
        maxWidth={'md'} // 'sm' || 'md' || 'lg' || 'xl'
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{''}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <MedicalHistory />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default UserProfile;
