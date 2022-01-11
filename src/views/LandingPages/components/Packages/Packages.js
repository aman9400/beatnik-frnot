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
      '24/7 access to doctors across all speciality',
      <CheckIcon />,
      <CheckIcon />,
      <CheckIcon />,
    ),
    createData(
      'Consult for full family by mentioning the patient name before the consultation',
      <CheckIcon />,
      <CheckIcon />,
      <CheckIcon />,
    ),
    createData(
      'Connect faster with top doctors over non-Plus plan users',
      <CheckIcon />,
      <CheckIcon />,
      <CheckIcon />,
    ),
    createData(
      'Video consultations for clinic-like experience',
      <CheckIcon />,
      <CheckIcon />,
      <CheckIcon />,
    ),
  ];
  // First Plan Set

  return (
    <div className={styles.packages_section} {...rest}>
      <div className={styles.packages_section_bg}></div>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xl={12}>
          <div className={styles.packages_mainTitle} >
            <Typography variant="h3" component="h3" gutterBottom>
              Healthcare plans for you and your family
            </Typography>
            <Typography className={styles.subtitle} ariant="overline" display="block" gutterBottom>
              Become a Online Aarogya Plus member and save 60% on your yearly
              healthcare expenses.
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Grid xl={12}>
        <div data-aos="zoom-in-up">
        <Paper className={styles.packages_table_paper}>
          <TableContainer  sx={{ maxHeight: 440 }}>
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
                    <b>1 month plan</b>
                    <br />
                    <small>Covers 1 Adult</small>
                  </TableCell>
                  <TableCell align="center">
                    <b>3 months plan</b>
                    <br />
                    <small>Covers 1 Adult</small>
                  </TableCell>
                  <TableCell align="center">
                    <b>Annual Plan</b>
                    <br />
                    <small>Covers 1 Adult</small>
                  </TableCell>
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
                    <TableCell align="center">
                      {' '}
                      <span className={styles.packages_span}>
                        {package_data.fat}
                      </span>{' '}
                    </TableCell>
                    <TableCell align="center">
                      {' '}
                      <span className={styles.packages_span}>
                        {package_data.carbs}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="left" className="text_decoration">
                    <b className={styles.packages_cut_price_tag}>₹3,000</b>
                    <b className={styles.packages_original_tag}>₹799/ month</b>
                    <h6 className={styles.packages_save}>Save 73%</h6>
                    <p className={styles.packages_billed}>
                      Billed every 30 days
                    </p>
                    <Button
                      className={styles.packages_buy_plan}
                      variant="contained"
                    >
                      Buy Plan
                    </Button>
                  </TableCell>

                  <TableCell align="left" className="text_decoration">
                    <b className={styles.packages_cut_price_tag}>₹3,000</b>
                    <b className={styles.packages_original_tag}>₹799/ month</b>
                    <h6 className={styles.packages_save}>Save 73%</h6>
                    <p className={styles.packages_billed}>
                      Billed every 30 days
                    </p>
                    <Button
                      className={styles.packages_buy_plan}
                      variant="contained"
                    >
                      Buy Plan
                    </Button>
                  </TableCell>

                  <TableCell align="left" className="text_decoration">
                    <b className={styles.packages_cut_price_tag}>₹3,000</b>
                    <b className={styles.packages_original_tag}>₹799/ month</b>
                    <h6 className={styles.packages_save}>Save 73%</h6>
                    <p className={styles.packages_billed}>
                      Billed every 30 days
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
