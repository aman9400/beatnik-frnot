import React from 'react';
import styles from './hero.module.css';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import Link from 'next/link';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FindDoctor from './../../../../../public/assets/Images/common/common.jpg';
import RFindDoctor from './../../../../../public/assets/Images/r-icon/find-doctor.png';

const Hero = props => {
  const { className, ...rest } = props;
  const data = [
    {
      title: 'Find Doctor',
      content: 'Choose best doctor of your choice in your locality',
      img: RFindDoctor,
      pathHref: '/find-doctor',
    },
    {
      title: 'Video Consultation',
      content: 'Join pain arthitis',
      img: FindDoctor,
      pathHref: '/video-consultation',
    },
    {
      title: 'In-Clinic Consultation',
      content: 'Head Aaches, Migrane',
      img: FindDoctor,
      pathHref: '/clinic-consultation',
    },
    {
      title: 'Package',
      content: 'Eye problem, paid, watery, dryness',
      img: FindDoctor,
      pathHref: '/package',
    },
    {
      title: 'Medifiles',
      content: 'Diahorrea, stomach upset, digestion problem',
      img:FindDoctor,
      pathHref: '/medifiles',
    },
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
