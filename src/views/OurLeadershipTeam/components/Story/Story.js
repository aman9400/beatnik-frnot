import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Button,
  Typography,
  Grid,
  IconButton,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardProduct } from 'components/organisms';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

const useStyles = makeStyles(theme => ({
  cardProduct: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
    '& .card-product__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      flex: '1 1 50%',
    },
    '& .card-product__media': {
      minHeight: 300,
      height: '100%',
      flex: '1 1 50%',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column !important',
      '& .card-product__content': {
        flex: '1 1 100%',
      },
      '& .card-product__media': {
        flex: '1 1 100%',
        width: '100%',
      },
    },
  },
  cardProductReverse: {
    flexDirection: 'row-reverse',
  },
  image: {
    objectFit: 'cover',
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  button: {
    marginTop: theme.spacing(2),
    alignSelf: 'flex-start',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(3),
    },
  },
  blogTitle: {
    // textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: '10px',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tag: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1 / 2),
    background: theme.palette.primary.main,
    color: 'white',
    margin: theme.spacing(0, 1, 1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
  author: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0),
    },
  },
}));

const PopularNews = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const bk = '<br>';

  const BlogMediaContent = props => (
    <Image
      {...props}
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );

  const BlogContent = props => (
    <div className={classes.blogContent}>
      <Typography
        variant="h6"
        color="textPrimary"
        className={classes.blogTitle}
      >
        {props.title}
      </Typography>

      <Typography
        variant="h7"
        color="textSecondary"
        className={classes.blogTitle}
      >
        {props.position}
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        {props.subtitle}
      </Typography>
      {/* <Button
        variant="outlined"
        color="primary"
        size="large"
        className={classes.button}
      >
        More Info.
      </Button> */}
      <div>
        <IconButton className={classes.socialIcon}>
          <FacebookIcon />
        </IconButton>
        <IconButton className={classes.socialIcon}>
          <InstagramIcon />
        </IconButton>
        <IconButton className={classes.socialIcon}>
          <TwitterIcon />
        </IconButton>
        <IconButton className={classes.socialIcon}>
          <PinterestIcon />
        </IconButton>
      </div>
    </div>
  );

  const data = [
    {
      cover: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Shweta.png',
        srcSet: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Shweta.png 2x',
      },
      title: 'Dr Shweta Das',
      position: 'Co-Founder, ACPL',
      subtitle:
        'Shweta leads in the subject matter expertise to ACPL. She is a dentist by profession and alumnus of Vydehi Institute of Medical Sciences, Bangalore. She also has expertise in advance medical cosmetology and aesthetics. Being a doctor, she has closely worked and seen the daily struggles of the medical practitioners.  She believes that mapping the true needs and the problems of medical fraternity coupled with technology has potential to improve the quality of medical services. /n She has successfully lead as project coordinator for an international project “LPEP” for eradication of leprosy and has represented India at international level for the Leprosy work at Netherland leprosy relief foundation.',
    },
    {
      cover: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Anand.png',
        srcSet: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Anand.png 2x',
      },
      title: 'Anand Chandnani',
      position: 'Co-Founder, ACPL',
      subtitle:
        'Anand has worked at Tata Group for about 20 years prior to ACPL.  His strength lies in business strategy and general management of the Organisation, and is responsible for the overall ACPL’s vision of bringing better healthcare services to masses even with locational disadvantage. He has been Alumnus of Govt. Engineering College Bilaspur, Indian Institute of Technology Kharagpur, and XLRI Jamshedpur. His expertise lies in various domains notably Industrial Engineering, Marketing & Sales, Strategic Procurement, Project Planning an Management, Theory of Constraints, Value Engineering, and Total Productive Maintenance.',
    },
    {
      cover: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Shruti.png',
        srcSet: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Shruti.png 2x',
      },
      title: 'Shruti Das',
      position: 'Co-Founder, ACPL',
      subtitle:
        '“Healthcare is every individual’s right”  Shruti brings in product design and over-all process know-how to ACPL delivery systems. Her administrative skills with her education in hospital administration, healthcare management and pharmacy, further compliments to the robustness and security of back-end processes management. She is a certified pharmacist and Child Psychologist.  Prior to ACPL, Shruti has worked with an international NGO for the upliftment of under-privileged children. She has held the position of State Program Manager for various “National Health Programs”, including LPEP project for the eradication of Leprosy.',
    },
    {
      cover: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Praveen-singh.png',
        srcSet:
          process.env.NEXT_PUBLIC_BASE_URL + '/assets/Praveen-singh.png 2x',
      },
      title: 'Praveen Singh ',
      position: 'Co-Founder, ACPL',
      subtitle:
        'Praveen believes that it is possible to empower people through technology. Medical healthcare is one field where he feels that there is a huge gap in-country and that technology can improve the accessibility of medical facilities to the masses. Praveen is currently the CTO of ACPL and has 8+ years of experience in the IT services industry with multifaceted expertise including creation & management of e-commerce, social networking portals, Travel booking systems, Financial Technologies (Fintech), digital signages and Job portals.',
    },
  ];

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Our leadership Team"
        // subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        subtitleProps={{
          color: 'textPrimary',
        }}
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} key={index} data-aos="fade-up">
            <CardProduct
              className={clsx(
                classes.cardProduct,
                index % 2 === 1 ? classes.cardProductReverse : {},
              )}
              mediaContent={
                <BlogMediaContent {...item.cover} alt={item.title} />
              }
              cardContent={
                <BlogContent
                  title={item.title}
                  subtitle={item.subtitle}
                  position={item.position}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

PopularNews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // data: PropTypes.array.isRequired,
};

export default PopularNews;
