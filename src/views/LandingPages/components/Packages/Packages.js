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
                  </TableRow>
                </TableHead>
                <TableBody>
                
                  <TableRow >
                    <TableCell>
                      <p>Unlimited Book appointment with doctor of your choice for <b>In-clinic</b>, <b>Video</b>, <b>Audio</b>, <b>Chat Consultations</b> from a single application</p>
                    </TableCell>
                    <TableCell align="center">
                      <span className={styles.packages_span}>
                        <CheckIcon />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell>
                      <p>Add Up to 6 family members</p>
                    </TableCell>
                    <TableCell align="center">
                      <span className={styles.packages_span}>
                        <CheckIcon />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className={styles.table_list}>
                    <TableCell>
                      <p>Medifiles <small>(5 GB storage space)</small> </p>
                      <ul>
                        <li>Incase of Medical emergency, your family member can access and share your medical records.</li>
                        <li>Upload the file category-wise</li>
                        <li>All medical records at one place</li>
                      </ul>
                    </TableCell>
                    <TableCell align="center">
                      <span className={styles.packages_span}>
                        <CheckIcon />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className={styles.table_list}>
                    <TableCell>
                      <p>Order Medicine </p>
                      <ul>
                        <li>Get your medicine delivered at your doorstep at discounted price</li>

                      </ul>
                    </TableCell>
                    <TableCell align="center">
                      <span className={styles.packages_span}>
                        <CheckIcon />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className={styles.table_list}>
                    <TableCell>
                      <p>Book a Lab Test</p>
                      <ul>
                        <li>Free Home Sample Collection and get the reports directly on the Online Aarogya application without stepping out from your home.</li>

                      </ul>
                    </TableCell>
                    <TableCell align="center">
                      <span className={styles.packages_span}>
                        <CheckIcon />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className={styles.table_list}>
                    <TableCell>
                      <p>Care at Home</p>
                      <small><b>Book professional care for:</b></small>
                      <ul>
                        <li>Elderly</li>
                        <li>Children</li>
                        <li>Accidental Care</li>
                        <li>Physiotherapist</li>
                      </ul>
                      <small><b>All at discounted price.</b></small>
                    </TableCell>
                    <TableCell align="center">
                      <span className={styles.packages_span}>
                        <CheckIcon />
                      </span>
                    </TableCell>
                  </TableRow>
                
                  <TableRow className={styles.table_list}>
                    <TableCell>
                      <p>Consult for full family by adding the patient name before the consultation. If the family member is verified by OTP, then the family member can independently book consultations.</p>

                    </TableCell>
                    <TableCell align="center">
                      <span className={styles.packages_span}>
                        <CheckIcon />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className={styles.table_list}>
                    <TableCell>
                      <p>Subscription Charges for 1 Year <small><b>(<i>PLUS 18% GST</i>)</b></small></p>

                    </TableCell>
                    <TableCell align="center">
                      <span className={styles.packages_span}>
                        <CheckIcon />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell style={{width:'200px'}} align="left" className="text_decoration">
                      <b className={styles.packages_cut_price_tag}>₹1,300</b>
                      <b className={styles.packages_original_tag}>₹100/ Year</b>
                      <h6 className={styles.packages_save}>Save 92%</h6>
                      <p className={styles.packages_billed}>
                        Billed every Year
                      </p>
                      <Button
                        className={styles.packages_buy_plan}
                        variant="contained">
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
