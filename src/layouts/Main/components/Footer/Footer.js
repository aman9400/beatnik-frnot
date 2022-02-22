import React from 'react';
import styles from './footer.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Typography,
  Grid,
  ListItem,
  List,
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BrandLogo from './../../../../../public/assets/Images/logo/online-aarogya-logo.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import FooterBG from './../../../../../public/assets/Images/banner/download-aap-bg.png'
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 0),
    },
    background: 'var(--white)',
  },
  rootMode: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: '#fddbda',
  },

  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    margin: '0 auto',
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    marginTop: '-18px',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    position: 'relative',
    top: '-26px',
    left: '6px',
    marginRight: theme.spacing(1),
    color: '#5e5e64',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    marginBottom: '10px',
  },
  menuItem: {
    margin: '0 0 0 15px !important',
  },

  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'var(--heading-color)',
    fontWeight: '600',
    fontSize: '18px',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'var(--heading-color)',
    fontSize: '14px !important',
    fontWeight: '500',
    lineHeight: '18px',
    transition: '0.6s',
    '&:hover': {
      transform: 'translateX(5px)',
    }
  },
  navLinkMode: {
    color: 'rgb(231 231 232)',
  },
}));

const Footer = props => {
  const { pages, themeMode, className, ...rest } = props;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  console.log('theme', props);

  const classes = useStyles();

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const supportedPagesOthers = pages.pages;
  const account = pages.landings;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant="body2" className={classes.menuGroupTitle}>
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={'a'}
              href={page.href}
              className={clsx(
                themeMode === 'light' ? classes.navLink : classes.navLinkMode,
                'submenu-item',
              )}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const CompanyDetails = () => {
    return (
      <div className={styles.company_details}>

        {isMd ? (
          <div className={styles.company_info}>
            <Link href="/">
              <p>
                <img
                  src={BrandLogo}
                  alt="Online Aarogya Consultant Private Limited"
                />
              </p>
            </Link>
            <Typography variant="body2">
              ACPL is a start-up in the field of medical healthcare including
              tele-medicine.
            </Typography>
            <div className={styles.company_add}>
              <Typography variant="body2">
                <LocationOnIcon />
              </Typography>
              <Typography variant="body2">
                <a href="https://goo.gl/maps/yn4HWig6t2tCMF8n9" target="_blank">
                  <p>
                    175/108, Landmark Business Hub, 1st floor,Tokarkhada Silvassa,
                    Dadra & Nagar and Daman & Diu, 396230
                  </p>
                </a>
              </Typography>
            </div>
            <div className={styles.company_add}>
              <Typography variant="body2">
                <MailIcon />
              </Typography>
              <Typography variant="body2">
                <Link href="mailto:hr@oaarogya.com">
                  <p> hr@oaarogya.com</p>
                </Link>
              </Typography>
            </div>
            <div className={styles.company_add}>
              <Typography variant="body2">
                <PhoneIcon />
              </Typography>
              <Typography variant="body2">
                <Link href="tel:+91 9574882777">
                  <p>+91 9574882777</p>
                </Link>
              </Typography>
            </div>
          </div>
        ) : (
          <Accordion className={styles.accordion_main}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Online Aarogya</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={styles.company_info}>
                <Link href="/">
                  <p>
                    <img
                      src={BrandLogo}
                      alt="Online Aarogya Consultant Private Limited"
                    />
                  </p>
                </Link>
                <Typography variant="body2">
                  ACPL is a start-up in the field of medical healthcare including
                  tele-medicine.
                </Typography>
                <div className={styles.company_add}>
                  <Typography variant="body2">
                    <LocationOnIcon />
                  </Typography>
                  <Typography variant="body2">
                    <a href="https://goo.gl/maps/yn4HWig6t2tCMF8n9" target="_blank">
                      <p>
                        175/108, Landmark Business Hub, 1st floor,Tokarkhada Silvassa,
                        Dadra & Nagar and Daman & Diu, 396230
                      </p>
                    </a>
                  </Typography>
                </div>
                <div className={styles.company_add}>
                  <Typography variant="body2">
                    <MailIcon />
                  </Typography>
                  <Typography variant="body2">
                    <Link href="mailto:hr@oaarogya.com">
                      <p> hr@oaarogya.com</p>
                    </Link>
                  </Typography>
                </div>
                <div className={styles.company_add}>
                  <Typography variant="body2">
                    <PhoneIcon />
                  </Typography>
                  <Typography variant="body2">
                    <Link href="tel:+91 9574882777">
                      <p>+91 9574882777</p>
                    </Link>
                  </Typography>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        )}
      </div>
    );
  };

  const LandingPages = () => {
    const { services } = landings.children;
    return (
      <div className={classes.menu}>
        {isMd ? (

          <div className={styles.fotter_menu_item}>
            <MenuGroup item={services} />
          </div>
        ) : (
          <Accordion className={styles.accordion_main}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Home </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={styles.fotter_menu_item}>
                <MenuGroup item={services} />
              </div>
            </AccordionDetails>
          </Accordion>
        )}

      </div>
    );
  };

  const SupportedPages = () => {
    const { career } = supportedPages.children;
    return (
      <div className={classes.menu}>
        {isMd ? (
          <div className={styles.fotter_menu_item}>
            <MenuGroup item={career} />
          </div>
        ) : (
          <Accordion className={styles.accordion_main}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>For Doctor</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={styles.fotter_menu_item}>
                <MenuGroup item={career} />
              </div>
            </AccordionDetails>
          </Accordion>

        )}

      </div>
    );
  };
  const SupportedPagesOthers = () => {
    const { blog, portfolio } = supportedPagesOthers.children;
    return (
      <div className={classes.menu}>
        {isMd ? (
          <div className={styles.fotter_menu_item}>
            <MenuGroup item={portfolio} />
            <MenuGroup item={blog} />
          </div>
        ) : (
          <Accordion className={styles.accordion_main}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>For Corporates & Legal Info</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={styles.fotter_menu_item}>
                <MenuGroup item={portfolio} />
                <MenuGroup item={blog} />
              </div>
            </AccordionDetails>
          </Accordion>
        )}

      </div>
    );
  };
  const AccountPages = () => {
    const { web } = landings.children;
    return (
      <div className={classes.menu}>
        {isMd ? (
          <div className={styles.fotter_menu_item}>
            <MenuGroup item={web} />
          </div>
        ) : (
          <Accordion className={styles.accordion_main}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>For Patients</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={styles.fotter_menu_item}>
                <MenuGroup item={web} />
              </div>
            </AccordionDetails>
          </Accordion>
        )}

      </div>
    );
  };

  return (
    <div container {...rest} className={styles.footerContainer} style={{ backgroundImage: `url(${FooterBG})` }}>
      <Container fixed>
        <div>
          <Grid container spacing={4} className={styles.footerInnerContainer}>
            <Grid xs={12} sm={6} lg={2} xl={2} md={2}>
              <CompanyDetails />
            </Grid>
            <Grid xs={12} sm={6} lg={2} xl={2} md={2}>
              <LandingPages />
            </Grid>
            <Grid xs={12} sm={6} lg={2} xl={2} md={2}>
              <SupportedPages />
            </Grid>
            <Grid xs={12} sm={6} lg={2} xl={2} md={2}>
              <SupportedPagesOthers />
            </Grid>
            <Grid xs={12} sm={6} lg={2} xl={2} md={2}>
              <AccountPages />
            </Grid>
            <Grid xs={12} sm={6} lg={2} xl={2} md={2}>
              {isMd ? (
                <div className={styles.download_offer}>
                  <Box
                    mt={3}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ marginTop: '0px', }}
                  >
                    <div
                      style={{
                        padding: '8px',
                        backgroundColor: '#ffdede',
                        color: 'brown',
                        fontSize: 'medium',
                      }}
                    >
                      {' '}
                      <span style={{ marginRight: '8px' }}>Offer</span>
                      <i className="fas fa-gift"></i>
                    </div>
                  </Box>

                  <Box
                    mt={3}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography style={{ textTransform: 'uppercase', color: 'var(--heading-color)', fontWeight: '600', fontSize: '18px', }}>Download App</Typography>
                    <br />
                  </Box>

                  <Box
                    mt={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      style={{
                        height: '25px',
                        width: '25px',
                        padding: '',
                        borderRadius: '50%',
                        display: 'inline-block',
                        border: '1px solid #a3a3a3',

                        marginRight: '5px',
                      }}
                      href="https://play.google.com/store/apps/details?id=com.aarogya"
                      target="_blank"
                    >
                      <center>
                        <i style={{ color: 'var(--heading-color)' }} className="fab fa-apple"></i>
                      </center>
                    </a>
                    <a
                      style={{
                        height: '25px',
                        width: '25px',
                        padding: '',
                        borderRadius: '50%',
                        display: 'inline-block',
                        border: '1px solid #a3a3a3',
                      }}
                      href="https://play.google.com/store/apps/details?id=com.aarogya"
                    >
                      <center>
                        <i style={{ color: 'var(--heading-color)' }} className="fab fa-google-play"></i>
                      </center>
                    </a>
                  </Box>

                  <Box
                    mt={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography style={{ textTransform: 'uppercase', color: 'var(--heading-color)', fontWeight: '600', fontSize: '18px', }} >FOLLOW US</Typography>
                    <br />
                  </Box>

                  <Box
                    mt={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      style={{
                        height: '25px',
                        width: '25px',
                        padding: '',
                        borderRadius: '50%',
                        display: 'inline-block',
                        border: '1px solid #a3a3a3',
                        marginRight: '5px',
                      }}

                      href="https://play.google.com/store/apps/details?id=com.aarogya"
                      target="_blank"
                    >
                      <center>
                        <i style={{ color: 'var(--heading-color)' }} className="fab fa-facebook-f"></i>
                      </center>
                    </a>
                    <div
                      style={{
                        height: '25px',
                        width: '25px',
                        padding: '',
                        borderRadius: '50%',
                        display: 'inline-block',
                        border: '1px solid #a3a3a3',
                        marginRight: '5px',
                      }}
                    >
                      <center>
                        <i style={{ color: 'var(--heading-color)' }} className="fab fa-instagram-square"></i>
                      </center>
                    </div>
                    <div
                      style={{
                        height: '25px',
                        width: '25px',
                        padding: '',
                        borderRadius: '50%',
                        display: 'inline-block',
                        border: '1px solid #a3a3a3',
                        marginRight: '5px',
                      }}
                    >
                      <center>
                        <i className="fab fa-twitter"></i>
                      </center>
                    </div>
                    <div
                      style={{
                        height: '25px',
                        width: '25px',
                        padding: '',
                        borderRadius: '50%',
                        display: 'inline-block',
                        border: '1px solid #a3a3a3',
                      }}
                    >
                      <center>
                        <i style={{ color: 'var(--heading-color)' }} className="fab fa-google-play"></i>
                      </center>
                    </div>
                  </Box>
                </div>
              ) : (
                <Accordion className={styles.accordion_main}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>Download App</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={styles.download_offer}>
                      <Box
                        mt={3}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        style={{ marginTop: '0px', }}
                      >
                        <div
                          style={{
                            padding: '8px',
                            backgroundColor: '#ffdede',
                            color: 'brown',
                            fontSize: 'medium',
                          }}
                        >
                          {' '}
                          <span style={{ marginRight: '8px' }}>Offer</span>
                          <i className="fas fa-gift"></i>
                        </div>
                      </Box>

                      <Box
                        mt={3}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Typography style={{ textTransform: 'uppercase', color: 'var(--heading-color)', fontWeight: '600', fontSize: '18px', }}>Download App</Typography>
                        <br />
                      </Box>

                      <Box
                        mt={1}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <a
                          style={{
                            height: '25px',
                            width: '25px',
                            padding: '',
                            borderRadius: '50%',
                            display: 'inline-block',
                            border: '1px solid #a3a3a3',

                            marginRight: '5px',
                          }}
                          href="https://play.google.com/store/apps/details?id=com.aarogya"
                          target="_blank"
                        >
                          <center>
                            <i style={{ color: 'var(--heading-color)' }} className="fab fa-apple"></i>
                          </center>
                        </a>
                        <a
                          style={{
                            height: '25px',
                            width: '25px',
                            padding: '',
                            borderRadius: '50%',
                            display: 'inline-block',
                            border: '1px solid #a3a3a3',
                          }}
                          href="https://play.google.com/store/apps/details?id=com.aarogya"
                        >
                          <center>
                            <i style={{ color: 'var(--heading-color)' }} className="fab fa-google-play"></i>
                          </center>
                        </a>
                      </Box>

                      <Box
                        mt={2}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Typography style={{ textTransform: 'uppercase', color: 'var(--heading-color)', fontWeight: '600', fontSize: '18px', }} >FOLLOW US</Typography>
                        <br />
                      </Box>

                      <Box
                        mt={1}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <a
                          style={{
                            height: '25px',
                            width: '25px',
                            padding: '',
                            borderRadius: '50%',
                            display: 'inline-block',
                            border: '1px solid #a3a3a3',
                            marginRight: '5px',
                          }}

                          href="https://play.google.com/store/apps/details?id=com.aarogya"
                          target="_blank"
                        >
                          <center>
                            <i style={{ color: 'var(--heading-color)' }} className="fab fa-facebook-f"></i>
                          </center>
                        </a>
                        <div
                          style={{
                            height: '25px',
                            width: '25px',
                            padding: '',
                            borderRadius: '50%',
                            display: 'inline-block',
                            border: '1px solid #a3a3a3',
                            marginRight: '5px',
                          }}
                        >
                          <center>
                            <i style={{ color: 'var(--heading-color)' }} className="fab fa-instagram-square"></i>
                          </center>
                        </div>
                        <div
                          style={{
                            height: '25px',
                            width: '25px',
                            padding: '',
                            borderRadius: '50%',
                            display: 'inline-block',
                            border: '1px solid #a3a3a3',
                            marginRight: '5px',
                          }}
                        >
                          <center>
                            <i className="fab fa-twitter"></i>
                          </center>
                        </div>
                        <div
                          style={{
                            height: '25px',
                            width: '25px',
                            padding: '',
                            borderRadius: '50%',
                            display: 'inline-block',
                            border: '1px solid #a3a3a3',
                          }}
                        >
                          <center>
                            <i style={{ color: 'var(--heading-color)' }} className="fab fa-google-play"></i>
                          </center>
                        </div>
                      </Box>
                    </div>
                  </AccordionDetails>
                </Accordion>
              )}

            </Grid>
          </Grid>
        </div>
      </Container>
      <div className={styles.bottom_footer}>
        <Grid item xl={12}>
          <p>
            Copyright @ 2021 All rights reserved.
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://onlineaarogya.com/"
            >
              Aarogya Consult Pvt. Ltd.
            </Link>{' '}
          </p>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
