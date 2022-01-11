import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';
import {checkToken} from '../../../../../components/helper/LoginCheck'
import {getFamilyDependentByUid} from '../../../../../components/helper/PatientApi'
import {getDependentMedicalHistory} from '../../../../../components/helper/PatientApi'

import Router from 'next/router'
import MetaTitle from '../../../../../components/helper/MetaTitle';


const useStyles = makeStyles(theme => ({
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
}));

const FamilyMembers = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
 
  // const fetchData = async () => {
  //   const req = await fetch(
  //     'https://randomuser.me/api/?gender=male&results=100',
  //   );
  //   const newData = await req.json();

  //   return setData(newData.results);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [0]);

  // const rows = [
  //   { id: 1,firstName: 'Jon' ,lastName: 'Seth', email:"seth@yahoo.com", state:"Bihar",city:"Patna",address:"Patna Sahib"},
  //   { id: 1,firstName: 'Jonis' ,lastName: 'Anam', email:"ana@gmail.com", state:"Gujrat",city:"Rajkot",address:"Outer Village"},
  //   { id: 1,firstName: 'Amber' ,lastName: 'Saxena', email:"sad12@gmail.com", state:"MP",city:"Indore",address:"Stadium Road"},
  //   { id: 1,firstName: 'Rabies' ,lastName: 'Kumar', email:"rabies@yahoo.com", state:"Bihar",city:"Patna",address:"Patna Sahib"},
  //   { id: 1,firstName: 'Dinesh' ,lastName: 'Singh', email:"ds23@yahoo.in", state:"Sikkim",city:"Gangtok",address:"Outer City"},
  //   { id: 1,firstName: 'Sahil' ,lastName: 'Saxena', email:"sad12@gmail.com", state:"MP",city:"Indore",address:"Stadium Road"},
  // ];


  // Api call for View Family Dependent

  // const getFamilyDependent = async () =>
  // {
  //   var doctorData = await getFamilyDependentByUid();
  //   console.log("Name:",doctorData);
  //    setData(doctorData.dependents);
  // }

  const [data, setData] = useState([]);
  const [dropdown, setDropdown] = useState([]);

  const getMedicaHis = async () =>
  {
    var historyDetails = await getDependentMedicalHistory();
    console.log("History Name:",historyDetails);
     //setData(historyDetails.medicalData[0].originalData);
     setData(historyDetails.medicalData[0].originalData);
  }

  useEffect(() => {
    const loginToken = checkToken();
      if(loginToken)
      {
        getMedicaHis();
      }
      else
      {
        Router.push('/signin', undefined, { shallow: true })
      }
    // fetchData();
  }, [0]);

  return (
    <div className={className} {...rest}>
       <MetaTitle title={`Family Members | OnlineAarogya`} metaKeyWord="" metaDescription="" />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <div className={classes.titleCta}>
            <Typography variant="h6" color="textPrimary">
              Medical History
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell component="th">Name</TableCell>
                <TableCell >Status</TableCell>
                <TableCell>Created By</TableCell>
                <TableCell>Created At</TableCell>
                {/* <TableCell>Updated By</TableCell> */}
                <TableCell>Updated At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row,index) => (
                <TableRow key={index.id}>
                  
                
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.created_by}</TableCell>
                  <TableCell>{row.created_at}</TableCell>
                  {/* <TableCell>{row.updated_by}</TableCell> */}
                  <TableCell>{row.updated_at}</TableCell>
                    {/* {row.object[keys].originalData.map(item => (
                      <div key={item.id}>
                        {item.name}
                      </div>
                    ))}  */}
                     


                  {/* <TableCell >{row.middle_name}</TableCell>
                  <TableCell >{row.last_name}</TableCell>
                  <TableCell >{row.gender}</TableCell>
                  <TableCell >{row.dob}</TableCell>
                  <TableCell >{row.address}</TableCell> */}
                  {/* <TableCell >{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
};

FamilyMembers.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default FamilyMembers;
