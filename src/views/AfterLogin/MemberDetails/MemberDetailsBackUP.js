import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Box,
  Grid,
  Button,
  MenuItem,
  Select,
  Menu,
} from '@material-ui/core';
// Picker
import styles from './MemberDetails.module.css';
import MaterialTable, { MTableBodyRow } from 'material-table';
import { forwardRef } from 'react';
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
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ShareIcon from '@material-ui/icons/Share';
import UploadFile from './components/UploadFile';
import GetAppIcon from '@material-ui/icons/GetApp';
import EmailIcon from '@material-ui/icons/Email';
import Breadcrumb from '../Reusable/MediBreadcrumb';
import { FileIcon } from 'react-file-icon';
import DeleteIcon from '@material-ui/icons/Delete';
import MetaTitle from '../../../components/helper/MetaTitle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
function MemberDetails() {
  // Actions Button
  const [actions, setActions] = React.useState(null);

  const handleClick = event => {
    setActions(event.currentTarget);
  };

  const handleClose = () => {
    setActions(null);
  };
  // Actions Buttons
  const tableIcons = {
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
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
    search: {
      background: '#ebeef1',
      padding: '3px 10px',
      borderRadius: '5px',
    },
    icon: {
      fontSize: '13px',
    },
    headerWidth: {
      width: '150px',
      backgroundColor: '#ebeef1',
      padding: '10px !important',
    },
  }));

  const classes = useStyles();
  var columns = [
    {
      // field: 'name',
      render: row => (
        <div className="fileIcon">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={styles.share_icon}
          >
            <ShareIcon />
          </Button>
        </div>
      ),
    },
    // 'id', field: 'id', hidden: true
    { title: <h4>S. No. </h4> },
    {
      title: <h4 className={classes.headerWidth}>Patient Name </h4>,
      // field: 'name',
      render: row => (
        // <Box className={styles.pdf_name}>
        //   <div className="fileIconPDF">
        //     <FileIcon
        //       size={10}
        //       labelTextColor="#fff"
        //       labelColor="#ec3832"
        //       type={row.type}
        //       extension={row.extension}
        //     />
        //   </div>
        <span> {row.patient_name}</span>
        // </Box>
      ),
    },
    {
      title: <h4 className={classes.headerWidth}>File Description</h4>,
      render: row => (
        <Box className={styles.pdf_name}>
          <div className="fileIconPDF">
            <FileIcon
              size={10}
              labelTextColor="#fff"
              labelColor="#ec3832"
              type={row.type}
              extension={row.extension}
            />
          </div>
          <span> {row.file_description}</span>
        </Box>
      ),
    },
    {
      title: <h4 className={classes.headerWidth}>Date Of Upload</h4>,
      field: 'date_of_upload',
    },
    {
      title: <h4 className={classes.headerWidth}>Source of File</h4>,
      field: 'source_of_file',
    },
    {
      title: <h4 className={classes.headerWidth}>Status</h4>,
      field: 'status',
    },

    {
      title: <h4 className={classes.headerWidth}>Share</h4>,
      field: 'share',
    },
    {
      title: <h4 className={classes.headerWidth}>Action</h4>,
      render: row => (
        <Box className={styles.pdf_name_action}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={styles.actions_button}
          >
            Actions
          </Button>
          <Menu
          className={styles.actions_menu}
            id="simple-menu"
            actions={actions}
            keepMounted
            open={Boolean(actions)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <EditIcon /> Edit
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <DeleteIcon /> Delete
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <VisibilityIcon /> View
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <BookmarkBorderIcon /> Order
            </MenuItem>
          </Menu>
          <span> {row.action}</span>
        </Box>
      ),
    },
  ];

  const datas = [
    {
      id: 1,
      patient_name: 'Anurag',
      file_description: `http://www.africau.edu/images/default/sample.pdf`,
      date_of_upload: '22/03/2021',
      source_of_file: 'anurag-sugar-sample',
      status: 'Pending',
      share: '',
      action: 'acrobat',
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

  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div className={styles.mdeifile_dashboard}>
      <div className="member-detail">
        <MetaTitle
          title={`Medifile Member Details | OnlineAarogya`}
          metaKeyWord=""
          metaDescription=""
        />

        <div className={styles.medifiles_pannel}>
          <div className={styles.medifile_dashboard}>
            <h3 className={styles.medifile_head}>Hi! Welcome to Medifiles </h3>
            <Breadcrumb url="Member Details" />
          </div>

          <Grid container className={styles.medifile_table_data}>
            <Grid item xs={12}>
              <div className={classes.root}>
                <Paper elevation={0}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Box className={styles.table_name} display="flex">
                        <Typography variant="43" color="primary">
                          Members Details
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className={styles.table_feature} display="flex">
                        <Select
                          labelId="demo-simple-select-label"
                          className={styles.select_member}
                          id="demo-simple-select"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        >
                          <MenuItem value="showall">Select Member</MenuItem>
                          <MenuItem value="Johny">Johny</MenuItem>
                          <MenuItem value="Deba">Deba</MenuItem>
                          <MenuItem value="Ranju">Ranju</MenuItem>
                          <MenuItem value="Arjun">Arjun</MenuItem>
                        </Select>
                        <UploadFile />
                      </Box>
                    </Grid>
                    <Grid className={styles.table_container}>
                      <MaterialTable
                        icons={tableIcons}
                        className={styles.member_data}
                        title="Som Nath Gupta"
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
            <MenuItem onClick={handleClose}>
              <Typography color="primary">
                {' '}
                <WhatsAppIcon
                  style={{ color: 'green', fontSize: '15px', marginTop: '4px' }}
                />{' '}
              </Typography>
              <Button>WhatsApp</Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography color="primary">
                <GetAppIcon
                  style={{
                    color: '#4b4bb2',
                    fontSize: '15px',
                    marginTop: '4px',
                  }}
                />{' '}
              </Typography>
              <Button>Download</Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography color="primary">
                {' '}
                <EmailIcon
                  style={{
                    color: '#957982',
                    fontSize: '15px',
                    marginTop: '4px',
                  }}
                />{' '}
              </Typography>
              <Button>Download</Button>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
export default MemberDetails;
