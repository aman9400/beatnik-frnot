import React from 'react';
import styles from './package.module.css';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Box, Typography, Grid } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

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

  const datas = [
    {
      title: 'Plan One',
      bgColor: 'red',
      para: 'Zero convenience fee for your entire family',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/landingPages/doctor.png',
    },

    {
      title: 'Free for all health problems',
      bgColor: 'red',
      para: 'Consult with any doctor from any department',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL +
        '/assets/landingPages/heart-problem.png',
    },
    {
      title: 'Free for full family',
      bgColor: 'red',
      para: 'Free consultation for upto 6 family members',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/landingPages/family.png',
    },
    {
      title: 'One time charged for the period',
      bgColor: 'red',
      para: 'Pay once Rs.9928 for entire year',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL +
        '/assets/landingPages/money-sack.png',
    },
    {
      title: 'Video as well as in-clinic walk consultation',
      bgColor: 'red',
      para: 'Free for Entire ',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL +
        '/assets/landingPages/video-conference.png',
    },
    {
      title: 'Choose from best Doctors of your choice',
      bgColor: 'red',
      para: 'Zero convenience fee for your entire family',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/landingPages/diagnosis.png',
    },
  ];
  const datas2 = [
    {
      title: 'Data Plane Two',
      bgColor: 'red',
      para: 'Zero convenience fee for your entire family',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/landingPages/doctor.png',
    },

    {
      title: 'Free for all health problems',
      bgColor: 'red',
      para: 'Consult with any doctor from any department',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL +
        '/assets/landingPages/heart-problem.png',
    },
    {
      title: 'Free for full family',
      bgColor: 'red',
      para: 'Free consultation for upto 6 family members',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/landingPages/family.png',
    },
    {
      title: 'One time charged for the period',
      bgColor: 'red',
      para: 'Pay once Rs.9928 for entire year',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL +
        '/assets/landingPages/money-sack.png',
    },
    {
      title: 'Video as well as in-clinic walk consultation',
      bgColor: 'red',
      para: 'Free for Entire ',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL +
        '/assets/landingPages/video-conference.png',
    },
    {
      title: 'Choose from best Doctors of your choice',
      bgColor: 'red',
      para: 'Zero convenience fee for your entire family',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/landingPages/diagnosis.png',
    },
  ];
  const datas3 = [
    {
      title: 'Data Plane 3 ',
      bgColor: 'red',
      para: 'Zero convenience fee for your entire family',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/landingPages/doctor.png',
    },

    {
      title: 'Free for all health problems',
      bgColor: 'red',
      para: 'Consult with any doctor from any department',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL +
        '/assets/landingPages/heart-problem.png',
    },
    {
      title: 'Free for full family',
      bgColor: 'red',
      para: 'Free consultation for upto 6 family members',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/landingPages/family.png',
    },
    {
      title: 'One time charged for the period',
      bgColor: 'red',
      para: 'Pay once Rs.9928 for entire year',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL +
        '/assets/landingPages/money-sack.png',
    },
    {
      title: 'Video as well as in-clinic walk consultation',
      bgColor: 'red',
      para: 'Free for Entire ',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL +
        '/assets/landingPages/video-conference.png',
    },
    {
      title: 'Choose from best Doctors of your choice',
      bgColor: 'red',
      para: 'Zero convenience fee for your entire family',
      imgName:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/landingPages/diagnosis.png',
    },
  ];
  const [checked, setChecked] = React.useState(true);
  const [checkValue, setCheckValue] = React.useState(true);

  const [pkgcolorOne, setpkgcolorOne] = React.useState(true);
  const [pkgcolorTwo, setpkgcolorTwo] = React.useState(true);
  const [pkgcolorThree, setpkgcolorThree] = React.useState(true);

  const [fontColor, setFontColor] = React.useState(true);
  const [currentColor, setCurrentColor] = React.useState('black');

  const [iconfirst, setFirst] = React.useState(true);
  const [icontwo, setTwo] = React.useState(true);
  const [iconthree, setThree] = React.useState(true);

  const [planFirst, setPlanFirst] = React.useState(false);
  const [planTwo, setPlanTwo] = React.useState(false);
  // First Plan Set
  const handleChangesFirst = event => {
    setPlanFirst(
      <div className={styles.packages_container_first}>
        {datas.map((item, index) => (
          <div className="swiper-slide" key={index}>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container style={{ marginBottom: '10px' }}>
                <Grid item xs={4} sm={6} md={3}>
                  <Box
                    ml={4}
                    border={2}
                    justifyContent="center"
                    alignItems="center"
                    borderColor="primary.main"
                    borderRadius="80%"
                    padding={2}
                    height={70}
                    width={72}
                  >
                    <center>
                      <img src={item.imgName} height={40} width={40} />
                    </center>
                  </Box>
                </Grid>
                <Grid item xs={8} sm={6} md={9}>
                  <Box ml={3} mt={2}>
                    <h4
                      style={{
                        backgroundColor: item.bgColor,
                        color: 'white',
                        padding: '5px',
                        marginBottom: '20',
                      }}
                    >
                      {item.title} Som
                    </h4>
                    <p>{item.para}</p>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>,
    );
    setCheckValue();
    setPlanTwo();
    setpkgcolorOne('linear-gradient(rgb(250 2 2) 0%, rgb(236 220 219) 100%)');
    setpkgcolorTwo();
    setpkgcolorThree();
    setFirst(<RadioButtonUncheckedIcon color="secondary" />);
    setFontColor('white');
  };
  // Second Plan Set
  const handleChangeSecond = event => {
    setCheckValue(
      <div className={styles.packages_container_second}>
        {datas3.map((item, index) => (
          <div className="swiper-slide" key={index}>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container style={{ marginBottom: '10px' }}>
                <Grid item xs={4} sm={6} md={3}>
                  <Box
                    ml={4}
                    border={2}
                    justifyContent="center"
                    alignItems="center"
                    borderColor="primary.main"
                    borderRadius="80%"
                    padding={2}
                    height={70}
                    width={72}
                  >
                    <center>
                      <img src={item.imgName} height={40} width={40} />
                    </center>
                  </Box>
                </Grid>
                <Grid item xs={8} sm={6} md={9}>
                  <Box ml={3} mt={2}>
                    <h4
                      style={{
                        backgroundColor: item.bgColor,
                        color: 'white',
                        padding: '5px',
                        marginBottom: '20',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p>{item.para}</p>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>,
    );
    setPlanTwo();
    setPlanFirst();
    setpkgcolorTwo('linear-gradient(rgb(250 2 2) 0%, rgb(236 220 219) 100%)');
    setpkgcolorOne();
    setpkgcolorThree();
    setTwo(<RadioButtonUncheckedIcon color="secondary" />);
    setFontColor('white');
    setCurrentColor('black');
  };
  // Third Plan Set
  const handleChangesThird = event => {
    setPlanTwo(
      <div className={styles.packages_container_third}>
        {datas2.map((item, index) => (
          <div className="swiper-slide" key={index}>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container style={{ marginBottom: '10px' }}>
                <Grid item xs={4} sm={6} md={3}>
                  <Box
                    ml={4}
                    border={2}
                    justifyContent="center"
                    alignItems="center"
                    borderColor="primary.main"
                    borderRadius="80%"
                    padding={2}
                    height={70}
                    width={72}
                  >
                    <center>
                      <img src={item.imgName} height={40} width={40} />
                    </center>
                  </Box>
                </Grid>
                <Grid item xs={8} sm={6} md={9}>
                  <Box ml={3} mt={2}>
                    <h4
                      style={{
                        backgroundColor: item.bgColor,
                        color: 'white',
                        padding: '5px',
                        marginBottom: '20',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p>{item.para}</p>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>,
    );
    setCheckValue();
    setPlanFirst();
    setpkgcolorTwo();
    setpkgcolorOne();
    setpkgcolorThree('linear-gradient(rgb(250 2 2) 0%, rgb(236 220 219) 100%)');
    setThree(<RadioButtonUncheckedIcon color="secondary" />);
    setFontColor('white');
    setCurrentColor('black');
  };

  const elements = [
    '50% off on all consultation',
    'Additional 20% off on Health checkup Packages',
    'Access to top Doctors from top Hospitals',
    '30 specialty covered',
    'Free followup upto 5 days',
    'Converse upto 6 members of the family',
  ];

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={5}>
          <div className="plan_container">
          <checkValue/>
          {planTwo ? planTwo : false}
          {planFirst ? planFirst : false}
          </div>

          <Typography variant="body2" color="text.secondary">
            * Unlimited consultation with ZERO convenience charges
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container>
            {/* Plan First Controller */}
            <Grid item md={4} xs={12}>
              <Grid container justifyContent="center">
                <Box
                  onClick={handleChangesFirst}
                  mb={3}
                  style={{
                    background: pkgcolorOne,
                    color: pkgcolorOne ? fontColor : currentColor,
                    pointer: 'cursor',
                    cursor: 'pointer',
                  }}
                  height={160}
                  width={160}
                  border={2}
                  borderRadius={15}
                  padding={5}
                  borderColor="#ffccca"
                >
                  <div
                    style={{
                      marginLeft: '65px',
                      marginTop: '-50px',
                      position: 'absolute',
                    }}
                  ></div>
                  <div style={{ marginTop: '20px', lineHeight: '12px' }}>
                    <h3>3 Months </h3> <br />
                    <h4 className={classes.pkgPrice}>
                      <s>₹ 8343</s>{' '}
                    </h4>{' '}
                    <br />
                    <h4 className={classes.pkgPrice}>
                      <b> ₹ 1343 </b>
                    </h4>
                  </div>
                </Box>
              </Grid>
            </Grid>
            {/* Plan Two Controller */}
            <Grid item md={4} xs={12}>
              <Grid container justifyContent="center">
                <Box
                  onClick={handleChangeSecond}
                  mb={3}
                  style={{
                    background: pkgcolorTwo,
                    color: pkgcolorTwo ? fontColor : currentColor,
                    pointer: 'cursor',
                    cursor: 'pointer',
                  }}
                  height={160}
                  width={160}
                  border={2}
                  borderRadius={15}
                  padding={5}
                  borderColor="#ffccca"
                >
                  <div
                    style={{
                      marginLeft: '65px',
                      marginTop: '-50px',
                      position: 'absolute',
                    }}
                  ></div>
                  <div style={{ marginTop: '20px', lineHeight: '12px' }}>
                    <h3>6 Months </h3> <br />
                    <h4 className={classes.pkgPrice}>
                      <s>₹ 8343</s>{' '}
                    </h4>{' '}
                    <br />
                    <h4 className={classes.pkgPrice}>
                      <b> ₹ 5434 </b>
                    </h4>
                  </div>
                </Box>
              </Grid>
            </Grid>
            {/* Plan Third Controller  */}
            <Grid item md={4} xs={12}>
              <Grid container justifyContent="center">
                <Box
                  onClick={handleChangesThird}
                  mb={3}
                  style={{
                    background: pkgcolorThree,
                    color: pkgcolorThree ? fontColor : currentColor,
                    cursor: 'pointer',
                  }}
                  height={160}
                  width={160}
                  border={2}
                  borderRadius={15}
                  padding={5}
                  borderColor="#ffccca"
                >
                  <div
                    style={{
                      marginLeft: '65px',
                      marginTop: '-50px',
                      position: 'absolute',
                    }}
                  ></div>
                  <div style={{ marginTop: '20px', lineHeight: '12px' }}>
                    <h3>9 Months </h3> <br />
                    <h4 className={classes.pkgPrice}>
                      <s>₹ 8622</s>{' '}
                    </h4>{' '}
                    <br />
                    <b>
                      <h4 className={classes.pkgPrice}> ₹ 9432</h4>{' '}
                    </b>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item md={12} xs={12}>
              <Box mt={3} bgcolor="#e6e6e6" height={10}></Box>
            </Grid>
          </Grid>

          <Box mt={3}>
            <h3>What You Get</h3>
          </Box>
          {elements.map((value, index) => {
            return (
              <Box mt={2} display="flex">
                <CheckCircleOutlineIcon color="primary" />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className={classes.typoStyle}
                >
                  {value}
                </Typography>
              </Box>
            );
          })}
        </Grid>
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
