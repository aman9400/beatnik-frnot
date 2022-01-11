import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Box,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  card_color: {
    width: '150px',
    objectFit: 'contain',
    margin: '0 auto',
    textAlign: 'center',
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
  news_title:{
    color: 'var(--heading-color)',
    display: 'block',
    fontSize: '32px !important',
    fontWeight: '700 !important',
    marginBottom: '30px !important',
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const data = [
    {
      img: process.env.NEXT_PUBLIC_BASE_URL + '/assets/news/1.png',
    },
    {
      img: process.env.NEXT_PUBLIC_BASE_URL + '/assets/news/02.png',
    },
    {
      img: process.env.NEXT_PUBLIC_BASE_URL + '/assets/news/03.png',
    },
    {
      img: process.env.NEXT_PUBLIC_BASE_URL + '/assets/news/04.png',
    },
    {
      img: process.env.NEXT_PUBLIC_BASE_URL + '/assets/news/02.png',
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // code for star rating

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2} justifyContent="space-between">
        <Grid container justifyContent="center">
          {isMd ? (
            <Box>
              <Typography variant="h2" className={classes.news_title}>
                We are in the News
              </Typography>
            </Box>
          ) : (
            <Box >
              <Typography variant="h2" className={classes.news_title}>
                We are in the News
              </Typography>
            </Box>
          )}
        </Grid>

        {data.map(name => (
          <Grid
          data-aos="fade-up"
            item
            xs={12}
            md={2}
            style={{
              padding: '16px',
              border: 'var(--border)',
              borderRadius: '10px',
              backgroundColor: 'var(--white)',
            }}
          >
            <Box mt={0}>
              <a onClick={handleClickOpen} style={{ cursor: 'pointer' }}>
                <img
                  src={name.img}
                  className={classes.card_color}
                  height={60}
                  width={150}
                />
              </a>
            </Box>
          </Grid>
        ))}

        <Grid container justifyContent="center">
          <Box mb={2} mt={4} ml={4}>
            <Button variant="contained" color="primary">
              View More . .
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Drop down Dialog Box   */}
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ color: 'green' }}>{'News About us '}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            An article is any member of a class of dedicated words that are used
            with noun phrases to mark the identifiability of the referents of
            the noun phrases. The category of articles constitutes a part of
            speech. In English, both "the" and "a/an" are articles, which
            combine with nouns to form noun phrases.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
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
