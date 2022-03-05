import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  useTheme,
  withStyles,
  lighten,
} from '@material-ui/core/styles';
import {
  useMediaQuery,
  Box,
  Typography,
  Grid,
  LinearProgress,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
  card_color: {
    marginLeft: '100px',
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    marginRight: '10px',
    borderRadius: '8px',
  },
  input: {
    borderRadius: '0px',
  },
  inputs: {
    width: '450px',
    borderRadius: '0px',
  },
  txf: {
    borderRadius: '0px',
  },
  hero_para: {
    color: '#787887',
  },
  rating: {
    marginLeft: '20px',
  },
  rating_title:{
    color: 'var(--heading-color)',
    fontSize: '32px !important',
    fontWeight: '700 !important',
    marginBottom: '20px !important',
    display: 'block',
  }
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [star, setStar] = React.useState(3);
  const [value, setValue] = React.useState(5);
  const [valueTwo, setValueTwo] = React.useState(5);
  const [valueThree, setValueThree] = React.useState(3);
  const [valueFour, setValueFour] = React.useState(4);

  const BorderLinearProgress = withStyles({
    root: {
      height: 5,
      width: 183,
      backgroundColor: lighten('#ff6c5c', 0.5),
      [theme.breakpoints.down('500')]: {
        width: 100,
      },
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#ff6c5c',
    },
  })(LinearProgress);

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid container justifyContent="center">
          <Box>
            <Typography variant="h2" className={classes.rating_title}>
              Our Customer Ratings
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={3} md={4} lg={4} xl={4} spacing={2} data-aos="fade-up">
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Box fontWeight={800} sx={{ textAlign: 'center' }}>
              <Typography component="legend">
                <b>Over 19,209 five start</b>{' '}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography component="legend">
                {' '}
                <b> Users ratings</b>
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }} mt={2}>
              <Rating
                name="simple-controlled"
                value={star}
                max={5}
                onChange={(event, newValue) => {
                  setStar(newValue);
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={4} lg={4} xl={4} spacing={2} data-aos="fade-up">
          <Box fontWeight={800} sx={{ textAlign: 'center' }}>
            <Typography variant="h3" style={{ color: 'red' }}>
              <b>4.8</b>
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            {' '}
            <Typography>Out of 5 Average Ratings</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} spacing={2} data-aos="fade-up">
          <Grid container justifyContent="center">
            <Box style={{ marginLeft: '17px' }}>
              <Rating
                name="simple-controlled"
                value={value}
                max={5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <Box
              sx={{ width: '40%' }}
              mt={1}
              ml={2}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={80}
              />
            </Box>
          </Grid>

          <Grid container justifyContent="center">
            <Box style={{ marginLeft: '40px' }}>
              <Rating
                name="simple-controlled"
                value={valueTwo}
                max={4}
                onChange={(event, newValue) => {
                  setValueTwo(newValue);
                }}
              />
            </Box>
            <Box
              sx={{ width: '40%' }}
              mt={1}
              ml={2}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={60}
              />
            </Box>
          </Grid>

          <Grid container justifyContent="center">
            <Box style={{ marginLeft: '64px' }}>
              <Rating
                name="simple-controlled"
                value={valueThree}
                max={3}
                onChange={(event, newValue) => {
                  setValueThree(newValue);
                }}
              />
            </Box>
            <Box
              sx={{ width: '40%' }}
              mt={1}
              ml={2}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={40}
              />
            </Box>
          </Grid>

          <Grid container justifyContent="center">
            <Box style={{ marginLeft: '87px' }}>
              <Rating
                name="simple-controlled"
                value={valueFour}
                max={2}
                onChange={(event, newValue) => {
                  setValueFour(newValue);
                }}
              />
            </Box>
            <Box
              sx={{ width: '40%' }}
              mt={1}
              ml={2}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={20}
              />
            </Box>
          </Grid>

          <Grid container justifyContent="center">
            <Box style={{ marginLeft: '109px' }}>
              <Rating
                name="simple-controlled"
                value={valueFour}
                max={1}
                onChange={(event, newValue) => {
                  setValueFour(newValue);
                }}
              />
            </Box>
            <Box
              sx={{ width: '40%' }}
              mt={1}
              ml={2}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={5}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // data: PropTypes.array.isRequired,
};

export default Hero;
