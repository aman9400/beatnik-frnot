/* Author: Paveen singh */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  useMediaQuery,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Box,
  Divider,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  cardBase: {
    boxShadow: 'none',
    background: theme.palette.alternate.main,
    borderRadius: theme.spacing(1),
    '& .card-base__content': {
      padding: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
      },
    },
  },
  avatar: {
    width: 110,
    height: 110,
    border: `4px solid ${theme.palette.alternate.dark}`,
    borderRadius: '100%',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.1)',
  },
  listItem: {
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  listItemAvatar: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 0,
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
  table: {
    minWidth: 650,
  },

  new: {
    height: '200px',
    width: '200px',
    border: '1px solid',
    background: '#ccc',
    type: 'dark',
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Team = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      {/* <SectionHeader
        title="Meet our team"
        subtitle="After 3 days all of your offers will arrive and you will have another 7 days to select your new company."
      /> */}

      <Divider />
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={isMd ? 2 : 1}>
        {data.map((item, index) => (
          <Grid item xs={6} sm={6} md={4} key={index} data-aos="fade-up">
            <CardBase className={classes.cardBase} liftUp>
              <ListItem disableGutters className={classes.listItem}>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar {...item.authorPhoto} className={classes.avatar} />
                </ListItemAvatar>
                <ListItemText
                  className={classes.listItemText}
                  primary={item.authorName}
                  secondary={item.title}
                  primaryTypographyProps={{
                    className: classes.title,
                    variant: 'h6',
                    align: isMd ? 'left' : 'center',
                  }}
                  secondaryTypographyProps={{
                    color: 'textPrimary',
                    align: isMd ? 'left' : 'center',
                  }}
                />
              </ListItem>
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Team.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Team;
