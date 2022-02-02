import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  RadioGroup,
  FormLabel,
} from '@material-ui/core';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from 'next/link';
import Radio from '@material-ui/core/Radio';
import { BorderColor } from '@material-ui/icons';
import CheckIcon from '@material-ui/icons/Check';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import  Breadcrumb  from '../Reusable/MediBreadcrumb';
import {getSubscriptionDetails} from '../../../components/helper/PatientApi'
import {checkToken} from '../../../components/helper/LoginCheck'
import MetaTitle from '../../../components/helper/MetaTitle';


const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  paperPadding:
  {
    padding:"10px",
    marginLeft:"20px",
    marginTop:"20px",
   
    // backgroundColor:"gray"
  },
  containerPadding:{
    padding:"20px"
  },
  switchTitle: {
    fontWeight: 700,
  },
  titleCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dependentStyle:
  {
    padding:"5px",
  },
  tableStyle:
  {
    borderTopWidth: 2,
     borderColor: '#e7e7e7',
     borderStyle: 'solid'
  },
  select:
  {
    borderColor: "red"
  },
  iconColor:
  {
    color:"#21e121",
    fontWeight:900
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  btnSize:{
    minWidth: 150,
    height:55
  },
  radio: {
    '&$checked': {
      color: 'white'
    }
  },
}));

const Subscriptions = props => {

  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // Code for radio button
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  // Code for Load data from API 


    const [datas, setDatas] = useState([]);

    const getSubscriptionData = async () =>
    {
      var subscriptionData = await getSubscriptionDetails();
      console.log("Name:",subscriptionData);
      setDatas(subscriptionData.data);
    }

    useEffect(() => {
        const loginToken = checkToken();
        if(loginToken)
        {
          getSubscriptionData();
        }
        else
        {
          Router.push('/signin', undefined, { shallow: true })
        }
    }, [])


  //

   //const [gender, setGender] = useState('plan_one');



  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('nid');
  console.log("check Nid",myParam);



  return (
    <div className="subs-preview">
    <MetaTitle title={`Medifile Subscription Preview | OnlineAarogya`} metaKeyWord="" metaDescription="" />
    <Breadcrumb url="Subscription Preview"/>
     <div className={classes.paperPadding} >
      <Paper elevation={0} >
       <div className={classes.containerPadding}>
        <Grid container >
          <Grid item xs={12} lg={6}>
            
            {datas.map(row => (
              <Paper elevation={0} >
                <Grid container className={classes.dependentStyle}>
                  <Grid itme xs={12} lg={12}>
                   {row.nid != myParam ?  <Box p={2} mb={2} style={{backgroundColor:"#ececec",borderRadius:"5px"}}>

                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/medifiles/subscription-preview?nid=${row.nid}`} title="thefront"> 
                 <Grid container> 
                  <Grid itme xs={1}>
                    <Box mt={1}>
                    <FormControl component="fieldset">
                      <RadioGroup aria-label="plan" name="value" value={value} onChange={(e)=>setValue(e.target.value)}>
                        <FormControlLabel value={row.field_subscription_charges} classes={{root: classes.radio}}   control={<Radio/>}/>
                     </RadioGroup>
                    </FormControl>
                    </Box>
                  </Grid>  
                  <Grid itme xs={8}>
                    <Box ml={1}> <Typography variant="h6">{row.title}</Typography> 
                    <Typography>On Call Suppor for Customer</Typography> </Box> 
                  </Grid>
                  <Grid itme xs={3}>
                      <Box mt={1}><Typography variant="h6" align="center">₹ {row.field_subscription_charges}</Typography></Box> 
                  </Grid>
                  </Grid>
                  </Link>
                </Box>  
               
                   :
              
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/medifiles/subscription-preview?nid=${row.nid}`} title="thefront">  
                 <Box p={2} color="white" style={{backgroundColor:"red",borderRadius:"5px"}}>
                 <Grid container> 
                  <Grid itme xs={1}>
                    <Box mt={1}>
                    <FormControl component="fieldset">
                      <RadioGroup aria-label="plan" name="value" value={value} onChange = {(e)=>setValue(e.target.value)}  >
                        <FormControlLabel value={row.field_subscription_charges} classes={{root: classes.radio}}  control={<Radio/>}/>
                     </RadioGroup>
                    </FormControl>
                    </Box>
                  </Grid>  
                  <Grid itme xs={8}>
                    <Box ml={1}> <Typography variant="h6">{row.title}</Typography> 
                    <Typography>On Call Suppor for Customer</Typography> </Box> 
                  </Grid>
                  <Grid itme xs={3}>
                      <Box mt={1}><Typography variant="h6" align="center">₹ {row.field_subscription_charges}</Typography></Box> 
                  </Grid>
                  
                  </Grid>
                 
                  </Box>
                  </Link>
                  
                  }
                       
                  </Grid>  
                 </Grid>
                </Paper>  
                ))}


              {/* <Paper elevation={0} >
              <Grid container className={classes.dependentStyle}>
                  <Grid itme xs={12} lg={12}>
                    <Box p={2}  style={{backgroundColor:"#ececec",borderRadius:"5px"}}>
                    <Grid container> 
                      <Grid itme xs={1}>
                        <Box mt={1} mr={2}> <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                              <FormControlLabel value="female" control={<Radio color="#1b5e20" backgroundColor="white" />}/>
                           </RadioGroup>
                          </FormControl>
                        </Box>
                      </Grid>  
                      <Grid itme xs={8}>
                        <Box ml={1}> <Typography variant="h6">Medium Cube</Typography> 
                        <Typography>Free Service + Membership</Typography> </Box> 
                      </Grid>
                      <Grid itme xs={3}>
                          <Box mt={1}><Typography variant="h6" align="center">₹ 5,902</Typography></Box> 
                      </Grid>
                      </Grid>
                      </Box>   
                  </Grid>  
              </Grid>
              </Paper>  

              <Paper elevation={0} >
                <Grid container className={classes.dependentStyle}>
                  <Grid itme xs={12} lg={12}>
                    <Box p={2}  style={{backgroundColor:"#ececec",borderRadius:"5px"}}>
                    <Grid container> 
                      <Grid itme xs={1}>
                        <Box mt={1}> 
                          <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                              <FormControlLabel value="other" control={<Radio color="#1b5e20"  />}/>
                           </RadioGroup>
                          </FormControl>
                        </Box>
                      </Grid>  
                      <Grid itme xs={8}>
                        <Box ml={1}> <Typography variant="h6">Gold Cube</Typography> 
                        <Typography>24 Hours Support + Customer</Typography> </Box> 
                      </Grid>
                      <Grid itme xs={3}>
                          <Box mt={1}><Typography variant="h6" align="center">₹ 9,202</Typography></Box> 
                      </Grid>
                      </Grid>
                      </Box>   
                  </Grid>   
                </Grid>
              </Paper>   */}
              </Grid>   
              
              <Grid item xs={1}></Grid>

              <Grid item xs={12} md={8} lg={5}>
                <Paper elevation={4}>
                  <Box p={2}>
                    <Typography variant="h5" >Basic Plan</Typography>
                    <Typography color="secondary">Free Service + Membership</Typography>
                     <Box mt={2} display="flex"><CheckIcon className={classes.iconColor}/> <Typography>24*7 Service</Typography></Box>
                     <Box mt={2} display="flex"><CheckIcon className={classes.iconColor}/> <Typography >On Call Support Help</Typography></Box>
                     <Box mt={2} display="flex"><CheckIcon className={classes.iconColor}/> <Typography >No Extra Charge</Typography></Box>
                      <Box mt={2} display="flex">
                        <Box><Typography >₹ </Typography></Box> <Box ml={0}><Typography variant="h5">500</Typography></Box>
                      </Box>
                     <Box mt={2}>
                      <Grid container> 
                       <Grid item  xs={12} sm={6} lg={6}>
                        <Box   align="center">
                          <FormControl variant="outlined"  className={classes.formControl}>
                          <InputLabel id="demo-simple-select-outlined-label">Select Member</InputLabel>
                          <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" label="Select Member">
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Anthony</MenuItem>
                            <MenuItem value={20}>Sebestian</MenuItem>
                            <MenuItem value={30}>Arnold S</MenuItem>
                          </Select>
                         </FormControl>
                       </Box>
                       </Grid>
                       <Grid item  xs={12} sm={6} lg={6}>
                        <Box mt={1} align="center"> <Button className={classes.btnSize} variant="contained" size="large"  color="primary">Make Payment</Button></Box>
                        </Grid> 
                       </Grid>   
                     </Box> 
                  </Box>    
                </Paper>
              </Grid>

            </Grid>
            </div>
          </Paper>  
       </div>    
     </div>
  )
}

Subscriptions.propTypes = {

}

export default Subscriptions
