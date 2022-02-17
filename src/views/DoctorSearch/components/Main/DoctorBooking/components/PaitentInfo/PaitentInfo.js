
import React from 'react';
import styles from './paitent-info.module.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MedicalHistory from './MedicalHistory';
import ListIcon from '@material-ui/icons/List';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {
  FormControl,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
} from '@material-ui/core';
import VideoCall from '../../../../Images/video.png';
import AudioCall from '../../../../Images/phone-call.png';
import WalkIN from '../../../../Images/home.png';
import ChatSer from '../../../../Images/chat.png';


// const useStyles = makeStyles(theme => ({}));
const useStyles = theme => ({
  root: {
    margin: 0,
  },
  closeButton: {
    position: 'absolute',
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle
      disableTypography
      className={styles.root_patient_info_data}
      {...other}
    >
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

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
const PatientInfo = props => {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  const { data, className, ...rest } = props;

  const selectShortlistedApplicant = e => {
    const checked = e.target.checked;
    if (checked) {
      console.log('Checked');
    } else {
      console.log('UNChecked');
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Code to get URL Parameter in var 

  // const params = new URLSearchParams(location.search);
  // const getData = params.get('doctor_id');
  // const appointmentID =  params.get('appointmentType');
  
  // const appointmentDate =  params.get('appointmentDate');
  // const consultAmount =  params.get('consultAmount');

  // const startTime =  params.get('startTime');

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const getData = params.get('name');
  //   setLanguage(getData);
  // }, []);

  const [star, setStar] = React.useState(3);

  const [language, setLanguage] = React.useState();
  const [appointmentDate,setAppointmentDate] = React.useState();
  const [appointmentType,setAppointmentType] = React.useState();
  const [doctorId,setDoctorId] = React.useState([]);
  const [gettime,setTime] = React.useState();
  const [getdate,setGetDate] = React.useState();
  const [getAmount,setAmount] = React.useState();


  React.useEffect(() => {
  
    const params = new URLSearchParams(location.search);
  
    const docId = params.get('doctor_id');
  
    setDoctorId(docId);
    setAppointmentType(params.get('appointmentType'));
    setAppointmentDate(params.get('appointmentDate'));
    setAmount(params.get('consultAmount'))
    //const sss =  moment(appointmentDate).format('MMM DD, YYYY')
  
    },[]);

  
  const getData = '214';
  const appointmentID =  'Video';
  

  const consultAmount =  '500';

  const datas = 'Data from parent';


  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={styles.patient_info}>
        <FormControl className={styles.patient_info_data}>
          <FormLabel>Appointment Date & Timess</FormLabel>
          <p>17th Feb 2022  06:22</p>
        </FormControl>
        <FormControl className={styles.patient_info_data}>
                  <p>   {appointmentType == '1' ? <p>Video Consultation</p> : '' }
           {appointmentType == '2'? <p>Audio Call Consultation</p> : '' }
           {appointmentType == '4' ? <p>In Clinic Call Consultation</p> : '' }
           {appointmentType  == '3' ? <p>Chat Consultation</p> : '' }</p> 
        </FormControl>
        <FormControl className={styles.patient_info_data}>
          <FormLabel>Consultation Fee</FormLabel>
          <p>
            <b>₹</b> {getAmount}
          </p>
        </FormControl>

        <FormControl className={styles.patient_info_data}>
          <FormLabel>Appointment For</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onClick={e => {
              selectShortlistedApplicant(e);
            }}
          >
            <FormControlLabel
              className={styles.appoinment_for}
              value="male"
              control={<Radio />}
              label="You"
            />
          </RadioGroup>
        </FormControl>
        <FormControl className={styles.patient_info_data}>
          <FormLabel>Medical History</FormLabel>
          <Button
            className={styles.view_history}
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
            <FindInPageIcon />
            {'  '} View{' '}
          </Button>
        </FormControl>
        <FormControl className={styles.patient_info_data}>
          <FormLabel>Check Complaint</FormLabel>
          <TextField
            id="outlined-multiline-static"
            rows={4}
            placeholder="Chief Complaint"
            variant="outlined"
          />
        </FormControl>
        <FormControl className={styles.patient_info_data}>
          <FormLabel style={{marginBottom:'10px'}}>Attachments </FormLabel>
          <input
           
            id="contained-button-file"
            type="file"
          />
          <label  className={styles.upload_data} htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
        </FormControl>
      </div>
     
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Medical History
        </DialogTitle>
        <DialogContent dividers>
          <MedicalHistory  dataParentToChild = {datas} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

PatientInfo.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default PatientInfo;