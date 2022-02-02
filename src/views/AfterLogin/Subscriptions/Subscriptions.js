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
} from '@material-ui/core';
import MetaTitle from '../../../components/helper/MetaTitle';
import Link from 'next/link';
import Router from 'next/router'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import  Breadcrumb  from '../Reusable/MediBreadcrumb';
import {checkToken} from '../../../components/helper/LoginCheck'
import {getSubscriptionDetails} from '../../../components/helper/PatientApi'

const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  paperPadding:
  {
    padding:"20px",
    marginLeft:"20px",
    marginTop:"20px"
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
}));

const Subscriptions = props => {

  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });


  // Code for API Load 

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

  


  return (
  <div className="subscription">
   <MetaTitle title={`Medifile Subscription | OnlineAarogya`} metaKeyWord="" metaDescription="" />
   <Breadcrumb url="Subscription"/>
    <div className={classes.paperPadding}>
      <Paper elevation={3} >
      <div className={classes.containerPadding}>
       <Grid container> 
         <Grid item xs={12} lg={1}></Grid>
         <Grid item xs={1} lg={1}>
           <Box mb={2} mt={2}> <Button style={{backgroundColor:"#464040",color:"white"}} variant="contained">Premium</Button> </Box></Grid>
        </Grid>

        <Grid container> 
         <Grid item xs={12} lg={1}></Grid> 
         <Grid  item xs={12} lg={11}> 
            <Box mb={4}><Typography color="secondary" variant="h5">Lorem Spciso codle sit </Typography>
            <Typography color="secondary" variant="h5">Special ipsum dolor sit amet </Typography></Box></Grid>
       </Grid>

       <Grid container> 
          
          <Grid item xs={12}>
           <div className="plans-subscription" > 
             <Grid container>
             {datas.map(row => (
               <Grid item lg={4} sm={12} xs={12} container justify = "center">
                <Box >
                  <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/medifiles/subscription-preview?nid=${row.nid}`} title="thefront"> 
                  <img src={row.image} /></Link>
                   <Box mt={3} ml={7} mb={3}> 
                   <Button variant="contained" color="primary" href={`${process.env.NEXT_PUBLIC_BASE_URL}/medifiles/subscription-preview?nid=${row.nid}`}>
                    Select Plan
                  </Button></Box>
                </Box>  
              </Grid>
              ))}

              {/* <Grid item xs={4} container justify = "center">
                 <Box height={80} color="white"  p={2}  bgcolor="#ff0010" mx={0.5} width={120} display="inline-block">
                   <Box mt={2} ml={0}>Medium Cube</Box>
                  <Box  ml={3} mt={1.7}><ArrowDropDownIcon fontSize="large" style={{color:"red",position:"absolute"}} /></Box> 
                </Box><br/>
              </Grid>

              <Grid item xs={4} container justify = "center">
                <Box height={80} color="white" p={2}  bgcolor="#f1acac" mx={0.5} width={120} display="inline-block">
                   <Box mt={2} ml={1}>Gold Cube</Box>
                </Box> 
              </Grid> */}
           </Grid> 

           {/* <Grid container>
              <Grid item xs={4} container justify = "center">
              </Grid>
              <Grid item xs={4} container justify = "center">
                <Box height={80} p={2}>
                  Monthly Price
                  <Box  mr={3} mt={2.7}></Box> 
                </Box><br/>
              </Grid>
              <Grid item xs={4} container justify = "center">
              </Grid>
           </Grid> 

          <Grid container >
           <Grid item xs={4}>
               <Box>
                  <Typography align="center"><CloseIcon/></Typography> 
               </Box>  
           </Grid>  
           <Grid item xs={4}>
                <Box>
                  <Typography align="center"><CheckIcon/></Typography> 
               </Box>  
         
           </Grid> 
           <Grid item xs={4}>
               <Box>
                  <Typography align="center"><CheckIcon/></Typography> 
               </Box>  
         
           </Grid> 
         </Grid>  
         <Divider />
        
         <Grid container style={{marginTop:"50px"}}>
          <Grid item xs={4}>
               <Box>
                  <Typography align="center">₹ 2198</Typography> 
               </Box>  
         
           </Grid>  
           <Grid item xs={4}>
                <Box>
                  <Typography align="center">₹ 1398</Typography> 
               </Box>  
         
           </Grid> 
           <Grid item xs={4}>
               <Box>
                  <Typography align="center">₹ 198</Typography> 
               </Box>  
         
           </Grid> 
         </Grid>  
         <Divider />

          <Grid container style={{marginTop:"50px"}}>
          <Grid item xs={4}>
               <Box>
                  <Typography align="center">2</Typography> 
               </Box>  
         
           </Grid>  
           <Grid item xs={4}>
                <Box>
                  <Typography align="center">5</Typography> 
               </Box>  
         
           </Grid> 
           <Grid item xs={4}>
               <Box>
                  <Typography align="center">9</Typography> 
               </Box>  
         
           </Grid> 
         </Grid>  

         <Divider />

        <Grid container style={{marginTop:"50px"}}>
        <Grid item xs={4}>
            <Box>
                <Typography align="center">Multi Lang</Typography> 
            </Box>  

        </Grid>  
        <Grid item xs={4}>
              <Box>
                <Typography align="center">Multi Lang</Typography> 
            </Box>  
        </Grid> 
        <Grid item xs={4}>
            <Box>
                <Typography align="center">Multi Lang</Typography> 
            </Box>  

        </Grid> 
        </Grid>  

         <Divider /> 
        
         <Grid container style={{marginTop:"50px"}}>
          <Grid item xs={4}>
               <Box>
                  <Typography align="center">₹ 4398</Typography> 
               </Box>  
         
           </Grid>  
           <Grid item xs={4}>
                <Box>
                  <Typography color="primary" align="center">₹ 2298</Typography> 
               </Box>  
         
           </Grid> 
           <Grid item xs={4}>
               <Box>
                  <Typography color="primary" align="center">₹ 1298</Typography> 
               </Box>  
         
           </Grid> 
         </Grid>  
         <Divider /> 


         <Grid container style={{marginTop:"50px"}}>
          <Grid item xs={4}>
               <Box>
                  <Typography align="center">Yes</Typography> 
               </Box>  
         
           </Grid>  
           <Grid item xs={4}>
                <Box>
                  <Typography  align="center">Yes</Typography> 
               </Box>  
         
           </Grid> 
           <Grid item xs={4}>
               <Box>
                  <Typography align="center">Yes</Typography> 
               </Box>  
           </Grid> 
          
         </Grid>  */}
            
       

         {/* <Grid container justify = "center">
            <Box mt={5}> <Button variant="contained" color="primary" href={`${process.env.NEXT_PUBLIC_BASE_URL}/medifiles/subscription-preview`}>
                 Continue
                 </Button>
            </Box>
        </Grid> */}

         {/* <Grid container style={{marginTop:"50px"}}>
          
           <Grid item xs={5} lg={5}>
            </Grid>  
            <Grid item xs={2} lg={2}>
               <Box  mb={4} ml={2}>
                 <Button variant="contained" color="primary" href={`${process.env.NEXT_PUBLIC_BASE_URL}/medifiles/subscription-preview`}>
                    Continue
                 </Button>
               </Box>  
            </Grid>  
            <Grid item xs={5} lg={5}>
            </Grid>  
           </Grid>   */}
              
         </div>
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
