import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.module.css';
import { HeroShaped } from 'components/organisms';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { useMediaQuery, colors, Typography, Button } from '@material-ui/core';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Badge from '@material-ui/core/Badge';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
const StyledBadge = withStyles(theme => ({
  badge: {
    borderRadius: '50%',
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `var(--bs-lg)`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles(theme => ({
    root:{
        padding: '0px !important',
    },
  appStore: {
    maxWidth: 152,
  },
  bg: {
    background: theme.palette.grey.main,
  },
  googlePlayBtn: {
    border: '1px solid #A6A6A6',
    borderRadius: '5px',
    maxWidth: '150px',
  },
  cover: {
    width: '80%',
    height: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  coverImg: {
    objectFit: 'contain',
    marginLeft: '12px',
  },
  cardBase: {
    borderRadius: '35px',
    border: `2px solid ${colors.blueGrey[50]}`,
    maxWidth: 300,
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3, 0),
  },
  dot: {
    display: 'block',
    width: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: '100%',
    background: colors.grey[500],
    marginRight: theme.spacing(1),
    '&:last-child': {
      marginRight: 0,
    },
  },
  dotHighlighted: {
    background: colors.grey[900],
  },
  divider: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
}));
const VedioConsultBanner = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  return (
    <div className={styles.banner_container}>
      <div className={styles.video_consult_banner}>
        <HeroShaped
            className={styles.video_consult_inner}
          leftSide={
            <SectionHeader
              className={styles.video_consult_inner}
              title={
                <span className={styles.video_title}>
                  Skip the travel!
                  <br />
                  <Typography
                    variant="inherit"
                    component="h4"
                    className={styles.inner_heading}
                  >
                    Take Online Doctor Consultation
                  </Typography>
                </span>
              }
              ctaGroup={[
                <>
                  <Typography variant="6">
                    Private consultation + Audio call · Starts at just ₹199
                  </Typography>
                  <br></br>
                  <div className={styles.badge_imfo_container}>
                    <AvatarGroup max={4} className={styles.avatar_group}>
                      <StyledBadge
                        className={styles.avatar_badge}
                        overlap="circular"
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        variant="dot"
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                        />
                      </StyledBadge>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      />
                      <Avatar
                        alt="Cindy Baker"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      />
                      <Avatar
                        alt="Agnes Walker"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                      />
                    </AvatarGroup>
                    <Typography>+190 Doctors are online </Typography>
                  </div>
                  <Button className={styles.consult_now}>Consult Now</Button>
                  <Typography className={styles.facility}><CardGiftcardIcon/> Verified Doctors <CardGiftcardIcon/> Digital Prescription </Typography>
                </>,
              ]}
              align="left"
              disableGutter
              data-aos="fade-up"
              titleVariant="h3"
            />
          }
        />
      </div>
    </div>
  );
};
VedioConsultBanner.prototypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};
export default VedioConsultBanner;
