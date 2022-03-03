import React from 'react';
import styles from './package.module.css';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Box, Typography, Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
  card_color: {
    borderRadius: '0px',
  },
  pkgPrice: {
    marginLeft: '12px',
    fontFamilly: 'bolder',
  },
  typoStyle: {
    marginLeft: '9px',
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    marginRight: '10px',
    borderRadius: '8px',
  },
}));

const Appointment = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const package_datas = [
    createData(
      'Unlimited Book appointment with doctor of your choice for In-clinic, Video, Audio, Chat consultations from a single application ',
      <CheckIcon />,
    ),
    createData(
      'Add Up too 6 family members',
      <CheckIcon />,
    ),
    createData(
      `Medifiles (5 GB storage space) <br/>
      - Incase of Medical emergency, your family member can access and share your medical records.
      - Upload the file category-wise
      - All medical records at one place`,
      <CheckIcon />,
    ),
    createData(
      `Order Medicine
      - Get your medicine delivered at your doorstep at discounted price`,
      <CheckIcon />,
    ),
    createData(
      `Book a Lab Test <br/>
      - Free Home Sample Collection and get the reports directly on the Online Aarogya application without stepping out from your home.`,
      <CheckIcon />,
    ),
    createData(
      `Care at Home <br/>
      - Book professional care for:
      A. Elderly
      B. Children
      C.. Accidental Care
      D. Physiotherapist
      All at discounted price.
      `,
      <CheckIcon />,
    ),
    createData(
      `Consult for full family by adding the patient name before the consultation. If the family member is verified by OTP, then the family member can independently book consultations.`,
      <CheckIcon />,
    ),
    createData(
      `Subscription Charges for 1 Year(PLUS 18% GST)`,
      <CheckIcon />,
    ),
  ];
  // First Plan Set

  return (
    <div className={styles.packages_section} {...rest}>
      <div className={styles.packages_section_bg}></div>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xl={12} style={{ marginTop: '50px' }}>
          <div className={styles.packages_mainTitle} >
            <Typography variant="h3" component="h3" gutterBottom>
              ONLINE AAROGYA HEALTHCARE PLANS
            </Typography>
            <Typography className={styles.subtitle} ariant="overline" display="block" gutterBottom>
              ONLINE AAROGYA BONANZA PLAN (Limited Period Only)
              <br />
              Experience continuous care with unlimited Consultations
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Grid xl={12}>
        <div data-aos="zoom-in-up">
          <Paper className={styles.packages_table_paper} style={{ marginTop: '40px' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" colSpan={5}>
                      <Typography className={styles.packages_table_title} variant="h5" component="h5">
                        Select a Online Aarogya Plus healthcare plan
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      <b>Online Aarogya Plus Benefits</b>
                      <br />
                      <small>
                        Experience continuous care with unlimited consultations
                      </small>
                    </TableCell>
                    <TableCell align="center">
                      <b>ANNUAL PLAN</b>
                
                    
                    </TableCell>
                    {/* <TableCell align="center">
                    <b>3 months plan</b>
                    <br />
                    <small>Covers 1 Adult</small>
                  </TableCell> */}
                    {/* <TableCell align="center">
                    <b>Annual Plan</b>
                    <br />
                    <small>Covers 1 Adult</small>
                  </TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {package_datas.map(package_data => (
                    <TableRow key={package_data.name}>
                      <TableCell>
                        <p>{package_data.name}</p>
                      </TableCell>
                      <TableCell align="center">
                        <span className={styles.packages_span}>
                          {package_data.calories}
                        </span>
                      </TableCell>
              
            
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell component="th" scope="row"></TableCell>


                    <TableCell align="left" className="text_decoration">
                      <b className={styles.packages_cut_price_tag}>₹1,300</b>
                      <b className={styles.packages_original_tag}>₹100/ Year</b>
                      <h6 className={styles.packages_save}>Save 92%</h6>
                      <p className={styles.packages_billed}>
                        Billed every Year
                      </p>
                      <Button
                        className={styles.packages_buy_plan}
                        variant="contained"
                      >
                        Buy Plan
                      </Button>
                    </TableCell>


                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </Grid>
    </div>
  );
};

Appointment.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // data: PropTypes.array.isRequired,
};

export default Appointment;
