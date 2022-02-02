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
} from '@material-ui/core';
import { Accordion } from 'components/organisms';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

  const offerings = [
    {
      title: 'Online Consultations',
      authorPhoto: {
        src: 'https://careclues.imgix.net/assets/home-banner-02.png',
        srcSet: 'https://careclues.imgix.net/assets/home-banner-02.png 2x',
      },
      name: 'Offline Consultations',
    },
    {
      title: 'Pet Aarogya',
      authorPhoto: {
        src: 'https://careclues.imgix.net/assets/home-banner-02.png',
        srcSet: 'https://careclues.imgix.net/assets/home-banner-02.png 2x',
      },
      name: 'Pet Aarogya',
    },
    {
      title: 'Lets Talk',
      authorPhoto: {
        src: 'https://careclues.imgix.net/assets/home-banner-02.png',
        srcSet: 'https://careclues.imgix.net/assets/home-banner-02.png 2x',
      },
      name: 'Lets Talk',
    },
    {
      title: 'Aarogya Mall',
      authorPhoto: {
        src: 'https://careclues.imgix.net/assets/home-banner-02.png',
        srcSet: 'https://careclues.imgix.net/assets/home-banner-02.png 2x',
      },
      name: 'Aarogya Mall',
    },
    {
      title: 'MediFiles',
      authorPhoto: {
        src: 'https://careclues.imgix.net/assets/home-banner-02.png',
        srcSet: 'https://careclues.imgix.net/assets/home-banner-02.png 2x',
      },
      name: 'MediFiles',
    },
    {
      title: 'ShapeItUp',
      authorPhoto: {
        src: 'https://careclues.imgix.net/assets/home-banner-02.png',
        srcSet: 'https://careclues.imgix.net/assets/home-banner-02.png 2x',
      },
      name: 'ShapeItUp',
    },
  ];

  return (
    <div className={className} {...rest}>
      {/* <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}

      {/* <Box
        marginBottom={2}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        padding={2}
        border="1px solid #ccc"
        borderRadius="4px"
      >
        <div className={classes.new}>
          <h3>hello</h3>
        </div>

        <Accordion items={items} />
      </Box> */}
      <SectionHeader
        title="Our offerings"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Grid container spacing={isMd ? 2 : 1}>
        {offerings.map((item, index) => (
          <Grid item xs={6} sm={6} md={4} key={index} data-aos="fade-up">
            <CardBase className={classes.cardBase} liftUp>
              <ListItem disableGutters className={classes.listItem}>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar {...item.authorPhoto} className={classes.avatar} />
                </ListItemAvatar>
                <ListItemText
                  className={classes.listItemText}
                  primary={item.name}
                  // secondary={item.title}
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
