import React, { useEffect, useState } from 'react';
import {
  Typography, makeStyles,
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
  Tooltip
} from '@material-ui/core';
import { getPatientProfile } from '../../../components/helper/PatientApi';
import Breadcrumb from '../Reusable/MediBreadcrumb';
import MetaTitle from '../../../components/helper/MetaTitle';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Link from 'next/link';
import { getFamilyDependentByUid } from '../../../components/helper/PatientApi';
import { checkToken } from '../../../components/helper/LoginCheck';
import MedicalHistory from '../UserProfile/components/GetMedicalHistory/MedicalHistory';
import { useRouter } from 'next/router';
import NoRecordFound from 'components/organisms/NoRecordFound';
import styles from './UserProfile.module.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import DependentDetails from './DependentDetails';

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



  const [dependentDetails, setDependentDetails] = React.useState(false);

  const OpenDependentDetails = () => {
    setDependentDetails(true);
  };
  const CloseDependentDetails = () => {
    setDependentDetails(false);
  };

  return (
    <div className="medifile_profie">
      <MetaTitle
        title={`Medifile User Profile  | Online Aarogya`}
        metaKeyWord=""
        metaDescription=""
      />

      <div className="medifiles_pannel" stickyHeader aria-label="sticky table" >
        <div className="medifile_dashboard">
          <h3 className="medifile_head">Hi! Welcome to Medifiles </h3>
          <Breadcrumb url="User Profile" />
        </div>
      </div>
      <Grid container style={{ justifyContent: 'space-between' }}>
        <Grid spacing={3} item xs={4}>
          <div className="profile_details">
            <Box  p={3}>
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
                <Button size="small" onClick={OpenDependentDetails} color="primary">
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
              <Grid className={styles.progress_profile}>
                <Grid className={styles.progress_status}>
                  <CircularProgressbar
                    className={styles.circular_profile}
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
                <Grid className={styles.progress_status_data}>
                  <Box ml={3}>
                    <Typography
                      align="left"
                      variant="h6"
                      className={styles.title}
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
              <Typography variant="h6" className={styles.title}>
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
                    <TableCell>Image</TableCell>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Dob</TableCell>
                    <TableCell>Action</TableCell>
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
                            src={row.avatar_url}
                            variant="square"
                            className={classess.square}
                          ></Avatar>
                        </TableCell>
                        <TableCell>{row.title} {row.first_name} {row.last_name}</TableCell>
                        <TableCell>{row.age}</TableCell>
                        <TableCell>{row.dob}</TableCell>
                        <TableCell>
                          <div className={styles.action_button}>
                            <Tooltip title="View Details" aria-label="add">
                              <Button onClick={OpenDependentDetails}><VisibilityIcon /></Button>
                            </Tooltip>
                            <Tooltip title="Add Medical History" aria-label="add">
                              <Button><AddIcon /></Button>
                            </Tooltip>
                          </div>
                        </TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      
      </Grid>
      <Dialog onClose={CloseDependentDetails} aria-labelledby="customized-dialog-title" open={dependentDetails}>
        <DependentDetails />
        <DialogActions>

          <Button autoFocus onClick={CloseDependentDetails} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default UserProfile;
