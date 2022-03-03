import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.css';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import SearchDoctor from 'components/organisms/SearchDoctor';
import { useRouter } from 'next/router';
import {
  Card,
  Checkbox,
  CardHeader,
  Link,
  CardMedia,
  IconButton,
  FormControlLabel,
  Dialog,
  FormGroup,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Box,
  Typography,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DoctorFilter from '../Filters/Filters';
import VideoCall from '../Images/video.png';
import AudioCall from '../Images/phone-call.png';
import WalkIN from '../Images/home.png';
import ChatSer from '../Images/chat.png';
import DoctorStethoscope from '../Images/doctor-stethoscope.jpg';
import { checkToken } from '../../../../components/helper/LoginCheck';
import DoctorUser from './../Images/doctor-user.png';
import DoctorBox from './../Images/doctor-box.png';
import DoctorLocation from './../Images/doctor-location.png';
import DoctorConsult from './../Images/doctor-consult.png';
import CheckMArk from './../Images/draw-check-mark.png';
import { DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PriceTag from './../../../../../public/assets/Images/r-icon/priceTag.png';
import { MultiSelect } from 'react-multi-select-component';
import moment from 'moment';


const options = [
  { label: 'General Physicians', value: '1' },
  { label: 'Pediatricians', value: '2' },
  { label: 'General Surgeon', value: '3' },
  { label: 'Cardiologist', value: '4' },
  { label: 'Dentist', value: '5' },
  { label: 'Dermatologists', value: '6' },
];

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
  const [latestAvlDate, setLatestAvlDate] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const descriptionElementRef = React.useRef(null);
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(false);
  const [isActive, setActive] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [language, setLanguage] = useState('');
  const router = useRouter();
  const [hiddens, setHiddens] = useState({});
  const [doctordetails, setDoctorDetails] = useState([]);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [star, setStar] = React.useState(3);
  const [hidden, setHidden] = useState(false);
  const [getid, setGetid] = useState();
  const [showResults, setShowResults] = React.useState(false);

  const onClick = () => setShowResults(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Code for Show Slot detail
  const [getslot, setSlotDetail] = useState([]);
  const [getslotdata, setGetslotdata] = useState([]);
  const [errMsg, setErrMsg] = useState([]);
  const [getAppointmentId, setAppointmentId] = useState([]);
  const [getwalkIn, setWalkin] = useState([]);
  const [getSlotByAppointmentDate, setSlotByAppointmentDate] = React.useState();
  const [showDateWalkIn, setShowDateWalkIn] = React.useState();

  const toggleHide = async (index, appointmentTypeID, doctorID) => {
    // Passing appointment_type_id = id  and DoctorID = id of Doctor

    setSlotByAppointmentDate();
    setAppointmentId(appointmentTypeID);
    setCheckedSelectBox(false);
    setGetSlotByClinics();
    // Checking if llogin or not and sending beaer token to URL
    const loginToken = checkToken();
    var myHeaders = new Headers();
    // If user logged in then show slot other wise send to loginpage
    if (loginToken) {
      var bearerTokern = loginToken;
      var myHeaders = new Headers();

      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${bearerTokern}`);

      var raw = JSON.stringify({
        appointment_type_id: appointmentTypeID,
        doctor_id: doctorID,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        // redirect: 'follow'
      };

      var datas = await fetch(
        'https://admindemo.onlineaarogya.com/api/patient/appointments/getSchedules',
        requestOptions,
      )
        .then(response => response.json())
        .catch(error => console.log('error', error));

      setSlotDetail(datas.slots);
      // setSlotDetail(datas == datas.message ? '' : datas.slots )
      console.log('ssssssdaaaadadaadaads', datas);
      setLatestAvlDate(datas.next_available_date)
      setGetslotdata(datas);
      setWalkin(data);

      setHiddens({ ...hidden, [index]: !hidden[index] }); // Code for Button index
    }
    else {
      alert('Please Login to view Slots');
    }
  };

  const toggleTab = index => {
    setToggleState(index);
    setIsOpened(wasOpened => !wasOpened);
    setActive(!isActive);
  };

  // Function for Model Box Open and Dispaly Single Doctor Records

  const [modelbx, setModelbx] = useState([]);
  const [getdispaly, setDisplay] = useState([]);
  const [consultType, setConsultType] = useState([]);
  const [modelboxspecialization, setModelboxspecialization] = useState([]);
  const [clinic, setClinic] = useState([]);

  const handleClickOpen = async doctorID => {
    setOpen(true);
    setScroll();

    const loginToken = checkToken();
    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${loginToken}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    var data = await fetch(
      `https://admindemo.onlineaarogya.com/api/patient/home/doctor-details/${doctorID}`,
      requestOptions,
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));

    setModelbx(data.doctor);
    setConsultType(data.doctor.consultation_types);
    setModelboxspecialization(data.doctor.specialization);
    setClinic(data.doctor.clinics);
  };

  // End Model Box

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
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  }, []);

  // To get URL parameter including Latitute and Longitue

  const [getLatitude, setLatitude] = React.useState('ssssss');
  const [getLongitutde, setLongitutde] = React.useState('adaada');

  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    // const params = new URLSearchParams(location.search);
    // const getData = params.get('name');
    // setLatitude(params.get('latitudePos'));
    // setLongitutde(params.get('longitutePos'));
    // setLanguage(getData);
    const params = new URLSearchParams(location.search);
    setLatitude(params.get('latitudePos'));
    setLongitutde(params.get('longitutePos'));
    const getData = params.get('name');
    setLanguage(getData);
  }, []);

  // To Load Doctor List form API
  const loadDoctorDetails = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      location: [getLatitude, getLongitutde],
      term: language,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://admindemo.onlineaarogya.com/api/patient/home/index',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => setDoctorDetails(result.doctors))

      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    loadDoctorDetails();
  }, [getLatitude, getLongitutde]);

  // On Date select
  const [myValue, setMyValue] = useState('');
  const [startTime, setStartTime] = useState('');
  const [checkedSelectBox, setCheckedSelectBox] = useState(false);
  const [checkDateSelected, setCheckDateSelected] = useState(false);
  const [consultationAmount, setConsultationAmount] = useState('');
  //setting Slot ID here and aving in state nad passing to Button Continue

  const [slotID, setSlotId] = useState('');

  const chooseDate = (slotId, startTime, consultationAmount) => {
    alert('You Selected Toekn')
    setSlotId(slotId);
    setStartTime(startTime);
    setConsultationAmount(consultationAmount);
    // If Slot box is not selected then Button will be hidden
    setCheckedSelectBox(true);
    setCheckDateSelected(true);
    //checkedSelectBox(true)
    // setButtonOpen(true)
    // setCheckedSelectBox(true); // ENable button when we click on slot box other wise it will be disabled
  };

  // Select data and pass to Contiune Page

  const [choosedata, setChooseDate] = useState('');

  //  const chooseData = (e) =>
  //  {
  //     setMyValue(e.target.value)
  //  }

  const getInputValue = event => {
    // show the user input value to console
    const userValue = event.target.value;

    console.log(userValue);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));

  const handleDateChange = date => {
    setSelectedDate(date);
    // alert(date);
  };

  // Get Clinic Addreess from Home Button Clicked

  const [getClinicAddres, setClinicAddress] = React.useState([]);

  // Get address

  const getAddressOnHomeButton = async doctorID => {
    // getAddressOnHomeButton()
    setIsOpeneds(true);
    setSlotByAppointmentDate();
    setGetSlotByClinics();
    setAddressOnWalkDateClick();
    const loginToken = checkToken();
    var myHeaders = new Headers();
    if (loginToken) {
      var bearerTokern = loginToken;
    } else {
      return 1;
    }

    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${loginToken}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    var data = await fetch(
      `https://admindemo.onlineaarogya.com/api/patient/home/doctor-details/${doctorID}`,
      requestOptions,
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));

    console.log('I am new developer here ', data);
    setClinicAddress(data.doctor.clinics);
  };

  // Code to get SLots by WalkIn Address CLick

  const [getSlotByClinics, setGetSlotByClinics] = useState([]);
  const [check, setCheck] = React.useState();
  const [noSlotFound, setNoSlotFound] = React.useState();

  const getSlotByClinic = async (walkClinicId, doctorID) => {
    const loginToken = checkToken();
    var myHeaders = new Headers();
    if (loginToken) {
      var bearerTokern = loginToken;
    } else {
      return 1;
    }

    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${bearerTokern}`);

    var raw = JSON.stringify({
      appointment_type_id: 4,
      doctor_id: doctorID,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      // redirect: 'follow'
    };

    var datas = await fetch(
      'https://admindemo.onlineaarogya.com/api/patient/appointments/getSchedules',
      requestOptions,
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));

    //setGetSlotByClinics(datas.clinics);
    console.log('mydataaaaaaaaaaaaaaaaaaaa', datas.clinics);
    console.log(
      'mydataaaaaaaaaaaaaaaaaaaasssssssssssssssss',
      datas.clinics[0].slots[0].clinic_id,
    );
    setCheck(datas.clinics[0].slots[0].clinic_id);

    if (walkClinicId == check) {
      setGetSlotByClinics(datas.clinics[0].slots);
      setCheckedSelectBox(false); // To Enable Button
      // alert('Ok')
    } else {
      setNoSlotFound('No Slot FOund');
      setGetSlotByClinics();
    }
  };

  // Get SLot Details by Future Date Select

  const [futureSlot, setFutureSLot] = useState([]);
  const [dateForSummary, setFotSummary] = React.useState();

  const [isOpeneds, setIsOpeneds] = useState();


  const onDateCLickGetSchedule = async (slotDate, doctorID, getAppointmentId) => {
    //setMyValue(slotDate)
    // alert('I am clicked')
    //setCheckedSelectBox(true); 
    setIsOpeneds(false);
    setShowDateWalkIn();
    setGetSlotByClinics();
    setCheckedSelectBox(true);
    setCheckDateSelected(true);
    setAddressOnWalkDateClick();

    const sss = moment(slotDate).format('YYYY-MM-DD');

    setFotSummary(sss);
    setClinicAddress();
    setSlotDetail();

    const loginToken = checkToken();
    var myHeaders = new Headers();
    if (loginToken) {
      var bearerTokern = loginToken;
    } else {
      return 1;
    }

    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${bearerTokern}`);

    var raw = JSON.stringify({
      // appointment_type_id: appointmentTypeID,
      doctor_id: doctorID,
      appointment_type_id: getAppointmentId,
      date: sss,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    var datas = await fetch(
      'https://admindemo.onlineaarogya.com/api/patient/appointments/getSchedules',
      requestOptions,
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));

    setSlotByAppointmentDate(datas.slots);
  };



  // When click on date of Walk in Button

  const [getAddressOnWalkDateClick, setAddressOnWalkDateClick] = React.useState(
    [],
  );

  const onWalkInDateButtonClick = async (slotDate, doctorID, getAppointmentId) => {
    //setMyValue(slotDate)
    setClinicAddress();
    setGetSlotByClinics();
    //setIsOpeneds(true);

    const sss = moment(slotDate).format('YYYY-MM-DD');

    const loginToken = checkToken();
    var myHeaders = new Headers();
    if (loginToken) {
      var bearerTokern = loginToken;
    } else {
      return 1;
    }

    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${bearerTokern}`);

    var raw = JSON.stringify({
      // appointment_type_id: appointmentTypeID,
      // doctor_id:doctorID,
      // clinic_id:306
      doctor_id: doctorID,
      appointment_type_id: getAppointmentId,
      date: sss,
      redirect: 'follow',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      // redirect: 'follow'
    };

    var datas = await fetch(
      'https://admindemo.onlineaarogya.com/api/patient/appointments/getSchedules',
      requestOptions,
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));

    setAddressOnWalkDateClick(datas.clinics);
    console.log('YAsind data', datas.clinics);
  };

  // Code to get slot by WalkIn date addres Clicked

  const [
    getSlotByCLinicDateAddress,
    setGetSlotByClinicsDateAddress,
  ] = React.useState();

  const getSlotByWalkInClinicDateAddress = async (walkClinicId, doctorID) => {
    setGetSlotByClinics();
    setClinicAddress();
    // setGetSlotByClinics();

    const loginToken = checkToken();
    var myHeaders = new Headers();
    if (loginToken) {
      var bearerTokern = loginToken;
    } else {
      return 1;
    }

    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${bearerTokern}`);

    var raw = JSON.stringify({
      appointment_type_id: 4,
      doctor_id: doctorID,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      // redirect: 'follow'
    };

    var datas = await fetch(
      'https://admindemo.onlineaarogya.com/api/patient/appointments/getSchedules',
      requestOptions,
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));

    //setGetSlotByClinics(datas.clinics);
    console.log('mydataaaaaaaaaaaaaaaaaaaa', datas.clinics);
    console.log(
      'mydataaaaaaaaaaaaaaaaaaaasssssssssssssssss',
      datas.clinics[0].slots[2].clinic_id,
    );
    setCheck(datas.clinics[0].slots[2].clinic_id);

    if (walkClinicId == check) {
      setGetSlotByClinicsDateAddress(datas.clinics[0].slots);
      setCheckedSelectBox(false); // To Enable Button
      // alert('Ok')
    } else {
      setNoSlotFound('No Slot FOund');
      setGetSlotByClinicsDateAddress();
    }
  };

  // TO get SHow data from Left Filter 
  const [getdate, setGetDate] = React.useState();

  React.useEffect(() => {

    const params = new URLSearchParams(location.search);
    setGetDate(params.get('name'));

  }, []);

  const [filterData, setFilterData] = React.useState();
  const [result, setResult] = useState([])
  const [gender, setGender] = useState();


  const handleChanges = (event) => {
    setGender(event.target.value);
    console.log(event.target.value);

  };


  const [selected, setSelected] = useState([]);

  // Checkbox Group
  const [flavors, setFlavors] = React.useState({
    video_Consult: 1,
    audio_Consult: 2,
    walk_in: 4,
    chat_consult: 3,
  });


  const {
    video_Consult,
    audio_Consult,
    walk_in,
    chat_consult,
    strawberry,
  } = flavors;

  const handleFlavorChange = event => {
    setFlavors({ ...flavors, [event.target.name]: event.target.checked });
  };
  // Our States

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  }, []);

  const icon = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ width: 100, height: 100 }}>
        <Box
          component="polygon"
          sx={{
            fill: theme => theme.palette.common.white,
            stroke: theme => theme.palette.divider,
            strokeWidth: 1,
          }}
          points="0,100 50,00, 100,100"
        />
      </Box>
    </Paper>
  );


  const [checked, setChecked] = useState([]);
  const [getGenderData, setGenderData] = React.useState([]);
  const [experience, setExpeience] = useState()
  const [languages, setLanguages] = React.useState();
  //const [checked, setChecked] = useState([]);

  const checkList = [1, 2, 3, 4];

  const checkLists = [2, 4, 6, 10];

  const SearchData = async () => {

    console.log('I am Selected', Object.values(selected))

    setDoctorDetails()  // Hiding Index Page Doctor Details Because We have to show only FIlter data like male female or cardiologist etc
    const loginToken = checkToken();
    var myHeaders = new Headers();

    // if (loginToken) {
    //   var bearerTokern = loginToken;
    // } else {
    //   return 1;
    // }

    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${loginToken}`);

    var raw = JSON.stringify({
      gender: gender,
      specialist: [],
      //language:[1]
      language: experience

    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    var data = await fetch("https://admindemo.onlineaarogya.com/api/patient/home/searchDoctors", requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));


    if (!data) {
      alert('No Blank')
    }
    else {
      alert('Not blnk')
      setGenderData(data);
      console.log('Filter Data', data.doctors)
    }


  }


  // COde for SIdebar Filter Expereince CHeckbox ------>

  // Add/Remove checked item from list
  const handleCheck = (event) => {

    var updatedList = [...checked];


    if (event.target.checked) {
      updatedList = [...checked, event.target.value];



      var mydd = updatedList;

      let result = updatedList.map(i => Number(i));

      setExpeience(result);
      console.log(result);
      console.log('ssssssssssssss', result)


    }
    else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
      return total + ", " + item;
    })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  // FInished SIdebar Expereince Checkbox ----------------->

  // Code for  Filter Sidebar Languages HandleChanges

  const handleLanguages = (event) => {

    var updatedList = [...checked];

    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
      var mydd = updatedList;
      let result = updatedList.map(i => Number(i));
      setExpeience(result);
      console.log(result);
      console.log('ssssssssssssss', result)
    }
    else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItemss = checked.length
    ? checked.reduce((total, item) => {
      return total + ", " + item;
    })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  // Finish Sidebar FIlter Language Onchange

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={styles.SearchDoctor_search}>
        <SearchDoctor />
      </div>



      <Grid container style={{ justifyContent: 'space-around' }}>
        {/* <DoctorFilter /> */}

        <Grid item md={4}>
          <div className={styles.doctor_filterBox}>
            <Typography
              variant="h5"
              gutterBottom
              className={styles.doctor_filte_Title}
            >
              Doctor Gender
            </Typography>
            <div className={styles.doctor_filte_list} onChange={handleChanges}>
              {/* checked={gender === "Male"}  checked={gender === "Female"}*/}
              <label><input type="checkbox" value="m" id="m" name="gender"  /> Male</label>
              <label><input type="checkbox" value="f" id="f" name="gender"  /> Female</label>
              
            </div>

          </div>
          <div className={styles.doctor_filterBox}>
            <Typography
              variant="h5"
              gutterBottom
              className={styles.doctor_filte_Title}
            >
              Consultation Languages
            </Typography>
            {checkList.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleLanguages} />
                <span className={isChecked(item)}> {item} + Hindi</span>
              </div>
            ))}
          </div>

          <div className={styles.doctor_filterBox}>
            <Typography
              variant="h5"
              gutterBottom
              className={styles.doctor_filte_Title}
            >
              Doctor Experience
            </Typography>
            {checkList.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck} />
                <span className={isChecked(item)}> + Experience</span>
              </div>
            ))}
          </div>

          <div className={styles.doctor_filterBox}>
            <Typography
              variant="h5"
              gutterBottom
              className={styles.doctor_filte_Title}
            >
              Doctor Specialist
            </Typography>
            <FormGroup className={styles.doctor_filte_list}>
              <label>Select Specialist</label>
              <MultiSelect
                className={styles.doctor_multi_select}
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </FormGroup>
          </div>

          <Button onClick={SearchData}>Apply</Button>

        </Grid>

        {/* Sidebar Ends Here  */}

        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>

          {/* Loading the Search Data from Landing Page */}

          {doctordetails && doctordetails.map((recordData, index) => (
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
                        <ErrorOutlineIcon
                          onClick={e => handleClickOpen(recordData.id)}
                        />
                        {/* onClick={(e) => toggleHide(index,service.appointment_type_id,recordData.id)} */}
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
                          id={service.appointment_type_id}
                          onClick={e =>
                            toggleHide(
                              index,
                              service.appointment_type_id,
                              recordData.id,
                            )
                          }
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
                                <img
                                  onClick={e =>
                                    getAddressOnHomeButton(recordData.id)
                                  }
                                  src={WalkIN}
                                  alt="#"
                                />
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

              {!!hiddens[index] ? (
                <div className={styles.boxContent_collapsed}>
                  <div className="content-tabs">
                    <div>
                      <div className={styles.conultation_heading}></div>

                      {/* 
                        Check if no data is coming from API then show NO DATA Available */}


                      {getslot || getSlotByAppointmentDate ? (
                        <div className={styles.appointment_date}>

                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              clearable
                              value={latestAvlDate}
                              placeholder="10/10/2018"
                              onChange={date =>
                                onDateCLickGetSchedule(
                                  date,
                                  recordData.id,
                                  getAppointmentId,
                                )
                              }
                              minDate={new Date()}
                              format="MM/dd/yyyy"
                            />
                          </MuiPickersUtilsProvider>
                        </div>
                      ) : (
                        ''
                      )}

                      <div className={styles.wrapper}>
                        <Grid container spacing={2}>
                          <Grid
                            container
                            spacing={2}
                            className={styles.consultation_content_part}
                          >
                            {/* COde To SHow slot on Appointment type Button click */}
                            {getslot ? (
                              getslot.map(showslot => (
                                <Grid xs={4} sm={4} md={3} lg={3} xl={3}
                                  className={
                                    styles.consultation_content_part_inner
                                  }
                                >
                                  <div className={styles.check_box}>
                                    <div className={styles.quiz_card_area}>
                                      <input
                                        className={styles.quiz_checkbox}
                                        type="radio"
                                        id="1"
                                        name="slot"
                                        onClick={e =>
                                          chooseDate(
                                            showslot.id,
                                            showslot.start_time,
                                            showslot.amount,
                                          )
                                        }
                                      // Passing Slot id ,Start time on chooseDate button
                                      />
                                      <div className={styles.single_quiz_card}>
                                        <div
                                          className={styles.quiz_card_content}
                                        >
                                          <div
                                            className={styles.quiz_card_title}
                                          >
                                            <div
                                              className={
                                                styles.shift_indecation
                                              }
                                            >
                                              <h3>Shifts</h3>
                                            </div>
                                            <div
                                              className={
                                                styles.shift_indecation
                                              }
                                            >
                                              <span>
                                                <i
                                                  className="fa fa-check"
                                                  aria-hidden="true"
                                                ></i>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            className={styles.quiz_card_icon}
                                          >
                                            <div className={styles.quiz_icon}>
                                              <b>From</b>
                                              <br />
                                              <div
                                                className={styles.time_selector}
                                              >
                                                <span>
                                                  {showslot.start_time}
                                                </span>
                                              </div>
                                            </div>
                                            <div className={styles.quiz_icon}>
                                              <b>To</b>
                                              <br />
                                              <div
                                                className={styles.time_selector}
                                              >
                                                <span>{showslot.end_time}</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className={styles.prace_tag}>
                                            <div
                                              className={styles.prive_tag_img}
                                            >
                                              <img alt="#" src={PriceTag} />
                                              <p> Fee : {showslot.amount}</p>
                                            </div>
                                            <p></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Grid>
                              ))
                            ) : (
                              <div className={styles.clinic_card_container}>
                                {/* Comparing if walk in clicked then show Clinic Address */}
                                {!getAddressOnHomeButton ? (
                                  <b>No Slot Availble</b>
                                ) : (
                                  <div className={styles.address_data_card}>
                                    <div className={styles.clinic_address_card}>
                                      {isOpeneds == true ?  // Checking if Audi VIdeo Date is active then mute Walk in date 
                                        <div className={styles.appointment_date}>

                                          <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                          >
                                            <KeyboardDatePicker
                                              clearable
                                              id='onWalkDateButtonClick'
                                              value={latestAvlDate}
                                              placeholder="10/10/2018"
                                              onChange={date => onWalkInDateButtonClick(date, recordData.id, getAppointmentId)}
                                              minDate={new Date()}
                                              format="yyyy/MM/dd"
                                            />
                                          </MuiPickersUtilsProvider>


                                        </div>
                                        : ''}
                                      {getClinicAddres &&
                                        getClinicAddres.map(data => (
                                          <button
                                            className={styles.clinic_address}
                                            onClick={e =>
                                              getSlotByClinic(
                                                data.id,
                                                recordData.id,
                                              )
                                            }
                                          >
                                            <Box
                                              className={
                                                styles.doctor_card_header_address
                                              }
                                            >
                                              <div className={styles.box}>
                                                <div
                                                  className={styles.section_1}
                                                >
                                                  <p className={styles.p_1}>
                                                    {data.name}
                                                  </p>
                                                </div>

                                                <div
                                                  className={styles.hr}
                                                ></div>
                                                <div className={styles.pdfs}>
                                                  <div
                                                    className={styles.pdf_one}
                                                  >
                                                    <p>{data.address}</p>
                                                  </div>

                                                  <div
                                                    className={
                                                      styles.pdf_proggress
                                                    }
                                                  >
                                                    <Box
                                                      className={
                                                        styles.direction
                                                      }
                                                    >
                                                      <p>
                                                        <p>
                                                          <span>₹</span>
                                                          {' '}220{data.max_price}
                                                        </p>
                                                      </p>
                                                    </Box>
                                                    <Box
                                                      className={
                                                        styles.direction
                                                      }
                                                    >
                                                      <Link
                                                        target="_blank"
                                                        rel="noopener"
                                                        href={
                                                          data.google_map_url
                                                        }
                                                      >
                                                        <p> Get Direction</p>
                                                      </Link>
                                                    </Box>
                                                  </div>
                                                </div>
                                              </div>
                                            </Box>
                                          </button>
                                        ))}

                                      {/* Code to view data on Date click of Walk in       */}
                                      {getAddressOnWalkDateClick == ''
                                        ? <b>No Shcedule Today</b>
                                        : getAddressOnWalkDateClick &&
                                        getAddressOnWalkDateClick.map(
                                          data => (
                                            <button
                                              className={styles.clinic_address}
                                              onClick={e =>
                                                getSlotByClinic(
                                                  data.id,
                                                  recordData.id,
                                                )
                                              }
                                            >
                                              <Box
                                                className={
                                                  styles.doctor_card_header_address
                                                }
                                              >
                                                <div className={styles.box}>
                                                  <div
                                                    className={styles.section_1}
                                                  >
                                                    <p className={styles.p_1}>
                                                      {data.name}
                                                    </p>
                                                  </div>

                                                  <div
                                                    className={styles.hr}
                                                  ></div>
                                                  <div className={styles.pdfs}>
                                                    <div
                                                      className={styles.pdf_one}
                                                    >
                                                      <p>{data.address}</p>
                                                    </div>

                                                    <div
                                                      className={
                                                        styles.pdf_proggress
                                                      }
                                                    >
                                                      <Box
                                                        className={
                                                          styles.direction
                                                        }
                                                      >
                                                        <p>
                                                          <p>
                                                            <span>₹</span>
                                                            {' '}{data.max_price}
                                                          </p>
                                                        </p>
                                                      </Box>
                                                      <Box
                                                        className={
                                                          styles.direction
                                                        }
                                                      >
                                                        <Link
                                                          target="_blank"
                                                          rel="noopener"
                                                          href={
                                                            data.google_map_url
                                                          }
                                                        >
                                                          <p> Get Direction</p>
                                                        </Link>
                                                      </Box>
                                                    </div>
                                                  </div>
                                                </div>
                                              </Box>
                                            </button>
                                          ),
                                        )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Code to show Slot by Date change On Audio Video and Chat  */}

                            {getSlotByAppointmentDate == ''
                              ? <b>No Slot Available</b>
                              : getSlotByAppointmentDate &&
                              getSlotByAppointmentDate.map(showslot => (
                                <Grid item xs={3}>
                                  <div className={styles.check_box}>
                                    <div className={styles.quiz_card_area}>
                                      <input
                                        className={styles.quiz_checkbox}
                                        type="radio"
                                        id="1"
                                        name="slot"
                                        onClick={e =>
                                          chooseDate(
                                            showslot.id,
                                            showslot.start_time,
                                            showslot.amount,
                                          )
                                        }
                                      // Passing Slot id ,Start time on chooseDate button
                                      />
                                      <div
                                        className={styles.single_quiz_card}
                                      >
                                        <div
                                          className={styles.quiz_card_content}
                                        >
                                          <div
                                            className={styles.quiz_card_title}
                                          >
                                            <div
                                              className={
                                                styles.shift_indecation
                                              }
                                            >
                                              <h3>Shifts</h3>
                                            </div>
                                            <div
                                              className={
                                                styles.shift_indecation
                                              }
                                            >
                                              <span>
                                                <i
                                                  className="fa fa-check"
                                                  aria-hidden="true"
                                                ></i>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            className={styles.quiz_card_icon}
                                          >
                                            <div className={styles.quiz_icon}>
                                              <b>From</b>
                                              <br />
                                              <div
                                                className={
                                                  styles.time_selector
                                                }
                                              >
                                                <span>
                                                  {showslot.start_time}
                                                </span>
                                              </div>
                                            </div>
                                            <div className={styles.quiz_icon}>
                                              <b>To</b>
                                              <br />
                                              <div
                                                className={
                                                  styles.time_selector
                                                }
                                              >
                                                <span>
                                                  {showslot.end_time}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className={styles.prace_tag}>
                                            <div
                                              className={styles.prive_tag_img}
                                            >
                                              <img alt="#" src={PriceTag} />
                                              <p> Fee : {showslot.amount}</p>
                                            </div>
                                            <p></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Grid>
                              ))


                            }

                            {/* Code to get Slot by walk Address Click  */}

                            {noSlotFound && noSlotFound ? '' : noSlotFound}

                            {getSlotByClinics &&
                              getSlotByClinics.map(slotDetails => (
                                <Grid item xs={3}>
                                  <div className={styles.check_box}>
                                    <div className={styles.quiz_card_area}>
                                      <input
                                        className={styles.quiz_checkbox}
                                        type="radio"
                                        id="1"
                                        name="slot"
                                        onClick={e =>
                                          chooseDate(
                                            slotDetails.id,
                                            slotDetails.start_time,
                                            slotDetails.amount,
                                          )
                                        }
                                      // Passing Slot id ,Start time on chooseDate button
                                      />
                                      <div className={styles.single_quiz_card}>
                                        <div
                                          className={styles.quiz_card_content}
                                        >
                                          <div
                                            className={styles.quiz_card_title}
                                          >
                                            <div
                                              className={
                                                styles.shift_indecation
                                              }
                                            >
                                              <h3>Shifts</h3>
                                            </div>
                                            <div
                                              className={
                                                styles.shift_indecation
                                              }
                                            >
                                              <span>
                                                <i
                                                  className="fa fa-check"
                                                  aria-hidden="true"
                                                ></i>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            className={styles.quiz_card_icon}
                                          >
                                            <div className={styles.quiz_icon}>
                                              <b>From</b>
                                              <br />
                                              <div
                                                className={styles.time_selector}
                                              >
                                                <span>
                                                  {slotDetails.start_time}
                                                </span>
                                              </div>
                                            </div>
                                            <div className={styles.quiz_icon}>
                                              <b>To</b>
                                              <br />
                                              <div
                                                className={styles.time_selector}
                                              >
                                                <span>
                                                  {slotDetails.end_time}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className={styles.prace_tag}>
                                            <div
                                              className={styles.prive_tag_img}
                                            >
                                              <img alt="#" src={PriceTag} />
                                              <p> Fee : {slotDetails.amount}</p>
                                            </div>
                                            <p></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Grid>
                              ))}

                            {/* Show SLots on WalkIn Date Address Clicked */}

                            {getSlotByClinics ? (
                              checkedSelectBox == true ? (
                                <Grid item lg={12}>
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() =>
                                      router.push(
                                        `/search/book-slot?doctor_id=${recordData.id}&&slot_id=${slotID}&&appointmentDate=${dateForSummary}&&appointmentType=${getAppointmentId}&&startTime=${startTime}&consultAmount=${consultationAmount}`,
                                      )
                                    }
                                  >
                                    {' '}
                                    Continuess{' '}
                                  </Button>
                                  {/* // Check if Box is not checked then button wont show here */}
                                </Grid>
                              ) : (
                                ''
                              )
                            ) : (
                              ''
                            )}

                            {/* Finish Get Slot by Walkin Address Click */}

                            <Grid item xs={12} style={{ textAlign: 'right' }}>
                              {/* Button wont show if getSlot has not data  */}
                              {getslot ? (
                                checkedSelectBox == true ? (
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() =>
                                      router.push(
                                        `/search/book-slot?doctor_id=${recordData.id}&&slot_id=${slotID}&&appointmentDate=${dateForSummary}&&appointmentType=${getAppointmentId}&&startTime=${startTime}&consultAmount=${consultationAmount}`,
                                      )
                                    }
                                  >
                                    {' '}
                                    Continue{' '}
                                  </Button> // Check if Box is not checked then button wont show here
                                ) : (
                                  ''
                                )
                              ) : (
                                ''
                              )}


                            </Grid>
                          </Grid>
                        </Grid>
                        {showResults ? (
                          <Grid
                            container
                            spacing={2}
                            className={styles.consultation_content_part}
                          >
                            <Grid
                              className={styles.consultation_clinc}
                              item
                              xs={3}
                            >
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
                      {/* </TabPanel> */}
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
            </Card>
          ))}

          {/* Finish Loading the Search Data from Landing Page */}


          {/* Showing sidebar FIlter data here like Male or Female or Speciality */}

          {getGenderData == '' ? 'NO DATA FOUND' : getGenderData && getGenderData.doctors.map((recordData, index) => (
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
                        <ErrorOutlineIcon
                          onClick={e => handleClickOpen(recordData.id)}
                        />
                        {/* onClick={(e) => toggleHide(index,service.appointment_type_id,recordData.id)} */}
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
                          id={service.appointment_type_id}
                          onClick={e =>
                            toggleHide(
                              index,
                              service.appointment_type_id,
                              recordData.id,
                            )
                          }
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
                                <img
                                  onClick={e =>
                                    getAddressOnHomeButton(recordData.id)
                                  }
                                  src={WalkIN}
                                  alt="#"
                                />
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

              {!!hiddens[index] ? (
                <div className={styles.boxContent_collapsed}>
                  <div className="content-tabs">
                    <div>
                      <div className={styles.conultation_heading}></div>

                      {/* 
                        Check if no data is coming from API then show NO DATA Available */}


                      {getslot || getSlotByAppointmentDate ? (
                        <div className={styles.appointment_date}>

                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              clearable
                              value={latestAvlDate}
                              placeholder="10/10/2018"
                              onChange={date =>
                                onDateCLickGetSchedule(
                                  date,
                                  recordData.id,
                                  getAppointmentId,
                                )
                              }
                              minDate={new Date()}
                              format="MM/dd/yyyy"
                            />
                          </MuiPickersUtilsProvider>
                        </div>
                      ) : (
                        ''
                      )}

                      <div className={styles.wrapper}>
                        <Grid container spacing={2}>
                          <Grid
                            container
                            spacing={2}
                            className={styles.consultation_content_part}
                          >
                            {/* COde To SHow slot on Appointment type Button click */}
                            {getslot ? (
                              getslot.map(showslot => (
                                <Grid xs={4} sm={4} md={3} lg={3} xl={3}
                                  className={
                                    styles.consultation_content_part_inner
                                  }
                                >
                                  <div className={styles.check_box}>
                                    <div className={styles.quiz_card_area}>
                                      <input
                                        className={styles.quiz_checkbox}
                                        type="radio"
                                        id="1"
                                        name="slot"
                                        onClick={e =>
                                          chooseDate(
                                            showslot.id,
                                            showslot.start_time,
                                            showslot.amount,
                                          )
                                        }
                                      // Passing Slot id ,Start time on chooseDate button
                                      />
                                      <div className={styles.single_quiz_card}>
                                        <div
                                          className={styles.quiz_card_content}
                                        >
                                          <div
                                            className={styles.quiz_card_title}
                                          >
                                            <div
                                              className={
                                                styles.shift_indecation
                                              }
                                            >
                                              <h3>Shifts</h3>
                                            </div>
                                            <div
                                              className={
                                                styles.shift_indecation
                                              }
                                            >
                                              <span>
                                                <i
                                                  className="fa fa-check"
                                                  aria-hidden="true"
                                                ></i>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            className={styles.quiz_card_icon}
                                          >
                                            <div className={styles.quiz_icon}>
                                              <b>From</b>
                                              <br />
                                              <div
                                                className={styles.time_selector}
                                              >
                                                <span>
                                                  {showslot.start_time}
                                                </span>
                                              </div>
                                            </div>
                                            <div className={styles.quiz_icon}>
                                              <b>To</b>
                                              <br />
                                              <div
                                                className={styles.time_selector}
                                              >
                                                <span>{showslot.end_time}</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className={styles.prace_tag}>
                                            <div
                                              className={styles.prive_tag_img}
                                            >
                                              <img alt="#" src={PriceTag} />
                                              <p> Fee : {showslot.amount}</p>
                                            </div>
                                            <p></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Grid>
                              ))
                            ) : (
                              <div className={styles.clinic_card_container}>
                                {/* Comparing if walk in clicked then show Clinic Address */}
                                {!getAddressOnHomeButton ? (
                                  <b>No Slot Availble</b>
                                ) : (
                                  <div className={styles.address_data_card}>
                                    <div className={styles.clinic_address_card}>
                                      {isOpeneds == true ?  // Checking if Audi VIdeo Date is active then mute Walk in date 
                                        <div className={styles.appointment_date}>

                                          <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                          >
                                            <KeyboardDatePicker
                                              clearable
                                              id='onWalkDateButtonClick'
                                              value={latestAvlDate}
                                              placeholder="10/10/2018"
                                              onChange={date => onWalkInDateButtonClick(date, recordData.id, getAppointmentId)}
                                              minDate={new Date()}
                                              format="yyyy/MM/dd"
                                            />
                                          </MuiPickersUtilsProvider>


                                        </div>
                                        : ''}
                                      {getClinicAddres &&
                                        getClinicAddres.map(data => (
                                          <button
                                            className={styles.clinic_address}
                                            onClick={e =>
                                              getSlotByClinic(
                                                data.id,
                                                recordData.id,
                                              )
                                            }
                                          >
                                            <Box
                                              className={
                                                styles.doctor_card_header_address
                                              }
                                            >
                                              <div className={styles.box}>
                                                <div
                                                  className={styles.section_1}
                                                >
                                                  <p className={styles.p_1}>
                                                    {data.name}
                                                  </p>
                                                </div>

                                                <div
                                                  className={styles.hr}
                                                ></div>
                                                <div className={styles.pdfs}>
                                                  <div
                                                    className={styles.pdf_one}
                                                  >
                                                    <p>{data.address}</p>
                                                  </div>

                                                  <div
                                                    className={
                                                      styles.pdf_proggress
                                                    }
                                                  >
                                                    <Box
                                                      className={
                                                        styles.direction
                                                      }
                                                    >
                                                      <p>
                                                        <p>
                                                          <span>₹</span>
                                                          {' '}220{data.max_price}
                                                        </p>
                                                      </p>
                                                    </Box>
                                                    <Box
                                                      className={
                                                        styles.direction
                                                      }
                                                    >
                                                      <Link
                                                        target="_blank"
                                                        rel="noopener"
                                                        href={
                                                          data.google_map_url
                                                        }
                                                      >
                                                        <p> Get Direction</p>
                                                      </Link>
                                                    </Box>
                                                  </div>
                                                </div>
                                              </div>
                                            </Box>
                                          </button>
                                        ))}

                                      {/* Code to view data on Date click of Walk in       */}
                                      {getAddressOnWalkDateClick == ''
                                        ? <b>No Shcedule Today</b>
                                        : getAddressOnWalkDateClick &&
                                        getAddressOnWalkDateClick.map(
                                          data => (
                                            <button
                                              className={styles.clinic_address}
                                              onClick={e =>
                                                getSlotByClinic(
                                                  data.id,
                                                  recordData.id,
                                                )
                                              }
                                            >
                                              <Box
                                                className={
                                                  styles.doctor_card_header_address
                                                }
                                              >
                                                <div className={styles.box}>
                                                  <div
                                                    className={styles.section_1}
                                                  >
                                                    <p className={styles.p_1}>
                                                      {data.name}
                                                    </p>
                                                  </div>

                                                  <div
                                                    className={styles.hr}
                                                  ></div>
                                                  <div className={styles.pdfs}>
                                                    <div
                                                      className={styles.pdf_one}
                                                    >
                                                      <p>{data.address}</p>
                                                    </div>

                                                    <div
                                                      className={
                                                        styles.pdf_proggress
                                                      }
                                                    >
                                                      <Box
                                                        className={
                                                          styles.direction
                                                        }
                                                      >
                                                        <p>
                                                          <p>
                                                            <span>₹</span>
                                                            {' '}{data.max_price}
                                                          </p>
                                                        </p>
                                                      </Box>
                                                      <Box
                                                        className={
                                                          styles.direction
                                                        }
                                                      >
                                                        <Link
                                                          target="_blank"
                                                          rel="noopener"
                                                          href={
                                                            data.google_map_url
                                                          }
                                                        >
                                                          <p> Get Direction</p>
                                                        </Link>
                                                      </Box>
                                                    </div>
                                                  </div>
                                                </div>
                                              </Box>
                                            </button>
                                          ),
                                        )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Code to show Slot by Date change On Audio Video and Chat  */}

                            {getSlotByAppointmentDate == ''
                              ? <b>No Slot Available</b>
                              : getSlotByAppointmentDate &&
                              getSlotByAppointmentDate.map(showslot => (
                                <Grid item xs={3}>
                                  <div className={styles.check_box}>
                                    <div className={styles.quiz_card_area}>
                                      <input
                                        className={styles.quiz_checkbox}
                                        type="radio"
                                        id="1"
                                        name="slot"
                                        onClick={e =>
                                          chooseDate(
                                            showslot.id,
                                            showslot.start_time,
                                            showslot.amount,
                                          )
                                        }
                                      // Passing Slot id ,Start time on chooseDate button
                                      />
                                      <div
                                        className={styles.single_quiz_card}
                                      >
                                        <div
                                          className={styles.quiz_card_content}
                                        >
                                          <div
                                            className={styles.quiz_card_title}
                                          >
                                            <div
                                              className={
                                                styles.shift_indecation
                                              }
                                            >
                                              <h3>Shifts</h3>
                                            </div>
                                            <div
                                              className={
                                                styles.shift_indecation
                                              }
                                            >
                                              <span>
                                                <i
                                                  className="fa fa-check"
                                                  aria-hidden="true"
                                                ></i>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            className={styles.quiz_card_icon}
                                          >
                                            <div className={styles.quiz_icon}>
                                              <b>From</b>
                                              <br />
                                              <div
                                                className={
                                                  styles.time_selector
                                                }
                                              >
                                                <span>
                                                  {showslot.start_time}
                                                </span>
                                              </div>
                                            </div>
                                            <div className={styles.quiz_icon}>
                                              <b>To</b>
                                              <br />
                                              <div
                                                className={
                                                  styles.time_selector
                                                }
                                              >
                                                <span>
                                                  {showslot.end_time}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className={styles.prace_tag}>
                                            <div
                                              className={styles.prive_tag_img}
                                            >
                                              <img alt="#" src={PriceTag} />
                                              <p> Fee : {showslot.amount}</p>
                                            </div>
                                            <p></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Grid>
                              ))


                            }

                            {/* Code to get Slot by walk Address Click  */}

                            {noSlotFound && noSlotFound ? '' : noSlotFound}

                            {getSlotByClinics &&
                              getSlotByClinics.map(slotDetails => (
                                <Grid item xs={3}>
                                  <div className={styles.check_box}>
                                    <div className={styles.quiz_card_area}>
                                      <input
                                        className={styles.quiz_checkbox}
                                        type="radio"
                                        id="1"
                                        name="slot"
                                        onClick={e =>
                                          chooseDate(
                                            slotDetails.id,
                                            slotDetails.start_time,
                                            slotDetails.amount,
                                          )
                                        }
                                      // Passing Slot id ,Start time on chooseDate button
                                      />
                                      <div className={styles.single_quiz_card}>
                                        <div
                                          className={styles.quiz_card_content}
                                        >
                                          <div
                                            className={styles.quiz_card_title}
                                          >
                                            <div
                                              className={
                                                styles.shift_indecation
                                              }
                                            >
                                              <h3>Shifts</h3>
                                            </div>
                                            <div
                                              className={
                                                styles.shift_indecation
                                              }
                                            >
                                              <span>
                                                <i
                                                  className="fa fa-check"
                                                  aria-hidden="true"
                                                ></i>
                                              </span>
                                            </div>
                                          </div>
                                          <div
                                            className={styles.quiz_card_icon}
                                          >
                                            <div className={styles.quiz_icon}>
                                              <b>From</b>
                                              <br />
                                              <div
                                                className={styles.time_selector}
                                              >
                                                <span>
                                                  {slotDetails.start_time}
                                                </span>
                                              </div>
                                            </div>
                                            <div className={styles.quiz_icon}>
                                              <b>To</b>
                                              <br />
                                              <div
                                                className={styles.time_selector}
                                              >
                                                <span>
                                                  {slotDetails.end_time}
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className={styles.prace_tag}>
                                            <div
                                              className={styles.prive_tag_img}
                                            >
                                              <img alt="#" src={PriceTag} />
                                              <p> Fee : {slotDetails.amount}</p>
                                            </div>
                                            <p></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Grid>
                              ))}

                            {/* Show SLots on WalkIn Date Address Clicked */}

                            {getSlotByClinics ? (
                              checkedSelectBox == true ? (
                                <Grid item lg={12}>
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() =>
                                      router.push(
                                        `/search/book-slot?doctor_id=${recordData.id}&&slot_id=${slotID}&&appointmentDate=${dateForSummary}&&appointmentType=${getAppointmentId}&&startTime=${startTime}&consultAmount=${consultationAmount}`,
                                      )
                                    }
                                  >
                                    {' '}
                                    Continue{' '}
                                  </Button>
                                  {/* // Check if Box is not checked then button wont show here */}
                                </Grid>
                              ) : (
                                ''
                              )
                            ) : (
                              ''
                            )}

                            {/* Finish Get Slot by Walkin Address Click */}

                            <Grid item xs={12} style={{ textAlign: 'right' }}>
                              {/* Button wont show if getSlot has not data  */}
                              {getslot ? (
                                checkedSelectBox == true ? (
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() =>
                                      router.push(
                                        `/search/book-slot?doctor_id=${recordData.id}&&slot_id=${slotID}&&appointmentDate=${dateForSummary}&&appointmentType=${getAppointmentId}&&startTime=${startTime}&consultAmount=${consultationAmount}`,
                                      )
                                    }
                                  >
                                    {' '}
                                    Continue{' '}
                                  </Button> // Check if Box is not checked then button wont show here
                                ) : (
                                  ''
                                )
                              ) : (
                                ''
                              )}


                            </Grid>
                          </Grid>
                        </Grid>
                        {showResults ? (
                          <Grid
                            container
                            spacing={2}
                            className={styles.consultation_content_part}
                          >
                            <Grid
                              className={styles.consultation_clinc}
                              item
                              xs={3}
                            >
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
                      {/* </TabPanel> */}
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
            </Card>
          ))}

          {/* Sidebar FIlter Data Finish  */}

        </Grid>
      </Grid>

      {/* Code for Dialog Box */}

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        enableDaysBefore={2}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className={styles.dialog_doctor_p}
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
            <div className={styles.doctor_over_view_data}>
              <div className={styles.time_line_item}>
                <div className={styles.time_line_date_wrap}>
                  <div className={styles.doc_hexagon}>
                    <img src={DoctorUser} alt="Doctor Name" />
                  </div>
                </div>
                <div className={styles.time_line_content}>
                  <Box component="div" className={styles.doctor_card_header}>
                    <Box component="div" className={styles.doctor_card_avatar}>
                      <CardMedia
                        className={styles.doctor_avatar}
                        image={modelbx.avatar_url}
                        title="Som Nath Gupta"
                      />
                    </Box>
                    <Box
                      container
                      component="div"
                      className={styles.doctor_card_detail}
                    >
                      <div className={styles.doctor_name}>
                        {modelbx.title} {modelbx.first_name} {modelbx.last_name}
                      </div>
                      <p className={styles.doctor_specialization}>
                        {modelboxspecialization && modelboxspecialization.name}
                      </p>
                      <p className={styles.doctor_expriance}>
                        {modelbx.yrs_of_practice} years experience overall
                      </p>

                    </Box>
                  </Box>
                </div>
              </div>
              <div className={styles.time_line_item}>
                <div className={styles.time_line_date_wrap}>
                  <div className={styles.doc_hexagon}>
                    <img src={DoctorConsult} alt="Doctor Consultation" />
                  </div>
                </div>
                <div className={styles.time_line_content}>
                  <Box component="div" className={styles.doctor_card_header}>
                    <Box
                      container
                      component="div"
                      className={styles.doctor_card_detail}
                    >
                      <CardHeader
                        className={styles.doctor_name}
                        title="Consultation Services"
                      />

                      {consultType.map(details => (
                        <p className={styles.doctor_specialization}>
                          <img src={CheckMArk} alt="#" />
                          {details} Consultation
                        </p>
                      ))}
                    </Box>
                  </Box>
                </div>
              </div>
              <div className={styles.time_line_item}>
                <div className={styles.time_line_date_wrap}>
                  <div className={styles.doc_hexagon}>
                    <img src={DoctorBox} alt="Doctor Specialization" />
                  </div>
                </div>
                <div className={styles.time_line_content}>
                  <Box component="div" className={styles.doctor_card_header}>
                    <Box
                      container
                      component="div"
                      className={styles.doctor_card_detail}
                    >
                      <CardHeader
                        className={styles.doctor_name}
                        title="Specialization"
                      />

                      <p className={styles.doctor_specialization}>
                        <img src={CheckMArk} alt="#" />
                        {modelboxspecialization && modelboxspecialization.name}
                      </p>
                    </Box>
                  </Box>
                </div>
              </div>
              <div className={styles.time_line_item}>
                <div className={styles.time_line_date_wrap}>
                  <div className={styles.doc_hexagon}>
                    <img src={DoctorLocation} alt="Doctor Location" />
                  </div>
                </div>
                <div className={styles.time_line_content}>
                  <Box component="div" className={styles.doctor_card_header}>
                    <Box
                      container
                      component="div"
                      className={styles.doctor_card_detail}
                    >
                      <CardHeader
                        className={styles.doctor_name}
                        title="Clinics"
                      />
                      {clinic.map(details => (
                        <p className={styles.doctor_specialization}>
                          <img src={CheckMArk} alt="#" />
                          {details.name}
                        </p>
                      ))}
                    </Box>
                  </Box>
                </div>
              </div>
            </div>
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
