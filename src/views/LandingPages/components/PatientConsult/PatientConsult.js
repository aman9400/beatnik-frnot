import React from 'react';
import styles from './patientConsult.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useTheme } from '@material-ui/core/styles';
import {  Box, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import 'react-multi-carousel/lib/styles.css';

const PatientConsult = props => {
  const { className, ...rest } = props;

  const theme = useTheme();


  const data = [
    {
      _id:1,
      content: 'Fever, Cold, Shaking Chills',
      imgAttribute: 'Fever, Cold, Shaking Chills',
      img: process.env.NEXT_PUBLIC_BASE_URL + '/assets/VectorImages/fever.png',
      pathLink:'/find-doctor'
    },
    {
      _id:2,
      content: 'Join Pain Arthritis ',
      imgAttribute: 'Join Pain Arthritis ',
      img: process.env.NEXT_PUBLIC_BASE_URL + '/assets/VectorImages/pain.png',
      pathLink:'/find-doctor'
      
    },
    {
      _id:3,
      content: 'Headache, Migraine',
      imgAttribute: 'Headache, Migraine',
      img:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/VectorImages/headache.png',
        pathLink:'/find-doctor'
    },
    {
      _id:4,
      content: 'Diarrhea , Stomach Upset, Digestion Problem',
      imgAttribute: 'Diarrhea , stomach upset, digestion problem',
      img:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/VectorImages/diarrhea.png',
        pathLink:'/find-doctor'
    },
    {
      _id:5,
      content: 'Eye Problem, Paid, Watery, Dryness',
      imgAttribute: 'Eye problem, paid, watery, dryness',
      img: process.env.NEXT_PUBLIC_BASE_URL + '/assets/VectorImages/vision.png',
      pathLink:'/find-doctor'
    },
    {
      _id:6,
      content: 'Obesity, Thyroid ',
      imgAttribute: 'Obesity, Thyroid',
      img:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/VectorImages/thyroid.png',
        pathLink:'/find-doctor'
    },
    {
      _id:7,
      content: 'Dental Issues, Tooth Ache, Gum Bleeding',
      imgAttribute: 'Dental issues, Tooth Ache, Gum Bleeding',
      img:
        process.env.NEXT_PUBLIC_BASE_URL +
        '/assets/VectorImages/dental-checkup.png',
        pathLink:'/find-doctor'
    },
    {
      _id:8,
      content: 'Overweight or Under weight problem in children',
      imgAttribute: 'Overweight or Under weight problem in children',
      img: process.env.NEXT_PUBLIC_BASE_URL + '/assets/VectorImages/fat.png',
      pathLink:'/find-doctor'
    },
    {
      _id:9,
      content: 'Period Doubts or Pregnancy',
      imgAttribute: 'Period Doubts or Pregnancy',
      img:
        process.env.NEXT_PUBLIC_BASE_URL + '/assets/VectorImages/pregnancy.png',
        pathLink:'/find-doctor'
    },
    {
      _id:10,
      content: 'Acne, Pimple or Skin Issue',
      imgAttribute: 'Acne,Pimple or Skin Issue',
      img: process.env.NEXT_PUBLIC_BASE_URL + '/assets/VectorImages/acne.png',
      pathLink:'/find-doctor'
    },
    {   _id:11,
      content: 'Depression or Anxiety',
      imgAttribute: 'Depression or Anxiety',
      img:
        process.env.NEXT_PUBLIC_BASE_URL +
        '/assets/VectorImages/depression.png',
        pathLink:'/find-doctor'
    },

    {
      _id:12,
      content: 'Child not feeling well',
      imgAttribute: 'Child not feeling well',
      img:
        process.env.NEXT_PUBLIC_BASE_URL +
        '/assets/VectorImages/childfever.png',
        pathLink:'/find-doctor'
    },
  ];

  return (
    <div className={styles.patientConsult_container} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={styles.patientConsult_main_title}>
            <Typography
              className={styles.patientConsult_title}
            >
              Consult top doctors online for any health concern
            </Typography>
            <Typography
              className={styles.patientConsult_subtitle}
            >
              Private online consultations with verified doctors in all
              specialists
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={styles.patientConsult_inner}>
        {data.map(name => (
          <Grid
          container
            data-aos="zoom-in"
            className={styles.patientConsult_inner_con}
            item
            xs={2}
            sm={2}
            md={2}
          >
            <Box key={name._id} className={styles.patientConsult_inner_card}>
              <Link href={name.pathLink}>
                <div className={styles.card_color}>
                  <Box className={styles.img_card}>
                    <img src={name.img} alt={name.imgAttribute} />
                  </Box>
                  <Box className={styles.patient_content}>{name.content}</Box>
                </div>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

PatientConsult.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // data: PropTypes.array.isRequired,
};

export default PatientConsult;
