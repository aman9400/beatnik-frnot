import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { checkToken } from '../../../../../../../components/helper/LoginCheck';

const styles = theme => ({
  root: {
    width: '400px',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 0,
    paddingBottom: theme.spacing.unit * 0,
  },

  nested_item: {
    position: 'relative',
    padding: '5px !important',
    marginBottom: '0px !important',

  },
  nested_icon: {
    position: 'relative',
    minWidth: 'auto !important',
  },
  icon_left: {
    position: 'relative',
    width: '0.7em',
    height: ' 0.7em',
    fill: 'var(--inner-heading) !important',
    marginRight: '5px',
  },
  nested_Data: {
    position: 'relative',
    '& span ': {
      position: 'relative',
      fontSize: '14px !important',
      fontWeight: '600 !important',
      color: 'var(--inner-heading) !important',
      lineHeight: '30px !important',
    },
  },
  nested_Data_inner: {
    position: 'relative',
    '& span ': {
      position: 'relative',
      fontSize: '14px !important',
      fontWeight: '500 !important',
      color: 'var(--sub-heading-color) !important',
      lineHeight: '30px !important',
    },
  },
});



const MedicalHistory = ({ dataParentToChild }) => {
  const [getPatientHis, setPatientHis] = React.useState([]);
  const getPatientHistory = async () => {

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
      `https://oaarogyabetaportal.mirakidigital.in/api/patient/profile/index`,
      requestOptions,
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));

    console.log('I am new developer heressssssssssssssssssssssss ', data)
    setPatientHis(data.patient)
  }


  React.useEffect(() => {
    getPatientHistory();

  }, [])



  return (
    <div>
      <List component="nav">
        {/* {getPatientHis.medical_problems_array && Object.keys(getPatientHis.medical_problems_array).map(i => <p>{records[i]}</p>)}
        

        {getPatientHis.medical_problems_array && getPatientHis.medical_problems_array.map((namess) => <p key={namess}>{namess.name}</p>)} */}
        Nothing
      </List>
    </div>
  );
}


export default withStyles(styles)(MedicalHistory);