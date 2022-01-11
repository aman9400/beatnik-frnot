import React, { Suspense, lazy, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Box,
  Grid,
  Button,
  MenuItem,
} from '@material-ui/core';
// Picker

import MaterialTable, { MTableBodyRow } from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import Menu from '@material-ui/core/Menu';
import UploadFile from './components/UploadFile';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import GetAppIcon from '@material-ui/icons/GetApp';
import EmailIcon from '@material-ui/icons/Email';
import  Breadcrumb  from '../Reusable/MediBreadcrumb';
import { FileIcon, defaultStyles } from 'react-file-icon';
import MetaTitle from '../../../components/helper/MetaTitle';


function MemberDetails() {
  const tableIcons = {
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    // Delete: forwardRef((props, ref) => <VisibilityIcon onClick={clickMe} style={{color:"#2d91a7"}} {...props} ref={ref} />),
    // View: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => (
      <ShareIcon style={{ color: 'green' }} {...props} ref={ref} />
    )),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const api = axios.create({
    baseURL: `http://localhost:8000/api`,
  });

  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(0),
        overflow: 'hidden',
        // width:"960px",
      },
    },
    tableButton: {
      backgroundColor: '#e0e0e0',
      fontWeight: 600,
      padding: theme.spacing(1),
      '&:hover': {
        backgroundColor: '#FF0010',
        color: 'white',
      },
      height: '27px',
      fontSize: '13px',
    },
    icon: {
      fontSize: '13px',
    },
    headerWidth: {
      width: '170px',
    },
  }));

  const classes = useStyles();
  var columns = [
     {
     // field: 'name',
     render: row => (

         <div className="fileIcon">
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><ShareIcon/></Button>
         </div>
     ),},

    { title: 'id', field: 'id', hidden: true },
    {
      title: <h4 class={classes.headerWidth}>File Name</h4>,
      // field: 'name',
      render: row => (
        <Box>
          <div className="fileIcon">
            <FileIcon
              size={10}
              labelTextColor="#fff"
              labelColor="#ec3832"
              type={row.type}
              extension={row.extension}
            />
          </div>
          {row.name}
        </Box>
      ),
    },
    {
      title: <h4 class={classes.headerWidth}>File Caption</h4>,
      field: 'caption',
    },
    {
      title: <h4 class={classes.headerWidth}>File Size</h4>,
      field: 'fileSize',
    },
    {
      title: <h4 class={classes.headerWidth}>Upload Date</h4>,
      field: 'uploadDate',
    },
    {
      title: <h4 class={classes.headerWidth}>Uploaded By</h4>,
      field: 'uploadedBy',
    },

    {
      title: <h4 class={classes.headerWidth}>Verification Status</h4>,
      field: 'verification',
    },
  ];

  const datas = [
    {
      id: 1,
      name: 'blood-sugar-tests.pdf',
      fileSize: '10 MB',
      uploadDate: '22/03/2021',
      uploadedBy: 'Arjun',
      verification: 'Pending',
      caption: 'blood sugar tests',
      type: 'acrobat',
      extension: 'pdf',
    },
    {
      id: 1,
      name: 'liver-function-tests.png',
      fileSize: '20 MB',
      uploadDate: '12/11/2020',
      uploadedBy: 'Rulap',
      verification: 'Processing',
      caption: 'liver function tests',
      type: 'image',
      extension: 'png',
    },
    {
      id: 1,
      name: 'kidney-function-tests.doc',
      fileSize: '32 MB',
      uploadDate: '22/02/1990',
      uploadedBy: 'Arjun',
      verification: 'Completed',
      caption: 'kidney function tests',
      type: 'document',
      extension: 'doc',
    },
    {
      id: 1,
      name: 'blood-sugar-tests.pdf',
      fileSize: '222 KB',
      uploadDate: '22/21/2021',
      uploadedBy: 'Hemant',
      verification: 'Pending',
      caption: 'blood sugar tests',
      type: 'acrobat',
      extension: 'pdf',
    },
    {
      id: 1,
      name: 'blood-sugar-tests.pdf',
      fileSize: '120 KB',
      uploadDate: '22/21/2021',
      uploadedBy: 'Arjun',
      verification: 'Pending',
      caption: 'blood sugar tests',
      type: 'acrobat',
      extension: 'pdf',
    },
    {
      id: 1,
      name: 'blood-sugar-tests.pdf',
      fileSize: '10 MB',
      uploadDate: '22/21/2021',
      uploadedBy: 'Johny',
      verification: 'Processing',
      caption: 'blood sugar tests',
      type: 'acrobat',
      extension: 'pdf',
    },
    {
      id: 1,
      name: 'blood-sugar-tests.pdf',
      fileSize: '10 MB',
      uploadDate: '22/21/2021',
      uploadedBy: 'Deba',
      verification: 'Processing',
      caption: 'blood sugar tests',
      type: 'acrobat',
      extension: 'pdf',
    },
    {
      id: 1,
      name: 'blood-sugar-tests.pdf',
      fileSize: '10 MB',
      uploadDate: '22/21/2011',
      uploadedBy: 'Deband',
      verification: 'Pending',
      caption: 'blood sugar tests',
      type: 'acrobat',
      extension: 'pdf',
    },
  ];

  const [data, setData] = useState([]); //table data

  const [selected, setSelected] = useState('Dropdown');

  const [value, setValue] = React.useState(2);

  // Record Filter on Select Member
  const [filterdata, setFilterdata] = useState(datas);
  const [filter, setFilter] = useState(false);
  const [name, setName] = React.useState('showall');

  const handleChange = event => {
    setFilter(!filter);
  };

  useEffect(() => {
    setFilterdata(
      name === 'showall' ? datas : datas.filter(dt => dt.uploadedBy === name),
    );
  }, [name]);

  // Tab of Table


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  

  return (
  <div className="member-detail">
    <MetaTitle title={`Medifile Member Details | OnlineAarogya`} metaKeyWord="" metaDescription="" />
    <Breadcrumb url="Member Details"/>
    <div style={{ padding: 26 }}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.root}>
            <Paper elevation={0}>
              <Grid container>
                <Grid item xs={12}>
                  <Box mt={2} mb={4} display="flex">
                    <UploadFile />
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      style={{ marginLeft: '-240px' }}
                    >
                      <MenuItem value="showall">Select Member</MenuItem>
                      <MenuItem value="Johny">Johny</MenuItem>
                      <MenuItem value="Deba">Deba</MenuItem>
                      <MenuItem value="Ranju">Ranju</MenuItem>
                      <MenuItem value="Arjun">Arjun</MenuItem>
                    </Select>
                  </Box>

                 </Grid>
                <Grid item xs={12}>
                  <MaterialTable
                    icons={tableIcons}
                    title="Member Details"
                    options={{
                      search: true,
                    }}
                    columns={columns}
                    data={filterdata}
                    
                  />
                 
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </Grid>
      <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><Typography color="primary">  <WhatsAppIcon style={{color:"green",fontSize:"19px",marginTop:"4px"}}/> </Typography><Button  >WhatsApp</Button></MenuItem>
          <MenuItem onClick={handleClose}><Typography color="primary"><GetAppIcon  style={{color:"#4b4bb2",fontSize:"19px",marginTop:"4px"}} /> </Typography><Button  >Download</Button></MenuItem>
          <MenuItem onClick={handleClose}><Typography color="primary"> <EmailIcon  style={{color:"#957982",fontSize:"19px",marginTop:"4px"}} /> </Typography><Button  >Download</Button></MenuItem>
     </Menu>
     </div>
    </div>
  );
}
export default MemberDetails;
