import React from 'react';
import styles from './hero.module.css';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import Link from 'next/link';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FindDoctor from './../../../../../public/assets/Images/common/find-doctor.png';
import VideoConsultation from './../../../../../public/assets/Images/common/video-consultation.png';
import InClinic from './../../../../../public/assets/Images/common/in-clinic.png';
import Package from './../../../../../public/assets/Images/common/package.png';
import Medifiles from './../../../../../public/assets/Images/common/medifiles.png';


const Hero = props => {
  const { className, ...rest } = props;
  const data = [
    {
      title: 'Find Doctor',
      content: 'Online Aarogya connects you with the doctor of your choice',
      img: FindDoctor,
      pathHref: '/find-doctor',
    },
    {
      title: 'Video Consultation',
      content: 'Now you can have live,on demand a private video consultations, with the doctor of your choice',
      img: VideoConsultation,
      pathHref: '/video-consultation',
    },
    {
      title: 'In- Clinic Consultation',
      content: 'Get quick appointments with no wait time ',
      img: InClinic,
      pathHref: '/clinic-consultation',
    },
    {
      title: 'Care at home',
      content: 'Highly qualified healthcare professionals to take care of you and your loved ones at home.',
      img: Package,
      pathHref: '/package',
    },
    {
      title: 'Order Medicines',
      content: '100% Safe, Secure and Contactless delivery at your doorsteps',
      img:Medifiles,
      pathHref: '/medifiles',
    },
    // {
    //   title: 'Book a lab test',
    //   content: 'Home sample collection from NABL Accredited Labs.',
    //   img:Medifiles,
    //   pathHref: '/medifiles',
    // },
  ];

  return (
    <div className={className} {...rest}>
      <Grid container className={styles.hero_container}>
        {data.map(name => (
          <Grid item sm={2.5} className={styles.card_holder}>
            <Box className={styles.card_holder_inner} sx={{ boxShadow: 5 }}>
              <div className={styles.card_color}>
                <Box alignItems="center" className={styles.img_container}>
                  <img
                    className={styles.img_part}
                    src={name.img}
                    height="160px"
                    width="200px"
                    alt="Aarogya"
                  />
                </Box>

                <Box
                  padding={1}
                  mt={0}
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                >
                  <h3 className={styles.inner_title}> {name.title}</h3>
                  <p className={styles.content}>{name.content}</p>
                </Box>
                <Link href={name.pathHref} className={styles.consult_read}>
                  <div className={styles.consult_read_inner}>
                    <span className={styles.consult_read_more}>Read More</span>
                    <span className={styles.consult_read_more_icon}>
                      <ChevronRightIcon />
                    </span>
                  </div>
                </Link>
              </div>
            </Box>
          </Grid>
        ))}
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
