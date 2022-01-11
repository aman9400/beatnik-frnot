import React, { Suspense, lazy, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Paper,Box,Divider,Grid,Button,MenuItem,} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Imag1 from './Imag1.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
// Picker
import Link from 'next/link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {getPatientLogin} from '../../../components/helper/PatientApi'
import {getFamilyDependentByUid} from '../../../components/helper/PatientApi'
import {checkToken} from '../../../components/helper/LoginCheck'
import MedicalHistory from '../UserProfile/components/GetMedicalHistory/MedicalHistory';


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

function UserProfile() {
 
  // Code for load API Data into a table

  const [data, setData] = React.useState([]);

  const getFamilyDependent = async () =>
  {
    var doctorData = await getFamilyDependentByUid();
    console.log("Name:",doctorData);
     setData(doctorData.dependents);
  }

  useEffect(() => {
    const loginToken = checkToken();
      if(loginToken)
      {
        getFamilyDependent();
      }
      else
      {
        getFamilyDependent();
      }
    // fetchData();
  }, [0]);

  // To get Logged User Details
 
    const [user, setUser] = React.useState('');

  const getPatientLoginss =  async () =>
  {
    var doctorDatas = await checkToken();
    console.log("User Detail:",doctorDatas);
    setUser(doctorDatas.user);
  }
  
  React.useEffect(() => {
    //console.log('ssssssssssssssss',user)
    getPatientLoginss();
  },[]);


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


  return (
    <div style={{ padding: 46 }}>
      {/* <Box mb={2}><Typography inline variant="h6" align="center">User Profile</Typography></Box> */}
      <Grid container>
        <Grid item xs={12}  sm={6}  lg={5}>
          {/* <div className={classess.root}>
             Hello I am jain Hakum
           </div> */}
           
          <div className="profile-detials" style={{ width: '320px' }}>
            <Box p={4} boxShadow={3} mb={2}>
              <Paper elevation={0}>
                {/* <img src={Imag1}  height="160px" width="200px" style={{marginLeft:"20px"}}/> */}
                <Avatar
                  variant="rounded"
                  src="https://img.icons8.com/bubbles/2x/user.png"
                  style={{
                    marginLeft: '20px',
                    height: '160px',
                    width: '195px',
                  }}
                ></Avatar>
              </Paper>
              <Typography align="center" variant="h6">
                <b>{user.name}</b>
              </Typography>
              <Box mt={1} mb={1}></Box>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Typography>Email:</Typography>
                </Grid>
                <Grid item xs>
                  <Typography>{user.email}</Typography>
                </Grid>
              </Grid>
              <Box mt={1} mb={1}></Box>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Typography>Mobile :</Typography>
                </Grid>
                <Grid item xs>
                  <Typography>{user.mobile}</Typography>
                </Grid>
              </Grid>
            
              <Box mt={1} mb={1}></Box>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Typography>Address :</Typography>
                </Grid>
                <Grid item xs>
                  <Typography>Andheri (Mumbai)</Typography>
                 
                </Grid>
              </Grid>
              {/* <Button onClick={getPatientLogins} color="primary" autoFocus>
                 Close
            </Button> */}
              <Box mt={1} mb={1}></Box>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Typography>Active :</Typography>
                </Grid>
                <Grid item xs>
                  <Typography>
                    {' '}
                    <div
                      style={{
                        height: '15px',
                        width: '15px',
                        backgroundColor: 'green',
                        borderRadius: '25px',
                        marginTop: '5px',
                      }}
                    ></div>
                  </Typography>
                </Grid>
              </Grid>

              <Box mt={4} mb={0}>
                  <Button
                    size="small"
                    onClick={handleClickOpen}
                    color="primary"
                    style={{ marginLeft: '40px' }}
                   >
                    View Medical History
                  </Button>
              </Box>

              <Box mt={2} mb={0}>
                <Link href="account/account-info">
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: '60px' }}
                  >
                    Edit Profile
                  </Button>
                </Link>
              </Box>
            </Box>
          </div>
        </Grid>
        {/* <Grid item xs={12} lg={1}></Grid> */}

        <Grid item xs={12}  sm={6}  lg={7}>
          <Box boxShadow={0} p={0}>
            <Box
              alignContent="flex-end"
              boxShadow={2}
              style={{ backgroundColor: '#f7f7f7' }}
              mb={2}
              p={2}
            >
              <Grid container>
                <Grid item xs={12} lg={2}>
                   <div
                    className="progressBar"
                    style={{ marginTop: '-98px', marginLeft: '10px' }}
                    >
                    <div className={classess.percentage}>
                      {completed ? <p>{user.profile_completion_progress}</p> :null}
                    </div>
                    <CircularProgress
                      className={classess.progress}
                      variant="static"
                      value={completed}
                      size={80}
                      thickness={5}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} lg={10}>
                  <Box mt={2} ml={3}>
                    <Typography align="left" variant="h6">
                      <b>Profile Progress</b>
                    </Typography>
                  </Box>
                  <p
                    color="secondary"
                    align="left"
                    style={{ marginLeft: '38px', marginTop: '-3px' }}
                  >
                    {user.profile_completion_progress} Completed
                  </p>
                </Grid>
              </Grid>
            </Box>

            <Box mb={2}>
              <Typography variant="h6">
                <b>Dependent Details</b>
              </Typography>
            </Box>
            <TableContainer component={Paper}>
              <Table className={classess.table} aria-label="simple table">
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
                <TableBody>
                  {data.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>
                        {' '}
                        <Avatar variant="square" className={classess.square}>
                          P
                        </Avatar>
                      </TableCell>
                      <TableCell>{row.first_name}</TableCell>
                      <TableCell>{row.last_name}</TableCell>
                      <TableCell>{row.gender}</TableCell>
                      <TableCell>{row.dob}</TableCell>
                      <TableCell>{row.address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
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
          <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <MedicalHistory/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              {/* Disagree */}
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}
export default UserProfile;
