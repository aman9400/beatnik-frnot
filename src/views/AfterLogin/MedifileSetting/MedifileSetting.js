import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Breadcrumb from '../Reusable/MediBreadcrumb';
import MetaTitle from '../../../components/helper/MetaTitle';
import {
  useMediaQuery,
  Grid,
  Menu,
  MenuItem,
  FormControlLabel,
} from '@material-ui/core';
import { checkToken } from '../../../components/helper/LoginCheck';
import { getFamilyDependentByUid } from '../../../components/helper/PatientApi';

import React, { useState, useEffect } from 'react';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(
  name,
  fileSize,
  uploadDate,
  uploadedBy,
  verification,
  price,
) {
  return {
    name,
    fileSize,
    uploadDate,
    uploadedBy,
    verification,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

// const rows = [
//    { id: 1, name: 'Shelter', fileSize: '10 MB', uploadDate: '22/03/2021',  uploadedBy: 'Arjun',   verification: 'Pending'},
//       { id: 1, name: 'Johny', fileSize: '20 MB',  uploadDate: '12/11/2020', uploadedBy: 'Rulap',  verification: 'Processing'},
//       { id: 1, name: 'Ajay', fileSize: '32 MB', uploadDate: '22/02/1990', uploadedBy: 'Arjun',  verification: 'Completed'},
//       { id: 1, name: 'Arjun', fileSize: '222 KB', uploadDate: '22/21/2021',  uploadedBy: 'Hemant',  verification: 'Pending'},
//       { id: 1, name: 'Sethia', fileSize: '120 KB', uploadDate: '22/21/2021', uploadedBy: 'Arjun',  verification: 'Pending'},
//       { id: 1, name: 'Depad', fileSize: '10 MB', uploadDate: '22/21/2021', uploadedBy: 'Arjun',  verification: 'Processing'},
//       { id: 1, name: 'Shrpad', fileSize: '10 MB', uploadDate: '22/21/2021', uploadedBy: 'Pankaj',  verification: 'Processing'},
//       { id: 1, name: 'Hampesh', fileSize: '10 MB', uploadDate: '22/21/2011', uploadedBy: 'Deband',  verification: 'Pending'},

// ];

function Row(props) {
  const [state, setState] = React.useState(false);

  function handleSwitchChange(e) {
    setState(e.target.checked);
    // Add actions here for when the switch is triggered
  }

  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const [opens, setOpens] = React.useState(false);

  const handleClickOpens = () => {
    setOpens(true);
  };

  const handleCloses = () => {
    setOpens(false);
  };

  const [fileAcces, setFileAccess] = React.useState(false);

  const otpCheck = () => {
    if (fileAcces == true) {
      setFileAccess(false);
    } else {
      setFileAccess(true);
    }

    handleCloses();
    console.log('Hello');
    console.log('My file', fileAcces);
  };

  //  code for fetching data from api

  // const [datas, setDatas] = useState([]);
  // const getFamilyDoctor = async () =>
  // {
  //   var doctorData = await getFamilyDependentByUid();
  //   console.log("Name:",doctorData);
  //     setDatas(doctorData.dependents);
  // }

  // useEffect(() => {
  //     const loginToken = checkToken();
  //     if(loginToken)
  //     {
  //       getFamilyDoctor();
  //     }
  //     else
  //     {
  //       Router.push('/signin', undefined, { shallow: true })
  //     }
  // }, [])

  return (
    <React.Fragment>
      <Switch checked={fileAcces} onChange={handleClickOpens} color="primary" />

      <Dialog
        open={opens}
        onClose={handleCloses}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Enter OTP for Verification'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Enter OTP"
                variant="outlined"
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloses}>Close</Button>
          <Button onClick={otpCheck}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {
  const [datas, setDatas] = useState([]);
  const getFamilyDoctor = async () => {
    var doctorData = await getFamilyDependentByUid();
    console.log('Name:', doctorData);
    setDatas(doctorData.dependents);
  };

  useEffect(() => {
    const loginToken = checkToken();
    if (loginToken) {
      getFamilyDoctor();
    } else {
      Router.push('/signin', undefined, { shallow: true });
    }
  }, []);
  //   const [datas, setData] = useState([]);

  // const fetchData = async () => {
  //     const res = await fetch(
  //     'https://jsonplaceholder.typicode.com/users',
  //     );
  //     const json = await res.json();
  //     setData(json);
  // };

  // useEffect(() => {
  //     fetchData()
  // },)

  return (
    <div>
      <MetaTitle
        title={`Medifile Setting | OnlineAarogya`}
        metaKeyWord=""
        metaDescription=""
      />
      <Breadcrumb url="Setting" />
      <div style={{ overflow: 'hidden', padding: 39 }}>
        <Grid container>
          <Grid item md={12}>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell> First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>DOB</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {datas.map(row => (
                    <TableRow>
                      <TableCell>{row.first_name}</TableCell>
                      <TableCell>{row.last_name}</TableCell>
                      <TableCell>{row.gender}</TableCell>
                      <TableCell>{row.dob}</TableCell>
                      <TableCell>{row.address}</TableCell>
                      <TableCell>
                        <Row key={row.name} row={row} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

// import React, { useState,useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { useMediaQuery, Grid,Paper,TextField,Menu,MenuItem , Switch,Typography, Button,Box, FormControlLabel } from '@material-ui/core';
// import MaterialTable from 'material-table';
// import TableIcons from 'components/helper/TableIcons';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import DateFnsUtils from '@date-io/date-fns';
// import {checkToken} from '../../../components/helper/LoginCheck'
// import {getFamilyDependentByUid} from '../../../components/helper/PatientApi'
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import SettingsIcon from '@material-ui/icons/Settings';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// // import {MuiPickersUtilsProvider} from '@material-ui/pickers';
// // import {Formik, Form, Field} from 'formik';
// // import {
// // Switch,
// // } from 'formik-material-ui';
// import  Breadcrumb  from '../Reusable/MediBreadcrumb';
// import MetaTitle from '../../../components/helper/MetaTitle';

// const useStyles = makeStyles(theme => ({

//   tableWidth:
//   {
//     padding:45,
//   },

// }));

// const Data = props => {
//   const { className, ...rest } = props;
//   const classes = useStyles();

//   const theme = useTheme();
//   const isMd = useMediaQuery(theme.breakpoints.up('md'), {
//     defaultMatches: true,
//   });

//   const columns = [
//     { title: "First Name", field: "first_name" },
//     { title: "Last Name", field: "middle_name" },
//     { title: "Gender", field: "gender" },
//     { title: "Date of Birth", field: 'dob' },
//     { title: "Address", field: 'address' }
//   ]

//   // Code for API Call in Table
//   const [datas, setDatas] = useState([]);
//   const getFamilyDoctor = async () =>
//   {
//     var doctorData = await getFamilyDependentByUid();
//     console.log("Name:",doctorData);
//      setDatas(doctorData.dependents);
//   }

//   useEffect(() => {
//       const loginToken = checkToken();
//       if(loginToken)
//       {
//         getFamilyDoctor();
//       }
//       else
//       {
//         Router.push('/signin', undefined, { shallow: true })
//       }
//   }, [])

//   // Open Dialog Box on Otp click

//   //

//   const [state, setState] = React.useState({
//     checkedB: true,
//   });

// const handleChange = (event) => {
//   // setState({ ...state, [event.target.name]: event.target.checked });

//   setOpens(true)

//   if(state.checkedB == true)
//   {
//     alert("click B")

//   }
//   else
//   {
//     alert("click A")

//   }
// };

// const [opens, setOpens] = React.useState(false);

// const handleClickOpens = () => {
//   setOpens(true);
// };

// const handleCloses = () => {
//   setOpens(false);
// };

//   const [fileAcces, setFileAccess] = React.useState(true);

//  //

//   const otpCheck = () =>
//   {

//      setState({ ...state, [event.target.name]: event.target.checked });
//      handleCloses();
//      console.log("Hello");
//      console.log("My file",fileAcces);
//   }

//   return (
//   <div className="medifle-setting">
//     <MetaTitle title={`Medifile Setting | OnlineAarogya`} metaKeyWord="" metaDescription="" />
//     <Breadcrumb url="Setting"/>
//     <div className={classes.tableWidth} style={{ overflow:"hidden"}}>
//       <Grid container>
//         <Grid item md={12}>
//          <TableContainer component={Paper}>
//           <Table className={classes.table} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell component="th" align="center">First Name</TableCell>
//                 <TableCell align="center">Last Name</TableCell>
//                 <TableCell align="center">Gender</TableCell>
//                 <TableCell align="center">DOB</TableCell>
//                 <TableCell align="center">Address</TableCell>
//                 <TableCell align="center">Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {datas.map((row,index)=> (
//                 <TableRow key={row.id}>
//                   <TableCell align="center">{row.first_name}</TableCell>
//                   <TableCell align="center">{row.middle_name}</TableCell>
//                   <TableCell align="center">{row.gender}</TableCell>
//                   <TableCell align="center">{row.dob}</TableCell>
//                   <TableCell align="center">{row.address}</TableCell>

//                     <TableCell component="th" scope="row">
//                       {/* <Switch
//                       checked={fileAcces}
//                       onChange={handleClickOpens}
//                       color="primary"
//                     /> */}

//                     <Switch
//                         checked={row.state.checkedB}
//                         onChange={handleChange}
//                         name="checkedB"
//                         color="primary"
//                     />

//                     </TableCell>

//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         </Grid>
//         <Grid item md={1}></Grid>

//        <Dialog open={opens} onClose={handleCloses} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
//         <DialogTitle id="alert-dialog-title">{"Enter OTP for Verification"}</DialogTitle>
//         <DialogContent>

//           <DialogContentText id="alert-dialog-description">
//           <form className={classes.root} noValidate autoComplete="off">
//             <TextField id="outlined-basic" label="Enter OTP" variant="outlined" />
//           </form>

//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloses} >
//             Close
//           </Button>
//           <Button onClick={otpCheck} >
//             Submit
//           </Button>

//         </DialogActions>
//       </Dialog>
//       </Grid>
//     </div>
//     </div>
//   );
// };

// Data.propTypes = {
//   /**
//    * External classes
//    */
//   className: PropTypes.string,
// };

// export default Data;
