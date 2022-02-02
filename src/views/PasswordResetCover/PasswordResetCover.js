import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './components';

import { SectionHeader } from 'components/molecules';

import BrandLogo from './../../../public/assets/Images/logo/online-aarogya-logo.png';
import MetaTitle from 'components/helper/MetaTitle';
import Link from 'next/link';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: ' center',
    placeItems: 'center',
    textAlign: 'center',
  },
  formContainer: {
    width: '420px',
    height: '380px',
    padding: '40px 30px',
    overflow: 'hidden',
    position: 'relative',
    background: '#f9f9f9',
    boxShadow: '0px 0px 6px #00000047',
    borderRadius: '10px',
  },
  image: {
    objectFit: 'cover',
  },
}));

const PasswordResetCover = () => {
  const classes = useStyles();

  const [mobile, setMobile] = React.useState();
  React.useEffect(() => {
    // const urlParams = new URLSearchParams(window.location.search);
    const myParam = '8857091889'
    var msg =
      'Check your Mobile Number for the OTP Verification (' + myParam + ')';
    setMobile(msg);
  }, []);

  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Online Aarogya | OTP Verification `}
        metaKeyWord="Online Consultation, Doctor Appointment Booing Online Aarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      <div className="login_page">
        <Link href="/">
       
            <img src={BrandLogo} alt="" />
         
        </Link>
      </div>
      <div className={classes.formContainer}>
        <SectionHeader
          className="formContainerMain"
          title="OTP Verification"
          subtitle={mobile}
          titleProps={{
            variant: 'h3',
          }}
        />
        <Form />
      </div>

      <div className="login_info">
        <div className="login_contact">
          <p>
            Contact Support <Link href="tel:+91 992829232">+91 992829232</Link>
          </p>
          <Link href="mailto:support@onlineaarogya.com">
            support@onlineaarogya.com
          </Link>
          <div className="copy_right">
            <p>OAarogya</p>
            <p>Copyright &copy;2022. All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetCover;
