import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid,Paper,TextField,Menu,MenuItem , Typography, Button,Box, FormControlLabel } from '@material-ui/core';
import {checkToken} from '../../../components/helper/LoginCheck'
import {getFamilyDependentByUid} from '../../../components/helper/PatientApi'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
Switch,
} from 'formik-material-ui';
import  Breadcrumb  from '../Reusable/MediBreadcrumb';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
 
  tableWidth:
  {
    padding:45,
  },
  avtr:
  {
    marginLeft:"35px"
  }
  
}));

const Data = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const columns = [
    { title: "First Name", field: "first_name" },
    { title: "Last Name", field: "middle_name" },
    { title: "Gender", field: "gender" },
    { title: "Date of Birth", field: 'dob' },
    { title: "Address", field: 'address' }
  ]

  // Code for API Call in Table
  const [datas, setDatas] = useState([]);
  const getFamilyDoctor = async () =>
  {
    var doctorData = await getFamilyDependentByUid();
    console.log("Name:",doctorData);
     setDatas(doctorData.dependents);
  }

  useEffect(() => {
      const loginToken = checkToken();
      if(loginToken)
      {
        getFamilyDoctor();
      }
      else
      {
        Router.push('/signin', undefined, { shallow: true })
      }
  }, [])

  
  // Open Dialog Box on Otp click

  const [opens, setOpens] = React.useState(false);

  const handleClickOpens = () => {
    setOpens(true);
  };

  const handleCloses = () => {
    setOpens(false);
  };

  // 

  const [fileAcces, setFileAccess] = React.useState();

 // 


    // Code for Open Menu on Action

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };



  return (
  <div className="medifle-setting">
    <Breadcrumb url="My Subscription"/>
    <div className={classes.tableWidth} style={{ overflow:"hidden"}}>
      <Grid container>
        <Grid item md={12}>
         <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell component="th" align="center">Dependent Name</TableCell>
                <TableCell align="center">Plan</TableCell>
                <TableCell align="center">Date from</TableCell>
                <TableCell align="center">Plan Interval</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="center"><Avatar variant="rounded" className={classes.avtr}></Avatar></TableCell>
                  <TableCell align="center">{row.middle_name}</TableCell>
                  <TableCell align="center">{row.gender}</TableCell>
                  <TableCell align="center">{row.dob}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center"><Box margin={1}> <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><i class="fas fa-ellipsis-v"> </i></Button></Box></TableCell>
                
                  {/* <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
      <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><Typography variant="h6" color="primary"><i class="fas fa-ban"></i></Typography><Box ml={0.5}><Button>Cancel Subscription</Button></Box></MenuItem>
          <MenuItem onClick={handleClose}><Typography  variant="h6" color="primary"><i class="fas fa-file-download"></i></Typography><Box ml={1}><Button>Download Invoice</Button></Box></MenuItem>
     </Menu>
    </div>
    </div>
  );
};

Data.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Data;
